import type { Homestay } from "@/types";

export const homestays: Homestay[] = [
  {
    slug: "mairung",
    name: "Mairung",
    location: "Mairung, Kalimpong",
    tagline: "Cloud views from a quiet mountain village",
    highlights: [
      "Peaceful mountain village setting",
      "Cloud views right from the property",
      "Camping & bonfire set-up on site",
      "Ideal for couples & families",
    ],
    image: "/images/homestays/mairung.jpg",
    imageLabel: "Mairung homestay exterior",
    priceInr: 1350,
    originalPriceInr: 1500,
  },
  {
    slug: "damsang-valley",
    name: "Damsang Valley",
    location: "Damsang Valley, Kalimpong",
    tagline: "Valley-facing rooms, open lawns, wide mountain skies",
    highlights: [
      "Valley-facing rooms",
      "Large open lawn with mountain views",
      "Beautiful sunrise & sunset",
      "Quiet surroundings, nature at your doorstep",
    ],
    image: "/images/homestays/damsang-valley.jpg",
    imageLabel: "Damsang Valley homestay exterior",
    priceInr: 1350,
    originalPriceInr: 1500,
  },
  {
    slug: "pradhan-gaon",
    name: "Pradhan Gaon",
    location: "Pradhan Gaon, Kalimpong",
    tagline: "A cozy village stay inside a pine forest",
    highlights: [
      "Cozy village experience",
      "Surrounded by pine forests",
      "Close to Changey Falls",
      "Perfect for relaxing weekends",
    ],
    image: "/images/homestays/pradhan-gaon.jpg",
    imageLabel: "Pradhan Gaon homestay exterior",
    priceInr: 1350,
    originalPriceInr: 1500,
  },
];
