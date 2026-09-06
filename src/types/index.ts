import type { LucideIcon } from "lucide-react";

export interface Homestay {
  slug: string;
  name: string;
  location: string;
  tagline: string;
  highlights: string[];
  image: string;
  imageLabel: string;
  priceInr: number;
  originalPriceInr: number;
}

export interface Destination {
  name: string;
  description: string;
  points: string[];
  imageLabel: string;
}

export interface Experience {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AttractionCluster {
  title: string;
  places: string[];
}

export interface PickupPoint {
  name: string;
  duration: string;
}

export interface Vehicle {
  name: string;
  note: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export type GalleryCategory = "Property" | "Rooms" | "Views" | "Food" | "Experiences";

export interface GalleryItem {
  category: GalleryCategory;
  label: string;
  /** Relative visual weight used to vary the masonry grid rhythm. */
  size: "sm" | "md" | "lg";
}
