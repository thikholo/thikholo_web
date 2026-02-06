import Container from "../components/Container.jsx";
import { Assets } from "../assets";

import originalIcon from "../assets/original.svg";
import satisfactionIcon from "../assets/satisfaction.svg";
import fastIcon from "../assets/fast.svg";

const topFeatures = [
  {
    title: "Original Products",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
    icon: originalIcon,
  },
  {
    title: "100% Satisfaction Guarantee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
    icon: satisfactionIcon,
  },
  {
    title: "Fast Delivery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
    icon: fastIcon,
  },
];

const steps = [
  {
    step: "Step 1",
    title: "Original Products",
    desc: "From fill-up? Nah! Just tap the 'Repair Now' button, select your device and issue.",
    img: Assets.photoCard1,
    pill: "Time: 30 seconds",
  },
  {
    step: "Step 2",
    title: "Instant Quote & Pickup Scheduled",
    desc: "Receive a transparent, no-hidden-fee quote instantly. Choose a pickup time that suits you.",
    img: Assets.photoCard2,
    pill: "Flexible scheduling, no surprises.",
  },
  {
    step: "Step 3",
    title: "Safe Pickup & Expert Repair",
    desc: "Our certified technician picks up your device securely. Track your repair status live via SMS or our website.",
    img: Assets.photoMain,
    pill: "Real-time updates, peace of mind.",
  },
  {
    step: "Step 4",
    title: "Fast Return & Easy Payment",
    desc: "Once repaired, your device is returned promptly. Pay online or upon delivery.",
    img: Assets.photoPortrait,
    pill: "Multiple payment options",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <Container className="py-14">
        {/* Top 3 features row */}
        <div className="grid gap-10 md:grid-cols-3">
          {topFeatures.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="h-12 w-12 shrink-0">
                <img src={f.icon} alt={f.title} className="h-12 w-12" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">{f.title}</div>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Title */}
        <div className="mt-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Service process
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              {/* Step badge */}
              <div className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold text-slate-700">
                {s.step}
              </div>

              {/* Image */}
              <div className="mt-3 overflow-hidden rounded-xl bg-slate-100">
                <img src={s.img} alt={s.title} className="h-44 w-full object-cover" />
              </div>

              {/* Content */}
              <div className="mt-4">
                <div className="text-sm font-semibold text-slate-900">{s.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{s.desc}</p>
              </div>

              {/* Bottom pill */}
              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] text-slate-700">
                {s.pill}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
