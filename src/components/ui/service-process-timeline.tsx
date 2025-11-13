"use client"

import React from "react"
import {
  ContainerScroll,
  ContainerSticky,
  ProcessCard,
  ProcessCardBody,
  ProcessCardTitle,
} from "@/components/ui/process-timeline"
import type { ServiceExperience } from "@/data/services"

interface ServiceProcessTimelineProps {
  service: ServiceExperience;
  className?: string;
}

export default function ServiceProcessTimeline({
  service,
  className = "",
}: ServiceProcessTimelineProps) {
  // Use service approach data for process phases
  const processPhases = service.narrative.approach.length > 0
    ? service.narrative.approach.map((phase, index) => ({
        id: phase.id || `process-${index + 1}`,
        title: phase.title,
        description: phase.description,
        badge: phase.badge,
      }))
    : [
        {
          id: "process-1",
          title: "Discovery & Planning",
          description:
            "We begin by understanding your business goals, technical requirements, and user needs. This comprehensive analysis ensures we build a solution that perfectly aligns with your vision.",
          badge: "Phase 1",
        },
        {
          id: "process-2",
          title: "Design & Architecture",
          description:
            "Our team creates detailed wireframes and architectural designs. We focus on creating intuitive user experiences and scalable technical foundations.",
          badge: "Phase 2",
        },
        {
          id: "process-3",
          title: "Development & Integration",
          description:
            "With designs approved, our developers bring your vision to life using cutting-edge technologies. We ensure seamless integration with your existing systems.",
          badge: "Phase 3",
        },
        {
          id: "process-4",
          title: "Testing & Launch",
          description:
            "Rigorous testing ensures everything works flawlessly. We then launch your solution and provide ongoing support to ensure continued success.",
          badge: "Phase 4",
        },
      ]

  return (
    <ContainerScroll
      className={`container mx-auto px-6 lg:px-20 py-12 h-[300vh] bg-background-secondary ${className}`}
    >
      <div className="mb-12 space-y-4">
        <div className="mb-3 inline-flex items-center rounded-[6px] bg-accent-yellow px-3 py-1">
          <p className="text-xs font-medium text-text-primary uppercase tracking-[0.02em]">
            PROCESS
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-[-0.015em] text-text-primary">
          Our Delivery Process
        </h2>
        <p className="max-w-[52ch] text-base text-text-secondary leading-relaxed">
          We follow a structured, collaborative approach to ensure your project
          is delivered on time, within budget, and exceeds expectations. Each phase
          builds upon the previous one, creating a seamless journey from concept
          to completion.
        </p>
      </div>

      <ContainerSticky className="top-16 flex flex-nowrap">
        {processPhases.map((phase, index) => (
          <ProcessCard
            key={phase.id}
            itemsLength={processPhases.length}
            index={index}
            className="min-w-[70%] max-w-[70%] rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-300"
            variant="grovia"
          >
            <ProcessCardTitle className="border-r border-border-subtle flex flex-col gap-4">
              <div className="rounded-full size-12 bg-accent-yellow/20 border border-accent-yellow/30 text-text-primary text-sm font-semibold flex justify-center items-center">
                {String(index + 1).padStart(2, "0")}
              </div>
              {phase.badge && (
                <div className="inline-block">
                  <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                    {phase.badge}
                  </span>
                </div>
              )}
            </ProcessCardTitle>
            <ProcessCardBody className="flex flex-col gap-6">
              <h3 className="text-2xl lg:text-3xl font-semibold leading-tight text-text-primary">
                {phase.title}
              </h3>
              <p className="text-base text-text-secondary leading-relaxed">
                {phase.description}
              </p>
            </ProcessCardBody>
          </ProcessCard>
        ))}
      </ContainerSticky>
    </ContainerScroll>
  )
}

