import { useMemo, useRef, useState } from "react";
import Button from "../components/Button.jsx";
import heroVector from "../assets/heroVector.svg";

const DEVICE_TYPES = [
  { key: "phone", label: "Phone/Tab", icon: PhoneIcon },
  { key: "laptop", label: "Laptop", icon: LaptopIcon },
  { key: "others", label: "Others", icon: GridIcon },
];

const PHONE_BRANDS = [
  "Apple","Samsung","Xiaomi","Redmi","POCO","Vivo","OPPO","Realme","OnePlus",
  "Google","Huawei","Honor","Motorola","Nokia","Sony","ASUS","Lenovo",
  "Infinix","Tecno","itel","Walton","Symphony","Nothing","Other",
];

const LAPTOP_BRANDS = [
  "Apple","Dell","HP","Lenovo","ASUS","Acer","MSI","Razer","Microsoft",
  "Samsung","Huawei","LG","Gigabyte","VAIO","Dynabook","Framework","Other",
];

const OTHER_BRANDS = [
  "Sony","JBL","Xiaomi","Samsung","Walton","Anker","Logitech","Bose",
  "Sennheiser","TP-Link","D-Link","Netgear","Apple","Google","Other",
];

const MESSENGER_URL = "https://www.facebook.com/messages/t/thikholo.live";

function Select({ placeholder = "Select", options = [], value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="
        w-full rounded-lg border border-slate-200 bg-white shadow-sm
        h-10 sm:h-11 lg:h-12 xl:h-14
        px-3 lg:px-4
        text-sm lg:text-base
        focus:outline-none focus:ring-2 focus:ring-brand-200/70
      "
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

function TabPill({ active, icon: Icon, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-md font-semibold transition",
        "px-3 py-1.5 text-xs",
        "lg:px-4 lg:py-2 lg:text-sm",
        active
          ? "bg-white text-slate-900 shadow-sm border border-slate-200"
          : "bg-transparent text-slate-600 hover:bg-white/60",
      ].join(" ")}
      aria-pressed={active}
    >
      <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
      {children}
    </button>
  );
}

