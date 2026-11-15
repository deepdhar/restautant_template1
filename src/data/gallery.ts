import { images } from "./images";

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  rotation: number;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "fried-rice",
    image: images.friedRice,
    caption: "Fried Rice",
    rotation: -8,
    alt: "Happy guest enjoying fresh fried rice",
  },
  {
    id: "burger",
    image: images.burger,
    caption: "Burger",
    rotation: 6,
    alt: "Guest enjoying artisanal gourmet burger",
  },
  {
    id: "rice-meet",
    image: images.riceMeat,
    caption: "Rice & Meet",
    rotation: -5,
    alt: "Friends enjoying dinner together at Drizzle",
  },
  {
    id: "salad-soup",
    image: images.saladSoup,
    caption: "Salad & Soup",
    rotation: 7,
    alt: "Guest with fresh organic salad and soup",
  },
  {
    id: "special-burger",
    image: images.specialBurger,
    caption: "Special Burger",
    rotation: -6,
    alt: "Delicious signature burger dining experience",
  },
  {
    id: "pasta",
    image: images.pasta,
    caption: "Pasta",
    rotation: 5,
    alt: "Guest savoring handmade artisanal pasta",
  },
];
