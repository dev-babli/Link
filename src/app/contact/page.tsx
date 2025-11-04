"use client";

import React, { useState } from "react";
import { Header } from "@/components/header-3";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { motion } from "motion/react";
import { PositivusCard, PositivusButton, PositivusSection, PositivusGrid } from "@/components/positivus";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import "@/styles/positivus-theme.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Get in Touch
          </div>

          {/* Main Heading */}
          <h1 className="positivus-heading-1 text-gray-900 mb-6">
            Let's Build Something <span className="text-[#8B5CF6]">Great Together</span>
          </h1>

          {/* Description */}
          <p className="positivus-body-large text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Our team of experts is ready to help transform your ideas into reality.
          </p>
        </motion.div>
      </PositivusSection>

      {/* Contact Form and Info - Positivus Style */}
      <PositivusSection background="gray" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="positivus-heading-3 text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="positivus-body text-gray-600 mb-8 leading-relaxed">
                Reach out to us through any of these channels, and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@linkinnovations.ai"
                      className="positivus-body-small text-gray-600 hover:text-[#8B5CF6] transition-colors"
                    >
                      info@linkinnovations.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="positivus-body-small text-gray-600 hover:text-[#3B82F6] transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Office</h3>
                    <p className="positivus-body-small text-gray-600">
                      123 Innovation Drive<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <PositivusCard variant="light" className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[#8B5CF6]" />
                  <h3 className="font-medium text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-2 positivus-body-small text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </PositivusCard>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <PositivusCard variant="elevated" className="p-8">
                <h2 className="positivus-heading-3 text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all positivus-body"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all positivus-body"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all positivus-body"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all positivus-body"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all resize-none positivus-body"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <PositivusButton
                    variant="primary"
                    size="lg"
                    type="submit"
                    className="flex items-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </PositivusButton>
                </form>
              </PositivusCard>
            </motion.div>
          </div>
        </div>
      </PositivusSection>

      <Footer />
    </div>
  );
}
