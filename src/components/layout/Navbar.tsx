"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "OUR MENU", href: "#menu", hasDropdown: true },
  { label: "ABOUT US", href: "#about" },
];

const navLinksRight = [
  { label: "GALLERY", href: "#gallery" },
  { label: "RESERVATIONS", href: "#reservations", hasDropdown: true },
  { label: "CONTACT", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          scrolled ? "shadow-sm" : ""
        }`}
        style={{
          backgroundColor: "var(--ivory-warm)",
          borderBottom: "1px solid rgba(38, 11, 8, .12)",
        }}
      >
        <div className="w-full px-4 md:px-[4.75%]">
          {/* Desktop Nav: Architectural Grid Layout */}
          <div className="hidden md:grid grid-cols-7 items-stretch h-[82px] border-b border-[#D8C9AC]">
            {[navLinks[0], navLinks[1], navLinks[2]].map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-center gap-2 border-l border-[#D8C9AC] text-sm font-sans font-semibold tracking-wide text-[#260B08] hover:text-[#BF3829] transition-colors"
              >
                {link.label}{link.hasDropdown && <ChevronDown size={16} strokeWidth={1.8} />}
              </button>
            ))}
            <div className="flex items-center justify-center border-x border-[#D8C9AC]">
              <button
                onClick={() => handleNavClick("#home")}
                className="flex items-baseline bg-transparent border-none cursor-pointer outline-none"
                style={{ background: "transparent", border: "none" }}
              >
                <span
                  className="text-4xl font-serif font-medium tracking-tight text-[#260B08]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Drizzle.
                </span>
              </button>
            </div>
            {navLinksRight.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-center gap-2 border-r border-[#D8C9AC] text-sm font-sans font-semibold tracking-wide text-[#260B08] hover:text-[#BF3829] transition-colors"
              >
                {link.label}{link.hasDropdown && <ChevronDown size={16} strokeWidth={1.8} />}
              </button>
            ))}
          </div>

          {/* Mobile Nav Header */}
          <div className="flex md:hidden items-center justify-between h-14">
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-baseline bg-transparent border-none cursor-pointer outline-none"
              style={{ background: "transparent", border: "none" }}
            >
              <span
                className="text-2xl font-serif font-bold tracking-tight text-[#260B08]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Drizzle.
              </span>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[#260B08] bg-transparent border-none cursor-pointer outline-none"
              style={{ background: "transparent", border: "none" }}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between p-8 md:hidden animate-fade-in"
          style={{ backgroundColor: "var(--burgundy-deep)" }}
        >
          <div className="flex items-center justify-between">
            <span
              className="text-2xl font-serif font-bold text-[#FFF4DF]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Drizzle.
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-[#FFF4DF] bg-transparent border-none cursor-pointer"
              style={{ background: "transparent", border: "none" }}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 py-12">
            {[...navLinks, ...navLinksRight].map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-serif text-[#FFF4DF] hover:text-[#BF3829] transition-colors bg-transparent border-none cursor-pointer"
                style={{ fontFamily: "var(--font-serif)", background: "transparent", border: "none" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => handleNavClick("#reservations")}
              className="btn-primary w-full justify-center py-3.5"
            >
              RESERVE A TABLE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
