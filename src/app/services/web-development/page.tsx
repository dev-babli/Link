"use client";

import EnhancedServicePageTemplate from "@/components/EnhancedServicePageTemplate";

export default function WebDevelopmentPage() {
    return (
        <EnhancedServicePageTemplate
      serviceName="Web Development"
      heroTitle="Web Development Services"
      heroSubtitle="Custom Web Applications"
      subtitle="Custom Web Applications"
      description="Build powerful, scalable web applications with cutting-edge technologies. Our expert team delivers responsive, high-performance solutions tailored to your business needs, from enterprise platforms to customer-facing applications."
      capabilities={[
        "Full-stack web application development",
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "API design and integration",
        "Database architecture and optimization",
        "Cloud deployment and hosting",
        "Performance optimization",
        "Security implementation",
        "Responsive and mobile-first design",
        "Content Management Systems (CMS)",
        "E-commerce platforms",
        "Real-time applications with WebSockets",
      ]}
      benefits={[
        {
          title: "Modern Technology Stack",
          description: "We use the latest technologies including React, Next.js, Node.js, and TypeScript to build future-proof applications."
        },
        {
          title: "Scalable Architecture",
          description: "Our solutions are designed to scale seamlessly as your business grows, handling increased traffic and complexity."
        },
        {
          title: "Performance Optimized",
          description: "Lightning-fast load times and smooth interactions through advanced optimization techniques and best practices."
        },
        {
          title: "SEO & Accessibility",
          description: "Built-in SEO optimization and WCAG compliance ensure your application reaches the widest possible audience."
        },
        {
          title: "Security First",
          description: "Industry-standard security practices protect your data and users from modern threats and vulnerabilities."
        },
        {
          title: "Ongoing Support",
          description: "Comprehensive maintenance and support services keep your application running smoothly and up-to-date."
        },
      ]}
      process={[
        {
          step: "01",
          title: "Discovery & Planning",
          description: "We begin by understanding your business objectives, target audience, and technical requirements to create a comprehensive project roadmap."
        },
        {
          step: "02",
          title: "Design & Prototyping",
          description: "Our designers create intuitive user experiences and visual designs that align with your brand and delight your users."
        },
        {
          step: "03",
          title: "Development",
          description: "Our engineers build your application using agile methodologies, ensuring regular communication and iterative improvements."
        },
        {
          step: "04",
          title: "Testing & QA",
          description: "Rigorous testing across devices and browsers ensures your application works flawlessly for all users."
        },
        {
          step: "05",
          title: "Deployment & Launch",
          description: "We handle the complete deployment process, ensuring a smooth launch with zero downtime."
        },
        {
          step: "06",
          title: "Maintenance & Growth",
          description: "Ongoing monitoring, updates, and enhancements keep your application secure, fast, and competitive."
        },
      ]}
      relatedServices={[
        { name: "Mobile App Development", href: "/services/mobile-apps" },
        { name: "Cloud Services", href: "/services/cloud-services" },
        { name: "AI Solutions", href: "/services/ai-automation" },
      ]}
        />
    );
}
