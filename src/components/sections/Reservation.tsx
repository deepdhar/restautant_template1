"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";

export default function Reservation() {
  const handleOpen = () => {
    const modal = document.getElementById("reservation-modal");
    if (modal) modal.style.display = "flex";
  };

  return (
    <section
      id="reservations"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--ivory-warm)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Heading & Action */}
          <div data-aos="fade-right">
            <span className="pill-label text-xs mb-6 inline-flex">
              Reserve your <strong className="font-semibold text-black">Table</strong>
            </span>

            <h2
              className="font-serif mb-8"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.8rem)",
                color: "var(--dark-text)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                fontFamily: "var(--font-serif)",
              }}
            >
              Reserve your spot!
              <br />
              ultimate joy of dining
              <br />
              done right
            </h2>

            <button onClick={handleOpen} className="btn-primary">
              <span>RESERVE YOUR TABLE</span>
              <ArrowRight size={14} className="btn-arrow" />
            </button>
          </div>

          {/* Right: 3-Image collage — Left has two stacked images, Right has one tall portrait spanning both */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="grid grid-cols-2 gap-4"
          >
            {/* Left column: 2 stacked images */}
            <div className="flex flex-col gap-4">
              <div
                className="img-zoom-wrap rounded-2xl overflow-hidden shadow-md aspect-[4/3]"
                style={{ position: "relative" }}
              >
                <Image
                  src={images.reservationCouple}
                  alt="Couple clinking wine glasses at dinner"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              <div
                className="img-zoom-wrap rounded-2xl overflow-hidden shadow-md aspect-[4/3]"
                style={{ position: "relative" }}
              >
                <Image
                  src={images.reservationInterior}
                  alt="Warm restaurant ambiance and seating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Right column: Tall portrait image spanning height */}
            <div
              className="img-zoom-wrap rounded-2xl overflow-hidden shadow-md h-full min-h-[300px]"
              style={{ position: "relative" }}
            >
              <Image
                src={images.reservationFriends}
                alt="Smiling diners enjoying a festive dinner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
