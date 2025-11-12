"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { MagicBentoGrid } from "@/components/ui/magic-bento-grid";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid-curtain";
import { AnimatedMetricCard } from "@/components/positivus/AnimatedMetricCard";
import RuixenFeatureSection from "@/components/ui/ruixen-feature-section";
import TestimonialsColumns from "@/components/ui/testimonials-columns-1";
import { TrustedBySparkles } from "@/components/ui/trusted-by-sparkles";
import { CTAWithShader } from "@/components/ui/cta-with-shader";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import { CardCurtainReveal, CardCurtainRevealBody, CardCurtainRevealTitle, CardCurtainRevealDescription } from "@/components/ui/card-curtain-reveal";

interface PremiumServiceTemplateProps {
  serviceName: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroDescription: string;
  heroImage?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  impactMetrics?: {
    metric: string;
    value: string;
    description: string;
  }[];
  features?: {
    icon?: React.ReactNode;
    title: string;
    description: string;
    image?: string;
    badge?: string;
    features?: string[];
    gradient?: string;
  }[];
  useCases?: {
    title: string;
    description: string;
    examples?: string[];
    icon?: React.ReactNode;
  }[];
  capabilities?: {
    icon?: React.ReactNode;
    title: string;
    description: string;
    image?: string;
    badge?: string;
    features?: string[];
    gradient?: string;
  }[];
  technologies?: string[];
  whyChooseUs?: {
    icon?: React.ReactNode;
    title: string;
    description: string;
  }[];
  testimonials?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
}

