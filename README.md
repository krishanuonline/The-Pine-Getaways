# The Pine Getaways

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

Marketing site for The Pine Getaways — three mountain homestays in Kalimpong,
North Bengal, positioned as a base for exploring the Eastern Himalayas.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

A single scrolling page (`/`) with in-page navigation — Home, Homestays, Explore,
Experiences, Attractions, Why Choose Us, Gallery, Reviews and Contact all live on one page,
each in a `<section id="...">`. The nav bar links to `/#homestays` etc. and highlights the
current section as you scroll (scroll-spy — see `hooks/useActiveSection.ts`), rather than
navigating to a separate page.

```
src/
  app/
    layout.tsx            Fonts, SEO metadata, Header/Footer shell.
    page.tsx               Composes every section from sections/home/*, in order.
    loading.tsx             Branded loading state.
  components/
    ui/                    Reusable primitives: Button, Input, Textarea, Select, FormField,
                           Card, Badge, IconBadge, FeatureCard, PriceTag, SectionHeading,
                           Container, Section, Heading, PlaceholderImage, Rating, Reveal,
                           WhatsAppButton, plus decor/ (nature animation pieces — mountains,
                           clouds, mist, fireflies, swaying trees, ambient glow, dividers).
                           Import from "@/components/ui".
    layout/                 Header (transparent-over-hero → solid on scroll), Footer, Logo,
                           LogoMark, NavLink (renders the active-pill), MobileNav.
    sections/home/           Every section component (Hero, Welcome, Homestays, Explore,
                           Experiences, Attractions, WhyChooseUs, Gallery, Reviews, Booking)
                           and their section-specific subcomponents (cards, forms).
  config/
    site.ts                 Site name, nav links (each with an `href` + matching `sectionId`
                           used by the scroll-spy), contact/WhatsApp/Instagram info.
  data/                     Typed dummy content: homestays, destinations, experiences,
                           attractions, features, testimonials, gallery. Edit these files
                           to change on-page content — components just render them.
  lib/
    utils.ts                 `cn()` class-merging helper.
    whatsapp.ts               Builds prefilled wa.me links.
  types/                     Shared TypeScript types for the data layer.
  hooks/
    useScrolled.ts             Powers the Header's transparent → solid transition.
    useActiveSection.ts         Scroll-spy — which section id is under the fixed header
                               right now. Order-independent: pass any `ids` array.
    useMouseParallax.ts         Cursor-driven parallax for the Hero mountains.
```

## Nav active-state (scroll-spy)

Each `<section>` that has a nav entry carries a matching `id` (`home`, `homestays`,
`explore`, `experiences`, `gallery`, `contact` — see `config/site.ts`'s `navLinks`).
`useActiveSection` picks, among sections whose top has scrolled above a line just under the
fixed header, whichever one's top is *closest* to that line — i.e. order-independent by
design, so it doesn't matter that the nav's display order (Experiences before Explore)
differs from the page's actual section order (Explore before Experiences). Don't swap this
for "last matching element in array order" — that reintroduces exactly that bug.

## Brand tokens

Colors, radii and the serif/sans font pairing (Playfair Display + Inter) live as CSS
variables in `src/app/globals.css` (`--forest-*`, `--gold-*`, `--cream-*`, `--sage-*`, plus
semantic tokens like `--primary`/`--background`). These are best-effort colors read off the
brochure — replace them with exact brand hex values once available, and swap the fonts if
the real brand guide specifies different ones. Nothing else needs to change; every component
reads through these tokens.

## Images

Every image slot renders through `components/ui/PlaceholderImage.tsx` — a branded
gradient block with a caption, used instead of real photos so nothing depends on external
URLs. To swap in real photography, replace `<PlaceholderImage label="..." />` with
`<Image src="..." alt="..." fill />` at each call site (or extend `PlaceholderImage` to
accept an optional `src` and fall back to the placeholder when absent).

## Logo

`components/layout/LogoMark.tsx` is a placeholder circular emblem (mountains + pine trees +
cabin) standing in for the real round logo. Swap its `<path>` content for the real artwork —
sizing and color (`currentColor`) stay the same.

## Booking flow

The form in the Contact section (`sections/home/BookingForm.tsx`) has no backend — on submit
it formats the entered details into a message and opens WhatsApp with it prefilled, since
WhatsApp is the primary conversion channel. Swap in a real API call later if needed.

**Conventions**

- Don't repeat markup: if a UI pattern (button, input, card, icon+text card, etc.) is
  reused, it belongs in `components/ui`, not copy-pasted.
- Once a page section grows past a few dozen lines of JSX, extract it into its own file in
  `components/sections/home/` and import it into `app/page.tsx`.
- Buttons, form fields, cards, and typography should always go through the shared
  primitives in `components/ui` rather than raw Tailwind classes so styling changes only
  need to happen in one place.
- Content lives in `src/data/*.ts`, not hardcoded in components — edit data, not JSX, to
  change copy.
