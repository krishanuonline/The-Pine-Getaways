import { Mountain, MapPin, Route, HeartHandshake, Leaf, Users } from "lucide-react";
import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    title: "Scenic locations",
    description: "Every home looks out onto pine forests, ridges or open valley.",
    icon: Mountain,
  },
  {
    title: "Convenient location",
    description: "A short drive from NJP, Bagdogra and Siliguri — easy to reach, worlds away.",
    icon: MapPin,
  },
  {
    title: "Road-trip friendly",
    description: "The natural stopover between the plains and the Silk Route or Sikkim.",
    icon: Route,
  },
  {
    title: "Homely hospitality",
    description: "Homemade food and genuine care from families who live where they host.",
    icon: HeartHandshake,
  },
  {
    title: "Peaceful atmosphere",
    description: "Offbeat villages, away from the crowds of the usual hill-station circuit.",
    icon: Leaf,
  },
  {
    title: "Family-friendly",
    description: "Comfortable enough for grandparents, easy enough for kids.",
    icon: Users,
  },
];
