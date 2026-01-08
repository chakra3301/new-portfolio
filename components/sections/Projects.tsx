"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/lib/data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      className={`relative group perspective-container ${
        project.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <motion.div
        className="relative h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden cursor-pointer"
        animate={{
          rotateX: isHovered ? mousePosition.y * -10 : 0,
          rotateY: isHovered ? mousePosition.x * 10 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => {
          if (project.link && project.link !== "#") {
            window.open(project.link, "_blank", "noopener,noreferrer");
          }
        }}
      >
        {/* Background gradient placeholder */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
          style={{
            backgroundImage: `
              linear-gradient(135deg,
                rgba(220, 38, 38, ${0.05 + index * 0.02}) 0%,
                transparent 50%),
              linear-gradient(to bottom right, #1a1a1a, #0a0a0a)
            `,
          }}
        />

        {/* Project Preview Image */}
        {project.image && (
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </div>
        )}

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Project number */}
        <div className="absolute top-6 left-6 z-20">
          <span className="text-xs text-red-500 font-mono tracking-wider">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Year badge */}
        <div className="absolute top-6 right-6 z-20">
          <span className="px-3 py-1 text-xs text-gray-400 font-mono glass rounded-full">
            {project.year}
          </span>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
          {/* Title and description */}
          <div className="space-y-4">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-white tracking-tight"
              animate={{ y: isHovered ? -10 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.p>

            {/* Tech stack */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="pt-4 border-t border-white/10"
            >
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                Role
              </span>
              <p className="text-sm text-white mt-1">{project.role}</p>
            </motion.div>
          </div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? "inset 0 0 100px rgba(220, 38, 38, 0.1)"
              : "inset 0 0 0px rgba(220, 38, 38, 0)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Border gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? "0 0 0 1px rgba(220, 38, 38, 0.3)"
              : "0 0 0 1px rgba(255, 255, 255, 0.05)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* View project button */}
        <motion.div
          className="absolute bottom-8 right-8 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-full">
            <span>View Project</span>
            <svg
              className="w-4 h-4"
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
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Section background */}
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/3 rounded-full blur-[100px]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-red-500" />
            <span className="text-sm text-red-500 font-mono uppercase tracking-wider">
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-gradient">Featured</span> <span className="text-gradient-red">Projects</span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            A curated selection of digital products, interactive experiences,
            and creative experiments.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
