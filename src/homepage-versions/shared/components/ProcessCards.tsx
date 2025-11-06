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
      className={`relative py-24 lg:py-32 bg-background-primary ${className}`}
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-large-paragraph text-text-secondary mt-4 max-w-3xl"
          >
            A simple 3-step process to help your team set up, collaborate, and track success
            efficiently.
          </motion.p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
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
                className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-background-secondary p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 ease-in-out hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="text-xl font-normal text-text-secondary">{step.id}</div>
                  <div className="mt-6 flex flex-grow flex-col">
                    <h3 className="text-[28px] font-medium leading-[1.3] text-text-primary" style={{letterSpacing: '-0.01em'}}>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base font-normal text-text-secondary" style={{ lineHeight: 1.6 }}>
                      {step.text}
                    </p>
                  </div>
                </div>
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-2xl"
                  style={{ backgroundImage: `url(${step.img})` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

