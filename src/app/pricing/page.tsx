"use client";

import React from "react";
import { Header } from "@/components/header-3";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { motion } from "motion/react";
import { PositivusCard, PositivusButton, PositivusSection, PositivusGrid } from "@/components/positivus";
import { Check, X } from "lucide-react";
import "@/styles/positivus-theme.css";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small projects and startups",
    price: "$5,000",
    period: "per project",
    features: [
      "Basic web application",
      "Responsive design",
      "Up to 5 pages",
      "Basic SEO optimization",
      "3 months support",
      "Email support"
    ],
    notIncluded: [
      "Mobile app development",
      "Advanced integrations",
      "Priority support"
    ],
    popular: false,
    color: "text-[#3B82F6]"
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "$15,000",
    period: "per project",
    features: [
      "Full-stack web application",
      "Custom design & development",
      "Unlimited pages",
      "Advanced SEO optimization",
      "Mobile-responsive design",
      "API integrations",
      "6 months support",
      "Priority email support",
      "Performance optimization"
    ],
    notIncluded: [
      "24/7 support",
      "Dedicated account manager"
    ],
    popular: true,
    color: "text-[#8B5CF6]"
  },
  {
    name: "Enterprise",
    description: "Complete solution for large organizations",
    price: "Custom",
    period: "pricing",
    features: [
      "Everything in Professional",
      "Mobile app development",
      "Complex integrations",
      "Custom architecture",
      "Dedicated team",
      "12 months support",
      "24/7 priority support",
      "Dedicated account manager",
      "Custom SLAs",
      "Security audits",
      "Ongoing maintenance"
    ],
    notIncluded: [],
    popular: false,
    color: "text-[#06B6D4]"
  }
];

const faqs = [
  {
    question: "What's included in the project price?",
    answer: "The project price includes design, development, testing, and initial deployment. Support periods vary by plan."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade your plan at any time. We'll prorate the difference in cost."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment plans for larger projects. Contact us to discuss options."
  },
  {
    question: "What happens after the support period ends?",
    answer: "After the support period, we offer maintenance packages and ongoing support on a retainer basis."
  }
];

export default function PricingPage() {
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
            Pricing
          </div>

          {/* Main Heading */}
          <h1 className="positivus-heading-1 text-gray-900 mb-6">
            Simple, Transparent <span className="text-[#8B5CF6]">Pricing</span>
          </h1>

          {/* Description */}
          <p className="positivus-body-large text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Choose a plan that fits your needs. All plans include our commitment to quality, transparency, and ethical practices.
          </p>
        </motion.div>
      </PositivusSection>

      {/* Pricing Cards - Positivus Style */}
      <PositivusSection background="gray" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#8B5CF6] text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <PositivusCard 
                variant={plan.popular ? "elevated" : "light"} 
                className={`h-full ${plan.popular ? "border-2 border-[#8B5CF6]" : ""}`}
              >
                {/* Plan Name */}
                <div className={`text-2xl font-bold ${plan.color} mb-2`}>
                  {plan.name}
                </div>
                <p className="positivus-body-small text-gray-600 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className={`text-4xl font-bold ${plan.color} mb-1`}>
                    {plan.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    {plan.period}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                      <span className="positivus-body-small text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 opacity-50">
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="positivus-body-small text-gray-500 line-through">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <PositivusButton
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  href="/contact"
                  className="w-full"
                >
                  Get Started
                </PositivusButton>
              </PositivusCard>
            </motion.div>
          ))}
        </div>
      </PositivusSection>

      {/* FAQ Section - Positivus Style */}
      <PositivusSection background="white" padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="positivus-heading-2 text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <PositivusCard key={index} variant="light" className="p-6">
                <h3 className="positivus-heading-4 text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="positivus-body text-gray-600">
                  {faq.answer}
                </p>
              </PositivusCard>
            ))}
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
              Need a Custom Solution?
            </h2>
            <p className="positivus-body-large text-gray-600 mb-8">
              Every project is unique. Contact us for a personalized quote tailored to your specific needs.
            </p>
            <PositivusButton variant="primary" size="lg" href="/contact">
              Contact Sales
            </PositivusButton>
          </PositivusCard>
        </motion.div>
      </PositivusSection>

      <Footer />
    </div>
  );
}

