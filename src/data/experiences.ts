import { Sunrise, Trees, Camera, Soup, Car, Coffee } from "lucide-react";
import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Mountain mornings",
    description: "Wake up to cloud seas below the property and a slow cup of tea on the porch.",
    icon: Sunrise,
  },
  {
    title: "Nature escapes",
    description: "Pine forests, waterfalls and village trails within easy reach of every home.",
    icon: Trees,
  },
  {
    title: "Scenic photography",
    description: "Prayer flags, terraced hills and mountain light that changes by the hour.",
    icon: Camera,
  },
  {
    title: "Local food",
    description: "Homemade meals cooked fresh, using recipes passed down through the village.",
    icon: Soup,
  },
  {
    title: "Road trips",
    description: "Private vehicles arranged end to end for Silk Route and Sikkim day trips.",
    icon: Car,
  },
  {
    title: "Slow living",
    description: "No itinerary required — just a porch, a view, and time to actually rest.",
    icon: Coffee,
  },
];