export default function Hero() {
  const [deviceType, setDeviceType] = useState("phone");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [problem, setProblem] = useState("");

  const [lastMessage, setLastMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const [showHelper, setShowHelper] = useState(false);
  const helperTimerRef = useRef(null);

  const brandOptions = useMemo(() => {
    if (deviceType === "laptop") return LAPTOP_BRANDS;
    if (deviceType === "others") return OTHER_BRANDS;
    return PHONE_BRANDS;
  }, [deviceType]);

  const deviceLabel = useMemo(
    () => DEVICE_TYPES.find((d) => d.key === deviceType)?.label ?? deviceType,
    [deviceType]
  );

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  function showHelperFor10s() {
    setShowHelper(true);
    if (helperTimerRef.current) clearTimeout(helperTimerRef.current);
    helperTimerRef.current = setTimeout(() => setShowHelper(false), 10_000);
  }

  async function onGetQuote() {
    const b = brand.trim();
    const m = model.trim();
    const p = problem.trim();

    if (!deviceType || !b || !m || !p) {
      alert("Please select Device Type, Brand, and fill Model + Problem.");
      return;
    }

    const msg =
      `Device Type: ${deviceLabel}\n` +
      `Brand: ${b}\n` +
      `Model: ${m}\n` +
      `Problem: ${p}`;

    setLastMessage(msg);
    setCopied(false);
    showHelperFor10s();

    const ok = await copyText(msg);
    setCopied(ok);

    // clear fields
    setBrand("");
    setModel("");
    setProblem("");

    // ✅ Popup-safe way: open a blank tab immediately (user gesture), then navigate after 3s
    const win = window.open("about:blank", "_blank");
    setTimeout(() => {
      if (win) win.location.href = MESSENGER_URL;
      else window.location.href = MESSENGER_URL; // fallback
    }, 3000);
  }

  return (
    <section id="top" className="w-full">
      <div className="relative w-full overflow-hidden bg-[#BBEAF7] min-h-[480px] lg:min-h-[680px]">

        {/* Left vector area */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden md:block w-[45%] lg:w-[40%] xl:w-[36%] 2xl:w-[25%]">
          <img src={heroVector} alt="" className="h-full w-full object-cover opacity-95" />

          {/* ✅ Bangladesh text: constrained inside vector area, no overlap with form */}
          <div
            className="
    hidden lg:block
    absolute z-10
    top-[22%] right-6

    font-['Inter'] font-extrabold tracking-tight text-slate-900
    lg:text-[46px] xl:text-[56px] 2xl:text-[64px]

    lg:leading-[48px]
    xl:leading-[64px]
    2xl:leading-[74px]

    max-w-[250px] xl:max-w-[280px] 2xl:max-w-[320px]
            "
          >
            Bangladesh’s 1st
            <br />
            Online Repair
            <br />
            Platform
          </div>
        </div>

        {/* Right content pinned */}
        <div className="absolute right-0 top-0 flex h-full w-full items-center md:w-[560px] lg:w-[1000px]">
          <div className="w-full pl-4 pr-4 md:pl-0 sm:pr-6 lg:pr-10">
            <div className="ml-auto w-full max-w-[520px] lg:max-w-[600px] xl:max-w-[680px] 2xl:max-w-[760px]">
              <h1 className="text-3xl md:text-4xl 2xl:text-[44px] font-extrabold leading-tight text-slate-900">
                Ready to fix your device first
                <br />
                with us?
              </h1>

              <div className="mt-4 rounded-xl bg-white/90 p-4 lg:p-5 xl:p-6 2xl:p-7 shadow-soft backdrop-blur">
                <div className="flex flex-wrap gap-2">
                  {DEVICE_TYPES.map((t) => (
                    <TabPill
                      key={t.key}
                      active={deviceType === t.key}
                      icon={t.icon}
                      onClick={() => {
                        setDeviceType(t.key);
                        setBrand("");
                      }}
                    >
                      {t.label}
                    </TabPill>
                  ))}
                </div>

                <div className="mt-3 grid gap-3 lg:gap-4 xl:gap-5">
                  <Select placeholder="Brand" options={brandOptions} value={brand} onChange={setBrand} />

                  <input
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Model (e.g., iPhone 13, Dell XPS 15)"
                    className="
                      w-full rounded-lg border border-slate-200 bg-white shadow-sm
                      h-10 sm:h-11 lg:h-12 xl:h-14
                      px-3 lg:px-4
                      text-sm lg:text-base
                      focus:outline-none focus:ring-2 focus:ring-brand-200/70
                    "
                  />

                  <textarea
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="Problem description (e.g., screen broken, battery drains fast...)"
                    className="
                      w-full rounded-lg border border-slate-200 bg-white shadow-sm
                      min-h-[96px] lg:min-h-[110px] xl:min-h-[130px]
                      px-3 lg:px-4 py-3
                      text-sm lg:text-base
                      focus:outline-none focus:ring-2 focus:ring-brand-200/70
                      resize-none
                    "
                  />
                </div>
              </div>

              <Button
                variant="brand"
                onClick={onGetQuote}
                className="
                  mt-8 w-full sm:w-auto rounded-md font-semibold
                  h-10 sm:h-11 lg:h-12 xl:h-14
                  px-4 lg:px-6
                  text-sm lg:text-base
                  bg-[#1D4ED8] hover:bg-[#1B3ECD]
                "
              >
                <span className="inline-flex items-center gap-2">
                  Get Quote
                  <SendIcon className="h-4 w-4" />
                </span>
              </Button>

              {showHelper && lastMessage ? (
                <div className="mt-3 rounded-lg border border-slate-200 bg-white/70 p-3 text-xs text-slate-700">
                  <div className="font-semibold">
                    {copied
                      ? "✅ Message copied. Paste in Messenger and send."
                      : "Message preview (copy may be blocked by browser)"}
                  </div>

                  <pre className="mt-2 whitespace-pre-wrap rounded-md bg-white p-2 text-[11px] text-slate-700">
                    {lastMessage}
                  </pre>

                  {!copied ? (
                    <button
                      type="button"
                      className="mt-2 underline"
                      onClick={() => copyText(lastMessage).then(setCopied)}
                    >
                      Copy message
                    </button>
                  ) : null}
                </div>
              ) : null}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Icons ---- */
function PhoneIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M8 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" />
      <path d="M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function LaptopIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16v10H4V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M2 18h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function GridIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function SendIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M3 11.5L21 3l-8.5 18-2.9-7.2L3 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M21 3L9.6 13.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
