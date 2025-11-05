"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const whyChooseUsData = [
  {
    id: "1",
    title: "Expert Team",
    mainText: "10+ Years Experience",
    subMainText: "Industry veterans with proven expertise in cutting-edge technologies",
    metric: "98%",
    metricLabel: "Client Satisfaction",
    className: "lg:col-span-3 lg:row-span-2",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Proven Track Record",
    mainText: "200+ Projects",
    subMainText: "Successfully delivered projects with exceptional results",
    metric: "100%",
    metricLabel: "On-Time Delivery",
    className: "lg:col-span-2 lg:row-span-2",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Cutting-Edge Tech",
    mainText: "Modern Stack",
    subMainText: "Latest technologies including AI, ML, Cloud, and modern frameworks",
    metric: "95%",
    metricLabel: "Tech Adoption",
    className: "lg:col-span-4 lg:row-span-1",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "24/7 Support",
    mainText: "Always Available",
    subMainText: "Round-the-clock support and monitoring for your projects",
    metric: "< 1 hour",
    metricLabel: "Response Time",
    className: "lg:col-span-2 lg:row-span-1",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    title: "Enterprise Clients",
    mainText: "50+ Companies",
    subMainText: "Trusted by leading enterprises across various industries",
    metric: "85%",
    metricLabel: "Enterprise Rate",
    className: "lg:col-span-2 lg:row-span-1",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    title: "Quality Assurance",
    mainText: "Zero Compromise",
    subMainText: "Rigorous testing and quality assurance processes",
    metric: "97%",
    metricLabel: "Quality Score",
    className: "lg:col-span-2 lg:row-span-1",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const WhyChooseCard: React.FC<{
  title: string;
  mainText: string;
  subMainText: string;
  metric: string;
  metricLabel: string;
  className?: string;
  index: number;
  image: string;
}> = ({ title, mainText, subMainText, metric, metricLabel, className = "", index, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        relative border border-gray-100/50 rounded-xl p-6 bg-white min-h-[200px]
        flex flex-col justify-between overflow-hidden
        shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.10)] hover:scale-[1.02] transition-all duration-500
        group
        ${className}
      `}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/90 to-white/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-[#666666] bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-gray-100/50">
            {title}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-[#1a1a1a] leading-tight">
          {mainText}
        </h3>
        <p className="text-[#666666] text-sm leading-relaxed">
          {subMainText}
        </p>
      </div>

      <div className="relative z-10 mt-6 pt-6 border-t border-gray-100/50">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-[#1a1a1a]">{metric}</span>
          <span className="text-sm text-[#666666] mt-2">{metricLabel}</span>
        </div>
      </div>
    </motion.div>
  );
};

export function WhyChooseUsBento() {
  return (
    <section className="bg-white border-t border-gray-100/50">
      <div className="mx-auto container border-b border-gray-100/50 py-20 px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1a1a1a]">
            Why Choose Us
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Our commitment to excellence, innovation, and client success sets us apart
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
          {whyChooseUsData.map((item, index) => (
            <WhyChooseCard
              key={item.id}
              title={item.title}
              mainText={item.mainText}
              subMainText={item.subMainText}
              metric={item.metric}
              metricLabel={item.metricLabel}
              className={item.className}
              index={index}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
