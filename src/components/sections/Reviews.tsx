"use client";

import { Star } from "lucide-react";

interface Review {
  id: string;
  author: string;
  location: string;
  text: string;
  rating?: number;
  featured?: boolean;
}

const reviewsData: Review[] = [
  {
    id: "daniel",
    author: "Daniel Johnson",
    location: "California, USA",
    rating: 4.9,
    text: "Every bite was a burst of flavor! The ambiance, service, and presentation were flawless. Definitely one of the best dining experiences I've had in a long time.",
    featured: false,
  },
  {
    id: "sophia",
    author: "Sophia Lee",
    location: "New York, USA",
    rating: 5.0,
    text: "The staff was incredibly welcoming, and the dishes were beautifully prepared. You can tell they use the freshest ingredients. Highly recommend the chef's.",
    featured: true, // Dark burgundy card in the reference
  },
  {
    id: "emily",
    author: "Emily Carter",
    location: "Texas, USA",
    text: "We celebrated my parents' anniversary here, and everything was perfect. From the décor to the desserts, it was an unforgettable evening.",
    featured: false,
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--ivory-warm)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Pill + Heading */}
          <div className="lg:col-span-4" data-aos="fade-right">
            <span className="pill-label text-xs mb-6 inline-flex">
              Customer <strong className="font-semibold text-black">Reviews</strong>
            </span>

            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.8rem)",
                color: "var(--dark-text)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                fontFamily: "var(--font-serif)",
              }}
            >
              Where every visit
              <br />
              becomes a great
              <br />
              Memory
            </h2>
          </div>

          {/* Right: 3 Review cards side-by-side in a horizontal grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              {reviewsData.map((review, i) => {
                const isFeatured = review.featured;

                return (
                  <div
                    key={review.id}
                    data-aos="fade-up"
                    data-aos-delay={i * 90}
                    className="review-card transition-all duration-300 flex flex-col justify-between"
                    style={{
                      backgroundColor: isFeatured ? "#260503" : "#FFFFFF",
                      borderColor: isFeatured ? "#260503" : "var(--border-subtle)",
                      color: isFeatured ? "#FFF4DF" : "var(--dark-text)",
                      boxShadow: isFeatured
                        ? "0 12px 30px -5px rgba(38, 5, 3, 0.3)"
                        : "0 2px 8px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <p
                      className="text-xs md:text-sm font-sans leading-relaxed mb-6"
                      style={{
                        color: isFeatured ? "#dc5b4c" : "#260b08",
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.25rem",
                        lineHeight: 1.6,
                      }}
                    >
                      &ldquo;{review.text}&rdquo;
                    </p>

                    <div>
                      <p
                        className="text-xs font-serif font-bold tracking-tight mb-0.5"
                        style={{
                          color: isFeatured ? "#FFF4DF" : "var(--dark-text)",
                          fontFamily: "var(--font-serif)",
                          fontSize: "0.95rem",
                        }}
                      >
                        — {review.author}
                      </p>
                      <div className="flex items-center justify-between text-[11px] font-sans">
                        <span
                          style={{
                            color: isFeatured ? "rgba(255, 244, 223, 0.6)" : "var(--muted-text)",
                          }}
                        >
                          {review.location}
                        </span>

                        {review.rating && (
                          <span
                            className="flex items-center gap-1 font-semibold"
                            style={{
                              color: isFeatured ? "#F59E0B" : "var(--cta-red)",
                            }}
                          >
                            <Star size={11} fill="currentColor" />
                            {review.rating.toFixed(1)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