export default function PremiumServiceTemplate({
  serviceName,
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroImage,
  primaryCTA,
  secondaryCTA,
  impactMetrics = [],
  features = [],
  useCases = [],
  capabilities = [],
  technologies = [],
  whyChooseUs = [],
  testimonials = [],
  faq = [],
  ctaTitle = "Ready to Get Started?",
  ctaDescription = "Let's discuss your project and create something amazing together.",
  ctaButtonText = "Start Your Project",
  ctaButtonHref = "/contact",
}: PremiumServiceTemplateProps) {
  return (
    <main className="min-h-screen bg-background-primary">
      <PerformanceOptimizer />
      <Navigation />

      {/* Premium Hero Section - Matching Grovia Homepage Style */}
      <section className="relative pt-32 pb-20 bg-background-primary overflow-hidden">
        {/* Background Pattern - Matching Grovia */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              {heroSubtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-accent-yellow/20 px-4 py-2 text-sm text-text-primary"
                >
                  <span className="w-2 h-2 bg-accent-yellow rounded-full"></span>
                  {heroSubtitle}
                </motion.div>
              )}

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary leading-tight"
              >
                {heroTitle}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-text-secondary leading-relaxed max-w-xl"
              >
                {heroDescription}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent-yellow text-text-primary hover:opacity-90 transition-all shadow-soft"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {primaryCTA.text}
                </motion.a>
                {secondaryCTA && (
                  <motion.a
                    href={secondaryCTA.href}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border border-border-subtle text-text-primary hover:bg-background-secondary transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {secondaryCTA.text}
                  </motion.a>
                )}
              </motion.div>
            </motion.div>

            {/* Right Side - Hero Image with Premium Glassmorphism */}
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div
                  className="relative rounded-[32px] overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)',
                    backdropFilter: 'blur(40px) saturate(190%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(190%)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.2), inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 1px rgba(255,255,255,0.15)'
                  }}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={heroImage}
                      alt={serviceName}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Impact Metrics - Premium Animated Cards */}
      {impactMetrics.length > 0 && (
        <section className="bg-background-secondary py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-medium text-text-primary mb-4">
                Impact Metrics
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Measurable results that drive your business forward
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <AnimatedMetricCard
                  key={index}
                  value={metric.value}
                  metric={metric.metric}
                  description={metric.description}
                  gradient={index % 3 === 0 ? "purple" : index % 3 === 1 ? "blue" : "cyan"}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section - MagicBentoGrid with Premium Cards */}
      {features.length > 0 && (
        <section className="bg-background-primary py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="mb-3 inline-flex items-center rounded-[6px] bg-accent-yellow px-3 py-1">
                <p className="text-xs font-medium text-text-primary uppercase tracking-[0.02em]">FEATURES</p>
              </div>
              <h2 className="text-[48px] font-bold leading-[1.15] tracking-[-0.015em] mb-3 text-text-primary">
                Key Features
              </h2>
              <p className="text-base text-text-secondary max-w-2xl mx-auto">
                Comprehensive features designed to address your specific needs
              </p>
            </motion.div>

            <MagicBentoGrid
              items={features.map((feature, index) => ({
                title: feature.title,
                description: feature.description,
                icon: feature.icon,
                image: feature.image,
                badge: feature.badge || "Feature",
                features: feature.features,
                gradient: feature.gradient || (index % 3 === 0 ? "from-[#8B5CF6] to-[#7C3AED]" : index % 3 === 1 ? "from-[#3B82F6] to-[#2563EB]" : "from-[#06B6D4] to-[#0891B2]"),
                height: "md" as const,
                span: index === 0 ? 2 : 1,
              }))}
            />
          </div>
        </section>
      )}

      {/* Use Cases - Premium BentoGrid with Curtain Reveal */}
      {useCases.length > 0 && (
        <section className="bg-background-secondary py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-medium text-text-primary mb-4">
                Use Cases
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Explore how our solutions transform different industries and functions
              </p>
            </motion.div>

            <BentoGrid
              items={useCases.map((useCase, index) => ({
                id: `usecase-${index}`,
                title: useCase.title,
                description: useCase.description,
                icon: useCase.icon,
                className: "h-full",
                useCurtain: true,
              }))}
              columns={3}
            />
          </div>
        </section>
      )}

      {/* Capabilities - MagicBentoGrid */}
      {capabilities.length > 0 && (
        <section className="bg-background-primary py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-medium text-text-primary mb-4">
                Our Capabilities
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Explore our comprehensive range of capabilities
              </p>
            </motion.div>

            <MagicBentoGrid
              items={capabilities.map((capability, index) => ({
                title: capability.title,
                description: capability.description,
                icon: capability.icon,
                image: capability.image,
                badge: capability.badge || "Capability",
                features: capability.features,
                gradient: capability.gradient || (index % 3 === 0 ? "from-[#8B5CF6] to-[#7C3AED]" : index % 3 === 1 ? "from-[#3B82F6] to-[#2563EB]" : "from-[#06B6D4] to-[#0891B2]"),
                height: "md" as const,
              }))}
            />
          </div>
        </section>
      )}

      {/* Technology Stack - RuixenFeatureSection Style */}
      {technologies.length > 0 && (
        <section className="bg-background-secondary py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="mb-3 inline-flex items-center rounded-[6px] bg-accent-yellow px-3 py-1">
                <p className="text-xs font-medium text-text-primary uppercase tracking-[0.02em]">TECHNOLOGY STACK</p>
              </div>
              <h2 className="text-[48px] font-bold leading-[1.15] tracking-[-0.015em] mb-3 text-text-primary">
                Technologies We Use
              </h2>
              <p className="text-base text-text-secondary max-w-2xl mx-auto">
                Cutting-edge technologies we leverage to build exceptional solutions
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="px-6 py-3 rounded-full border border-border-subtle bg-background-secondary text-text-primary font-medium shadow-soft hover:shadow-lg hover:border-accent-yellow/50 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us - Premium BentoGrid with Curtain Reveal */}
      {whyChooseUs.length > 0 && (
        <section className="bg-background-primary py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-medium text-text-primary mb-4">
                Why Choose Us
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Our commitment to excellence, transparency, and client success sets us apart
              </p>
            </motion.div>

            <BentoGrid
              items={whyChooseUs.map((reason, index) => ({
                id: `reason-${index}`,
                title: reason.title,
                description: reason.description,
                icon: reason.icon,
                className: "h-full",
                useCurtain: true,
              }))}
              columns={2}
            />
          </div>
        </section>
      )}

      {/* Testimonials - Premium Glassmorphic Cards */}
      {testimonials.length > 0 && (
        <section className="bg-background-secondary py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-medium text-text-primary mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Hear what our satisfied clients have to say about our work
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-[32px] p-8 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)',
                    backdropFilter: 'blur(40px) saturate(190%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(190%)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.2), inset 0 1px 1px rgba(255,255,255,0.3)'
                  }}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-accent-yellow text-accent-yellow"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-xl font-medium text-text-primary mb-6 italic leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="border-t border-border-subtle pt-6">
                    <div className="font-semibold text-text-primary mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <FAQAccordion
          faqs={faq}
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about our services"
        />
      )}

      {/* Final CTA */}
      <CTAWithShader />

      <Footer />
    </main>
  );
}
