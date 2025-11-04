"use client";

import React, { useState } from "react";
import { Header } from "@/components/header-3";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { motion } from "motion/react";
import { PositivusCard, PositivusButton, PositivusSection, PositivusGrid } from "@/components/positivus";
import Link from "next/link";
import "@/styles/positivus-theme.css";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt: "Exploring the latest trends, frameworks, and technologies shaping the web development landscape.",
    category: "Web Development",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "💻"
  },
  {
    id: 2,
    title: "AI Integration Best Practices",
    excerpt: "How to ethically integrate AI into your applications while maintaining transparency and user trust.",
    category: "AI & ML",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "🤖"
  },
  {
    id: 3,
    title: "Cloud Migration Strategies",
    excerpt: "A comprehensive guide to migrating your infrastructure to the cloud with minimal disruption.",
    category: "Cloud Services",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "☁️"
  },
  {
    id: 4,
    title: "Mobile App Performance Optimization",
    excerpt: "Techniques for building fast, responsive mobile applications that users love.",
    category: "Mobile Development",
    date: "February 28, 2024",
    readTime: "5 min read",
    image: "📱"
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals",
    excerpt: "Essential security practices every developer and organization should implement.",
    category: "Cybersecurity",
    date: "February 20, 2024",
    readTime: "8 min read",
    image: "🔒"
  },
  {
    id: 6,
    title: "Data Analytics for Business Growth",
    excerpt: "Leveraging data analytics to make informed decisions and drive business growth.",
    category: "Data Analytics",
    date: "February 15, 2024",
    readTime: "6 min read",
    image: "📊"
  }
];

const categories = ["All", "Web Development", "AI & ML", "Cloud Services", "Mobile Development", "Cybersecurity", "Data Analytics"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
            Blog & Articles
          </div>

          {/* Main Heading */}
          <h1 className="positivus-heading-1 text-gray-900 mb-6">
            Insights & <span className="text-[#8B5CF6]">Resources</span>
          </h1>

          {/* Description */}
          <p className="positivus-body-large text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from our team of experts.
          </p>
        </motion.div>
      </PositivusSection>

      {/* Categories Filter - Positivus Style */}
      <PositivusSection background="gray" padding="md">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#8B5CF6] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </PositivusSection>

      {/* Blog Posts Grid - Positivus Style */}
      <PositivusSection background="white" padding="lg">
        <PositivusGrid columns={3} gap="lg">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <PositivusCard variant="light" hover className="h-full">
                {/* Image */}
                <div className="w-full h-48 rounded-lg bg-gradient-to-br from-[#8B5CF6]/20 to-[#3B82F6]/20 flex items-center justify-center text-6xl mb-4">
                  {post.image}
                </div>

                {/* Category */}
                <div className="text-xs font-medium text-[#8B5CF6] mb-2">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="positivus-heading-4 text-gray-900 mb-3">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="positivus-body-small text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* CTA */}
                <div className="text-sm text-[#8B5CF6] font-medium flex items-center group-hover:text-[#7C3AED] transition-colors">
                  Read Article
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
              Want to Stay Updated?
            </h2>
            <p className="positivus-body-large text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest insights and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent"
              />
              <PositivusButton variant="primary" size="lg">
                Subscribe
              </PositivusButton>
            </div>
          </PositivusCard>
        </motion.div>
      </PositivusSection>

      <Footer />
    </div>
  );
}

