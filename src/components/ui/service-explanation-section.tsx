"use client"

import React from "react"
import { motion } from "motion/react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Badge } from "@/components/ui/badge"
import type { ServiceExperience } from "@/data/services"
import { cn } from "@/lib/utils"

interface ServiceExplanationSectionProps {
  service: ServiceExperience
  className?: string
}

export default function ServiceExplanationSection({
  service,
  className = "",
}: ServiceExplanationSectionProps) {
  // Use service highlights to explain the services
  const serviceHighlights = service.highlights.slice(0, 4)

  if (serviceHighlights.length === 0) {
    return null
  }

  return (
    <section className={cn("py-24 bg-background-primary", className)}>
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-3 inline-flex items-center rounded-[6px] bg-accent-yellow px-3 py-1">
            <p className="text-xs font-medium text-text-primary uppercase tracking-[0.02em]">
              OUR SERVICES
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-[-0.015em] mb-4 text-text-primary">
            What We Offer
          </h2>
          <p className="text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Discover the comprehensive range of services we provide to transform
            your business and drive innovation.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {serviceHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl p-8 bg-background-secondary border border-border-subtle overflow-hidden transition-all duration-300 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)]">
                {/* Glowing Effect */}
                <GlowingEffect
                  blur={20}
                  spread={40}
                  proximity={100}
                  variant="default"
                  glow={true}
                  disabled={false}
                  movementDuration={1.5}
                  borderWidth={1.5}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Badge */}
                {highlight.badge && (
                  <Badge
                    variant="secondary"
                    className="mb-4 bg-accent-yellow/20 border border-accent-yellow/30 text-text-primary hover:bg-accent-yellow/30"
                  >
                    {highlight.badge}
                  </Badge>
                )}

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4 leading-tight">
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className="text-base text-text-secondary leading-relaxed mb-4">
                  {highlight.description}
                </p>

                {/* Meta Info */}
                {highlight.meta && (
                  <div className="mt-6 pt-4 border-t border-border-subtle">
                    <p className="text-sm text-text-secondary/80 font-medium">
                      {highlight.meta}
                    </p>
                  </div>
                )}

                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        {service.outcomes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-wrap gap-4 justify-center">
              {service.outcomes.slice(0, 3).map((outcome, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full bg-background-secondary border border-border-subtle"
                >
                  <div className="text-2xl font-bold text-text-primary mb-1">
                    {outcome.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {outcome.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

