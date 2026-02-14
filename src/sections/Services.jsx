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

// ✅ New “Service process” cards (as per your screenshot)
const process = [
  {
    title: "Sign up",
    desc: "Create your free account with ThikHolo. You'll get instant access to track everything.",
    icon: UserIcon,
  },
  {
    title: "Get Quotation",
    desc: "Get quotation from service points. A transparent estimate will be shared instantly.",
    icon: QuoteIcon,
  },
  {
    title: "PickUp",
    desc: "We’ll pick up your device from your home.",
    sub: "Dhaka City — Free",
    icon: PickupIcon,
  },
  {
    title: "LiveUpdate",
    desc: "You will receive live updates for every stage. The process is recorded & tagged to your ThikHolo ID.",
    icon: LiveIcon,
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

        {/* ✅ New process layout */}
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {process.map((p, idx) => {
            const Icon = p.icon;
            const n = idx + 1;

            return (
              <div key={p.title} className="group flex flex-col items-center">
                {/* Top circle step number */}
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF2FF] transition-all duration-200 group-hover:scale-110 group-hover:bg-[#D6E5FF] md:h-12 md:w-12">
                  <span className="text-base font-extrabold text-[#1D4ED8] md:text-lg">
                    {n}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="
                    w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200
                    transition-all duration-200 ease-out
                    hover:scale-[1.03] hover:shadow-lg hover:ring-2 hover:ring-[#1D4ED8]/40
                    active:scale-[0.98] active:shadow
                  "
                >
                  {/* Deep blue header */}
                  <div className="flex items-center gap-2 bg-[#0B2A87] px-4 py-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
                      <Icon className="h-4 w-4 text-white" />
                    </span>
                    <div className="text-sm font-bold text-white">{p.title}</div>
                  </div>

                  {/* Blue body */}
                  <div className="bg-[#1D4ED8] px-4 py-4">
                    <p className="text-xs leading-relaxed text-white/90">
                      {p.desc}
                    </p>

                    {p.sub ? (
                      <p className="mt-2 text-[11px] font-semibold text-white/90">
                        {p.sub}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ---- Small icons (inline SVG) ---- */
function UserIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M20 21a8 8 0 0 0-16 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 13a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function QuoteIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M7 9h6M7 13h10M7 17h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 3h12a2 2 0 0 1 2 2v14l-4-3H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PickupIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 7h11v10H3V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 10h4l3 3v4h-7v-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function LiveIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 12a5 5 0 0 1 10 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 12v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10.5 18h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
