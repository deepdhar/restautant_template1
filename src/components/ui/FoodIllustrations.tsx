"use client";

import React from "react";

/**
 * Hand-drawn line art illustrations matching the reference design specifications:
 * - Hand-drawn burrito/wrap doodle beside the Menu heading
 * - Concentric swirl/cloche emblem for Main Course
 * - Steaming soup bowl with spoon for Soups & Salads
 * - Fresh botanical leaf sprig for Vegan & Vegetarian
 * - Refreshing drink with straw for Beverages
 * - Takeout box, takeaway cup, coffee cup, and burger for Career Opportunity
 */

// Burrito / Wrap line-art doodle (displayed next to "Your next favorite meal awaits")
export function BurritoDoodle({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g transform="rotate(-25 28 28)">
        {/* Wrap cylinder */}
        <rect x="14" y="12" width="28" height="32" rx="14" stroke="#260B08" strokeWidth="1.8" fill="none" />
        {/* Diagonal wrap folds / grill marks */}
        <path d="M16 22l18 12" stroke="#260B08" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M22 18l18 12" stroke="#260B08" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M14 30l16 10" stroke="#260B08" strokeWidth="1.4" strokeLinecap="round" />
        {/* Filling peeking out at top */}
        <path d="M20 12c2-2 6-2 8 0" stroke="#260B08" strokeWidth="1.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Main Course: Concentric Swirl / Cloche Emblem
export function MainCourseSwirl({ className = "", stroke = "currentColor", size = 32 }: { className?: string; stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer spiral petals */}
      <circle cx="20" cy="20" r="14" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 2" />
      <circle cx="20" cy="20" r="9" stroke={stroke} strokeWidth="1.5" />
      <circle cx="20" cy="20" r="4" stroke={stroke} strokeWidth="1.5" />
      {/* Radial accent lines */}
      <line x1="20" y1="2" x2="20" y2="6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="34" x2="20" y2="38" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="20" x2="6" y2="20" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="34" y1="20" x2="38" y2="20" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Soups & Salads: Soup Bowl with Spoon
export function SoupSpoonIllustration({ className = "", stroke = "currentColor", size = 32 }: { className?: string; stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bowl */}
      <path d="M8 18c1 9 6 15 12 15s11-6 12-15H8z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
      {/* Rim */}
      <ellipse cx="20" cy="18" rx="12" ry="2.5" stroke={stroke} strokeWidth="1.5" />
      {/* Spoon dipping */}
      <path d="M26 12l-5 8" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="27" cy="11" rx="2" ry="3" transform="rotate(-30 27 11)" stroke={stroke} strokeWidth="1.3" />
      {/* Steam */}
      <path d="M14 12c-1-2 0-4 1-5M19 12c0-2 1-3 1-5" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// Vegan & Vegetarian: Fresh Botanical Leaf Sprout
export function LeafSproutIllustration({ className = "", stroke = "currentColor", size = 32 }: { className?: string; stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Stem */}
      <path d="M20 34c0-8 0-14 3-20" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      {/* Left leaf */}
      <path d="M22 20c-6-1-10-5-10-10 6 0 10 4 10 10z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      {/* Right leaf */}
      <path d="M23 14c5-2 9-1 11 3-3 4-7 4-11-3z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      {/* Small top bud */}
      <circle cx="23" cy="9" r="1.5" stroke={stroke} strokeWidth="1.2" />
    </svg>
  );
}

// Beverages / Drinks: Cocktail glass with straw & citrus
export function DrinkCitrusIllustration({ className = "", stroke = "currentColor", size = 32 }: { className?: string; stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Glass */}
      <path d="M12 10h16l-3 16c-1 3-2 4-5 4s-4-1-5-4L12 10z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
      {/* Straw */}
      <path d="M25 5l-5 9" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      {/* Citrus wheel */}
      <circle cx="26" cy="11" r="4.5" stroke={stroke} strokeWidth="1.3" />
      {/* Base */}
      <line x1="16" y1="33" x2="24" y2="33" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// Four Artisanal illustrations for Career Opportunity section
export const CareerIllustrations = {
  TakeawayCup: ({ size = 44 }: { size?: number }) => (
    <svg width={size} height={size * 1.4} viewBox="0 0 44 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18h20l4 38H8l4-38z" stroke="#260B08" strokeWidth="1.6" strokeLinejoin="round" />
      <ellipse cx="22" cy="18" rx="10" ry="2.5" stroke="#260B08" strokeWidth="1.5" />
      <path d="M22 18l3-12" stroke="#260B08" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),

  TakeoutBox: ({ size = 48 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Asian style takeout pagoda box */}
      <path d="M14 20h24l-3 24H17l-3-24z" stroke="#260B08" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10 20l6-8h20l6 8" stroke="#260B08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Wire handle */}
      <path d="M16 20c0-6 4-10 10-10s10 4 10 10" stroke="#260B08" strokeWidth="1.3" strokeLinecap="round" />
      {/* Chopsticks crossing top */}
      <line x1="8" y1="14" x2="44" y2="8" stroke="#260B08" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),

  CoffeeCup: ({ size = 50 }: { size?: number }) => (
    <svg width={size} height={size * 0.9} viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 14h24l-3 18H13L10 14z" stroke="#260B08" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M34 18h5c2 0 3 1.5 3 3s-1 3-3 3h-4" stroke="#260B08" strokeWidth="1.5" strokeLinecap="round" />
      {/* Saucer */}
      <path d="M6 34h32" stroke="#260B08" strokeWidth="1.6" strokeLinecap="round" />
      {/* Steam lines */}
      <path d="M18 10c0-3 2-4 2-5M24 10c0-3 1-4 1-5" stroke="#260B08" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),

  BurgerDoodle: ({ size = 52 }: { size?: number }) => (
    <svg width={size} height={size * 0.75} viewBox="0 0 52 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top bun */}
      <path d="M8 17c0-7 8-12 18-12s18 5 18 12H8z" stroke="#260B08" strokeWidth="1.6" strokeLinejoin="round" />
      {/* Sesame seeds */}
      <circle cx="20" cy="10" r="0.8" fill="#260B08" />
      <circle cx="26" cy="8" r="0.8" fill="#260B08" />
      <circle cx="32" cy="11" r="0.8" fill="#260B08" />
      {/* Patty & cheese */}
      <rect x="6" y="17" width="40" height="5" rx="2" stroke="#260B08" strokeWidth="1.5" />
      <path d="M10 22l4 3 4-3 5 3 5-3 5 3 5-3" stroke="#260B08" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bottom bun */}
      <path d="M7 26h38c0 5-4 8-19 8s-19-3-19-8z" stroke="#260B08" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
};

// Repeating food doodles SVG background pattern for the Gallery section
export const FoodDoodlesPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <defs>
      <pattern id="food-pattern-rich" width="180" height="180" patternUnits="userSpaceOnUse">
        {/* Fork doodle */}
        <path d="M24 24v20M21 24v7M27 24v7" stroke="#FFF4DF" strokeWidth="1.3" strokeLinecap="round" />
        {/* Wine glass doodle */}
        <path d="M90 32l5 9h-10l5-9zm0 9v9m-5 9h10" stroke="#FFF4DF" strokeWidth="1.3" strokeLinecap="round" />
        {/* Cloche doodle */}
        <path d="M140 42c0-7 5-11 11-11s11 4 11 11h-22zM151 29v-3" stroke="#FFF4DF" strokeWidth="1.3" strokeLinecap="round" />
        {/* Coffee cup */}
        <path d="M35 120h16l-2 11h-12l-2-11zM51 122h3c1 0 2 1 2 2s-1 2-2 2h-3" stroke="#FFF4DF" strokeWidth="1.3" strokeLinecap="round" />
        {/* Burger doodle */}
        <path d="M100 130c0-5 5-9 11-9s11 4 11 9h-22zm0 5h22m-22 5c0 2 3 3 11 3s11-1 11-3h-22z" stroke="#FFF4DF" strokeWidth="1.3" strokeLinecap="round" />
        {/* Croissant */}
        <path d="M145 120c4-4 13-4 17 0 2 4 0 8-4 11-7 2-11 0-13-11z" stroke="#FFF4DF" strokeWidth="1.3" strokeLinecap="round" />
        {/* Sparkles */}
        <path d="M65 85v6M62 88h6" stroke="#FFF4DF" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M130 75v5M127.5 77.5h5" stroke="#FFF4DF" strokeWidth="1.2" strokeLinecap="round" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#food-pattern-rich)" />
  </svg>
);
