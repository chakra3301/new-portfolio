"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { artPieces, ArtPiece } from "@/lib/data";

function ArtCard({ piece, index }: { piece: ArtPiece; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Staggered floating animation
  const floatDelay = index * 0.5;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative"
        animate={{
          y: isHovered ? -10 : 0,
          rotateY: isHovered ? 5 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Floating animation wrapper */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: floatDelay,
          }}
        >
          {/* Frame */}
          <div className="relative rounded-xl overflow-hidden">
            {/* Art piece placeholder */}
            <div
              className="aspect-[4/5] bg-gradient-to-br from-gray-900 via-gray-800 to-black relative"
              style={{
                backgroundImage: `
                  linear-gradient(135deg,
                    rgba(220, 38, 38, ${0.08 + index * 0.02}) 0%,
                    transparent 60%),
                  linear-gradient(to bottom, #1a1a1a, #0a0a0a)
                `,
              }}
            >
              {/* Grid overlay */}
              <div className="absolute inset-0 grid-pattern opacity-20" />

              {/* Abstract generative art placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative w-32 h-32"
                  animate={{
                    rotate: isHovered ? 180 : 0,
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.8 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border border-red-500/30 rounded-lg"
                      style={{
                        transform: `rotate(${i * 15}deg) scale(${1 - i * 0.1})`,
                      }}
                      animate={{
                        rotate: isHovered ? [i * 15, i * 15 + 90] : i * 15,
                        borderColor: isHovered
                          ? "rgba(220, 38, 38, 0.6)"
                          : "rgba(220, 38, 38, 0.3)",
                      }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                    />
                  ))}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ scale: isHovered ? 1.2 : 1 }}
                  >
                    <div className="w-4 h-4 bg-red-500 rounded-full red-glow" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Scanlines effect */}
              <div className="absolute inset-0 scanlines opacity-30" />

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Frame border */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              animate={{
                boxShadow: isHovered
                  ? "0 0 30px rgba(220, 38, 38, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.5)"
                  : "0 0 0px rgba(220, 38, 38, 0), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Info panel */}
          <motion.div
            className="mt-6 space-y-2"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                {piece.title}
              </h3>
              <span className="text-xs text-gray-500 font-mono">{piece.year}</span>
            </div>
            <p className="text-sm text-gray-500">{piece.medium}</p>

            {/* Description on hover */}
            <motion.p
              className="text-sm text-gray-400 leading-relaxed"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {piece.description}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Art() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      id="art"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background elements */}
      <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-red-500/3 rounded-full blur-[100px]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-red-500" />
            <span className="text-sm text-red-500 font-mono uppercase tracking-wider">
              Visual Explorations
            </span>
            <div className="w-12 h-px bg-red-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-gradient">Digital</span> <span className="text-gradient-red">Artifacts</span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
            Personal experiments in generative art, 3D visualization, and digital expression.
          </p>
        </motion.div>

        {/* Art grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {artPieces.map((piece, index) => (
            <ArtCard key={piece.id} piece={piece} index={index} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <motion.button
            className="group inline-flex items-center gap-3 px-8 py-4 text-white font-medium rounded-full border border-white/20 hover:border-red-500/50 transition-all"
            whileHover={{ scale: 1.02, gap: "16px" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="group-hover:text-red-400 transition-colors">
              View Full Gallery
            </span>
            <svg
              className="w-5 h-5 group-hover:text-red-400 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
