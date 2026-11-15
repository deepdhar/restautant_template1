export interface MenuItem {
  id: string;
  name: string;
  description: string;
  items: string[];
  isDark?: boolean;
}

export const menuCategories: MenuItem[] = [
  {
    id: "main-course",
    name: "Main Course",
    description: "Where bold flavors and perfect meet",
    items: [
      "1. Seafood Delights",
      "2. Pasta & Risotto",
      "3. Classic Favorites",
      "4. Light & Healthy",
    ],
  },
  {
    id: "soups-salads",
    name: "Soups & Salads",
    description: "Light, healthy, and packed with flavor",
    items: [
      "1. Fresh Seasonal Salads",
      "2. Wild Mushroom Broth",
      "3. Tuscan Tomato Soup",
      "4. Chef's Specialties",
    ],
  },
  {
    id: "vegan",
    name: "Vegan & Vegetarian",
    description: "Colorful creations inspired by nature",
    isDark: true, // Dark burgundy card as shown in the reference
    items: [
      "1. Plant-based Creations",
      "2. Wraps & Sandwiches",
      "3. Vegan Desserts",
    ],
  },
  {
    id: "beverages",
    name: "Beverages / Drinks",
    description: "Sip, savor, and refresh your senses",
    items: [
      "1. Mocktails & Specialty Drinks",
      "2. Juices & Smoothies",
      "3. Artisanal Coffee",
    ],
  },
];
