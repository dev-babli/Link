"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma
} from "react-icons/si";

const VIDEO_SRC =
  "https://yellow.ai/wp-content/uploads/2025/09/hero-video-25.mp4";

const techLogos = [
  {
    node: <SiReact className="text-[#61dafb] text-4xl md:text-5xl" />,
    title: "React",
    href: "https://react.dev"
  },
  {
    node: <SiNextdotjs className="text-white text-4xl md:text-5xl" />,
    title: "Next.js",
    href: "https://nextjs.org"
  },
  {
    node: <SiTypescript className="text-[#3178c6] text-4xl md:text-5xl" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org"
  },
  {
    node: <SiTailwindcss className="text-[#38bdf8] text-4xl md:text-5xl" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com"
  },
  {
    node: <SiNodedotjs className="text-[#3c873a] text-4xl md:text-5xl" />,
    title: "Node.js",
    href: "https://nodejs.org"
  },
  {
    node: <SiMongodb className="text-[#4faa41] text-4xl md:text-5xl" />,
    title: "MongoDB",
    href: "https://www.mongodb.com"
  },
  {
    node: <SiPostgresql className="text-[#336791] text-4xl md:text-5xl" />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org"
  },
  {
    node: <SiDocker className="text-[#2496ed] text-4xl md:text-5xl" />,
    title: "Docker",
    href: "https://www.docker.com"
  },
  {
    node: <SiGit className="text-[#f05133] text-4xl md:text-5xl" />,
    title: "Git",
    href: "https://git-scm.com"
  },
  {
    node: <SiGithub className="text-white text-4xl md:text-5xl" />,
    title: "GitHub",
    href: "https://github.com"
  },
  {
    node: <SiVercel className="text-white text-4xl md:text-5xl" />,
    title: "Vercel",
    href: "https://vercel.com"
  },
  {
    node: <SiFigma className="text-[#a259ff] text-4xl md:text-5xl" />,
    title: "Figma",
    href: "https://www.figma.com"
  }
];

const HeroSectionNew: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="relative w-full h-screen flex items-center justify-center md:justify-start bg-black overflow-hidden px-6 md:px-16 lg:px-24 rounded-b-[80px] md:rounded-b-[120px]">
      {/* Inline hero video */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover rounded-b-[80px] md:rounded-b-[120px]"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Hero animation showcasing Link Innovations"
      />

      {/* Video overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1] rounded-b-[80px] md:rounded-b-[120px]" />

      {/* Hero content layered on video */}
      <div className="relative z-10 w-full max-w-3xl text-left">
        <h1 
          className="text-5xl md:text-7xl font-bold leading-tight" 
          style={{ 
            color: 'white',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          Link Innovations
        </h1>
        <h2 
          className="mt-6 text-3xl md:text-4xl font-semibold" 
          style={{ 
            color: 'white',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          Custom Software Excellence
        </h2>
        <p 
          className="mt-8 text-xl md:text-2xl leading-relaxed" 
          style={{ 
            color: 'white',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          Partner with Link Innovations to design and launch tailored digital
          platforms that streamline operations, elevate customer experiences,
          and accelerate growth.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-start">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-black text-white rounded-lg px-8 py-4 text-lg font-semibold shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#learn"
            className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-sm text-white rounded-lg px-8 py-4 text-lg font-semibold hover:bg-white/20 transition-all duration-300"
            style={{ 
              textShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}
          >
            Learn More
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="relative mt-16 w-full">
          <motion.div
            className="absolute left-1/2 w-screen -translate-x-1/2 overflow-hidden py-6"
            initial={{ opacity: 0, x: 120, rotate: 120 }}
            whileInView={{ opacity: 1, x: 0, rotate: 360 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <LogoLoop
              logos={techLogos}
              speed={70}
              direction="left"
              logoHeight={64}
              gap={48}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="rgba(17,25,40,0)"
              ariaLabel="Technology stack"
              className="[--logoloop-fadeColor:rgba(17,25,40,0)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNew;
