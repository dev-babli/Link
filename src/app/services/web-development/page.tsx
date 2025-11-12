"use client";

import PremiumServiceTemplate from "@/components/PremiumServiceTemplate";

export default function WebDevelopmentPage() {
  return (
    <PremiumServiceTemplate
      serviceName="Web Development"
      heroTitle="Build High-Performance Web Experiences"
      heroSubtitle="Custom Web Applications"
      heroDescription="Design and launch resilient, scalable web applications that deliver seamless experiences across devices. From discovery workshops to production support, we partner with you at every stage of the product lifecycle."
      heroImage="/images/service-cards/web-development-service-card.webp"
      primaryCTA={{ text: "Start a Project", href: "/contact" }}
      secondaryCTA={{ text: "View Work", href: "/services" }}
      impactMetrics={[
        { metric: "Avg. Lighthouse", value: "95+", description: "Performance scores across production builds" },
        { metric: "Launch Velocity", value: "6-8 weeks", description: "Typical time from kickoff to release" },
        { metric: "Defect Rate", value: "<0.2%", description: "Post-launch issues across engagements" },
        { metric: "Retention", value: "92%", description: "Of clients re-engage for roadmap phases" }
      ]}
      features={[
        {
          icon: "💻",
          title: "Frontend Engineering",
          description: "Modern React, Next.js, and TypeScript for responsive, accessible interfaces."
        },
        {
          icon: "🛠️",
          title: "Backend Services",
          description: "Scalable APIs, microservices, and serverless architectures."
        },
        {
          icon: "☁️",
          title: "Cloud & DevOps",
          description: "CI/CD pipelines, container orchestration, and automated deployments."
        },
        {
          icon: "📊",
          title: "Data Integrations",
          description: "Seamless third-party integrations and real-time data pipelines."
        },
        {
          icon: "🧪",
          title: "QA Automation",
          description: "Comprehensive testing suites for quality assurance."
        },
        {
          icon: "🔒",
          title: "Security Hardening",
          description: "OWASP best practices and compliance-ready implementations."
        }
      ]}
      useCases={[
        {
          title: "SaaS & Software",
          description: "Subscription platforms and developer tools",
          examples: [
            "Subscription management platforms",
            "Developer tools and APIs",
            "Productivity applications"
          ],
          icon: "💼"
        },
        {
          title: "Financial Services",
          description: "Customer portals, compliance dashboards, lending platforms",
          examples: [
            "Banking portals",
            "Investment platforms",
            "Payment processing systems"
          ],
          icon: "💰"
        },
        {
          title: "Healthcare",
          description: "Patient engagement, clinical operations, and telehealth",
          examples: [
            "Patient portals",
            "Telehealth platforms",
            "Clinical management systems"
          ],
          icon: "🏥"
        },
        {
          title: "E-Commerce",
          description: "Online stores and marketplace platforms",
          examples: [
            "E-commerce stores",
            "Marketplace platforms",
            "Inventory management"
          ],
          icon: "🛒"
        },
        {
          title: "Education",
          description: "Learning management systems and educational platforms",
          examples: [
            "LMS platforms",
            "Online course systems",
            "Student portals"
          ],
          icon: "📚"
        },
        {
          title: "Real Estate",
          description: "Property management and listing platforms",
          examples: [
            "Property listings",
            "Management systems",
            "Booking platforms"
          ],
          icon: "🏠"
        }
      ]}
      capabilities={[
        { title: "Frontend Engineering", description: "Next.js, React, Tailwind, and accessibility-first interfaces.", icon: "💻" },
        { title: "Backend Services", description: "Node.js, GraphQL, REST APIs, and event-driven systems.", icon: "🛠️" },
        { title: "Cloud & DevOps", description: "CI/CD pipelines, container orchestration, and SRE support.", icon: "☁️" },
        { title: "Data Integrations", description: "Data pipelines, analytics dashboards, and third-party integrations.", icon: "📊" },
        { title: "QA Automation", description: "Comprehensive test suites covering web, API, and visual regressions.", icon: "🧪" },
        { title: "Security Hardening", description: "OWASP best practices, pen testing, and compliance readiness.", icon: "🔒" }
      ]}
      technologies={["Next.js", "React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "MongoDB", "AWS", "Azure", "Docker", "Kubernetes"]}
      whyChooseUs={[
        { title: "Composable Architecture", description: "Future-proof builds with modular, API-first ecosystems.", icon: "🧩" },
        { title: "Cross-Functional Pods", description: "Embedded teams across product, design, engineering, and QA.", icon: "🤝" },
        { title: "Data-Driven Decisions", description: "Experimentation frameworks to validate and iterate quickly.", icon: "📈" },
        { title: "Secure by Design", description: "Compliance-ready processes with automated guardrails.", icon: "🛡️" }
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
        { question: "Do you offer ongoing support?", answer: "Yes, we provide managed squads for continuous delivery and maintenance." },
        { question: "What technologies do you use?", answer: "We use modern stacks including Next.js, React, TypeScript, Node.js, and cloud platforms like AWS and Azure." },
        { question: "Can you work with our existing systems?", answer: "Absolutely. We specialize in integrating with legacy systems and modernizing existing platforms." },
        { question: "Do you handle design as well?", answer: "Yes, we have in-house design teams that work alongside engineering to deliver complete solutions." }
      ]}
      ctaTitle="Ready to build your next web experience?"
      ctaDescription="Partner with Link Innovations to deliver modern, performant applications your users love."
      ctaButtonText="Book a Discovery Call"
      ctaButtonHref="/contact"
    />
  );
}
