"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Brain, Code2, Rocket, Sparkles } from "lucide-react";

const journeySteps = [
  {
    icon: Lightbulb,
    title: "Discovery & Strategy",
    description: "Deep-dive into your vision, market dynamics, and technical requirements. We craft a strategic roadmap aligned with your business objectives.",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Brain,
    title: "Architecture & Planning",
    description: "Our senior architects design scalable, secure systems. We establish technical foundations that support long-term growth.",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Code2,
    title: "Agile Development",
    description: "Two-week sprints with continuous delivery. Weekly demos ensure alignment and rapid iteration toward your goals.",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    description: "Production deployment with 24/7 monitoring. We measure performance, gather insights, and continuously optimize for excellence.",
    gradient: "from-orange-500/20 to-red-500/20"
  },
];

export default function JourneyMap() {
  const circleSize = 120;
  const stops = [0, 33.3, 66.6, 100];
  const midPoints = [
    (stops[0] + stops[1]) / 2,
    (stops[1] + stops[2]) / 2,
    (stops[2] + stops[3]) / 2,
  ];

  const [activeRipple, setActiveRipple] = useState<number>(-1);

  return (
    <section className="relative bg-background-primary py-24 lg:py-32 px-6 overflow-hidden">
      {/* Subtle background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
          The Link Innovation Way
        </h2>
      </motion.div>

      {/* Journey Map Container - Glassmorphic */}
      <div className="relative max-w-7xl mx-auto flex flex-col items-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 lg:p-20 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] z-10">
        <div className="relative w-full flex justify-between items-center">
          {/* Dotted Line - Enhanced */}
          <div
            className="absolute h-0.5 z-0"
            style={{
              top: `${circleSize / 2}px`,
              left: `${circleSize / 2}px`,
              width: `calc(100% - ${circleSize}px)`,
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(59, 130, 246, 0.4) 0 8px, transparent 8px 16px)",
              backgroundSize: "16px 2px",
              animation: "moveDots 1.5s linear infinite",
            }}
          />

          <style jsx>{`
            @keyframes moveDots {
              0% {
                background-position: 0 0;
              }
              100% {
                background-position: 12px 0;
              }
            }
          `}</style>

          {/* Moving Diamond - Enhanced */}
          <motion.div
            className="absolute w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rotate-45 z-10 rounded-sm shadow-[0_0_12px_rgba(59,130,246,0.6)] border border-blue-300/50"
            style={{ top: `${circleSize / 2 - 2}px` }}
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            onUpdate={(latest) => {
              const leftPercent = parseFloat(latest.left as string);
              let currentIndex = 0;
              if (leftPercent < midPoints[0]) currentIndex = 0;
              else if (leftPercent < midPoints[1]) currentIndex = 1;
              else if (leftPercent < midPoints[2]) currentIndex = 2;
              else currentIndex = 3;
              setActiveRipple(currentIndex);
            }}
          />

          {/* Journey Circles */}
          {journeySteps.map((step, i) => (
            <div key={i} className="flex flex-col items-center relative z-20">
              <div
                className="relative flex items-center justify-center"
                style={{ width: circleSize, height: circleSize }}
              >
                {/* Ripple Effect - Enhanced */}
                {activeRipple === i &&
                  [...Array(4)].map((_, r) => (
                    <motion.span
                      key={r}
                      className="absolute rounded-full border-2 border-blue-400/30"
                      style={{
                        width: circleSize + r * 35,
                        height: circleSize + r * 35,
                        background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 70%)",
                      }}
                      initial={{ scale: 0.7, opacity: 0.5 }}
                      animate={{
                        scale: [0.7, 1.5, 0.7],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 3.5,
                        delay: r * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                {/* Inactive Circle Glow - Enhanced */}
                {activeRipple !== i && (
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(0,0,0,0) 70%)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "linear",
                    }}
                  />
                )}

                {/* Main Circle - Glassmorphic */}
                <div
                  className="rounded-full flex items-center justify-center text-5xl backdrop-blur-xl bg-white/10 border-2 border-white/20 relative z-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] group overflow-hidden"
                  style={{ width: circleSize, height: circleSize }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                  {/* Icon */}
                  <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-md`}>
                    <step.icon className="w-8 h-8 text-text-primary" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Step Card - Glassmorphic */}
              <div className="mt-8 flex flex-col items-center w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative backdrop-blur-xl bg-white/5 border border-white/10 
                  p-6 lg:p-8 rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.06)] 
                  w-full max-w-[280px] text-center 
                  hover:bg-white/10 hover:border-white/20 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] 
                  transition-all duration-300 overflow-hidden group"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Mirror/shine effect */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none transform -rotate-12"></div>

                  <h3 className="font-semibold text-xl text-text-primary relative z-10 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
