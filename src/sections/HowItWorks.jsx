import Container from "../components/Container.jsx";

import fixOne from "../assets/fixOne.jpg";
import fixTwo from "../assets/fixTwo.jpg";
import fixThree from "../assets/fixThree.jpg";

const reasons = [
  { title: "No More Waiting", desc: "We come to you, saving your time." },
  { title: "Transparent Pricing", desc: "Know the cost upfront, no surprises." },
  { title: "Live Tracking", desc: "Stay updated throughout the repair process." },
  { title: "Expert Technicians", desc: "Certified professionals handle your device." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="border-t border-slate-200 bg-white">
      {/* 1) Why Choose Thikholo (full width bg) */}
      <div className="w-full bg-[#F8F9FC]">
        <Container className="py-14">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left content */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Why Choose Thikholo?
              </h2>

              <div className="mt-6 space-y-3">
                {reasons.map((r, idx) => {
                  const active = idx === 0; // first one highlighted like screenshot
                  return (
                    <div
                      key={r.title}
                      className={[
                        "flex items-start gap-3 rounded-xl border p-4 transition",
                        active
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-900",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "mt-0.5 h-8 w-8 shrink-0 rounded-lg flex items-center justify-center",
                          active ? "bg-white/10" : "bg-slate-50 border border-slate-200",
                        ].join(" ")}
                      >
                        {/* simple icon placeholder (keeps design clean) */}
                        <span className={active ? "text-white" : "text-slate-700"}>✓</span>
                      </div>

                      <div>
                        <div className="text-sm font-semibold">{r.title}</div>
                        <p
                          className={[
                            "mt-1 text-xs leading-relaxed",
                            active ? "text-white/80" : "text-slate-600",
                          ].join(" ")}
                        >
                          {r.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* NOTE: No Get Quote button as requested */}
            </div>

            {/* Right image */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src={fixThree}
                alt="Why choose Thikholo"
                className="h-[320px] md:h-[360px] lg:h-[420px] xl:h-[520px] 2xl:h-[600px] w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* 2) Fix More, Waste Less */}
      <Container className="py-16">
        <div className="text-center">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Fix More, Waste Less
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Let&apos;s Save the Planet 🌍, One Repair at a Time.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Left card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-slate-100">
              <img
                src={fixOne}
                alt="The Impact We Make"
                className="w-full object-cover h-[320px] md:h-[360px] lg:h-[420px] xl:h-[520px] 2xl:h-[600px]"
              />
            </div>
            <div className="p-6">
              <div className="text-base font-semibold text-slate-900">
                The Impact We Make
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Every repaired device = One less added to the planet&apos;s growing
                e-waste problem. At Thikholo, we&apos;re not just fixing devices —
                we&apos;re helping people reuse and rethink, not replace.
              </p>

              <div className="mt-4 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3 text-xs text-slate-700">
                ✨ We’re helping people reuse and rethink, not replace.
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-slate-100">
              <img
                src={fixTwo}
                alt="Power to Repair, Power to Care"
                className="w-full object-cover h-[320px] md:h-[360px] lg:h-[420px] xl:h-[520px] 2xl:h-[600px]"
              />
            </div>
            <div className="p-6">
              <div className="text-base font-semibold text-slate-900">
                Power to Repair, Power to Care
              </div>
<p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-2">
  When you choose to repair you choose to care and thats where we are your first choice. Less production, less waste, less carbon footprint. Thikholo helps you do the right thing — effortlessly.
</p>


              <div className="mt-4 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3 text-xs text-slate-700">
                💜 Thikholo helps you do the right thing — effortlessly.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
  
}
