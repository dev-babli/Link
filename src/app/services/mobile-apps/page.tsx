"use client";

import MainlineServiceTemplate from "@/components/MainlineServiceTemplate";

export default function MobileAppsPage() {
  return (
    <MainlineServiceTemplate
      serviceName="Mobile Apps"
      heroTitle="Cross-Platform Mobile Solutions That Work Seamlessly"
      heroSubtitle="Mobile Development"
      heroDescription="Create powerful mobile experiences that engage users and drive results. From iOS to Android, we deliver native and cross-platform solutions that work perfectly on all devices."
      heroImage="/mainline_service_template/hero.webp"
      primaryCTA={{ text: "Start Your App", href: "/contact" }}
      secondaryCTA={{ text: "View Portfolio", href: "/services" }}
      impactMetrics={[
        { metric: "Faster Development", value: "80%", description: "With cross-platform solutions" },
        { metric: "Cost Efficiency", value: "3x", description: "Compared to native development" },
        { metric: "Uptime", value: "99%", description: "Application reliability" },
        { metric: "User Rating", value: "4.8★", description: "Average app store rating" }
      ]}
      features={[
        {
          icon: "📱",
          title: "Cross-Platform Development",
          description: "Single codebase for iOS and Android with native performance."
        },
        {
          icon: "⚡",
          title: "Native Performance",
          description: "Optimized for each platform with platform-specific features."
        },
        {
          icon: "🚀",
          title: "Rapid Development",
          description: "Faster time to market with shared codebase and tools."
        },
        {
          icon: "🔔",
          title: "Push Notifications",
          description: "Engage users with targeted push notifications and messaging."
        },
        {
          icon: "📈",
          title: "App Store Optimization",
          description: "ASO strategies to maximize visibility and downloads."
        },
        {
          icon: "🔄",
          title: "Continuous Updates",
          description: "Over-the-air updates and seamless maintenance."
        }
      ]}
      useCases={[
        {
          title: "Consumer Apps",
          description: "Social, entertainment, and lifestyle applications",
          examples: [
            "Social networking apps",
            "Entertainment platforms",
            "Fitness and wellness apps"
          ],
          icon: "👥"
        },
        {
          title: "Business Apps",
          description: "Enterprise and productivity solutions",
          examples: [
            "CRM mobile apps",
            "Field service apps",
            "Employee management"
          ],
          icon: "💼"
        },
        {
          title: "E-Commerce",
          description: "Shopping and marketplace applications",
          examples: [
            "Retail mobile apps",
            "Marketplace platforms",
            "Payment solutions"
          ],
          icon: "🛒"
        },
        {
          title: "Healthcare",
          description: "Medical and wellness applications",
          examples: [
            "Telemedicine apps",
            "Health tracking",
            "Medical records"
          ],
          icon: "🏥"
        },
        {
          title: "Finance",
          description: "Banking and financial services",
          examples: [
            "Mobile banking",
            "Investment apps",
            "Payment wallets"
          ],
          icon: "💰"
        },
        {
          title: "Education",
          description: "Learning and training platforms",
          examples: [
            "E-learning apps",
            "Student portals",
            "Training platforms"
          ],
          icon: "📚"
        }
      ]}
      capabilities={[
        { title: "React Native", description: "Cross-platform development with native performance", icon: "⚛️" },
        { title: "Flutter", description: "Google's UI toolkit for beautiful native apps", icon: "🎯" },
        { title: "iOS Native", description: "Swift & Objective-C for iOS apps", icon: "🍎" },
        { title: "Android Native", description: "Kotlin & Java for Android apps", icon: "🤖" },
        { title: "App Store Optimization", description: "ASO & marketing strategies", icon: "📈" },
        { title: "Push Notifications", description: "User engagement and retention", icon: "🔔" }
      ]}
      technologies={["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo", "Xcode", "Android Studio"]}
      whyChooseUs={[
        { title: "Cross-Platform Expertise", description: "Save time and cost with shared codebase across platforms.", icon: "🔄" },
        { title: "Native Performance", description: "Optimized apps that feel native on every device.", icon: "⚡" },
        { title: "Rapid Delivery", description: "Faster time to market with proven development processes.", icon: "🚀" },
        { title: "Full Lifecycle Support", description: "From concept to app store and ongoing maintenance.", icon: "🛠️" }
      ]}
      testimonials={[
        {
          quote: "They delivered our mobile app in half the time we expected, and it performs flawlessly on both iOS and Android.",
          author: "Sarah Chen",
          position: "Product Manager",
          company: "TechFlow"
        },
        {
          quote: "The cross-platform approach saved us significant development costs while maintaining native app quality.",
          author: "Michael Torres",
          position: "CTO",
          company: "StartupHub"
        }
      ]}
      faq={[
        { question: "Do you build native or cross-platform apps?", answer: "We build both. We recommend cross-platform for most projects to save time and cost, but we can build native apps when platform-specific features are critical." },
        { question: "How long does mobile app development take?", answer: "Typically 8-12 weeks for MVP, depending on complexity and features." },
        { question: "Do you handle app store submissions?", answer: "Yes, we handle the complete app store submission process for both iOS and Android." },
        { question: "Can you update apps after launch?", answer: "Absolutely. We provide ongoing maintenance and update services for all apps we build." },
        { question: "What about app security?", answer: "Security is built into every app we develop, with encryption, secure authentication, and compliance with industry standards." }
      ]}
      ctaTitle="Ready to launch your mobile app?"
      ctaDescription="Let's discuss your mobile app idea and create a solution that engages users and drives results."
      ctaButtonText="Start Your App Project"
      ctaButtonHref="/contact"
    />
  );
}
