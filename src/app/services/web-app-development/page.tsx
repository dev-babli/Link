"use client";

import PremiumServiceTemplate from "@/components/PremiumServiceTemplate";

export default function WebAppDevelopmentPage() {
  return (
    <PremiumServiceTemplate
      serviceName="Web App Development"
      heroTitle="Advanced Web Applications and Platforms with Complex Functionality"
      heroSubtitle="Enterprise Web Applications"
      heroDescription="Enterprise-grade web applications and platforms with complex functionality. We build scalable, secure, and performant web solutions for modern businesses."
      heroImage="/images/service-cards/web-app-development-service-card.webp"
      primaryCTA={{ text: "Start Web App", href: "/contact" }}
      secondaryCTA={{ text: "View Web App Examples", href: "/services" }}
      impactMetrics={[
        { metric: "Performance", value: "95+", description: "Lighthouse scores" },
        { metric: "Scalability", value: "10x", description: "Traffic handling" },
        { metric: "Uptime", value: "99.9%", description: "Application availability" },
        { metric: "User Satisfaction", value: "4.8★", description: "Average rating" }
      ]}
      features={[
        {
          icon: "🏗️",
          title: "Enterprise Architecture",
          description: "Scalable, maintainable architectures for complex applications."
        },
        {
          icon: "⚡",
          title: "High Performance",
          description: "Optimized for speed and performance at scale."
        },
        {
          icon: "🔒",
          title: "Security First",
          description: "Enterprise-grade security and compliance."
        },
        {
          icon: "📊",
          title: "Real-Time Features",
          description: "WebSocket, real-time updates, and live collaboration."
        },
        {
          icon: "🔄",
          title: "API Integration",
          description: "Seamless integration with third-party services and APIs."
        },
        {
          icon: "📱",
          title: "Responsive Design",
          description: "Perfect experience across all devices and screen sizes."
        }
      ]}
      useCases={[
        {
          title: "Enterprise Platforms",
          description: "Complex enterprise applications",
          examples: [
            "CRM platforms",
            "ERP systems",
            "Project management"
          ],
          icon: "🏢"
        },
        {
          title: "SaaS Applications",
          description: "Multi-tenant SaaS platforms",
          examples: [
            "Subscription platforms",
            "Billing systems",
            "User management"
          ],
          icon: "☁️"
        },
        {
          title: "E-Commerce Platforms",
          description: "Advanced e-commerce solutions",
          examples: [
            "Marketplace platforms",
            "Inventory management",
            "Order processing"
          ],
          icon: "🛒"
        },
        {
          title: "Collaboration Tools",
          description: "Real-time collaboration platforms",
          examples: [
            "Team collaboration",
            "Document editing",
            "Video conferencing"
          ],
          icon: "👥"
        },
        {
          title: "Financial Platforms",
          description: "Banking and financial applications",
          examples: [
            "Banking portals",
            "Investment platforms",
            "Payment systems"
          ],
          icon: "💰"
        },
        {
          title: "Healthcare Systems",
          description: "Healthcare management platforms",
          examples: [
            "Patient portals",
            "EHR systems",
            "Telehealth platforms"
          ],
          icon: "🏥"
        }
      ]}
      capabilities={[
        { title: "Full-Stack Development", description: "End-to-end web application development.", icon: "💻" },
        { title: "Microservices", description: "Scalable microservices architecture.", icon: "🔧" },
        { title: "Real-Time Features", description: "WebSocket and real-time capabilities.", icon: "⚡" },
        { title: "API Development", description: "RESTful and GraphQL APIs.", icon: "🔌" },
        { title: "Database Design", description: "Optimized database schemas and queries.", icon: "🗄️" },
        { title: "DevOps Integration", description: "CI/CD and automated deployments.", icon: "🔄" }
      ]}
      technologies={["Next.js", "React", "Node.js", "TypeScript", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "WebSocket", "Docker"]}
      whyChooseUs={[
        { title: "Enterprise Expertise", description: "Deep experience building complex enterprise applications.", icon: "🏢" },
        { title: "Scalable Architecture", description: "Architectures that scale with your business growth.", icon: "📈" },
        { title: "Security Focus", description: "Security built into every layer of the application.", icon: "🛡️" },
        { title: "Performance Optimized", description: "Applications optimized for speed and efficiency.", icon: "⚡" }
      ]}
      testimonials={[
        {
          quote: "They built our enterprise platform in record time with exceptional quality and performance.",
          author: "Robert Chen",
          position: "VP Engineering",
          company: "EnterpriseCorp"
        },
        {
          quote: "The web app handles 10x our expected traffic without any performance issues.",
          author: "Jennifer Smith",
          position: "CTO",
          company: "ScaleUp Inc"
        }
      ]}
      faq={[
        { question: "How long does web app development take?", answer: "Typically 12-20 weeks for enterprise applications, depending on complexity." },
        { question: "Do you build both frontend and backend?", answer: "Yes, we provide full-stack development including frontend, backend, and database." },
        { question: "Can you integrate with existing systems?", answer: "Absolutely. We specialize in integrating with legacy and third-party systems." },
        { question: "What about scalability?", answer: "We design applications to scale horizontally and handle millions of users." },
        { question: "Do you provide ongoing maintenance?", answer: "Yes, we offer maintenance, updates, and feature enhancements." }
      ]}
      ctaTitle="Ready to build your enterprise web app?"
      ctaDescription="Let's create a scalable, secure web application that drives your business forward."
      ctaButtonText="Start Web App Project"
      ctaButtonHref="/contact"
    />
  );
}
