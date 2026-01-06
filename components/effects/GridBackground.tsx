"use client";

import { motion } from "framer-motion";

export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(220, 38, 38, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(220, 38, 38, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 20% 60%, rgba(220, 38, 38, 0.03) 0%, transparent 50%)
          `,
        }}
      />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(220, 38, 38, 0.1) 0%, transparent 70%)",
          top: "10%",
          left: "60%",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(220, 38, 38, 0.08) 0%, transparent 70%)",
          bottom: "20%",
          left: "10%",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 vignette" />
    </div>
  );
}
