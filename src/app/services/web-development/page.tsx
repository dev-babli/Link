"use client";

import GroviaServiceTemplate from "@/components/GroviaServiceTemplate";

export default function WebDevelopmentPage() {
  return (
    <GroviaServiceTemplate
      serviceName="Web Development"
      heroTitle="Build High-Performance Web Experiences"
      heroSubtitle="Custom Web Applications"
      heroDescription="Design and launch resilient, scalable web applications that deliver seamless experiences across devices. From discovery workshops to production support, we partner with you at every stage of the product lifecycle."
      primaryCTA={{ text: "Start a Project", href: "/contact" }}
      secondaryCTA={{ text: "View Work", href: "/projects" }}
      challenges={[
        { challenge: "Legacy systems slowing delivery", solution: "Modernize with modular architectures and automated deployments" },
        { challenge: "Poor performance and SEO", solution: "Optimize Core Web Vitals and structured content for discoverability" },
        { challenge: "Inconsistent user experience", solution: "Establish design systems and shared component libraries" },
        { challenge: "Security & compliance gaps", solution: "Implement secure coding practices, audits, and governance" }
      ]}
      solutions={[
        { title: "Headless Platforms", description: "Composable CMS, eCommerce, and marketing experiences.", icon: "🧱" },
        { title: "Product Engineering", description: "End-to-end delivery for SaaS, portals, and internal tooling.", icon: "⚙️" },
        { title: "Performance Revamps", description: "Refactor and optimize existing applications for scale.", icon: "🚀" }
      ]}
      capabilities={[
        { title: "Frontend Engineering", description: "Next.js, React, Tailwind, and accessibility-first interfaces.", icon: "💻" },
        { title: "Backend Services", description: "Node.js, GraphQL, REST APIs, and event-driven systems.", icon: "🛠️" },
        { title: "Cloud & DevOps", description: "CI/CD pipelines, container orchestration, and SRE support.", icon: "☁️" },
        { title: "Data Integrations", description: "Data pipelines, analytics dashboards, and third-party integrations.", icon: "📊" },
        { title: "QA Automation", description: "Comprehensive test suites covering web, API, and visual regressions.", icon: "🧪" },
        { title: "Security Hardening", description: "OWASP best practices, pen testing, and compliance readiness.", icon: "🔒" }
      ]}
      technologies={[
        "Next.js", "React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "MongoDB", "AWS", "Azure", "Docker", "Kubernetes"
      ]}
      testimonials={[
        {
          quote: "Link Innovations rebuilt our platform in record time with zero downtime and a 40% boost in conversion.",
          author: "Amelia Singh",
          position: "VP Product",
          company: "Nimbus CRM"
        },
        {
          quote: "Their full-stack pod became an extension of our team, shipping features twice as fast as before.",
          author: "Carlos Rivera",
          position: "CTO",
          company: "FinSight"
        }
      ]}
      faq={[
        { question: "How quickly can we launch?", answer: "MVPs typically launch in 6-10 weeks depending on scope and integrations." },
        { question: "Do you offer ongoing support?", answer: "Yes, we provide managed squads for continuous delivery and maintenance." }
      ]}
    />
  );
}
