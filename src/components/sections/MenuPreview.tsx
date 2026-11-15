"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { menuCategories } from "@/data/menu";
import {
  BurritoDoodle,
  MainCourseSwirl,
  SoupSpoonIllustration,
  LeafSproutIllustration,
  DrinkCitrusIllustration,
} from "@/components/ui/FoodIllustrations";

const illustrations = [MainCourseSwirl, SoupSpoonIllustration, LeafSproutIllustration, DrinkCitrusIllustration];

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState("vegan");
  const activeIndex = menuCategories.findIndex((category) => category.id === activeCategory);
  const shiftCategory = (direction: number) => {
    const next = (activeIndex + direction + menuCategories.length) % menuCategories.length;
    setActiveCategory(menuCategories[next].id);
  };

  const renderCard = (category: (typeof menuCategories)[number], index: number, main = false) => {
    const Illustration = illustrations[index] || MainCourseSwirl;
    const dark = category.id === activeCategory;
    return (
      <article
        key={category.id}
        onClick={() => setActiveCategory(category.id)}
        onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setActiveCategory(category.id); }}
        role="button"
        tabIndex={0}
        aria-pressed={dark}
        className={`menu-category ${dark ? "menu-category-active" : ""} ${main ? "menu-category-main" : ""}`}
        data-aos="fade-up"
      >
        <Illustration size={main ? 38 : 34} stroke="currentColor" />
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <ul>
          {category.items.map((item) => <li key={item}>{item.replace(/^\d+\.\s*/, "")}</li>)}
        </ul>
      </article>
    );
  };

  return (
    <section id="menu" className="menu-section py-16 md:py-24" style={{ backgroundColor: "var(--ivory-warm)" }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="menu-editorial-grid">
          <div className="menu-main-column">
            {renderCard(menuCategories[0], 0, true)}
            <div className="menu-arrows">
              <button onClick={() => shiftCategory(-1)} aria-label="Previous menu category"><ChevronLeft size={20} /></button>
              <button onClick={() => shiftCategory(1)} aria-label="Next menu category"><ChevronRight size={20} /></button>
            </div>
          </div>

          <div className="menu-heading">
            <BurritoDoodle size={78} />
            <h2>Your next favorite meal awaits</h2>
            <a href="#reservations" className="pill-label">Discover our Menu</a>
          </div>

          {menuCategories.slice(1).map((category, offset) => renderCard(category, offset + 1))}
        </div>
      </div>
    </section>
  );
}
