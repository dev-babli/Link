"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const clientNeeds = [
  { id: 1, title: "Scalable Solutions", icon: "📈" },
  { id: 2, title: "Modern Technology", icon: "⚡" },
  { id: 3, title: "Expert Support", icon: "🤝" },
];

const services = [
  { id: 1, title: "Web Development", icon: "🌐" },
  { id: 2, title: "Mobile Apps", icon: "📱" },
  { id: 3, title: "Custom Software", icon: "💻" },
];

const results = [
  { id: 1, title: "Business Growth", icon: "🚀" },
  { id: 2, title: "Efficiency Gains", icon: "⚙️" },
  { id: 3, title: "Competitive Edge", icon: "🏆" },
];

export function FlowAnimationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const [activeFlow, setActiveFlow] = useState(0);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background-primary py-24 lg:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/3 to-purple-500/3 rounded-full blur-3xl" />
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
            From Vision to Reality
          </h2>
          <p className="text-large-paragraph text-text-secondary">
            See how we transform your needs into powerful solutions that drive results
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative max-w-6xl mx-auto">
          {/* Left: Client Needs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Client Needs Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h3 className="text-[24px] font-medium text-text-primary mb-6 text-center lg:text-left">
                Client Needs
              </h3>
              {clientNeeds.map((need, index) => (
                <motion.div
                  key={need.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-2xl bg-background-secondary border border-border-subtle shadow-[0px_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 group cursor-pointer"
                  onClick={() => setActiveFlow(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-background-primary flex items-center justify-center text-2xl border border-border-subtle shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {need.icon}
                    </div>
                    <h4 className="text-lg font-medium text-text-primary">
                      {need.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Center: Processing Unit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center justify-center py-12"
            >
              {/* Flow Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Left to Center */}
                <svg className="absolute w-full h-full" style={{ zIndex: 0 }}>
                  {clientNeeds.map((_, index) => (
                    <motion.line
                      key={`left-${index}`}
                      x1="0"
                      y1={`${33.33 * index + 16.66}%`}
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="text-text-secondary/30"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  ))}
                </svg>

                {/* Center to Right */}
                <svg className="absolute w-full h-full" style={{ zIndex: 0 }}>
                  {results.map((_, index) => (
                    <motion.line
                      key={`right-${index}`}
                      x1="50%"
                      y1="50%"
                      x2="100%"
                      y2={`${33.33 * index + 16.66}%`}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="text-text-secondary/30"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    />
                  ))}
                </svg>

                {/* Animated Nodes */}
                {clientNeeds.map((_, index) => (
                  <motion.div
                    key={`node-left-${index}`}
                    className="absolute w-3 h-3 rounded-full bg-text-primary"
                    style={{
                      left: "25%",
                      top: `${33.33 * index + 16.66}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      x: ["0%", "25%", "25%"],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "linear",
                    }}
                  />
                ))}

                {results.map((_, index) => (
                  <motion.div
                    key={`node-right-${index}`}
                    className="absolute w-3 h-3 rounded-full bg-text-primary"
                    style={{
                      left: "75%",
                      top: `${33.33 * index + 16.66}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      x: ["25%", "50%", "50%"],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1.5 + index * 0.5,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>

              {/* Central Processing Unit */}
              <div className="relative z-10 w-32 h-32 rounded-2xl bg-background-secondary border-2 border-border-subtle shadow-[0px_8px_32px_rgba(0,0,0,0.12)] flex items-center justify-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-4xl">
                  ⚙️
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-text-secondary text-center">
                Our Process
              </p>
            </motion.div>

            {/* Right: Results */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h3 className="text-[24px] font-medium text-text-primary mb-6 text-center lg:text-right">
                Results
              </h3>
              {results.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-2xl bg-background-secondary border border-border-subtle shadow-[0px_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 justify-end lg:justify-start">
                    <h4 className="text-lg font-medium text-text-primary text-right lg:text-left">
                      {result.title}
                    </h4>
                    <div className="w-12 h-12 rounded-xl bg-background-primary flex items-center justify-center text-2xl border border-border-subtle shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {result.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Services Flow (Below) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 pt-16 border-t border-border-subtle"
          >
            <h3 className="text-[32px] font-medium text-text-primary mb-8 text-center">
              Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 rounded-2xl bg-background-secondary border border-border-subtle shadow-[0px_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 rounded-xl bg-background-primary flex items-center justify-center text-3xl mx-auto mb-4 border border-border-subtle shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-medium text-text-primary">
                    {service.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

