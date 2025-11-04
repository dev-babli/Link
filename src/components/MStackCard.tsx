"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ClientOnlyMeshGradient } from "@/components/ui/client-only-shaders";
import {
  FaLightbulb,
  FaCode,
  FaCloud,
  FaTools,
} from "react-icons/fa";
import Image from "next/image"; // for optimized Next.js images

const solutionStacks = [
  {
    title: "Product Strategy & Experience",
    icon: FaLightbulb,
    type: "video" as const,
    media: "/videos/product-strategy.mp4",
    items: [
      "Vision workshops, customer journey mapping, and UX research to prioritise features.",
      "Design systems, component libraries, and interactive prototypes for faster handoff.",
      "Experimentation frameworks to validate ideas and measure product-market fit.",
    ],
    color: "from-[#6B5BF5] to-[#6B5BF5]",
  },
  {
    title: "Full-Stack Engineering Pods",
    icon: FaCode,
    type: "image" as const,
    media:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    items: [
      "Composable frontends with React, Next.js, and design-system alignment.",
      "API platforms, microservices, and integration layers built for scale.",
      "Automated testing, CI/CD pipelines, and DevOps tooling baked in.",
    ],
    color: "from-[#0490F2] to-[#0490F2]",
  },
  {
    title: "Cloud & Platform Modernisation",
    icon: FaCloud,
    type: "video" as const,
    media: "/videos/cloud-services.mp4",
    items: [
      "Cloud migrations across AWS, Azure, and GCP with infrastructure-as-code.",
      "Observability, SRE practices, and cost optimisation baked into every release.",
      "Data platforms, event streaming, and API gateways for connected ecosystems.",
    ],
    color: "from-[#6B5BF5] to-[#6B5BF5]",
  },
  {
    title: "Lifecycle & Managed Services",
    icon: FaTools,
    type: "image" as const,
    media:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    items: [
      "24/7 application support, SLAs, and incident response for mission-critical systems.",
      "Roadmap delivery, enhancements, and release management to keep teams shipping.",
      "Security hardening, compliance audits, and governance reporting on autopilot.",
    ],
    color: "from-[#0490F2] to-[#0490F2]",
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
    <section className="bg-white" id="ai-services">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-4"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
            Complete Software Solutions for Every Business Need
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            From product strategy to cloud modernisation and managed delivery, Link Innovations assembles the right pod to accelerate your roadmap.
          </p>
        </motion.div>

        <div className="relative space-y-8">
          {solutionStacks.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="sticky top-24 flex items-center justify-center z-10 py-12"
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
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="group relative w-full max-w-7xl mx-auto rounded-[2.5rem] flex flex-col lg:flex-row overflow-hidden border border-gray-200/50 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.02),0_0_0_1px_rgba(255,255,255,0.5)_inset] hover:shadow-[0_30px_80px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.6)_inset,0_0_60px_rgba(114,185,187,0.15)] transition-all duration-500 bg-white/40 backdrop-blur-2xl"
                >
                  {/* MeshGradient Background */}
                  {mounted && (
                    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[2.5rem]">
                      <ClientOnlyMeshGradient
                        width={1400}
                        height={700}
                        colors={["#72b9bb", "#b5d9d9", "#ffd1bd", "#ffebe0", "#8cc5b8", "#dbf4a4"]}
                        distortion={0.8}
                        swirl={0.6}
                        grainMixer={0}
                        grainOverlay={0}
                        speed={0.35}
                        offsetX={0.08}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/20 pointer-events-none" />
                    </div>
                  )}
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/50 pointer-events-none rounded-[2.5rem]" />
                  
                  {/* Premium glow effect */}
                  <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none rounded-[2.5rem] opacity-60" />
                  
                  {/* Animated border glow */}
                  <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-r from-[#72b9bb]/20 via-[#b5d9d9]/20 to-[#ffd1bd]/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10" />
                  
                  {/* Left: Content */}
                  <div className="relative z-10 w-full lg:w-[45%] px-8 lg:px-12 xl:px-16 py-12 lg:py-16 flex flex-col justify-center space-y-8">
                    {/* Header icon and title */}
                    <div className="space-y-6">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md border border-gray-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.8)_inset] group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.9)_inset,0_0_20px_rgba(114,185,187,0.2)] transition-all duration-300"
                      >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
                        <Icon className="w-7 h-7 text-gray-800 relative z-10" />
                      </motion.div>
                      <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900 tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* Items list */}
                    <div className="space-y-4">
                      {service.items.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.15 + i * 0.1 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 group-hover/item:bg-gray-600 transition-colors" />
                          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:block absolute left-[45%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

                  {/* Right: Media */}
                  <div className="relative z-10 w-full lg:w-[55%] flex justify-center items-center p-8 lg:p-12 xl:p-16">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full max-w-2xl aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.05)] border border-gray-200/80 bg-gray-50/50 backdrop-blur-sm group-hover:shadow-[0_30px_80px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.08),0_0_40px_rgba(114,185,187,0.2)] transition-all duration-500"
                    >
                      {/* Premium border glow */}
                      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#72b9bb]/30 via-[#b5d9d9]/30 to-[#ffd1bd]/30 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10" />
                      
                      {/* Subtle overlay on media */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none z-10 rounded-3xl" />
                      
                      {/* Shine effect on media */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none z-10 rounded-3xl opacity-50" />
                      
                      {service.type === "video" ? (
                        <video
                          src={service.media}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover rounded-3xl"
                        />
                      ) : (
                        <Image
                          src={service.media}
                          alt={service.title}
                          fill
                          className="object-cover rounded-3xl"
                        />
                      )}
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
