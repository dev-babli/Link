"use client";

import React from "react";
import { Header } from "@/components/header-3";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { motion } from "motion/react";
import { PositivusCard, PositivusButton, PositivusSection, PositivusGrid } from "@/components/positivus";
import { Target, Users, Lightbulb, Shield, Globe, Award } from "lucide-react";
import "@/styles/positivus-theme.css";

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
    <div className="min-h-screen bg-white">
      <PerformanceOptimizer />
      <Header />

      {/* Hero Section - Positivus Style */}
      <PositivusSection background="white" padding="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-4 py-2 text-sm text-[#8B5CF6] mb-8">
            <span className="w-2 h-2 bg-[#8B5CF6] rounded-full"></span>
            About Link Innovations
          </div>

          {/* Main Heading */}
          <h1 className="positivus-heading-1 text-gray-900 mb-6">
            Building the Future of{" "}
            <span className="text-[#8B5CF6]">Digital Innovation</span>
          </h1>

          {/* Description */}
          <p className="positivus-body-large text-gray-600 leading-relaxed">
            We are a technology consulting firm dedicated to helping organizations navigate digital transformation. Our team of experts brings deep technical knowledge and industry experience to deliver solutions that drive real business value.
          </p>
        </motion.div>
      </PositivusSection>

      {/* Mission Statement - Positivus Style */}
      <PositivusSection background="gray" padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="positivus-heading-2 text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="positivus-body-large text-gray-600 leading-relaxed">
            To empower organizations with intelligent technology solutions that transform operations, enhance customer experiences, and create sustainable competitive advantages in the digital age.
          </p>
        </motion.div>
      </PositivusSection>

      {/* Values - Positivus Style */}
      <PositivusSection background="white" padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="positivus-heading-2 text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="positivus-body-large text-gray-600 max-w-2xl mx-auto">
            Principles that guide every decision we make and every solution we deliver.
          </p>
        </motion.div>

        <PositivusGrid columns={3} gap="lg">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <PositivusCard variant="elevated" className="h-full">
                  <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="positivus-heading-4 text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="positivus-body-small text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </PositivusCard>
              </motion.div>
            );
          })}
        </PositivusGrid>
      </PositivusSection>

      {/* Statistics - Positivus Style */}
      <PositivusSection background="gray" padding="lg">
        <PositivusGrid columns={4} gap="lg">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#8B5CF6] mb-2">
                {stat.value}
              </div>
              <div className="positivus-body text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </PositivusGrid>
      </PositivusSection>

      {/* Our Story - Positivus Style */}
      <PositivusSection background="white" padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="positivus-heading-2 text-gray-900 mb-6">
            Our Story
          </h2>
          <div className="space-y-4 positivus-body text-gray-600 leading-relaxed">
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
        </motion.div>
      </PositivusSection>

      {/* CTA Section - Positivus Style */}
      <PositivusSection background="gray" padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <PositivusCard variant="elevated" className="p-8 md:p-12">
            <h2 className="positivus-heading-2 text-gray-900 mb-4">
              Ready to Work Together?
            </h2>
            <p className="positivus-body-large text-gray-600 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PositivusButton variant="primary" size="lg" href="/contact">
                Get in Touch
              </PositivusButton>
              <PositivusButton variant="outline" size="lg" href="/services">
                Our Services
              </PositivusButton>
            </div>
          </PositivusCard>
        </motion.div>
      </PositivusSection>

      <Footer />
    </div>
  );
}
