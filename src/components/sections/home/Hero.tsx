"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AmbientGlow } from "@/components/ui/decor/AmbientGlow";
import { Clouds } from "@/components/ui/decor/Clouds";
import { MistLayer } from "@/components/ui/decor/MistLayer";
import { MountainLayers } from "@/components/ui/decor/MountainLayers";
import { Birds } from "@/components/ui/decor/Birds";
import { SwayingTrees } from "@/components/ui/decor/SwayingTrees";
import { Fireflies } from "@/components/ui/decor/Fireflies";
import { MountainDivider } from "@/components/ui/decor/MountainDivider";

const infoStrip = ["Damsang Valley", "Nature", "Mountains", "Darjeeling", "Sikkim"];

function Hero() {
  const heroRef = React.useRef<HTMLElement>(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-end overflow-hidden bg-linear-to-b from-forest-800 via-forest-900 to-forest-950"
    >
      <AmbientGlow />
      <Clouds />
      <MistLayer />
      <MountainLayers target={heroRef} />
      <Birds />

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-forest-950 via-forest-950/65 to-forest-950/15"
      />
      <MountainDivider className="text-background" />
      <SwayingTrees />
      <Fireflies />

      <Container className="relative z-10 pt-40 pb-24 sm:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.25em] text-gold-300 uppercase"
        >
          Welcome to Offbeat Kalimpong
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] font-semibold text-cream-50 sm:text-5xl lg:text-6xl"
        >
          Your Gateway to the Eastern Himalayas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/80 sm:text-lg"
        >
          Peaceful homestays surrounded by nature, with easy access to Darjeeling,
          Sikkim, and the Silk Route.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button size="lg" asChild>
            <Link href="/#contact">Book Your Stay</Link>
          </Button>
          <Button size="lg" variant="outlineLight" asChild>
            <Link href="/#homestays">Explore Homestays</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-cream-50/15 pt-6 text-xs tracking-[0.15em] text-cream-100/60 uppercase"
        >
          {infoStrip.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              {item}
              {i < infoStrip.length - 1 && <span className="text-gold-400">•</span>}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export { Hero };
