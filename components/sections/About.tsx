"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutContent } from "@/lib/data";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            <span className="text-gradient block mb-2">
              {aboutContent.headline}
            </span>
            <span className="text-gradient-red block">
              {aboutContent.subheadline}
            </span>
          </h2>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            {aboutContent.intro}
          </p>
        </motion.div>

        {/* Philosophy statements */}
        <div className="space-y-6 mb-24">
          {aboutContent.philosophy.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center gap-6 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`flex items-center gap-6 max-w-2xl ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <motion.div
                  className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center glass-red"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-red-500 font-mono text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.div>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  {statement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-red-500" />
              <span className="text-sm text-red-500 font-mono uppercase tracking-wider">
                Background
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">{aboutContent.bio}</p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-red-500" />
              <span className="text-sm text-red-500 font-mono uppercase tracking-wider">
                Expertise
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {aboutContent.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 text-sm text-white bg-white/5 border border-white/10 rounded-full hover:border-red-500/50 hover:bg-red-500/5 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
        />
      </div>
    </section>
  );
}
