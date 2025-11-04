"use client";

import EnhancedServicePageTemplate from "@/components/EnhancedServicePageTemplate";

export default function WebDevelopmentPage() {
  return (
    <EnhancedServicePageTemplate
      serviceName="Web Development"
      heroTitle="Build High-Performance Web Experiences"
      heroSubtitle="Custom Web Applications"
      heroDescription="Design and launch resilient, scalable web applications that deliver seamless experiences across devices. From discovery workshops to production support, we partner with you at every stage of the product lifecycle."
      heroImage="/images/service-cards/web-development-service-card.webp"
      primaryCTA={{ text: "Start a Project", href: "/contact" }}
      secondaryCTA={{ text: "View Work", href: "/projects" }}
      trustedByLogos={["Vercel", "AWS", "Azure", "MongoDB", "Stripe", "Contentful"]}
      impactMetrics={[
        { metric: "Avg. Lighthouse", value: "95+", description: "Performance scores across production builds" },
        { metric: "Launch Velocity", value: "6-8 weeks", description: "Typical time from kickoff to release" },
        { metric: "Defect Rate", value: "<0.2%", description: "Post-launch issues across engagements" },
        { metric: "Retention", value: "92%", description: "Of clients re-engage for roadmap phases" }
      ]}
      approachTabData={[
        {
          id: 0,
          number: "01",
          label: "Discovery",
          title: ["Align on ", "business goals"],
          subtitle: "Discovery & Planning",
          description: "Shape the product vision, success metrics, and technical roadmap through collaborative workshops and rapid prototyping.",
          features: ["Stakeholder interviews", "Experience mapping", "Technical assessment", "Delivery roadmap"],
          image: "/images/tabbedfeatures_cards/discovery.jpeg",
          fallback: "/images/tabbedfeatures_cards/discovery.jpeg"
        },
        {
          id: 1,
          number: "02",
          label: "Design",
          title: ["Craft intuitive ", "user journeys"],
          subtitle: "Experience & Interface Design",
          description: "Design modular UI systems, accessible flows, and component libraries ready for engineering handoff.",
          features: ["Low/high fidelity prototypes", "Design systems", "Accessibility audits", "UX copy & content"],
          image: "/images/tabbedfeatures_cards/development.jpeg",
          fallback: "/images/tabbedfeatures_cards/development.jpeg"
        },
        {
          id: 2,
          number: "03",
          label: "Build",
          title: ["Ship fast with ", "modern stacks"],
          subtitle: "Engineering Delivery",
          description: "Implement feature roadmaps using agile pods across frontend, backend, and DevOps disciplines.",
          features: ["React / Next.js", "API & microservices", "CI/CD automation", "QA automation"],
          image: "/images/tabbedfeatures_cards/testing.jpeg",
          fallback: "/images/tabbedfeatures_cards/testing.jpeg"
        },
        {
          id: 3,
          number: "04",
          label: "Scale",
          title: ["Optimize and ", "grow adoption"],
          subtitle: "Optimization & Growth",
          description: "Continuously monitor, iterate, and extend your platform with data-informed enhancements and SRE support.",
          features: ["Observability dashboards", "Performance tuning", "Security hardening", "Feature experimentation"],
          image: "/images/tabbedfeatures_cards/deployment.jpeg",
          fallback: "/images/tabbedfeatures_cards/deployment.jpeg"
        }
      ]}
      challengesTitle="Web Platform Challenges We Solve"
      challenges={[
        { challenge: "Legacy systems slowing delivery", solution: "Modernize with modular architectures and automated deployments" },
        { challenge: "Poor performance and SEO", solution: "Optimize Core Web Vitals and structured content for discoverability" },
        { challenge: "Inconsistent user experience", solution: "Establish design systems and shared component libraries" },
        { challenge: "Security & compliance gaps", solution: "Implement secure coding practices, audits, and governance" }
      ]}
      solutionsTitle="Web Development Solutions"
      solutions={[
        { title: "Headless Platforms", description: "Composable CMS, eCommerce, and marketing experiences.", icon: "🧱" },
        { title: "Product Engineering", description: "End-to-end delivery for SaaS, portals, and internal tooling.", icon: "⚙️" },
        { title: "Performance Revamps", description: "Refactor and optimize existing applications for scale.", icon: "🚀" }
      ]}
      capabilitiesTitle="Full-Stack Capabilities"
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
      industriesTitle="Industries Served"
      industries={[
        { industry: "SaaS & Software", example: "Subscription platforms and developer tools" },
        { industry: "Financial Services", example: "Customer portals, compliance dashboards, lending platforms" },
        { industry: "Healthcare", example: "Patient engagement, clinical operations, and telehealth" }
      ]}
      whyChooseUsTitle="Why Partner with Link Innovations"
      whyChooseUs={[
        { title: "Composable Architecture", description: "Future-proof builds with modular, API-first ecosystems.", icon: "🧩" },
        { title: "Cross-Functional Pods", description: "Embedded teams across product, design, engineering, and QA.", icon: "🤝" },
        { title: "Data-Driven Decisions", description: "Experimentation frameworks to validate and iterate quickly.", icon: "📈" },
        { title: "Secure by Design", description: "Compliance-ready processes with automated guardrails.", icon: "🛡️" }
      ]}
      testimonialsTitle="Client Results"
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
      faqTitle="Web Development FAQs"
      faq={[
        { question: "How quickly can we launch?", answer: "MVPs typically launch in 6-10 weeks depending on scope and integrations." },
        { question: "Do you offer ongoing support?", answer: "Yes, we provide managed squads for continuous delivery and maintenance." }
      ]}
      ctaTitle="Ready to build your next web experience?"
      ctaDescription="Partner with Link Innovations to deliver modern, performant applications your users love."
      ctaButtonText="Book a Discovery Call"
      ctaButtonHref="/contact"
      primaryColor="bg-indigo-500"
      gradientFrom="from-indigo-500"
      gradientTo="to-sky-500"
    />
  );
}
