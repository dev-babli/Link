"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import TimeLine_01 from "@/components/ui/release-time-line";
import { AnimatedMetricCard } from "@/components/positivus/AnimatedMetricCard";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid-curtain";
import { MagicBentoGrid } from "@/components/ui/magic-bento-grid";
import { ServiceTabbedFeatures } from "@/components/ServiceTabbedFeatures";
import Image from "next/image";
import { Check, ArrowRight, Star, Zap, Shield, Sparkles, TrendingUp } from "lucide-react";
import { MagicParticles, GlowCard, ShimmerCard, MagneticButton, TiltCard, SpotlightCard } from "@/components/MagicEffects";
import FeaturedSectionStats from "@/components/ui/featured-section-stats";
import GridFeatureDemo from "@/components/ui/grid-feature-demo";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";
import GalleryHoverCarousel from "@/components/ui/gallery-hover-carousel";
import TestimonialsColumns from "@/components/ui/testimonials-columns-1";

interface ServicePageTemplateProps {
    // Hero Section
    serviceName: string;
    heroTitle: string;
    heroSubtitle?: string;
    heroDescription: string;
    heroImage: string;
    primaryCTA: {
        text: string;
        href: string;
    };
    secondaryCTA: {
        text: string;
        href: string;
    };

    // Trusted By + Impact Metrics
    trustedByLogos?: string[];
    impactMetrics?: {
        metric: string;
        value: string;
        description: string;
    }[];

    // Our Approach - Tabbed Features
    approachTabData?: {
        id: number;
        number: string;
        label: string;
        title: string[];
        subtitle: string;
        description: string;
        features: string[];
        image: string;
        fallback: string;
    }[];

    // Challenges We Solve
    challengesTitle?: string;
    challenges?: {
        challenge: string;
        solution: string;
    }[];

    // Solutions
    solutionsTitle?: string;
    solutions?: {
        icon: string;
        title: string;
        description: string;
    }[];

    // Capabilities
    capabilitiesTitle?: string;
    capabilities?: {
        icon: string;
        title: string;
        description: string;
    }[];

    // Industries + Tech Stack
    industriesTitle?: string;
    industries?: {
        industry: string;
        example: string;
    }[];
    techStackTitle?: string;
    technologies?: string[];

    // Why Choose Us
    whyChooseUsTitle?: string;
    whyChooseUs?: {
        icon: string;
        title: string;
        description: string;
    }[];

    // Testimonials
    testimonialsTitle?: string;
    testimonials?: {
        quote: string;
        author: string;
        position: string;
        company: string;
    }[];

    // FAQ
    faqTitle?: string;
    faq?: {
        question: string;
        answer: string;
    }[];

    // Final CTA
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonText?: string;
    ctaButtonHref?: string;

    // Styling
    primaryColor?: string;
    gradientFrom?: string;
    gradientTo?: string;
}

