import { useMemo, useState } from "react";
import Button from "../components/Button.jsx";
import { Assets } from "../assets";
import heroVector from "../assets/heroVector.svg";

const TABS = [
  { key: "phone", label: "Phone/Tab", icon: PhoneIcon },
  { key: "laptop", label: "Laptop", icon: LaptopIcon },
  { key: "others", label: "Others", icon: GridIcon },
];

function Select({ placeholder = "Select", options = [] }) {
  return (
    <select
      defaultValue=""
      className="
        w-full rounded-lg border border-slate-200 bg-white shadow-sm
        h-10 sm:h-11 lg:h-12 xl:h-14
        px-3 lg:px-4
        text-sm lg:text-base
        focus:outline-none focus:ring-2 focus:ring-brand-200/70
      "
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
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
    >
      <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
      {children}
    </button>
  );
}


export default function Hero() {
  const [activeTab, setActiveTab] = useState("phone");

  const config = useMemo(() => {
    if (activeTab === "laptop") {
      return {
        brands: ["HP", "Dell", "Lenovo", "Asus", "Acer", "Apple"],
        devices: ["Laptop (General)", "MacBook", "Gaming Laptop", "Ultrabook"],
        queryPlaceholder: "Enter issue (e.g., keyboard, display, slow...)",
      };
    }
    if (activeTab === "others") {
      return {
        brands: ["Sony", "JBL", "Xiaomi", "Samsung", "Walton", "Other"],
        devices: ["Smart Watch", "Headphone", "Speaker", "TV", "Router", "Other"],
        queryPlaceholder: "Enter query (e.g., not charging, no sound...)",
      };
    }
    return {
      brands: ["Apple", "Samsung", "Xiaomi", "Vivo", "Oppo", "Realme"],
      devices: ["iPhone", "iPad", "Android Phone", "Android Tab"],
      queryPlaceholder: "Enter query (e.g., screen, battery, camera...)",
    };
  }, [activeTab]);

  return (
    <section id="top" className="w-full">
      {/* Full width background container */}
      <div className="relative w-full overflow-hidden bg-[#BBEAF7]
                      min-h-[480px] sm:min-h-[480px] md:min-h-[480px] lg:min-h-[680px]">
        {/* Left vector */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden md:block
                w-[45%] lg:w-[40%] xl:w-[36%] 2xl:w-[25%]">
  <img src={heroVector} alt="" className="h-full w-full object-cover opacity-95" />
        </div>
        {/* Centered content wrapper */}
<div className="absolute right-0 top-0 h-full w-full md:w-[560px] lg:w-[1000px] flex items-center">
  <div className="w-full pr-4 sm:pr-6 lg:pr-10 pl-4 md:pl-0">
<div className="ml-auto w-full max-w-[520px] lg:max-w-[600px] xl:max-w-[680px] 2xl:max-w-[760px]">
  <h1 className="text-3xl md:text-4xl 2xl:text-[44px] font-extrabold leading-tight text-slate-900">
    Ready to fix your device first
    <br />
    with us?
  </h1>

<div className="mt-4 rounded-xl bg-white/90 p-4 lg:p-5 xl:p-6 2xl:p-7 shadow-soft backdrop-blur
                min-h-[260px] sm:min-h-[280px] lg:min-h-[320px] xl:min-h-[360px] 2xl:min-h-[420px]">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <TabPill
              key={t.key}
              active={activeTab === t.key}
              icon={t.icon}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </TabPill>
          ))}
        </div>

        {/* Form */}
<div key={activeTab} className="mt-3 grid gap-3 lg:gap-4 xl:gap-5">
<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4 xl:gap-5">
            <Select placeholder="Brands" options={config.brands} />
            <Select placeholder="Select Device" options={config.devices} />
          </div>

<input
  placeholder={config.queryPlaceholder}
  className="
    w-full rounded-lg border border-slate-200 bg-white shadow-sm
    h-10 sm:h-11 lg:h-12 xl:h-14
    px-3 lg:px-4
    text-sm lg:text-base
    focus:outline-none focus:ring-2 focus:ring-brand-200/70
  "
/>

<Button
  variant="brand"
  className="
    w-full sm:w-auto rounded-md font-semibold
    h-10 sm:h-11 lg:h-12 xl:h-14
    px-4 lg:px-6
    text-sm lg:text-base
  "
>

            <span className="inline-flex items-center gap-2">
              Get Quote
              <ArrowIcon className="h-4 w-4" />
            </span>
          </Button>
        </div>
      </div>
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
      <path
        d="M8 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10 18h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LaptopIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16v10H4V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M2 18h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GridIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
