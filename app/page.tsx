"use client";

import { Navigation } from "@/components/ui/Navigation";
import { ParticleField } from "@/components/effects/ParticleField";
import { GridBackground } from "@/components/effects/GridBackground";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { PageLoader } from "@/components/effects/PageLoader";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Art } from "@/components/sections/Art";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Page loader */}
      <PageLoader />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      <main className="relative min-h-screen">
        {/* Background effects */}
        <GridBackground />
        <ParticleField />

        {/* Navigation */}
        <Navigation />

        {/* Page sections */}
        <Hero />
        <Projects />
        <Art />
        <About />
        <Contact />
      </main>
    </>
  );
}
