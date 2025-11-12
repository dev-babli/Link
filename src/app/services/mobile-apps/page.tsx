"use client";

import GroviaServiceTemplate from "@/components/GroviaServiceTemplate";

export default function MobileAppsPage() {
  return (
    <GroviaServiceTemplate
      serviceName="Mobile Apps"
      heroTitle="Cross-Platform Mobile Solutions That Work Seamlessly"
      heroDescription="Create powerful mobile experiences that engage users and drive results. From iOS to Android, we deliver native and cross-platform solutions that work perfectly on all devices."
      heroImage="/images/service-cards/mobile-app-development-service-card.webp"
      primaryCTA={{
        text: "Start Your App",
        href: "/contact"
      }}
      secondaryCTA={{
        text: "View Portfolio",
        href: "/services"
      }}
      statistics={[
        { value: "80%", label: "Faster Development" },
        { value: "3x", label: "Cost Efficiency" },
        { value: "99%", label: "Uptime" },
        { value: "4.8★", label: "User Rating" }
      ]}
      challenges={[
        { challenge: "Need to support both iOS and Android platforms", solution: "Cross-platform development solutions" },
        { challenge: "High development costs for native apps", solution: "Cost-effective hybrid and cross-platform approaches" },
        { challenge: "Long development timelines for multiple platforms", solution: "Rapid development with shared codebase" },
        { challenge: "Maintenance complexity across different codebases", solution: "Unified maintenance and updates" },
        { challenge: "Inconsistent user experience across platforms", solution: "Native-like experience with platform optimization" }
      ]}
      solutions={[
        { title: "Cross-Platform", description: "Single codebase, multiple platforms", icon: "📱" },
        { title: "Native Performance", description: "Optimized for each platform", icon: "⚡" },
        { title: "Rapid Development", description: "Faster time to market", icon: "🚀" }
      ]}
      capabilities={[
        { title: "React Native", description: "Cross-platform development", icon: "⚛️" },
        { title: "Flutter", description: "Google's UI toolkit", icon: "🎯" },
        { title: "iOS Native", description: "Swift & Objective-C", icon: "🍎" },
        { title: "Android Native", description: "Kotlin & Java", icon: "🤖" },
        { title: "App Store Optimization", description: "ASO & marketing", icon: "📈" },
        { title: "Push Notifications", description: "User engagement", icon: "🔔" }
      ]}
      technologies={[
        "React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"
      ]}
      whyChooseUs={[
        {
          title: "Cross-Platform Expertise",
          description: "Single codebase for iOS and Android, reducing costs and time",
          icon: "📱"
        },
        {
          title: "Native Performance",
          description: "Optimized for each platform while maintaining code efficiency",
          icon: "⚡"
        },
        {
          title: "App Store Success",
          description: "Expert guidance through the entire app store submission process",
          icon: "🏆"
        }
      ]}
      ctaTitle="Ready to Launch Your Mobile App?"
      ctaDescription="Let's build a mobile app that your users will love and that drives real business value."
      ctaButtonText="Start Building"
      ctaButtonHref="/contact"
      primaryColor="bg-green-500"
      gradientFrom="from-green-500"
      gradientTo="to-emerald-500"
    />
  );
}