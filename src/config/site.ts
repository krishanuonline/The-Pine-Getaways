export type NavLink = {
  label: string;
  href: string;
  /** id of the <section> this link scrolls to — used to drive the active nav state. */
  sectionId: string;
};

export const siteConfig = {
  name: "The Pine Getaways",
  tagline: "Your Home Above Hills",
  title: "The Pine Getaways — Your Gateway to the Eastern Himalayas",
  description:
    "Peaceful mountain homestays in Kalimpong, North Bengal — the perfect base for exploring Darjeeling, Sikkim and the Silk Route.",
  url: "https://thepinegetaways.com",

  // TODO: replace with the real brochure PDF URL once available.
  brochureUrl: "#",

  navLinks: [
    { label: "Home", href: "/#home", sectionId: "home" },
    { label: "Homestays", href: "/#homestays", sectionId: "homestays" },
    { label: "Experiences", href: "/#experiences", sectionId: "experiences" },
    { label: "Explore", href: "/#explore", sectionId: "explore" },
    { label: "Gallery", href: "/#gallery", sectionId: "gallery" },
    { label: "Contact", href: "/#contact", sectionId: "contact" },
  ] satisfies NavLink[],

  contact: {
    phones: ["+91 94338 90908", "+91 98307 50247", "+91 87773 29304", "+91 80172 84362"],
    whatsappNumber: "918609801667",
    instagramHandle: "@the_pine_getaways",
    instagramUrl: "https://instagram.com/the_pine_getaways",
    location: "Kalimpong District, North Bengal",
  },
} as const;

export const navSectionIds = siteConfig.navLinks.map((link) => link.sectionId);
