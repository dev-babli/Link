"use client";

import React from "react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { Target, Users, Lightbulb, Shield, Globe, Award } from "lucide-react";
import HeroSectionNew from "@/components/HeroSectionNew";
import FeaturesSection from "@/new-src/components/sections/features";

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex challenges.",
      color: "bg-[#8B5CF6]/10 text-[#8B5CF6]"
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build long-term relationships based on trust, transparency, and mutual success.",
      color: "bg-[#3B82F6]/10 text-[#3B82F6]"
    },
    {
      icon: Target,
      title: "Excellence Driven",
      description: "We deliver exceptional quality in every project, exceeding expectations consistently.",
      color: "bg-[#06B6D4]/10 text-[#06B6D4]"
    },
    {
      icon: Shield,
      title: "Security Focused",
      description: "We prioritize data security and privacy in every solution we build.",
      color: "bg-[#8B5CF6]/10 text-[#8B5CF6]"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We bring international best practices and diverse perspectives to every engagement.",
      color: "bg-[#3B82F6]/10 text-[#3B82F6]"
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description: "We invest in our team's growth and stay ahead of technology trends.",
      color: "bg-[#06B6D4]/10 text-[#06B6D4]"
    },
  ];

  const stats = [
    { value: "100+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "25+", label: "Team Members" },
    { value: "5+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-background-primary">
      <PerformanceOptimizer />
      <Navigation />

      {/* Hero Section */}
      <HeroSectionNew />

      {/* Mission Statement */}
      <section className="bg-background-secondary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-medium text-text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              To empower organizations with intelligent technology solutions that transform operations, enhance customer experiences, and create sustainable competitive advantages in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <FeaturesSection />

      {/* Statistics */}
      <section className="bg-background-secondary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-background-primary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium text-text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-base text-text-secondary leading-relaxed">
              <p>
                Founded in 2020, Link Innovations emerged from a simple belief: that technology should serve as a catalyst for meaningful business transformation, not just a tool for automation.
              </p>
              <p>
                What started as a small team of passionate technologists has grown into a comprehensive technology consulting firm serving clients across multiple industries. Our growth is a testament to our commitment to delivering exceptional results and building lasting partnerships.
              </p>
              <p>
                Today, we combine deep technical expertise with strategic business insight to help organizations navigate the complexities of digital transformation. From startups to enterprises, we tailor our approach to meet each client's unique challenges and objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background-secondary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center rounded-xl border border-border-subtle bg-background-secondary p-8 md:p-12 shadow-soft">
            <h2 className="text-3xl font-medium text-text-primary mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-base text-text-secondary mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="rounded-full bg-accent-yellow px-8 py-3.5 font-medium text-text-primary transition-transform hover:scale-[1.02]"
              >
                Get in Touch
              </a>
              <a
                href="/services"
                className="rounded-full border border-border-subtle px-8 py-3.5 font-medium text-text-primary transition-transform hover:scale-[1.02] hover:bg-background-primary"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
