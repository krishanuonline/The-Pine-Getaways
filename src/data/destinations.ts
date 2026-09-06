import type { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    name: "Darjeeling",
    description:
      "Tea gardens rolling into the mist, colonial-era charm, and some of the widest Himalayan views in the region — under two hours from your homestay.",
    points: ["Tea gardens", "Himalayan views", "Colonial charm"],
    image: "/images/destinations/darjeeling.jpg",
    imageLabel: "Darjeeling tea gardens with the toy train",
  },
  {
    name: "Sikkim",
    description:
      "Cross into Sikkim for centuries-old monasteries, a distinct mountain culture, and peaks that only get closer as the road climbs.",
    points: ["Monasteries", "Local culture", "Mountains"],
    image: "/images/destinations/sikkim.jpg",
    imageLabel: "Sikkim monastery with mountain backdrop",
  },
  {
    name: "Silk Route",
    description:
      "The old trade route to Tibet, now a scenic drive through cloud-level villages — a natural day trip, or a stopover on the way further north.",
    points: ["Scenic drives", "Adventure", "Nature"],
    image: "/images/destinations/silk-route.jpg",
    imageLabel: "Silk Route mountain road above the clouds",
  },
];