export default function EnhancedServicePageTemplate({
    serviceName,
    heroTitle,
    heroSubtitle = "",
    heroDescription,
    heroImage,
    primaryCTA,
    secondaryCTA,
    trustedByLogos = [],
    impactMetrics = [],
    approachTabData = [],
    challengesTitle = "Challenges We Solve",
    challenges = [],
    solutionsTitle = "Our Solutions",
    solutions = [],
    capabilitiesTitle = "Our Capabilities",
    capabilities = [],
    industriesTitle = "Industries We Serve",
    industries = [],
    techStackTitle = "Technologies We Use",
    technologies = [],
    whyChooseUsTitle = "Why Choose Us",
    whyChooseUs = [],
    testimonialsTitle = "What Our Clients Say",
    testimonials = [],
    faqTitle = "Frequently Asked Questions",
    faq = [],
    ctaTitle = "Ready to Get Started?",
    ctaDescription = "Let's discuss your project and create something amazing together.",
    ctaButtonText = "Start Your Project",
    ctaButtonHref = "/contact",
    primaryColor = "bg-purple-500",
    gradientFrom = "from-purple-500",
    gradientTo = "to-pink-500",
}: ServicePageTemplateProps) {

    // Convert approachTabData to TimeLine_01 entries
    const timelineEntries = approachTabData.length > 0 ? approachTabData.map((tab, index) => ({
        icon: Check,
        title: tab.subtitle,
        subtitle: `${tab.number} • ${tab.label}`,
        description: tab.description,
        items: tab.features,
        image: tab.image || tab.fallback,
        button: index === 0 ? {
            url: primaryCTA.href,
            text: primaryCTA.text
        } : undefined,
    })) : [];

    const gradientColors = ['purple', 'blue', 'cyan'] as const;

    return (
        <div className="min-h-screen bg-background-primary">
            <PerformanceOptimizer />
            <Navigation />

            {/* Hero Section - Service Page Style */}
            <section className="pt-32 pb-20 bg-background-primary">
                <div className="container mx-auto px-6 lg:px-20">
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
                                <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-accent-yellow/20 px-4 py-2 text-sm text-text-primary">
                                    <span className="w-2 h-2 bg-accent-yellow rounded-full"></span>
                                    {heroSubtitle}
                                </div>
                            )}

                            {/* Main Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary leading-tight">
                                {heroTitle}
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-text-secondary leading-relaxed">
                                {heroDescription}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.a
                                    href={primaryCTA.href}
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent-yellow text-text-primary hover:opacity-90 transition-all shadow-soft"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {primaryCTA.text}
                                </motion.a>
                                <motion.a
                                    href={secondaryCTA.href}
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border border-border-subtle text-text-primary hover:bg-background-secondary transition-all"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {secondaryCTA.text}
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Right Side - Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-2xl overflow-hidden bg-background-secondary border border-border-subtle shadow-soft">
                                <Image
                                    src={heroImage}
                                    alt={serviceName}
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Impact Metrics Cards */}
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
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-soft text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-text-primary mb-2">
                                        {metric.value}
                                    </div>
                                    <div className="text-base font-medium text-text-primary mb-2">
                                        {metric.metric}
                                    </div>
                                    <div className="text-sm text-text-secondary">
                                        {metric.description}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Trusted By Logos */}
            {trustedByLogos.length > 0 && (
                <section className="bg-background-primary py-16">
                    <div className="container mx-auto px-6 lg:px-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-2xl font-medium text-text-primary mb-8">
                                Trusted by Innovative Enterprises
                            </h2>
                            <div className="flex flex-wrap justify-center items-center gap-8">
                                {trustedByLogos.map((logo, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="font-semibold text-lg text-text-secondary px-6 py-3 rounded-lg bg-background-secondary hover:bg-background-primary transition-colors border border-border-subtle"
                                    >
                                        {logo}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Our Approach - TimeLine_01 or Tabbed Features */}
            {approachTabData.length > 0 && (
                approachTabData.length >= 4 ? (
                    <section className="bg-background-primary py-20">
                        <TimeLine_01
                            title={`Our ${serviceName} Approach`}
                            description="A proven process that delivers exceptional results at every stage."
                            entries={timelineEntries}
                        />
                    </section>
                ) : (
                    <section className="bg-background-primary py-20">
                        <ServiceTabbedFeatures
                            tabData={approachTabData}
                            primaryColor={primaryColor.replace('bg-', '').replace('-500', '')}
                            gradientFrom={gradientFrom}
                            gradientTo={gradientTo}
                        />
                    </section>
                )
            )}


            {/* Challenges Section */}
            {challenges.length > 0 && (
                <section className="bg-background-secondary py-24">
                    <div className="container mx-auto px-6 lg:px-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-medium text-text-primary mb-4">
                                {challengesTitle}
                            </h2>
                            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                                We identify and solve critical challenges that impact your business operations and growth.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {challenges.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-xl border border-border-subtle bg-background-secondary p-8 shadow-soft"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-accent-yellow/20">
                                            <Check className="w-6 h-6 text-text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-medium bg-background-primary text-text-secondary">
                                                Challenge {index + 1}
                                            </div>
                                            <h3 className="text-xl font-medium text-text-primary mb-3">
                                                {item.challenge}
                                            </h3>
                                            <p className="text-base text-text-secondary leading-relaxed">
                                                {item.solution}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Solutions */}
            {solutions.length > 0 && (
                <section className="bg-background-primary py-24">
                    <div className="container mx-auto px-6 lg:px-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-medium text-text-primary mb-4">
                                {solutionsTitle}
                            </h2>
                            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                                Comprehensive solutions designed to address your specific needs and deliver measurable results.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solutions.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-xl border border-border-subtle bg-background-secondary p-8 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1"
                                >
                                    {item.icon && (
                                        <div className="text-5xl mb-4">{item.icon}</div>
                                    )}
                                    <h3 className="text-2xl font-medium text-text-primary mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-base text-text-secondary leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Capabilities */}
            {capabilities.length > 0 && (
                <section className="bg-background-secondary py-24">
                    <div className="container mx-auto px-6 lg:px-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-medium text-text-primary mb-4">
                                {capabilitiesTitle}
                            </h2>
                            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                                Explore our comprehensive range of capabilities designed to power your digital transformation.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {capabilities.map((capability, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-xl border border-border-subtle bg-background-secondary p-8 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1"
                                >
                                    {capability.icon && (
                                        <div className="text-5xl mb-4">{capability.icon}</div>
                                    )}
                                    <h3 className="text-xl font-medium text-text-primary mb-3">
                                        {capability.title}
                                    </h3>
                                    <p className="text-base text-text-secondary leading-relaxed">
                                        {capability.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Technology Stack */}
            {technologies.length > 0 && (
                <section className="bg-background-primary py-24">
                    <div className="container mx-auto px-6 lg:px-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-medium text-text-primary mb-4">
                                {techStackTitle}
                            </h2>
                            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
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
                                    whileHover={{ scale: 1.05 }}
                                    className="px-6 py-3 rounded-full border border-border-subtle bg-background-secondary text-text-primary font-medium shadow-soft hover:shadow-lg transition-all"
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Industries */}
            {industries.length > 0 && (
                <section className="bg-background-secondary py-24">
                    <div className="container mx-auto px-6 lg:px-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-medium text-text-primary mb-4">
                                {industriesTitle}
                            </h2>
                            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                                Tailored solutions for a diverse range of industries
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {industries.map((industry, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-xl border border-border-subtle bg-background-secondary p-8 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1"
                                >
                                    <h3 className="text-xl font-medium text-text-primary mb-4">
                                        {industry.industry}
                                    </h3>
                                    <p className="text-base text-text-secondary leading-relaxed">
                                        {industry.example}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Why Choose Us */}
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
                                {whyChooseUsTitle}
                            </h2>
                            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                                Our commitment to excellence, transparency, and client success sets us apart.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {whyChooseUs.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-xl border border-border-subtle bg-background-secondary p-8 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-6">
                                        {reason.icon && (
                                            <div className="text-5xl flex-shrink-0">{reason.icon}</div>
                                        )}
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-medium text-text-primary mb-4">
                                                {reason.title}
                                            </h3>
                                            <p className="text-base text-text-secondary leading-relaxed">
                                                {reason.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Testimonials */}
            {testimonials.length > 0 && (
                <section className="bg-background-secondary py-24">
                    <div className="container mx-auto px-6 lg:px-20">
                        {testimonials.length >= 6 ? (
                            <TestimonialsColumns />
                        ) : (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-center mb-12"
                                >
                                    <h2 className="text-3xl font-medium text-text-primary mb-4">
                                        {testimonialsTitle}
                                    </h2>
                                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                                        Hear what our satisfied clients have to say about our work.
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
                                            className="rounded-xl border border-border-subtle bg-background-secondary p-8 shadow-soft"
                                        >
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-accent-yellow text-accent-yellow" />
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
                            </>
                        )}
                    </div>
                </section>
            )}

            {/* FAQ */}
            {faq.length > 0 && (
                <section className="bg-background-primary py-24">
                    <div className="container mx-auto px-6 lg:px-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-medium text-text-primary mb-4">
                                {faqTitle}
                            </h2>
                            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                                Find answers to the most common questions about our services.
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto space-y-4">
                            {faq.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                    className="rounded-xl border border-border-subtle bg-background-secondary p-6 shadow-soft"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-accent-yellow/20 flex items-center justify-center flex-shrink-0">
                                            <Zap className="w-5 h-5 text-text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-medium text-text-primary mb-4">
                                                {item.question}
                                            </h3>
                                            <p className="text-base text-text-secondary leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section className="bg-background-secondary py-24">
                <div className="container mx-auto px-6 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-medium text-text-primary mb-4">
                            {ctaTitle}
                        </h2>
                        <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
                            {ctaDescription}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href={ctaButtonHref}
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent-yellow text-text-primary hover:opacity-90 transition-all shadow-soft font-medium"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {ctaButtonText} <ArrowRight className="w-5 h-5 ml-2" />
                            </motion.a>
                            <motion.a
                                href="/services"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border-subtle text-text-primary hover:bg-background-primary transition-all font-medium"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Explore Services <Sparkles className="w-5 h-5 ml-2" />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

