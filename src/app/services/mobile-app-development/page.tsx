"use client";

import PremiumServiceTemplate from "@/components/PremiumServiceTemplate";

export default function MobileAppDevelopmentPage() {
  return (
    <PremiumServiceTemplate
      serviceName="Mobile App Development"
      heroTitle="Build Powerful, Scalable Mobile Apps that Users Love"
      heroSubtitle="Native & Cross-Platform Mobile Apps"
      heroDescription="At Link Innovation, we design and develop mobile applications that combine stunning interfaces with rock-solid performance. Our expert team crafts native and cross-platform apps that enhance engagement, drive conversions, and deliver measurable business value."
      heroImage="/images/service-cards/mobile-app-development-service-card.webp"
      primaryCTA={{ text: "Talk to a Mobile Expert", href: "/contact" }}
      secondaryCTA={{ text: "Explore Mobile Solutions", href: "/services" }}
      impactMetrics={[
        { metric: "User Retention", value: "+50%", description: "Higher engagement through UX-optimized design" },
        { metric: "App Performance", value: "99.9%", description: "Fast, stable, and responsive across devices" },
        { metric: "Time-to-Market", value: "2× faster", description: "Streamlined development with agile methods" },
        { metric: "Cross-Platform Reach", value: "+70%", description: "Broader audience with cross-platform solutions" }
      ]}
      features={[
        {
          icon: "📱",
          title: "Native Development",
          description: "iOS and Android native apps with platform-specific optimizations."
        },
        {
          icon: "🔄",
          title: "Cross-Platform",
          description: "React Native and Flutter for shared codebase across platforms."
        },
        {
          icon: "🎨",
          title: "UI/UX Design",
          description: "Beautiful, intuitive interfaces that users love."
        },
        {
          icon: "⚡",
          title: "Performance",
          description: "Optimized for speed, battery life, and smooth animations."
        },
        {
          icon: "🔔",
          title: "Push Notifications",
          description: "Engage users with targeted notifications and messaging."
        },
        {
          icon: "📊",
          title: "Analytics Integration",
          description: "Comprehensive analytics and user behavior tracking."
        }
      ]}
      useCases={[
        {
          title: "Consumer Apps",
          description: "Social, entertainment, and lifestyle apps",
          examples: [
            "Social networking",
            "Entertainment platforms",
            "Fitness apps"
          ],
          icon: "👥"
        },
        {
          title: "Business Apps",
          description: "Enterprise and productivity solutions",
          examples: [
            "CRM mobile apps",
            "Field service apps",
            "Employee tools"
          ],
          icon: "💼"
        },
        {
          title: "E-Commerce",
          description: "Shopping and marketplace apps",
          examples: [
            "Retail apps",
            "Marketplace platforms",
            "Payment solutions"
          ],
          icon: "🛒"
        },
        {
          title: "Healthcare",
          description: "Medical and wellness applications",
          examples: [
            "Telemedicine",
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
        { title: "iOS Development", description: "Swift and Objective-C for native iOS apps.", icon: "🍎" },
        { title: "Android Development", description: "Kotlin and Java for native Android apps.", icon: "🤖" },
        { title: "React Native", description: "Cross-platform development with React Native.", icon: "⚛️" },
        { title: "Flutter", description: "Google's Flutter for beautiful native apps.", icon: "🎯" },
        { title: "App Store Optimization", description: "ASO strategies for maximum visibility.", icon: "📈" },
        { title: "Backend Integration", description: "Seamless API and backend integration.", icon: "🔌" }
      ]}
      technologies={["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo", "Xcode", "Android Studio", "GraphQL", "REST APIs"]}
      whyChooseUs={[
        { title: "Native Performance", description: "Apps that feel native on every platform.", icon: "⚡" },
        { title: "Beautiful Design", description: "Stunning UI/UX that engages users.", icon: "🎨" },
        { title: "Fast Delivery", description: "Rapid development with proven processes.", icon: "🚀" },
        { title: "Full Lifecycle", description: "From concept to app store and beyond.", icon: "🔄" }
      ]}
      testimonials={[
        {
          quote: "They delivered our mobile app in half the time with exceptional quality and user experience.",
          author: "Sarah Chen",
          position: "Product Manager",
          company: "TechFlow"
        },
        {
          quote: "The cross-platform approach saved us significant costs while maintaining native app quality.",
          author: "Michael Torres",
          position: "CTO",
          company: "StartupHub"
        }
      ]}
      faq={[
        { question: "Do you build native or cross-platform apps?", answer: "We build both. We recommend cross-platform for most projects, but can build native when needed." },
        { question: "How long does mobile app development take?", answer: "Typically 8-16 weeks for MVP, depending on complexity and features." },
        { question: "Do you handle app store submissions?", answer: "Yes, we handle complete app store submission for both iOS and Android." },
        { question: "Can you update apps after launch?", answer: "Absolutely. We provide ongoing maintenance and update services." },
        { question: "What about app security?", answer: "Security is built into every app with encryption, secure authentication, and compliance." }
      ]}
      ctaTitle="Ready to launch your mobile app?"
      ctaDescription="Let's create a mobile app that engages users and drives business results."
      ctaButtonText="Start Mobile App Project"
      ctaButtonHref="/contact"
    />
  );
}
