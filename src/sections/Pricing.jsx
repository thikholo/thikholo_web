import { useMemo, useState } from "react";
import Container from "../components/Container.jsx";

import goodOne from "../assets/goodOne.jpg";
import goodTwo from "../assets/goodTwo.jpg";
import goodThree from "../assets/goodThree.jpg";
import goodFour from "../assets/goodFour.jpg";
import goodFive from "../assets/goodFive.jpg";
import goodSix from "../assets/goodSix.jpg";
import goodSeven from "../assets/goodSeven.jpg";
import goodEight from "../assets/goodEight.jpg";
import goodNine from "../assets/goodNine.jpg";

import photoMain from "../assets/fig/photo-main.png";

const bentoGallery = [
  // Top row (3 small) + right tall
  { src: goodOne, alt: "Bento 1", className: "md:col-span-3 md:row-span-2" },
  {
    src: goodTwo,
    alt: "Bento 2",
    className: "md:col-span-3 md:row-span-2",
    motivationText:
      "Repairing a device costs 70–90% less than replacing it.",
    textAlign: "left",
    textPosition: "center",
  },
  { src: goodThree, alt: "Bento 3", className: "md:col-span-3 md:row-span-2" },
  { src: goodFour, alt: "Bento 4", className: "md:col-span-3 md:row-span-4" },

  // Middle row
  { src: goodFive, alt: "Bento 5", className: "md:col-span-3 md:row-span-2" },
  {
    src: goodSix,
    alt: "Bento 6",
    className: "md:col-span-6 md:row-span-2",
    motivationText:
      "The world generates over 60 million metric tons of e-waste annually — and it's the fastest-growing waste stream.",
    textAlign: "left",
    textPosition: "center",
  },

  // Bottom row + right tall
  {
    src: goodSeven,
    alt: "Bento 7",
    className: "md:col-span-6 md:row-span-2",
    motivationText:
      "Extending a phone's life by just 1 year can reduce its carbon impact by up to 30%.",
    textAlign: "left",
    textPosition: "center",
  },
  { src: goodEight, alt: "Bento 8", className: "md:col-span-3 md:row-span-2" },
  {
    src: goodNine,
    alt: "Bento 9",
    className: "md:col-span-3 md:row-span-2",
    motivationText:
      "70–80% of a smartphone's carbon footprint comes from manufacturing alone.",
    textAlign: "left",
    textPosition: "center",
  },
];

const reviews = [
  {
    name: "Zahid Shad",
    role: "UX Engineer, One Direction",
    rating: 5,
    quote:
      "My laptop suddenly stopped charging right before a project deadline. Thikholo understood the urgency and got it fixed fast. Great customer support — I just wish the UI looked a bit more premium!",
    pill: "Quick fix when I needed it most",
  },
  {
    name: "Nusrat Jahan",
    role: "Marketing Executive, Univer BD",
    rating: 5,
    quote:
      "I was in the middle of a busy campaign when my phone screen broke. Thikholo picked it up the very next day and returned it fully repaired in just 48 hours. It saved both my time and my sanity. Super smooth!",
    pill: "Saved my day!",
  },
  {
    name: "Rafsan Ahmed",
    role: "Freelance UI/UX Designer",
    rating: 5,
    quote:
      "My iPad suddenly stopped charging right before a project deadline. Thikholo understood the urgency and got it fixed fast. Great customer support — I just wish the UI looked a bit more premium!",
    pill: "Brought my iPad back",
  },
  {
    name: "Sabbir Hossain",
    role: "Software Engineer, Pathao",
    rating: 5,
    quote:
      "I had almost given up on my old iPad. Thikholo not only brought it back to life but also restored my trust in repair services. We need something like this in Bangladesh — finally, it's here!",
    pill: "Quick fix when I needed it most",
  },
  {
    name: "Rafsan",
    role: "Freelancer",
    rating: 5,
    quote:
      "I had almost given up on my old iPad. Thikholo not only brought it back to life but also restored my trust in repair services. We need something like this in Bangladesh — finally, it's here!",
    pill: "Brought my device back",
  },
];

