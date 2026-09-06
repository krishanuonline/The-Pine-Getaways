import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/sections/home/GalleryGrid";
import { galleryItems } from "@/data/gallery";

function Gallery() {
  return (
    <Section id="gallery" className="bg-background">
      <SectionHeading
        align="center"
        eyebrow="Gallery"
        title="A Closer Look"
        description="Rooms, views, food and the everyday moments in between."
      />

      <div className="mt-12">
        <GalleryGrid items={galleryItems} />
      </div>
    </Section>
  );
}

export { Gallery };
