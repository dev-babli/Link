"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";
import {
  Eye,
  Clock,
  Handshake,
  Lightbulb,
  Link2,
} from "lucide-react";
import Image from "next/image";

const solutionStacks = [
  {
    title: "Transparency.",
    icon: Eye,
    type: "image" as const,
    media: "/Step-1.png",
    items: [
      "You'll always know what's happening — no hidden layers.",
    ],
    color: "from-[#6B5BF5] to-[#6B5BF5]",
  },
  {
    title: "Reliability.",
    icon: Clock,
    type: "image" as const,
    media: "/Step-1(2).png",
    items: [
      "We deliver on time, or communicate early.",
    ],
    color: "from-[#0490F2] to-[#0490F2]",
  },
  {
    title: "Partnership.",
    icon: Handshake,
    type: "image" as const,
    media: "/Step-3.png",
    items: [
      "We grow when you do — your goals are ours.",
    ],
    color: "from-[#6B5BF5] to-[#6B5BF5]",
  },
  {
    title: "Technology should simplify, not complicate.",
    icon: Lightbulb,
    type: "image" as const,
    media: "/Step-4.png",
    items: [
      "We design products that make life easier — not harder.",
    ],
    color: "from-[#0490F2] to-[#0490F2]",
  },
  {
    title: "Partnerships should outlast projects. Transparency builds trust.",
    icon: Link2,
    type: "image" as const,
    media: "/Step-5.png",
    items: [
      "We're here for the journey, not just the launch.",
      "We stay open in process, pricing, and communication.",
    ],
    color: "from-[#6B5BF5] to-[#6B5BF5]",
  },
];

const OurAIServices: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="bg-background-primary" id="ai-services">
      {/* Sparkles Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Sparkles
          density={600}
          className="absolute inset-0 w-full h-full"
          color="#ffffff"
          size={2}
          opacity={0.3}
          minOpacity={0.1}
          speed={0.5}
          background="transparent"
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-20 py-24 lg:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary">
            Our Promise & What We Believe
          </h2>
          <p className="text-large-paragraph text-text-secondary mt-4">
            Built on principles that don't compromise. We deliver clarity, craftsmanship, and care in everything we build.
          </p>
        </motion.div>

        <div className="relative space-y-6">
          {solutionStacks.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="sticky top-24 flex items-center justify-center z-10 py-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
                  className="group relative w-full max-w-7xl mx-auto rounded-2xl flex flex-col lg:flex-row overflow-hidden 
                    backdrop-blur-2xl
                    bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.03]
                    border border-white/20
                    shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]
                    transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    hover:border-white/30
                    hover:bg-gradient-to-br hover:from-white/[0.12] hover:via-white/[0.08] hover:to-white/[0.05]
                    hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_16px_48px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]"
                >
                  {/* Premium Background Gradient */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/40 via-black/35 to-black/40" />

                  {/* Top Edge Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent z-[4]" />

                  {/* Left: Content */}
                  <div className="relative z-[3] w-full lg:w-[45%] p-8 lg:p-12 flex flex-col justify-center space-y-6">
                    {/* Header icon and title */}
                    <div className="space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl 
                          backdrop-blur-xl
                          bg-white/[0.12] border border-white/25
                          shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]
                          transition-all duration-300
                          group-hover:bg-white/[0.16]
                          group-hover:border-white/35"
                      >
                        <Icon className="w-6 h-6 !text-white relative z-10" strokeWidth={2} />
                      </motion.div>
                      <h3 className="text-[40px] font-medium leading-[1.2] tracking-[-0.01em] !text-white">
                        {service.title}
                      </h3>
                    </div>

                    {/* Items list */}
                    <div className="space-y-3">
                      {service.items.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.15 + i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/80 mt-2.5 shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
                          <p className="text-base !text-white leading-[1.6]">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:block absolute left-[45%] top-0 bottom-0 w-px bg-white/20" />

                  {/* Right: Media */}
                  <div className="relative z-[3] w-full lg:w-[55%] flex justify-center items-center p-8 lg:p-12 xl:p-16">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full max-w-2xl aspect-square lg:aspect-video rounded-3xl overflow-hidden 
                        backdrop-blur-xl
                        bg-white/[0.05]
                        border border-white/20
                        shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_16px_48px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15)]
                        transition-all duration-500
                        group-hover:border-white/30
                        group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_24px_64px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]"
                    >
                      {/* Top Edge Highlight */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent z-10 rounded-t-3xl" />

                      {/* Subtle overlay on media */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none z-10 rounded-3xl" />

                      {/* Shine effect on media */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none z-10 rounded-3xl opacity-50" />

                      <Image
                        src={service.media}
                        alt={service.title}
                        fill
                        className="object-cover rounded-3xl transition-transform duration-1000 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 55vw"
                        quality={95}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurAIServices;
