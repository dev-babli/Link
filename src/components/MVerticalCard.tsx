// components/AITransformationCirrusInteractive.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClientOnlyMeshGradient } from "@/components/ui/client-only-shaders";
import {
  FaProjectDiagram,
  FaDatabase,
  FaRobot,
  FaUsersCog,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description:
      "Define clear AI objectives, identify high-impact use-cases, and assess current capabilities to build a strategic roadmap for transformation.",
    image: "/images/ai-transformation/strategy.avif",
    icon: FaProjectDiagram,
    gradient: "from-[#3B82F6] via-[#2563EB] to-[#1D4ED8]",
    accent: "from-blue-500/10 to-blue-600/5",
  },
  {
    id: 2,
    title: "Design & Prototype",
    description:
      "Build robust data pipelines, ensure data quality and accessibility, and establish MLOps practices for scalable AI infrastructure.",
    image: "/images/ai-transformation/design.avif",
    icon: FaDatabase,
    gradient: "from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]",
    accent: "from-purple-500/10 to-purple-600/5",
  },
  {
    id: 3,
    title: "Development & QA",
    description:
      "Design and build custom AI solutions tailored to business needs, leveraging advanced techniques and rigorous quality assurance.",
    image: "/images/ai-transformation/development.avif",
    icon: FaRobot,
    gradient: "from-[#10B981] via-[#059669] to-[#047857]",
    accent: "from-emerald-500/10 to-emerald-600/5",
  },
  {
    id: 4,
    title: "Optimization & Scale",
    description:
      "Foster AI literacy, enable teams, embed governance frameworks, and sustain value through continuous optimization and adoption.",
    image: "/images/ai-transformation/management.avif",
    icon: FaUsersCog,
    gradient: "from-[#F59E0B] via-[#D97706] to-[#B45309]",
    accent: "from-amber-500/10 to-amber-600/5",
  },
];

const AITransformationCirrusInteractive: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeStepData = steps[activeStep];
  const Icon = activeStepData.icon;

  return (
    <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
              Enterprise Transformation
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Transform Your Business
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            A comprehensive approach to digital transformation, from strategy to scale
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-16">
          {/* Left: Navigation */}
          <div className="relative">
            <div className="sticky top-32 space-y-2">
              {steps.map((step, idx) => {
                const StepIcon = step.icon;
                const isActive = activeStep === idx;
                
                return (
                  <motion.button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className="group relative w-full text-left"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 ${
                        isActive
                          ? "bg-white shadow-xl shadow-gray-900/5 border border-gray-200/50"
                          : "bg-white/60 backdrop-blur-sm shadow-sm hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-200/30"
                      }`}
                    >
                      {/* Active gradient background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeBg"
                          className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-100`}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      {/* Content */}
                      <div className="relative flex items-start gap-4">
                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                            isActive
                              ? `bg-gradient-to-br ${step.gradient} text-white shadow-lg shadow-blue-500/20`
                              : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                          }`}
                        >
                          <StepIcon className="w-5 h-5" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0 pt-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`text-xs font-semibold tracking-wider uppercase ${
                                isActive ? "text-blue-600" : "text-gray-400"
                              }`}
                            >
                              Step {step.id}
                            </span>
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-1.5 h-1.5 rounded-full bg-blue-600"
                              />
                            )}
                          </div>
                          <h3
                            className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                              isActive ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
                            }`}
                          >
                            {step.title}
                          </h3>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-sm text-gray-600 leading-relaxed mt-2"
                            >
                              {step.description}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      {/* Active indicator line */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${step.gradient} rounded-r-full`}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right: Content Display */}
          <div className="relative min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-xl shadow-gray-900/5 border border-gray-200/50">
                  {/* Background Image */}
                  <motion.img
                    src={activeStepData.image}
                    alt={activeStepData.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.05, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                  
                  {/* Gradient Overlay for Text Readability - Progressive from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  
                  {/* Subtle color tint */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeStepData.accent} opacity-20`} />

                  {/* Content Overlay - Bottom aligned */}
                  <div className="absolute inset-0 flex flex-col justify-end">
                    {/* Progressive blur backdrop that fades into image */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        maskImage: 'linear-gradient(to top, black 0%, black 60%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 0%, black 60%, transparent 100%)',
                      }}
                    />
                    
                    {/* Additional subtle blur layer */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-[50%] pointer-events-none"
                      style={{
                        backdropFilter: 'blur(30px)',
                        WebkitBackdropFilter: 'blur(30px)',
                        maskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 100%)',
                      }}
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10 p-8 lg:p-10 max-w-3xl"
                    >
                      {/* Content */}
                      <div className="relative">
                        {/* Header Section */}
                        <div className="flex items-start gap-6 mb-6">
                          {/* Icon Badge */}
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                            className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${activeStepData.gradient} flex items-center justify-center shadow-lg`}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </motion.div>

                          {/* Title Section */}
                          <div className="flex-1 min-w-0 pt-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-xs font-semibold tracking-wider uppercase text-white">
                                Step {activeStepData.id}
                              </span>
                              <div className={`h-px flex-1 bg-gradient-to-r ${activeStepData.gradient} opacity-60`} />
                            </div>
                            <motion.h3
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4, duration: 0.5 }}
                              className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 drop-shadow-lg"
                            >
                              {activeStepData.title}
                            </motion.h3>
                          </div>
                        </div>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                          className="text-lg lg:text-xl text-white leading-relaxed font-light drop-shadow-md"
                        >
                          {activeStepData.description}
                        </motion.p>

                        {/* Accent line */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          className={`mt-6 h-1 w-24 bg-gradient-to-r ${activeStepData.gradient} rounded-full shadow-lg`}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Step Counter */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  {steps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`transition-all duration-300 ${
                        idx === activeStep
                          ? "w-8 h-1.5 rounded-full bg-gray-900"
                          : "w-1.5 h-1.5 rounded-full bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITransformationCirrusInteractive;
