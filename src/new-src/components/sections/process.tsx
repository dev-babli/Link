"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ProcessCardData {
  id: string;
  title: string;
  text: string;
  img: string;
}

const processData: ProcessCardData[] = [
  {
    id: "01",
    title: "Easy setup",
    text: "Create your workspace and invite your team. Get everything ready.",
    img: "/images/process-cards/easy.jpg",
  },
  {
    id: "02",
    title: "Collaborate",
    text: "Assign tasks and keep communication clear. Everyone stays aligned.",
    img: "/images/process-cards/collabarate.jpg",
  },
  {
    id: "03",
    title: "Track growth",
    text: "Use dashboards to monitor progress, trends, and what matters most.",
    img: "/images/process-cards/track.jpg",
  },
];

const ProcessCard = ({ id, title, text, img, index, hoveredIndex, setHoveredIndex, isVisible, delay }: ProcessCardData & { index: number; hoveredIndex: number | null; setHoveredIndex: (index: number | null) => void; isVisible: boolean; delay: number }) => {
  const isHovered = hoveredIndex === index;
  const defaultExpanded = 0;
  const isExpanded = hoveredIndex !== null ? isHovered : index === defaultExpanded;

  return (
    <motion.div
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-200 shadow-lg flex bg-white transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ height: "329.6px", minWidth: "300px", transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Illumination effect from behind */}
      <div className={`absolute -inset-4 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-2xl transition-opacity duration-700 ease-in-out -z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute -inset-2 bg-gradient-to-br from-blue-300/30 via-purple-300/30 to-pink-300/30 blur-xl transition-opacity duration-700 ease-in-out -z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Left side text */}
      <div className="w-64 flex flex-col justify-between p-6 relative z-10">
        <div className={`text-xl font-bold text-left transition-colors duration-700 ease-in-out ${isHovered ? 'text-gray-900' : 'text-gray-400'}`}>{id}</div>
        <div className="mt-auto">
          <h3 className={`text-lg font-semibold mb-1 text-left transition-all duration-700 ease-in-out ${isHovered ? 'translate-x-1' : ''}`}>
            {title}
          </h3>
          <p className={`text-sm text-left transition-all duration-700 ease-in-out ${isHovered ? 'text-gray-900' : 'text-gray-600'}`}>
            {text}
          </p>
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
            src={img}
            alt={title}
            fill
            className="object-cover"
            sizes="300px"
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="bg-background-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex flex-col items-center">
          {/* Main Dashboard Image with scroll-to-reveal */}
          <div className={`relative mb-20 w-full max-w-[1120px] transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <div className="group relative overflow-hidden rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.12)] transition-all duration-700 ease-in-out hover:shadow-[0px_12px_48px_rgba(0,0,0,0.18)] hover:scale-[1.01]">
              {/* Illumination effect from behind on hover */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/20 via-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 ease-in-out -z-10" />
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-300/30 via-blue-300/30 to-indigo-300/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 ease-in-out -z-10" />

              <Image
                src="/image2.png"
                alt="Dashboard UI"
                width={1120}
                height={650}
                className="h-auto w-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.03)] pointer-events-none"></div>
            </div>
          </div>

          {/* Process Cards Container with flex layout (like processcards.tsx) */}
          <div className={`relative p-5 bg-pink-100/30 rounded-3xl flex flex-col lg:flex-row justify-center gap-6 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {processData.map((item, index) => (
              <ProcessCard
                key={item.id}
                {...item}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                isVisible={isVisible}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;