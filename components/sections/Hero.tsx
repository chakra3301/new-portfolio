"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background elements */}
      <div className="absolute inset-0">
        {/* Central glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background:
              "radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.05) 30%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(220, 38, 38, 0.5)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0"
            y1="30%"
            x2="100%"
            y2="30%"
            stroke="url(#lineGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="0"
            y1="70%"
            x2="100%"
            y2="70%"
            stroke="url(#lineGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
        </svg>

        {/* Corner accents */}
        <div className="absolute top-20 left-20 w-32 h-32">
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-red-500/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ transformOrigin: "left" }}
          />
          <motion.div
            className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-red-500/50 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{ transformOrigin: "top" }}
          />
        </div>

        <div className="absolute bottom-20 right-20 w-32 h-32">
          <motion.div
            className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-red-500/50 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            style={{ transformOrigin: "right" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-red-500/50 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            style={{ transformOrigin: "bottom" }}
          />
        </div>
      </div>

      {/* Main content - Title covering whole section */}
      <motion.div
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <div className="relative w-full h-full max-w-4xl max-h-[70vh] mx-auto">
          <Image
            src="/Asset 5_1.svg"
            alt="GENESIS"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-red-500/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
