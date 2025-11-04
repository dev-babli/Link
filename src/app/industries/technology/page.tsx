"use client";

import { EnhancedEnhancedIndustryPageTemplate } from "@/components/EnhancedEnhancedIndustryPageTemplate";

export default function TechnologyPage() {
  return (
    <EnhancedIndustryPageTemplate
      title="Technology & Software"
      subtitle="Enterprise Software Solutions"
      description="Empower tech companies and software organizations with scalable platforms, cloud infrastructure, and innovative software solutions. We build SaaS products, enterprise applications, and technology platforms that drive innovation and growth."
      heroImage="/images/industry_cards/Technology and Software.webp"
      keyStats={[
        { value: "70+", label: "Technology Projects" },
        { value: "99.9%", label: "Average Uptime" },
        { value: "50M+", label: "API Calls Daily" },
        { value: "40+", label: "Tech Clients" },
      ]}
      challenges={[
        "Building scalable SaaS platforms and architectures",
        "Managing microservices and distributed systems",
        "Ensuring high availability and performance",
        "Integrating with third-party APIs and services",
        "Implementing DevOps and CI/CD pipelines",
        "Securing cloud infrastructure and applications",
        "Managing data at scale with analytics",
        "Supporting rapid feature development and deployment",
      ]}
      solutions={[
        {
          title: "SaaS Platform Development",
          description: "End-to-end SaaS solutions with multi-tenancy, subscription management, billing, and scalable cloud infrastructure built for growth."
        },
        {
          title: "Enterprise Software",
          description: "Custom enterprise applications with workflow automation, integration capabilities, security, and compliance features for large organizations."
        },
        {
          title: "Cloud-Native Architecture",
          description: "Modern cloud architectures using containers, microservices, serverless functions, and cloud-native services for scalability and resilience."
        },
        {
          title: "API Platforms & Integration",
          description: "Robust API platforms with developer portals, authentication, rate limiting, monitoring, and integration with external services and systems."
        },
        {
          title: "DevOps & Infrastructure",
          description: "Automated CI/CD pipelines, infrastructure as code, monitoring, logging, and deployment automation for reliable software delivery."
        },
        {
          title: "Data Platforms & Analytics",
          description: "Big data platforms with data pipelines, warehousing, real-time analytics, machine learning, and business intelligence capabilities."
        },
      ]}
      caseStudies={[
        {
          title: "SaaS Startup - Platform Development",
          description: "Built a scalable SaaS platform from the ground up with multi-tenant architecture, subscription billing, and cloud infrastructure for a fast-growing startup.",
          result: "Scaled to 50,000+ users, achieved 99.95% uptime, and processed $10M+ in subscription revenue"
        },
        {
          title: "Enterprise Software Company - Cloud Migration",
          description: "Migrated legacy enterprise software to cloud-native architecture with microservices, containerization, and automated deployment pipelines.",
          result: "Reduced infrastructure costs by 60%, improved deployment speed by 80%, and increased system reliability to 99.9%"
        },
        {
          title: "Tech Platform - API Development",
          description: "Developed a comprehensive API platform with developer portal, authentication, rate limiting, and analytics serving 1,000+ developers.",
          result: "Processed 50M+ API calls daily, onboarded 500+ developer partners, and achieved 99.99% API uptime"
        },
      ]}
      expertise={[
        "SaaS Development",
        "Cloud Architecture",
        "Microservices",
        "API Development",
        "DevOps & CI/CD",
        "Container Orchestration",
        "Serverless Computing",
        "Data Engineering",
        "ML/AI Platforms",
        "Security & Compliance",
        "Performance Optimization",
        "Scalable Systems",
      ]}
    />
  );
}
