import type { PickupPoint, Vehicle } from "@/types";

export const pickupPoints: PickupPoint[] = [
  { name: "NJP Railway Station", duration: "Approx. 3 hrs" },
  { name: "Bagdogra Airport", duration: "Approx. 3.5 hrs" },
  { name: "New Mal Junction", duration: "Approx. 2.5 hrs" },
  { name: "Siliguri", duration: "Approx. 3 hrs" },
];

export const vehicles: Vehicle[] = [
  { name: "5-seater", note: "small families & couples" },
  { name: "10-seater", note: "groups & friends" },
  { name: "Brezza", note: "premium" },
  { name: "Innova", note: "premium" },
  { name: "Other premium vehicles", note: "on request" },
];

export const sightseeingPlaces: string[] = [
  "Lava",
  "Lolegaon",
  "Rishop",
  "Delo",
  "Changey Falls",
  "Kalimpong town",
  "Offbeat villages",
  "Local sightseeing",
];
