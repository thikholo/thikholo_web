import { useState } from "react";
import Container from "../components/Container.jsx";
// If you want to use your Button component somewhere else, keep it.
// import Button from "../components/Button.jsx";

// 🔁 Change extension if needed (png/jpg/webp)
import brokenDevice from "../assets/brokenDevice.png";

const faqs = [
  {
    q: "How do I submit a quotation?",
    a: "Choose the service, describe the issue, and submit. You will receive a quotation and next steps.",
  },
  {
    q: "Can I negotiate the quote?",
    a: "If negotiation is enabled for that service partner, you can counter-offer before confirming.",
  },
  {
    q: "Do you provide invoices & history?",
    a: "Yes — every job is tracked with invoice and service history for transparency.",
  },
  {
    q: "Do you use original parts?",
    a: "We match you with verified partners. Part options (original/third-party) are shown clearly in the quote.",
  },
  {
    q: "Can businesses use ThikHolo?",
    a: "Yes. Teams can manage multiple devices with centralized tracking and reporting.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="border-t border-slate-200 bg-[#F8F9FC]">
      {/* Top: Help + FAQ */}
      <Container className="py-14">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: Help card */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Didn’t Find What
              <br />
              You’re Looking For?
            </h2>

            <p className="mt-3 text-sm text-slate-600">We’re here to help — always.</p>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-500">
              Some questions are unique, just like your device.
              <br />
              If you didn’t find the answer above, feel free to reach out.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* Live agents */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
                  <PhoneMiniIcon className="h-4 w-4 text-slate-700" />
                </span>

                <div>
                  <div className="text-xs font-semibold text-slate-900">Live agents 9 AM to 10 PM</div>
                  <div className="mt-1 text-[11px] text-slate-500">+8801738588006</div>
                </div>
              </div>

              {/* Drop a message */}
<a
  href={`mailto:thikholo.live@gmail.com?subject=${encodeURIComponent(
    "Hey There I am reaching you guys for "
  )}`}
  className="flex items-start gap-3 rounded-xl p-2 -m-2 hover:bg-slate-50"
>
  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
    <MailMiniIcon className="h-4 w-4 text-slate-700" />
  </span>

  <div>
    <div className="text-xs font-semibold text-slate-900">Drop a Message</div>
    <div className="mt-1 text-[11px] text-slate-500">thikholo.live@gmail.com</div>
  </div>
</a>

            </div>

            {/* ✅ Removed “Schedule a callback” button + helper text as requested */}
          </div>

          {/* Right: FAQ accordion */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-slate-900 text-center">
              Frequently Asked Questions
            </div>

            <div className="mt-5 grid gap-3">
              {faqs.map((f, idx) => {
                const isOpen = openIdx === idx;

                return (
                  <div
                    key={f.q}
                    className={[
                      "rounded-xl border transition",
                      isOpen ? "border-slate-200 bg-white" : "border-slate-200 bg-white",
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx((v) => (v === idx ? -1 : idx))}
                      className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-semibold text-slate-500">{idx + 1}.</span>
                        <span className="text-xs font-semibold text-slate-900 sm:text-sm">
                          {f.q}
                        </span>
                      </div>

                      <span
                        className={[
                          "inline-flex h-7 w-7 items-center justify-center rounded-full border",
                          isOpen
                            ? "border-slate-900 bg-slate-900 text-white"
                            : "border-slate-200 bg-slate-100 text-slate-700",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        {isOpen ? <MinusIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
                      </span>
                    </button>

                    {isOpen ? (
                      <div className="px-4 pb-4">
                        <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">{f.a}</p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

{/* Bottom: Broken Device promo */}
<Container   className="
    pb-14
    pt-20
    sm:pt-24
    md:pt-28
    lg:pt-40
    xl:pt-[220px]
    2xl:pt-[260px]
  ">
  <div className="relative overflow-visible rounded-2xl bg-[#1E40D0] shadow-sm">
    {/* inner padding area */}
    <div className="grid gap-8 px-8 py-10 md:grid-cols-2 md:px-10 md:py-12">
      {/* Left content */}
      <div className="max-w-lg">
        <h3 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
          Broken Device.
          <br />
          No Time. No Worries.
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-white/80">
          Your phone doesn’t need to wait in a busy queue. But we do.
        </p>

        <p className="mt-4 text-xs leading-relaxed text-white/80">
          Whether it’s a shattered screen, a dead battery, or just weird behavior — you don’t need
          to visit a repair shop.
        </p>

<a
  href="https://www.facebook.com/thikholo.live"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#F6FF7A] px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:opacity-95"
>
  Get My Device Fixed Now
  <SendIcon className="h-4 w-4" />
</a>


        <div className="mt-3 text-xs text-white/75">You call. We’ll fix it.</div>
      </div>

      {/* right spacer */}
      <div className="hidden md:block" />
    </div>

    {/* ✅ Hovering phone (md+) */}
    <img
      src={brokenDevice}
      alt="Broken device"
      className="pointer-events-none hidden md:block absolute right-0 bottom-0
                 h-[360px] lg:h-[520px] xl:h-[620px]
                 -translate-y-0 lg:-translate-y-0 xl:-translate-y-0
                 drop-shadow-[0_24px_40px_rgba(0,0,0,0.20)]
                 object-contain"
    />

    {/* ✅ Mobile version (stacked, still slightly floating) */}
    <div className="md:hidden px-6 pb-0">
      <img
        src={brokenDevice}
        alt="Broken device"
        className="mx-auto w-full max-w-[420px]
                   -mt-6 drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)]
                   object-contain"
      />
    </div>
  </div>
</Container>

    </section>
  );
}

/* --- Small icons --- */
function PhoneMiniIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M6.5 3.5h3l1.3 5.2-2 1.3c1.2 2.5 3.1 4.4 5.6 5.6l1.3-2 5.3 1.3v3c0 .6-.4 1.1-1 1.2-9.1 1.4-16.6-6.1-15.2-15.2.1-.6.6-1 1.2-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailMiniIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M6 8l6 4 6-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon({ className = "" }) {
  // “send message” style icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M21 3 10 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21 3 14 21l-4-7-7-4L21 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
