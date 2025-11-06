"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
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
    <section className="relative w-full min-h-screen flex items-center justify-center md:justify-start bg-background-primary overflow-hidden px-6 md:px-16 lg:px-20 -mt-[104px] pt-[104px]">
      {/* Hero video background */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Hero animation showcasing Link Innovations"
      />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-x-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] md:text-[72px] hero-heading-black">
              Link Innovations
            </h1>
            <h2 className="mt-3 text-[40px] font-medium leading-[1.2] tracking-[-0.01em] hero-heading-black">
              Custom Software Excellence
            </h2>
            <p className="mt-6 text-large-paragraph max-w-lg mx-auto lg:mx-0 hero-text-white">
              Partner with Link Innovations to design and launch tailored digital
              platforms that streamline operations, elevate customer experiences,
              and accelerate growth.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group bg-button-primary-bg text-button-primary-text text-button font-medium pl-6 pr-3.5 py-2.5 rounded-full flex items-center gap-2.5 transition-transform duration-200 ease-out hover:scale-[1.02] shadow-[0_5px_16px_0_rgba(0,0,0,0.2)] justify-center"
              >
                <span>Get Started</span>
                <div className="bg-accent-yellow rounded-full p-[3px] flex items-center justify-center">
                  <div className="relative w-5 h-5 overflow-hidden text-black">
                    <div className="transition-transform duration-300 ease-in-out group-hover:-translate-x-[120%]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 transition-transform duration-300 ease-in-out translate-x-[120%] group-hover:translate-x-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#learn"
                className="bg-transparent border-[1.5px] border-text-primary text-text-primary text-button font-medium px-6 py-3.5 rounded-full transition-colors hover:bg-black/[.05]"
              >
                Learn More
              </a>
            </div>

            <div className="relative mt-16">
              <motion.div
                className="overflow-hidden py-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
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
                  fadeOutColor="rgba(245,243,239,0)"
                  ariaLabel="Technology stack"
                  className="[--logoloop-fadeColor:rgba(245,243,239,0)]"
                />
              </motion.div>
            </div>
          </div>
          <div className="relative mt-16 lg:mt-0 h-[450px] lg:h-[550px] hidden lg:block">
            {/* Placeholder for hero image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNew;
