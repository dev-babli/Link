"use client";

import React, { useState } from "react";
import { Header } from "@/components/header-3";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { motion } from "motion/react";
import { PositivusCard, PositivusButton, PositivusSection, PositivusGrid } from "@/components/positivus";
import Link from "next/link";
import "@/styles/positivus-theme.css";

const useCases = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Complete online store with payment integration, inventory management, and customer analytics.",
    industry: "Retail",
    services: ["Web Development", "Cloud Services", "Data Analytics"],
    image: "🛒",
    color: "from-[#8B5CF6]/20 to-[#3B82F6]/20"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Secure patient management system with HIPAA compliance and telemedicine capabilities.",
    industry: "Healthcare",
    services: ["Web Development", "Cybersecurity", "Cloud Services"],
    image: "🏥",
    color: "from-[#06B6D4]/20 to-[#8B5CF6]/20"
  },
  {
    id: 3,
    title: "FinTech Mobile App",
    description: "Banking application with biometric authentication and real-time transaction processing.",
    industry: "Finance",
    services: ["Mobile Development", "Cybersecurity", "Cloud Services"],
    image: "💳",
    color: "from-[#3B82F6]/20 to-[#06B6D4]/20"
  },
  {
    id: 4,
    title: "Educational Platform",
    description: "Learning management system with video streaming, assessments, and progress tracking.",
    industry: "Education",
    services: ["Web Development", "Cloud Services", "Data Analytics"],
    image: "📚",
    color: "from-[#8B5CF6]/20 to-[#06B6D4]/20"
  },
  {
    id: 5,
    title: "Manufacturing IoT Dashboard",
    description: "Real-time monitoring system for manufacturing equipment with predictive maintenance.",
    industry: "Manufacturing",
    services: ["Cloud Services", "Data Analytics", "AI & ML"],
    image: "🏭",
    color: "from-[#06B6D4]/20 to-[#3B82F6]/20"
  },
  {
    id: 6,
    title: "SaaS Business Tool",
    description: "Comprehensive business management platform with CRM, project management, and reporting.",
    industry: "Technology",
    services: ["Web Development", "Cloud Services", "Automation Testing"],
    image: "💼",
    color: "from-[#8B5CF6]/20 to-[#3B82F6]/20"
  },
  {
    id: 7,
    title: "Real Estate Portal",
    description: "Property listing platform with virtual tours, search filters, and agent management.",
    industry: "Real Estate",
    services: ["Web Development", "Cloud Services", "Data Analytics"],
    image: "🏠",
    color: "from-[#3B82F6]/20 to-[#8B5CF6]/20"
  },
  {
    id: 8,
    title: "AI-Powered Analytics Dashboard",
    description: "Business intelligence platform with machine learning insights and predictive analytics.",
    industry: "Technology",
    services: ["Web Development", "AI & ML", "Data Analytics"],
    image: "📊",
    color: "from-[#8B5CF6]/20 to-[#06B6D4]/20"
  },
  {
    id: 9,
    title: "Supply Chain Management",
    description: "End-to-end supply chain visibility with tracking, optimization, and logistics management.",
    industry: "Logistics",
    services: ["Web Development", "Cloud Services", "Data Analytics"],
    image: "🚚",
    color: "from-[#06B6D4]/20 to-[#3B82F6]/20"
  }
];

const industries = ["All", "Retail", "Healthcare", "Finance", "Education", "Manufacturing", "Technology", "Real Estate", "Logistics"];

export default function UseCasesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredCases = selectedIndustry === "All"
    ? useCases
    : useCases.filter(caseItem => caseItem.industry === selectedIndustry);

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
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-4 py-2 text-sm text-[#8B5CF6] mb-8">
            <span className="w-2 h-2 bg-[#8B5CF6] rounded-full"></span>
            Use Cases
          </div>

          {/* Main Heading */}
          <h1 className="positivus-heading-1 text-gray-900 mb-6">
            Real-World <span className="text-[#8B5CF6]">Solutions</span>
          </h1>

          {/* Description */}
          <p className="positivus-body-large text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Explore how we've helped businesses across industries transform their operations with innovative technology solutions.
          </p>
        </motion.div>
      </PositivusSection>

      {/* Industry Filter - Positivus Style */}
      <PositivusSection background="gray" padding="md">
        <div className="flex flex-wrap gap-3 justify-center">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedIndustry === industry
                  ? "bg-[#8B5CF6] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </PositivusSection>

      {/* Use Cases Grid - Positivus Style */}
      <PositivusSection background="white" padding="lg">
        <PositivusGrid columns={3} gap="lg">
          {filteredCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <PositivusCard variant="light" hover className="h-full">
                {/* Image */}
                <div className={`w-full h-32 rounded-lg bg-gradient-to-br ${useCase.color} flex items-center justify-center text-5xl mb-4`}>
                  {useCase.image}
                </div>

                {/* Industry Tag */}
                <div className="text-xs font-medium text-[#8B5CF6] mb-2">
                  {useCase.industry}
                </div>

                {/* Title */}
                <h3 className="positivus-heading-4 text-gray-900 mb-3">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="positivus-body-small text-gray-600 leading-relaxed mb-4">
                  {useCase.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {useCase.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-sm text-[#8B5CF6] font-medium flex items-center group-hover:text-[#7C3AED] transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </PositivusCard>
            </motion.div>
          ))}
        </PositivusGrid>
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
              Have a Specific Use Case?
            </h2>
            <p className="positivus-body-large text-gray-600 mb-8">
              Every business is unique. Let's discuss how we can create a custom solution tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PositivusButton variant="primary" size="lg" href="/contact">
                Discuss Your Project
              </PositivusButton>
              <PositivusButton variant="outline" size="lg" href="/services">
                View Services
              </PositivusButton>
            </div>
          </PositivusCard>
        </motion.div>
      </PositivusSection>

      <Footer />
    </div>
  );
}