function Stars({ value = 5 }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-3.5 w-3.5"
          viewBox="0 0 24 24"
          fill={i < value ? "currentColor" : "none"}
          stroke="currentColor"
        >
          <path
            strokeWidth="1.5"
            d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Pricing() {
  const [index, setIndex] = useState(0);

  const canPrev = index > 0;
  const canNext = index < reviews.length - 1;

  const translateX = useMemo(() => {
    const card = 280;
    const gap = 18;
    return -(index * (card + gap));
  }, [index]);

  return (
    <section id="pricing" className="border-t border-slate-200 bg-white">
      {/* 1) Bento gallery */}
      <Container className="py-14">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-center">
          Feel good message about saving the planet
        </h2>

        <div
          className="
            mt-8 grid grid-cols-2 gap-4 sm:gap-6
            md:grid-cols-12 md:grid-flow-dense
            md:auto-rows-[84px] lg:auto-rows-[96px] xl:auto-rows-[110px] 2xl:auto-rows-[124px]
          "
        >
          {bentoGallery.map((g) => (
            <div
              key={g.alt}
              className={[
                "relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm",
                // mobile: consistent ratio
                "aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-full",
                g.className,
              ].join(" ")}
            >
              <img
                src={g.src}
                alt={g.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              {g.motivationText ? (() => {
                  const align = g.textAlign ?? "center";
                  const position = g.textPosition ?? "center";
                  return (
                    <>
                      <div
                        className="absolute inset-0 bg-[#0B2A87]/65"
                        aria-hidden
                      />
                      <div
                        className={[
                          "absolute inset-0 flex p-4 sm:p-5 md:p-6 lg:p-7",
                          position === "top" && "items-start",
                          position === "center" && "items-center",
                          position === "bottom" && "items-end",
                          align === "left" && "justify-start",
                          align === "center" && "justify-center",
                          align === "right" && "justify-end",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        <p
                          className={[
                            "max-w-[90%] text-sm font-semibold leading-snug text-white drop-shadow-md sm:max-w-[85%] sm:text-base md:text-sm lg:text-base",
                            align === "left" && "text-left",
                            align === "center" && "text-center",
                            align === "right" && "text-right",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {g.motivationText}
                        </p>
                      </div>
                    </>
                  );
                })() : null}
            </div>
          ))}
        </div>
      </Container>

      {/* 2) Reviews slider */}
      <div className="bg-[#F8F9FC] border-t border-slate-200">
        <Container className="py-14">
          <div className="flex items-center justify-between gap-6">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Committed to make your life easier and greener
            </h3>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => canPrev && setIndex((v) => v - 1)}
                className={[
                  "h-9 w-9 rounded-full border flex items-center justify-center",
                  canPrev
                    ? "border-slate-300 bg-white hover:bg-slate-50"
                    : "border-slate-200 bg-white/70 opacity-50 cursor-not-allowed",
                ].join(" ")}
                aria-label="Previous"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M15 6l-6 6 6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => canNext && setIndex((v) => v + 1)}
                className={[
                  "h-9 w-9 rounded-full border flex items-center justify-center",
                  canNext
                    ? "border-slate-300 bg-slate-900 text-white hover:bg-slate-800"
                    : "border-slate-200 bg-slate-900/50 text-white opacity-50 cursor-not-allowed",
                ].join(" ")}
                aria-label="Next"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-8 overflow-hidden">
            <div
              className="flex gap-[18px] transition-transform duration-300 ease-out"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {reviews.map((r, i) => (
                <div
                  key={`${r.name}-${i}`}
                  className="w-[280px] shrink-0 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                >
                  <div className="p-4 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-200" />
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          {r.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {r.role}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-100">
                    <img
                      src={photoMain}
                      alt="Review"
                      className="h-[150px] w-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <Stars value={r.rating} />
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">
                      {r.quote}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-[11px] text-slate-700">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-600/10 text-green-700">
                        ✓
                      </span>
                      {r.pill}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
