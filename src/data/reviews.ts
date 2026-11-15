import { images } from "./images";

export interface Review {
  id: string;
  text: string;
  author: string;
  location: string;
  rating: number;
  avatar: string;
}

export const reviews: Review[] = [
  {
    id: "review-1",
    text: "Every bite was a burst of flavor! The ambiance, service, and presentation were flawless. Definitely one of the best dining experiences I've had in a long time.",
    author: "Daniel Johnson",
    location: "California, USA",
    rating: 4.9,
    avatar: images.reviewer1,
  },
  {
    id: "review-2",
    text: "The staff was incredibly welcoming, and the dishes were beautifully prepared. You can tell they use the freshest ingredients. Highly recommend the chefs.",
    author: "Sophia Lee",
    location: "New York, USA",
    rating: 5.0,
    avatar: images.reviewer2,
  },
  {
    id: "review-3",
    text: "We celebrated my parents' anniversary here, and everything was perfect. From the decor to the desserts, it was an unforgettable evening.",
    author: "Emily Carter",
    location: "Texas, USA",
    rating: 4.9,
    avatar: images.reviewer3,
  },
];
