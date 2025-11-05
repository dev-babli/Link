"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const processSteps = [
  {
    id: "01",
    title: "Easy setup",
    text: "Create your workspace and invite your team. Get everything ready.",
    color: "from-[#00c4b8] to-[#016cf7]",
    img: "/images/process-cards/easy.jpg",
  },
  {
    id: "02",
    title: "Collaborate",
    text: "Assign tasks and keep communication clear. Everyone stays aligned.",
    color: "from-[#016cf7] to-[#00c4b8]",
    img: "/images/process-cards/collabarate.jpg",
  },
  {
    id: "03",
    title: "Track growth",
    text: "Use dashboards to monitor progress, trends, and what matters most.",
    color: "from-[#00c4b8] to-[#016cf7]",
    img: "/images/process-cards/track.jpg",
  },
];

interface ProcessCardsProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function ProcessCards({ className = "", variant = "light" }: ProcessCardsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const defaultExpanded = 0;
  const isDark = variant === "dark";

  return (
    <section
      className={`relative py-24 ${isDark ? "bg-[#141414]" : "bg-[#fdfffd]"} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? "text-white" : "text-[#141414]"
          }`}
          style={{ fontFamily: "var(--font-headline)" }}
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          A simple 3-step process to help your team set up, collaborate, and track success
          efficiently.
        </motion.p>
        <div className="relative p-5 bg-gradient-to-br from-[#00c4b8]/10 to-[#016cf7]/10 rounded-3xl flex flex-col md:flex-row justify-center gap-6 illuminated-primary">
          {processSteps.map((step, index) => {
            const isHovered = hoveredIndex === index;
            const isExpanded =
              hoveredIndex !== null ? isHovered : index === defaultExpanded;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative cursor-pointer overflow-hidden rounded-2xl border border-[#00c4b8]/20 shadow-lg flex bg-white/95 backdrop-blur-sm illuminated-card"
                style={{ height: "329.6px", minWidth: "300px" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -5 }}
              >
                {/* Left side text */}
                <div className="w-64 flex flex-col justify-between p-6 relative z-10">
                  <div className="text-xl font-bold text-left text-[#00c4b8]">{step.id}</div>
                  <div className="mt-auto">
                    <h3 className="text-lg font-semibold mb-1 text-left text-[#141414]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-left">{step.text}</p>
                  </div>
                </div>
                {/* Right side image */}
                <motion.div
                  className="relative overflow-hidden flex-1"
                  initial={{ width: 0 }}
                  animate={{ width: isExpanded ? 300 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {isExpanded && (
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



