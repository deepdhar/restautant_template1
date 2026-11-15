"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { images } from "@/data/images";

export default function Hero() {
  const handleReserve = () => {
    const target = document.querySelector("#reservations");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="hero-section pt-6 md:pt-14"
      style={{ backgroundColor: "var(--ivory-warm)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Pill label: Made with Love, Served with Joy */}
        <div className="flex justify-center pb-6" data-aos="fade-down">
          <span
            className="pill-label text-xs sm:text-sm"
            style={{ color: "var(--muted-text)" }}
          >
            Made with{" "}
            <strong className="font-semibold text-black">
              Love
            </strong>
            ,&nbsp;Served with{" "}
            <strong className="font-semibold text-black">
              Joy
            </strong>
          </span>
        </div>

        {/* Main heading */}
        <div className="hero-title text-center pb-10 md:pb-32">
          <h1
            className="font-serif leading-none"
            style={{
              fontSize: "clamp(3.7rem, 8.8vw, 8.1rem)",
              color: "var(--dark-text)",
              fontWeight: 500,
              letterSpacing: "-0.045em",
              lineHeight: 0.92,
              fontFamily: "var(--font-serif)",
            }}
          >
            Experience the
            <br />
            Language of Taste
          </h1>
        </div>
      </div>

      {/* Hero Image + Overlapping Circular Red CTA */}
      <div className="relative">
        {/* Circular CTA badge: ↓ RESERVE A TABLE */}
        <div
          className="absolute left-1/2 z-20"
          style={{ top: 0, transform: "translate(-50%, -50%)" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            onClick={handleReserve}
            className="cta-circle hero-reserve"
            aria-label="Reserve a table"
          >
            <ArrowDown size={14} className="mb-0.5 opacity-90 text-white" />
            <span className="cta-circle-text text-white">
              RESERVE A<br />TABLE
            </span>
          </button>
        </div>

        {/* Hero photograph of fine-dining restaurant interior */}
        <div
          className="hero-photo relative w-full overflow-hidden"
          style={{ height: "clamp(320px, 44vw, 520px)", position: "relative" }}
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <Image
            src={images.heroInterior}
            alt="Warm and elegant fine dining restaurant interior at Drizzle"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 1440px) 100vw, 1440px"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.1) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
