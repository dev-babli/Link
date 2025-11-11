"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CarouselCard {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  overlayText?: string;
}

interface OverlappingCardsCarouselProps {
  cards?: CarouselCard[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const defaultCards: CarouselCard[] = [
  {
    id: "1",
    title: "Files Configuration",
    description: "Studio",
    imageUrl: "/design.jpeg",
    overlayText: "Conversational KB: Unlock the potential of enterprise Agentic RAG",
  },
  {
    id: "2",
    title: "Knowledge Base",
    description: "Documents & URLs",
    imageUrl: "/dev-testing.jpeg",
    overlayText: "Debug and Perfect in Minutes",
  },
  {
    id: "3",
    title: "Super Agent Profile",
    description: "Agents & Comments",
    imageUrl: "/digitalTransformation.png",
    overlayText: "Ship reliable AI Agents Faster",
  },
  {
    id: "4",
    title: "Dashboards",
    description: "Development & Analytics",
    imageUrl: "/research.jpeg",
    overlayText: "Experience our Agentic AI platform",
  },
  {
    id: "5",
    title: "Automated Testing",
    description: "Quality Assurance",
    imageUrl: "/lauch.jpeg",
    overlayText: "Test and deploy with confidence",
  },
];

export default function OverlappingCardsCarousel({
  cards = defaultCards,
  className,
  autoPlay = false,
  autoPlayInterval = 5000,
}: OverlappingCardsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalCards = cards.length;

  // Calculate visible cards (current + 2 on each side)
  const getVisibleCards = () => {
    const visible: { card: CarouselCard; index: number; position: number }[] = [];
    
    // Add previous cards
    for (let i = -2; i < 0; i++) {
      const index = (currentIndex + i + totalCards) % totalCards;
      visible.push({
        card: cards[index],
        index,
        position: i,
      });
    }
    
    // Add current card
    visible.push({
      card: cards[currentIndex],
      index: currentIndex,
      position: 0,
    });
    
    // Add next cards
    for (let i = 1; i <= 2; i++) {
      const index = (currentIndex + i) % totalCards;
      visible.push({
        card: cards[index],
        index,
        position: i,
      });
    }
    
    return visible;
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        goToNext();
      }, autoPlayInterval);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, currentIndex]);

  const visibleCards = getVisibleCards();

  return (
    <div className={cn("relative w-full py-24 lg:py-32 overflow-hidden bg-background-primary", className)}>
      {/* Background gradient - matching grovia design */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/3 to-purple-500/3 rounded-full blur-3xl" />
      </div>
      
      {/* Global style for white text with !important */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .overlapping-carousel-text,
          .overlapping-carousel-text * {
            color: #ffffff !important;
          }
        `
      }} />
      
      <div className="relative container mx-auto max-w-7xl px-6 lg:px-20 z-10">
        {/* Title Section - matching grovia typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
            Experience our Agentic AI platform
          </h2>
          <p className="text-large-paragraph text-text-secondary">
            Yellow.ai Automated Testing: Ship reliable AI Agents Faster
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          {/* Navigation Arrows - matching grovia design */}
          <button
            onClick={goToPrev}
            disabled={isAnimating}
            className={cn(
              "absolute left-4 z-50 p-3 rounded-full bg-background-primary/90 backdrop-blur-sm",
              "shadow-lg hover:shadow-xl transition-all duration-300",
              "hover:bg-background-primary",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "border border-border"
            )}
            aria-label="Previous card"
          >
            <ChevronLeft className="w-6 h-6 text-text-primary" />
          </button>

          <button
            onClick={goToNext}
            disabled={isAnimating}
            className={cn(
              "absolute right-4 z-50 p-3 rounded-full bg-background-primary/90 backdrop-blur-sm",
              "shadow-lg hover:shadow-xl transition-all duration-300",
              "hover:bg-background-primary",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "border border-border"
            )}
            aria-label="Next card"
          >
            <ChevronRight className="w-6 h-6 text-text-primary" />
          </button>

          {/* Cards Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {visibleCards.map(({ card, index, position }) => {
              const isCenter = position === 0;
              const isLeft = position < 0;
              const isRight = position > 0;
              
              // Calculate scale, z-index, and transform based on position
              // More dramatic scaling for better depth effect
              const scale = isCenter ? 1 : Math.max(0.6, 0.85 - Math.abs(position) * 0.12);
              const zIndex = isCenter ? 50 : 40 - Math.abs(position) * 5;
              // Increased xOffset for more visible overlap
              const xOffset = position * 150;
              const yOffset = Math.abs(position) * 15;
              const opacity = isCenter ? 1 : Math.max(0.3, 0.7 - Math.abs(position) * 0.2);
              // Subtle rotation for depth
              const rotation = position * 1.5;

                return (
                  <motion.div
                    key={`${card.id}-${index}`}
                    initial={false}
                    animate={{
                      x: xOffset,
                      y: yOffset,
                      scale,
                      rotateY: rotation,
                      opacity,
                      zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                      mass: 0.8,
                    }}
                    className={cn(
                      "absolute w-[85%] md:w-[60%] lg:w-[50%] h-[80%]",
                      "rounded-2xl overflow-hidden",
                      "shadow-2xl",
                      "cursor-pointer transition-all duration-300",
                      "border border-border-subtle/50",
                      isCenter && "ring-2 ring-purple-500/30",
                      !isCenter && "hover:scale-105"
                    )}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  >
                    {/* Dark overlay for better text contrast */}
                    <div
                      className={cn(
                        "absolute inset-0 z-10 transition-opacity duration-300",
                        "bg-gradient-to-b from-black/40 via-black/30 to-black/50"
                      )}
                    />
                    
                    {/* Accent tint overlay - using grovia design colors */}
                    <div
                      className={cn(
                        "absolute inset-0 z-[11] transition-opacity duration-300",
                        isCenter
                          ? "bg-gradient-to-br from-purple-500/20 via-blue-500/15 to-cyan-500/20"
                          : "bg-gradient-to-br from-purple-500/30 via-blue-500/25 to-cyan-500/30"
                      )}
                    />

                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={card.imageUrl}
                        alt={card.title}
                        fill
                        className="object-cover"
                        priority={isCenter}
                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 50vw"
                      />
                    </div>

                    {/* Content Overlay */}
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-8"
                      >
                        {/* Top content with dark backdrop */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-black/60 backdrop-blur-md rounded-xl -m-2" />
                          <div className="relative p-4 md:p-6 overlapping-carousel-text">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 drop-shadow-2xl !text-white overlapping-carousel-text" style={{ color: '#ffffff' }}>
                              {card.title}
                            </h3>
                            {card.description && (
                              <p className="text-lg md:text-xl lg:text-2xl font-semibold drop-shadow-xl !text-white overlapping-carousel-text" style={{ color: '#ffffff' }}>
                                {card.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Bottom overlay text with strong contrast */}
                        {card.overlayText && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="relative"
                          >
                            <div className="absolute inset-0 bg-black/70 backdrop-blur-md rounded-xl" />
                            <div className="relative bg-gradient-to-r from-purple-500/80 to-cyan-500/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 shadow-2xl overlapping-carousel-text">
                              <p className="text-lg md:text-xl lg:text-2xl font-semibold drop-shadow-2xl leading-tight !text-white overlapping-carousel-text" style={{ color: '#ffffff' }}>
                                {card.overlayText}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                    {/* Non-center cards show minimal info */}
                    {!isCenter && (
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="relative text-center px-4 overlapping-carousel-text">
                          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-lg -m-2" />
                          <h4 className="relative text-lg md:text-xl font-bold drop-shadow-2xl px-4 py-2 !text-white overlapping-carousel-text" style={{ color: '#ffffff' }}>
                            {card.title}
                          </h4>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
          </div>
        </div>

        {/* Dots Indicator - matching grovia design */}
        <div className="flex justify-center gap-2 mt-12">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 600);
                }
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "w-8 bg-purple-500"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

