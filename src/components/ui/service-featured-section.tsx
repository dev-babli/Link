"use client"

import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react"
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react"
import {
  Sparkles,
  Zap,
  Target,
  Rocket,
  Brain,
  Shield,
  Code,
  Cloud,
  Database,
  Cpu,
} from "lucide-react"
import type { ServiceExperience } from "@/data/services"

// Icon mapping for different service types
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "search": Brain,
  "service": Rocket,
  "process": Zap,
  "builder": Code,
  "cloud": Cloud,
  "security": Shield,
  "data": Database,
  "ai": Sparkles,
  "default": Target,
}

interface Tab {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  isNew?: boolean;
  backgroundPositionX: number;
  backgroundPositionY: number;
  backgroundSizeX: number;
}

interface ServiceFeaturedSectionProps {
  service: ServiceExperience;
  className?: string;
}

const FeatureTab = (
  props: Tab &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null)

  const xPercent = useMotionValue(100)
  const yPercent = useMotionValue(0)
  const maskImage = useMotionTemplate`radial-gradient(100px 50px at ${xPercent}% ${yPercent}%, black, transparent)`
  
  useEffect(() => {
    if (!tabRef.current || !props.selected) return

    xPercent.set(0)
    yPercent.set(0)
    const { height, width } = tabRef.current?.getBoundingClientRect()
    const circumference = height * 2 + width * 2
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ]
    
    animate(xPercent, [0, 100, 100, 0, 0], {
      duration: 4,
      times,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    })
    animate(yPercent, [0, 0, 100, 100, 0], {
      times,
      duration: 4,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    })
  }, [props.selected, xPercent, yPercent])

  const IconComponent = props.icon;

  return (
    <div
      ref={tabRef}
      className="border border-border-subtle rounded-lg flex items-center gap-1 pr-4 py-1 relative cursor-pointer transition-all duration-300 hover:border-accent-yellow/50 bg-background-secondary/50"
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 -m-px border border-accent-yellow rounded-lg"
        ></motion.div>
      )}

      <div className="h-8 w-8 px-2 py-1 rounded-lg ml-3 inline-flex items-center justify-center text-text-secondary">
        <IconComponent className="w-4 h-4" />
      </div>
      <div className="text-sm font-normal text-text-primary">{props.title}</div>
      {props.isNew && (
        <div className="bg-accent-yellow rounded-lg text-text-primary p-2 font-semibold text-xs">
          new
        </div>
      )}
    </div>
  )
}

export default function ServiceFeaturedSection({
  service,
  className = "",
}: ServiceFeaturedSectionProps) {
  // Use service highlights for tabs, limit to 3
  const highlights = service.highlights.slice(0, 3);
  
  // Create tabs from highlights with background positions
  const tabs: Tab[] = highlights.map((highlight, index) => {
    const Icon = iconMap[highlight.id] || iconMap[highlight.badge.toLowerCase()] || iconMap.default;
    
    return {
      icon: Icon,
      title: highlight.title,
      description: highlight.description,
      isNew: false,
      backgroundPositionX: index === 0 ? 0 : index === 1 ? 80 : 120,
      backgroundPositionY: index === 0 ? 0 : index === 1 ? 90 : 30,
      backgroundSizeX: index === 0 ? 150 : index === 1 ? 135 : 170,
    };
  });

  // Fallback to default tabs if no highlights
  const displayTabs = tabs.length > 0 ? tabs : [
    {
      icon: Target,
      title: "Core Capabilities",
      description: "Discover our comprehensive service offerings designed to transform your business.",
      isNew: false,
      backgroundPositionX: 0,
      backgroundPositionY: 0,
      backgroundSizeX: 150,
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Cutting-edge solutions powered by the latest technologies and best practices.",
      isNew: false,
      backgroundPositionX: 80,
      backgroundPositionY: 90,
      backgroundSizeX: 135,
    },
    {
      icon: Sparkles,
      title: "Proven Results",
      description: "Deliver measurable outcomes with our data-driven approach and expertise.",
      isNew: false,
      backgroundPositionX: 120,
      backgroundPositionY: 30,
      backgroundSizeX: 170,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(0)

  const backgroundPositionX = useMotionValue(displayTabs[0].backgroundPositionX)
  const backgroundPositionY = useMotionValue(displayTabs[0].backgroundPositionY)
  const backgroundSizeX = useMotionValue(displayTabs[0].backgroundSizeX)

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`

  const handleSelecttab = (index: number) => {
    setSelectedTab(index)

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, displayTabs[index].backgroundSizeX],
      {
        duration: 2,
        ease: "easeInOut",
      }
    )
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), 100, displayTabs[index].backgroundPositionX],
      {
        duration: 2,
        ease: "easeInOut",
      }
    )
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), 100, displayTabs[index].backgroundPositionY],
      {
        duration: 2,
        ease: "easeInOut",
      }
    )
  }

  // Use a professional tech/workspace image from Unsplash
  const backgroundImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80";

  return (
    <section className={`py-20 md:py-28 bg-background-secondary ${className}`}>
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-5xl lg:text-7xl font-medium text-center tracking-tighter text-text-primary">
          {service.hero.title}
        </h2>
        <p className="text-text-secondary text-lg md:text-xl text-center tracking-tight mt-5 max-w-3xl mx-auto">
          {service.hero.description}
        </p>
        <div className="relative mt-10 flex justify-center">
          <div className="flex flex-col lg:flex-row gap-5">
            {displayTabs.map((tab, tabIndex) => (
              <FeatureTab
                {...tab}
                selected={selectedTab === tabIndex}
                onClick={() => handleSelecttab(tabIndex)}
                key={tab.title}
              />
            ))}
          </div>
        </div>
        <div className="border-2 border-border-subtle rounded-2xl p-2.5 mt-10 bg-background-primary/50">
          <motion.div
            className="aspect-video bg-cover border border-border-subtle rounded-lg overflow-hidden"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${backgroundImage})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  )
}

