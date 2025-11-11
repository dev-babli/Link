"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const principles = [
  {
    id: "1",
    title: "Clarity.",
    description: "We communicate simply, openly, and honestly. No jargon, no layers.",
    visual: "💬",
    gradient: "from-blue-500/10 via-cyan-500/10 to-transparent",
  },
  {
    id: "2",
    title: "Craft.",
    description: "We obsess over design, performance, and scalability — because great code should feel invisible.",
    visual: "⚙️",
    gradient: "from-purple-500/10 via-pink-500/10 to-transparent",
  },
  {
    id: "3",
    title: "Care.",
    description: "We treat every project like our own product — your success is our success.",
    visual: "❤️",
    gradient: "from-orange-500/10 via-red-500/10 to-transparent",
  },
];


export function PhilosophyPromiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background-primary overflow-hidden py-24 lg:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl opacity-50"
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
            Built on Principles That Don't Compromise.
          </h2>
          <p className="text-large-paragraph text-text-secondary">
            We don't just deliver code — we deliver clarity, craftsmanship, and care in everything we build.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group p-8 rounded-2xl bg-background-secondary border border-border-subtle shadow-[0px_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />

              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="relative z-10 w-16 h-16 rounded-full bg-background-primary flex items-center justify-center text-3xl text-text-primary mb-6 border border-border-subtle shadow-md group-hover:scale-110 transition-transform duration-300"
              >
                {principle.visual}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-[28px] font-medium leading-[1.3] tracking-[-0.01em] text-text-primary mb-3">
                  {principle.title}
                </h3>
                <p className="text-base text-text-secondary leading-[1.6]">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder's Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-8 lg:p-12 rounded-2xl bg-background-secondary border border-border-subtle shadow-[0px_2px_8px_rgba(0,0,0,0.06)] text-center max-w-4xl mx-auto"
        >
          <span className="absolute top-4 left-4 text-[80px] font-serif text-text-secondary/20 leading-none">"</span>
          <p className="text-xl lg:text-2xl font-medium text-text-primary italic">
            "I started Link Innovations to bring honesty and craftsmanship back into software development. We may be a small team, but that's our strength — every project gets direct attention, not layers of management. We treat every line of code like it powers our own product."
          </p>
          <span className="absolute bottom-4 right-4 text-[80px] font-serif text-text-secondary/20 leading-none rotate-180">"</span>
        </motion.div>
      </div>
    </section>
  );
}

