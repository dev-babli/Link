"use client";

import React, { useState } from "react";
import Navigation from "@/new-src/components/sections/navigation";
import Footer from "@/new-src/components/sections/footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import HeroSectionNew from "@/components/HeroSectionNew";

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
    <div className="min-h-screen bg-background-primary">
      <PerformanceOptimizer />
      <Navigation />

      {/* Hero Section */}
      <HeroSectionNew />

      {/* Contact Form and Info */}
      <section className="bg-background-secondary py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-medium text-text-primary mb-6">
                Get in Touch
              </h2>
              <p className="text-base text-text-secondary mb-8 leading-relaxed">
                Reach out to us through any of these channels, and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-yellow/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-1">Email</h3>
                    <a
                      href="mailto:info@linkinnovations.ai"
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      info@linkinnovations.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-yellow/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-yellow/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary mb-1">Office</h3>
                    <p className="text-sm text-text-secondary">
                      123 Innovation Drive<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="rounded-xl border border-border-subtle bg-background-secondary p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-text-primary" />
                  <h3 className="font-medium text-text-primary">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border-subtle bg-background-secondary p-8 shadow-soft">
                <h2 className="text-2xl font-medium text-text-primary mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border-subtle rounded-lg bg-background-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border-subtle rounded-lg bg-background-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border-subtle rounded-lg bg-background-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border-subtle rounded-lg bg-background-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border-subtle rounded-lg bg-background-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-accent-yellow px-8 py-3.5 font-medium text-text-primary transition-transform hover:scale-[1.02] flex items-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
