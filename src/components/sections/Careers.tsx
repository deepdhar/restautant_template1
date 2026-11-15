"use client";

import { CareerIllustrations } from "@/components/ui/FoodIllustrations";

const tags = [
  { label: "HONEST", rotate: "-7deg", className: "top-[18%] left-[29%]" },
  { label: "FRIENDLY", rotate: "6deg", className: "top-[24%] left-[43%]" },
  { label: "ADAPTABLE", rotate: "-8deg", className: "top-[50%] left-[31%]" },
  { label: "PASSIONATE", rotate: "-7deg", className: "top-[18%] left-[60%]" },
  // { label: "APPLY NOW", rotate: "7deg", className: "top-[51%] right-[18%]" },
  { label: "CREATIVE", rotate: "-5deg", className: "top-[78%] left-[59%]" },
];

export default function Careers() {
  const handleApply = () => {
    const modal = document.getElementById("reservation-modal");
    if (modal) modal.style.display = "flex";
  };

  return (
    <section
      id="careers"
      className="career-section py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--ivory-warm)" }}
    >
      {/* Fine side rules and the quiet baseline under the section. */}
      <div
        className="career-rule absolute left-8 lg:left-12 top-16 bottom-16 w-px opacity-30"
        style={{ backgroundColor: "var(--border-subtle)" }}
      />
      <div
        className="career-rule absolute right-8 lg:right-12 top-16 bottom-16 w-px opacity-30"
        style={{ backgroundColor: "var(--border-subtle)" }}
      />
      <div className="career-baseline absolute bottom-10 left-[6%] right-[6%] h-px" style={{ backgroundColor: "var(--border-subtle)" }} />

      {/* 4 Hand-drawn line doodles matching the reference */}
      <div className="absolute top-10 left-12 lg:left-32 opacity-85 hidden sm:block pointer-events-none">
        <CareerIllustrations.TakeawayCup size={38} />
      </div>
      <div className="absolute top-10 right-12 lg:right-32 opacity-85 hidden sm:block pointer-events-none">
        <CareerIllustrations.TakeoutBox size={42} />
      </div>
      <div className="absolute bottom-10 left-12 lg:left-32 opacity-85 hidden sm:block pointer-events-none">
        <CareerIllustrations.CoffeeCup size={46} />
      </div>
      <div className="absolute bottom-10 right-12 lg:right-32 opacity-85 hidden sm:block pointer-events-none">
        <CareerIllustrations.BurgerDoodle size={48} />
      </div>

      <div className="career-content w-full mx-auto px-6 text-center relative">
        <div data-aos="fade-down" className="mb-6">
          <span className="pill-label text-xs">
            Career <strong className="font-semibold text-black">Opportunity</strong>
          </span>
        </div>

        {/* Heading container with floating pill labels */}
        <div className="career-heading relative py-4 md:py-5">
          {/* Floating red-outlined pill labels */}
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`career-tag absolute hidden md:inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border border-[#BF3829] text-[#BF3829] bg-[#FFF4DF] shadow-sm pointer-events-none transition-transform ${tag.className}`}
              style={{
                transform: `rotate(${tag.rotate})`,
              }}
            >
              {tag.label}
            </span>
          ))}

          <h2
            className="font-serif career-title mx-auto"
            style={{
              fontSize: "clamp(2.5rem, 3.6vw, 3.35rem)",
              color: "var(--dark-text)",
              fontWeight: 400,
              lineHeight: 0.96,
              letterSpacing: "-0.035em",
              fontFamily: "var(--font-serif)",
            }}
          >
            We&apos;re always looking for
            <br />
            passionate, dedicated people to join
            <br />
            our growing team.
          </h2>
        </div>

        {/* Mobile floating tags row */}
        <div className="career-mobile-tags flex md:hidden flex-wrap justify-center gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#BF3829] text-[#BF3829]"
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="150" className="pt-2">
          <button onClick={handleApply} className="btn-primary">
            APPLY NOW
          </button>
        </div>
      </div>
    </section>
  );
}
