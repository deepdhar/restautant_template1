"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { validateEmail } from "@/lib/utils";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus("error");
      return;
    }
    // TODO: Integrate with backend newsletter API
    console.log("Newsletter subscription:", email);
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#footer" },
    { label: "Book a Table", href: "#reservations" },
    { label: "Events", href: "#reservations" },
    { label: "Careers", href: "#careers" },
    { label: "Blogs", href: "#reviews" },
  ];

  const handleNav = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="pt-16 pb-8"
      style={{ backgroundColor: "var(--burgundy-deep)" }}
      data-aos="fade-up"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Main footer content */}
        <div className="footer-main mb-10">
          {/* Left: Logo */}
          <div className="flex flex-col justify-between">
            <div className="flex items-end gap-2">
              <span
                className="font-serif footer-logo"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 7rem)",
                  color: "var(--ivory-warm)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                DRIZZLE
              </span>
              <div
                className="w-5 h-5 rounded-full mb-3 flex-shrink-0"
                style={{ backgroundColor: "var(--cta-red)" }}
              />
            </div>
            <div className="footer-socials">
              <p>Social Media</p>
              <div className="flex gap-3 mt-3">
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">f</span></a>
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">◎</span></a>
                <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">in</span></a>
              </div>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div>
            <h3
              className="font-serif mb-2"
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                color: "var(--ivory-warm)",
                fontWeight: 400,
              }}
            >
              Get tasty news straight to your inbox
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "rgba(255,244,223,0.5)" }}
            >
              No spam — just fresh updates, special offers, and mouthwatering
              news.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex gap-3 flex-wrap sm:flex-nowrap"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Write your email..."
                className="newsletter-input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="btn-primary flex-shrink-0">
                SUBSCRIBE NOW
                <ArrowRight size={14} className="btn-arrow" />
              </button>
            </form>

            {status === "success" && (
              <p
                className="text-sm mt-3"
                style={{ color: "rgba(255,244,223,0.7)" }}
              >
                ✓ You&apos;re subscribed! Welcome to the Drizzle family.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm mt-3" style={{ color: "var(--cta-red)" }}>
                Please enter a valid email address.
              </p>
            )}

            <div className="footer-link-divider" />
            <ol className="footer-links">
              {navItems.map((item) => (
                <li key={item.label}><button onClick={() => handleNav(item.href)}>{item.label}</button></li>
              ))}
            </ol>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ backgroundColor: "rgba(216,201,172,0.15)" }}
        />

        {/* Bottom: nav + social + copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-[#fff4df]/60">All the rights reserved to ©Rylic Studio 2025</p>
          <div className="flex gap-3 text-xs text-[#fff4df]/70"><a href="#footer">Terms &amp; Condition</a><span>•</span><a href="#footer">Privacy Policy</a></div>
        </div>
      </div>
    </footer>
  );
}
