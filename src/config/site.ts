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

  // Google Drive's direct-download form — a "/view" URL would open Drive's
  // preview page instead of downloading, ignoring the buttons' `download` attribute.
  brochureUrl: "https://drive.google.com/uc?export=download&id=1picCNLvPaltcCL3uxd0aerwySnQpyofT",

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
    whatsappNumber: "919433898908",
    instagramHandle: "@the_pine_getaways",
    instagramUrl: "https://instagram.com/the_pine_getaways",
    facebookLabel: "The Pine Getaways",
    facebookUrl:
      "https://www.facebook.com/profile.php?id=61591563729560&mibextid=wwXIfr&rdid=d0ErAurt4d5xbT5R&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18JiGqzRBD%2F%3Fmibextid%3DwwXIfr#",
    location: "Kalimpong District, North Bengal",
  },
} as const;

export const navSectionIds = siteConfig.navLinks.map((link) => link.sectionId);
