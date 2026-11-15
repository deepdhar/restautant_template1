"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";

export default function About() {
  const handleStory = () => {
    const target = document.querySelector("#menu");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--ivory-warm)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-[2.45fr_0.9fr] gap-10 md:gap-16 items-start">
          {/* Left: Pill + Heading + CTA + Social proof */}
          <div data-aos="fade-right">
            <div className="mb-6">
              <span className="pill-label text-xs">
                Know <strong className="font-semibold text-black">About</strong> Us
              </span>
            </div>

            <h2
              className="font-serif mb-8"
              style={{
                fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
                color: "var(--dark-text)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                fontFamily: "var(--font-serif)",
              }}
            >
              Blending tradition &amp; innovation
              <br />
              to create unforgettable dining
              <br />
              experiences
            </h2>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button onClick={handleStory} className="btn-primary">
                <span>READ OUR STORY</span>
                <ArrowRight size={14} className="btn-arrow" />
              </button>

              {/* Overlapping customer avatars + text */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[images.avatar1, images.avatar2, images.avatar3].map(
                    (src, i) => (
                      <div
                        key={i}
                        className="rounded-full overflow-hidden border-2 flex-shrink-0"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderColor: "var(--ivory-warm)",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={src}
                          alt={`Customer ${i + 1}`}
                          width={40}
                          height={40}
                          className="object-cover"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    )
                  )}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold leading-tight"
                    style={{ color: "var(--dark-text)" }}
                  >
                    Satisfied Customers
                  </p>
                  <p className="text-xs" style={{ color: "var(--muted-text)" }}>
                    Thousands of reviews from customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Small text near top + portrait photograph */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="flex flex-col items-start md:items-end"
          >
            <div className="mb-4 text-left md:text-right max-w-sm">
              <p
                className="text-sm font-serif italic"
                style={{
                  color: "var(--muted-text)",
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.05rem",
                }}
              >
                Experience the perfect{" "}
                <strong
                  className="font-semibold text-black not-italic"
                  style={{ color: "var(--dark-text)" }}
                >
                  harmony
                </strong>{" "}
                of heritage
              </p>
            </div>

            <div
              className="img-zoom-wrap w-full max-w-[320px] rounded-2xl overflow-hidden shadow-lg border"
              style={{
                position: "relative",
                aspectRatio: "4/3",
                borderColor: "rgba(216, 201, 172, 0.4)",
              }}
            >
              <Image
                src={images.aboutDining}
                alt="Two guests enjoying an intimate restaurant dining experience at Drizzle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
