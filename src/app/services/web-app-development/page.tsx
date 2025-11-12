"use client";

import GroviaServiceTemplate from "@/components/GroviaServiceTemplate";

export default function WebAppDevelopmentPage() {
  return (
    <GroviaServiceTemplate
      serviceName="Web App Development"
      heroTitle="Advanced Web Applications and Platforms with Complex Functionality"
      heroDescription="Enterprise-grade web applications and platforms with complex functionality. We build scalable, secure, and performant web solutions for modern businesses."
      heroImage="/images/service-cards/web-app-development-service-card.webp"
      primaryCTA={{
        text: "Start Web App",
        href: "/contact"
      }}
      secondaryCTA={{
        text: "View Web App Examples",
        href: "/services"
      }}
      approachTabData={[
        {
          id: 0,
          number: '01',
          label: 'Discovery',
          title: ['Discover your potential with ', 'enterprise assessment'],
          subtitle: 'Enterprise Assessment',
          description: 'We begin every web app project with a comprehensive assessment of your business requirements, technical constraints, and scalability needs.',
          features: ['Business Analysis', 'Technical Assessment', 'Scalability Planning', 'Requirements Gathering'],
          image: '/images/tabbedfeatures_cards/discovery.jpeg',
          fallback: '/images/tabbedfeatures_cards/discovery.jpeg',
        },
        {
          id: 1,
          number: '02',
          label: 'Architecture',
          title: ['Design enterprise solutions with ', 'scalable architecture'],
          subtitle: 'Enterprise Architecture Design',
          description: 'Our architects design enterprise-grade web applications with scalable, secure, and maintainable architecture patterns.',
          features: ['System Architecture', 'Database Design', 'Security Planning', 'Scalability Design'],
          image: '/images/tabbedfeatures_cards/development.jpeg',
          fallback: '/images/tabbedfeatures_cards/development.jpeg',
        },
        {
          id: 2,
          number: '03',
          label: 'Development',
          title: ['Build with ', 'enterprise development'],
          subtitle: 'Enterprise Development',
          description: 'We develop robust web applications using enterprise-grade technologies and best practices for performance and reliability.',
          features: ['Full-Stack Development', 'API Development', 'Database Implementation', 'Integration'],
          image: '/images/tabbedfeatures_cards/testing.jpeg',
          fallback: '/images/tabbedfeatures_cards/testing.jpeg',
        },
        {
          id: 3,
          number: '04',
          label: 'Deployment',
          title: ['Deploy with ', 'enterprise infrastructure'],
          subtitle: 'Enterprise Deployment',
          description: 'Seamless deployment to enterprise infrastructure with monitoring, security, and ongoing maintenance for optimal performance.',
          features: ['Production Deployment', 'Infrastructure Setup', 'Monitoring & Alerting', 'Ongoing Support'],
          image: '/images/tabbedfeatures_cards/deployment.jpeg',
          fallback: '/images/tabbedfeatures_cards/deployment.jpeg',
        },
      ]}
      challenges={[
        { challenge: "Need for complex business logic and advanced functionality", solution: "Scalable architecture and microservices" },
        { challenge: "Scalability requirements for growing user bases", solution: "Cloud-native and auto-scaling solutions" },
        { challenge: "Integration with multiple third-party services and APIs", solution: "API-first design and integration platform" },
        { challenge: "Real-time features and collaborative functionality", solution: "WebSocket and real-time communication" },
        { challenge: "Enterprise security and compliance requirements", solution: "Enterprise-grade security and compliance" }
      ]}
      solutions={[
        { title: "Enterprise Architecture", description: "Scalable, secure design", icon: "🏗️" },
        { title: "API Integration", description: "Seamless third-party connections", icon: "🔌" },
        { title: "Real-time Features", description: "Live updates and collaboration", icon: "⚡" }
      ]}
      capabilities={[
        { title: "Enterprise Web Apps", description: "Complex business applications", icon: "🏢" },
        { title: "API Development", description: "RESTful & GraphQL APIs", icon: "🔌" },
        { title: "Real-time Features", description: "WebSockets, live updates", icon: "⚡" },
        { title: "Database Design", description: "PostgreSQL, MongoDB", icon: "🗄️" },
        { title: "Microservices", description: "Scalable architecture", icon: "🔧" },
        { title: "Cloud Deployment", description: "AWS, Azure, GCP", icon: "☁️" }
      ]}
      technologies={[
        "React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Docker"
      ]}
      whyChooseUs={[
        {
          title: "Enterprise Focus",
          description: "Built for scale, security, and complex business requirements",
          icon: "🏢"
        },
        {
          title: "Advanced Architecture",
          description: "Modern patterns and practices for maintainable, scalable code",
          icon: "🏗️"
        },
        {
          title: "Full-Stack Expertise",
          description: "Complete solutions from frontend to backend and infrastructure",
          icon: "⚡"
        }
      ]}
      ctaTitle="Ready to Build Your Web Application?"
      ctaDescription="Create enterprise-grade web applications that handle complex business logic and scale with your growth."
      ctaButtonText="Start Development"
      ctaButtonHref="/contact"
      primaryColor="bg-cyan-500"
      gradientFrom="from-cyan-500"
      gradientTo="to-blue-500"
    />
  );
}