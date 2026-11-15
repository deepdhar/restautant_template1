"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { FoodDoodlesPattern } from "@/components/ui/FoodIllustrations";

export default function Gallery() {
  const [lightboxItem, setLightboxItem] = useState<null | (typeof galleryItems)[0]>(null);

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--burgundy-deep)" }}
    >
      {/* Repeating food doodles SVG watermark pattern */}
      <FoodDoodlesPattern />

      <div className="relative max-w-[1500px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span
            className="pill-label mb-4 inline-flex"
            style={{
              borderColor: "rgba(216,201,172,0.35)",
              color: "#FFF4DF",
              backgroundColor: "rgba(255,244,223,0.05)",
            }}
          >
            A Feast for the <strong className="font-semibold text-white ml-1">Eyes</strong>
          </span>

          <h2
            className="font-serif mt-3"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              color: "#FFF4DF",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontFamily: "var(--font-serif)",
            }}
          >
            Taste the vibes through our gallery
          </h2>
        </div>

        {/* Gallery Polaroid Cards — Horizontal overlapping ribbon */}
        <div
          className="flex overflow-x-auto pb-12 pt-6 px-6 scroll-snap-x md:overflow-visible md:justify-center items-center"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={i * 90}
              className={`scroll-snap-item flex-shrink-0 cursor-pointer transition-all duration-300 group ${
                i > 0 ? "md:-ml-5 lg:-ml-8" : ""
              }`}
              style={{
                width: "clamp(230px, 22vw, 320px)",
                zIndex: i + 1,
                transform: `rotate(${item.rotation}deg)`,
              }}
              onClick={() => setLightboxItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setLightboxItem(item);
              }}
            >
              {/* Polaroid Photo Frame */}
              <div
                className="bg-[#FFF4DF] p-2 pb-4 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-0 group-hover:z-50 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
              >
                <div
                  className="relative aspect-[3/4] overflow-hidden"
                  style={{ position: "relative" }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="260px"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-[#260B08] flex items-center justify-center shadow-lg">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                </div>

                {/* Caption printed in serif below */}
                <p
                  className="text-center font-serif text-lg font-bold pt-4 tracking-tight text-[#260B08]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-xl w-full bg-white rounded-2xl p-4 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden" style={{ position: "relative" }}>
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
            <div className="flex items-center justify-between pt-4 px-2">
              <h3
                className="font-serif text-2xl font-bold text-[#260B08]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {lightboxItem.caption}
              </h3>
              <button
                onClick={() => setLightboxItem(null)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 transition-colors text-[#260B08]"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
