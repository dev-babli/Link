"use client";

import React from "react";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { MainlineBackground } from "./MainlineBackground";
import { Button } from "@/components/ui/button";
import { MainlineNavbar } from "./MainlineNavbar";
import { MainlineFooter } from "./MainlineFooter";
import { MainlineLogos } from "./MainlineLogos";
import MainlineTechnologyLogos from "./MainlineTechnologyLogos";
import MainlineRuixenFeatures from "./MainlineRuixenFeatures";
import { MainlineHeroBlock } from "./MainlineHeroBlock";
import { MainlineFeaturesBlock } from "./MainlineFeaturesBlock";
import { MainlineTestimonialsBlock } from "./MainlineTestimonialsBlock";
import { MainlineFAQBlock } from "./MainlineFAQBlock";
import { MainlineResourceAllocationBlock } from "./MainlineResourceAllocationBlock";

interface MainlineServiceTemplateProps {
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

export default function MainlineServiceTemplate({
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
}: MainlineServiceTemplateProps) {
  // Convert features to hero features format
  const heroFeatures = features.slice(0, 4).map((f) => ({
    title: f.title,
    description: f.description,
    icon: ArrowRight,
  }));

  // Convert capabilities/useCases to resource allocation items
  const resourceItems = [...(useCases || []), ...(capabilities || [])].slice(0, 5);

  return (
    <main className="min-h-screen bg-background">
      <MainlineNavbar />

      <MainlineBackground className="via-muted to-muted/80">
        <MainlineHeroBlock
          title={heroTitle}
          description={heroDescription}
          heroImage={heroImage}
          primaryCTA={primaryCTA}
          secondaryCTA={secondaryCTA}
          features={heroFeatures}
        />

        {/* Impact Metrics - if provided */}
        {impactMetrics.length > 0 && (
          <section className="pb-28 lg:pb-32">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {impactMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold mb-2">{metric.value}</div>
                    <div className="text-lg font-semibold mb-1">{metric.metric}</div>
                    <div className="text-muted-foreground text-sm">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {features.length > 0 && (
          <MainlineFeaturesBlock
            heading={`${serviceName} Features`}
            description="Comprehensive features designed to address your specific needs and deliver exceptional results."
            items={features.slice(0, 3).map(f => ({
              title: f.title,
              image: f.image,
            }))}
          />
        )}

        {/* Resource Allocation / Capabilities Section */}
        {resourceItems.length > 0 && (
          <MainlineResourceAllocationBlock
            heading={`Our ${serviceName} Capabilities`}
            topItems={resourceItems.slice(0, 2).map(item => ({
              title: item.title,
              description: item.description,
              images: item.image ? [{
                src: item.image.startsWith("/") ? item.image : `/mainline_service_template/${item.image}`,
                alt: item.title,
                width: 495,
                height: 186,
              }] : [],
              className: "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8",
              fade: [],
            }))}
            bottomItems={resourceItems.slice(2, 5).map(item => ({
              title: item.title,
              description: item.description,
              images: item.image ? [{
                src: item.image.startsWith("/") ? item.image : `/mainline_service_template/${item.image}`,
                alt: item.title,
                width: 305,
                height: 280,
              }] : [],
              className: "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8",
              fade: [],
            }))}
          />
        )}
      </MainlineBackground>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <MainlineTestimonialsBlock
          heading="Trusted by our clients"
          description={`Hear what our satisfied clients have to say about our ${serviceName} services.`}
          items={testimonials.map(t => ({
            quote: t.quote,
            author: t.author,
            role: t.position,
            company: t.company,
          }))}
        />
      )}

      {/* Technology Stack - Grovia Component */}
      {technologies.length > 0 && (
        <MainlineTechnologyLogos />
      )}

      {/* Ruixen Feature Cards */}
      <MainlineRuixenFeatures />

      {/* Mainline Logos Section */}
      <MainlineLogos />

      {/* FAQ */}
      {faq.length > 0 && (
        <MainlineBackground variant="bottom">
          <MainlineFAQBlock
            faqItems={faq}
          />
        </MainlineBackground>
      )}

      {/* Final CTA */}
      <section className="py-28 lg:py-32">
        <div className="container space-y-3 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            {ctaTitle}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            {ctaDescription}
          </p>
          <div>
            <Button size="lg" className="mt-4" asChild>
              <Link href={ctaButtonHref}>{ctaButtonText}</Link>
            </Button>
          </div>
        </div>
      </section>

      <MainlineFooter />
    </main>
  );
}

