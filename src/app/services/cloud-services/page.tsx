"use client";

import EnhancedServicePageTemplate from "@/components/EnhancedServicePageTemplate";

export default function CloudServicesPage() {
  return (
    <EnhancedServicePageTemplate
      serviceName="Cloud Services"
      heroTitle="Scale Your Infrastructure with Reliable Cloud Solutions"
      heroSubtitle="Scalable cloud infrastructure that grows with your business"
      heroDescription="We provide reliable, secure, and cost-effective cloud solutions with 24/7 monitoring and support."
      heroImage="/images/service-cards/cloud-services-service-card.webp"
      primaryCTA={{
        text: "Cloud Migration",
        href: "/contact"
      }}
      secondaryCTA={{
        text: "Cloud Strategy",
        href: "/services"
      }}
      trustedByLogos={["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"]}
      approachTabData={[
        {
          id: 0,
          number: '01',
          label: 'Assessment',
          title: ['Discover your potential with ', 'cloud readiness assessment'],
          subtitle: 'Cloud Readiness Assessment',
          description: 'We begin every cloud project with a comprehensive assessment of your current infrastructure, workloads, and migration requirements.',
          features: ['Infrastructure Analysis', 'Workload Assessment', 'Cost Analysis', 'Migration Planning'],
          image: '/images/tabbedfeatures_cards/discovery.jpeg',
          fallback: '/images/tabbedfeatures_cards/discovery.jpeg',
        },
        {
          id: 1,
          number: '02',
          label: 'Design',
          title: ['Design scalable solutions with ', 'cloud architecture'],
          subtitle: 'Cloud Architecture Design',
          description: 'Our cloud architects design scalable, secure, and cost-effective cloud solutions tailored to your specific business needs.',
          features: ['Architecture Design', 'Security Planning', 'Cost Optimization', 'Scalability Planning'],
          image: '/images/tabbedfeatures_cards/development.jpeg',
          fallback: '/images/tabbedfeatures_cards/development.jpeg',
        },
        {
          id: 2,
          number: '03',
          label: 'Migration',
          title: ['Migrate with confidence using ', 'proven migration strategies'],
          subtitle: 'Cloud Migration',
          description: 'We execute seamless cloud migrations using proven strategies to minimize downtime and ensure data integrity.',
          features: ['Data Migration', 'Application Migration', 'Infrastructure Migration', 'Testing & Validation'],
          image: '/images/tabbedfeatures_cards/testing.jpeg',
          fallback: '/images/tabbedfeatures_cards/testing.jpeg',
        },
        {
          id: 3,
          number: '04',
          label: 'Optimization',
          title: ['Optimize with continuous ', 'cloud management'],
          subtitle: 'Cloud Optimization',
          description: 'Ongoing optimization and management to ensure your cloud infrastructure remains efficient, secure, and cost-effective.',
          features: ['Performance Monitoring', 'Cost Optimization', 'Security Updates', 'Ongoing Support'],
          image: '/images/tabbedfeatures_cards/deployment.jpeg',
          fallback: '/images/tabbedfeatures_cards/deployment.jpeg',
        },
      ]}
      challenges={[
        { challenge: "On-premises infrastructure limiting scalability and flexibility", solution: "Cloud migration and modernization" },
        { challenge: "High maintenance costs and resource management complexity", solution: "Managed cloud services and automation" },
        { challenge: "Security concerns with data storage and access", solution: "Enterprise-grade security and compliance" },
        { challenge: "Disaster recovery and business continuity planning", solution: "Automated backup and disaster recovery" },
        { challenge: "Need for global accessibility and performance", solution: "Global CDN and edge computing" }
      ]}
      solutions={[
        { title: "Cloud Migration", description: "Seamless infrastructure move", icon: "☁️" },
        { title: "Auto-Scaling", description: "Dynamic resource allocation", icon: "📈" },
        { title: "Security", description: "Enterprise-grade protection", icon: "🔒" }
      ]}
      capabilities={[
        { title: "AWS Services", description: "Amazon Web Services", icon: "☁️" },
        { title: "Azure Solutions", description: "Microsoft Azure", icon: "🔵" },
        { title: "Google Cloud", description: "GCP platform", icon: "🔴" },
        { title: "Container Orchestration", description: "Kubernetes, Docker", icon: "🐳" },
        { title: "Database Services", description: "Managed databases", icon: "🗄️" },
        { title: "Monitoring", description: "CloudWatch, Azure Monitor", icon: "📊" }
      ]}
      technologies={[
        "AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "Docker"
      ]}
      whyChooseUs={[
        {
          title: "Cloud Expertise",
          description: "Certified professionals with deep cloud platform knowledge",
          icon: "☁️"
        },
        {
          title: "Cost Optimization",
          description: "Right-size resources and optimize costs for maximum efficiency",
          icon: "💰"
        },
        {
          title: "Security First",
          description: "Enterprise-grade security with compliance and monitoring",
          icon: "🔒"
        }
      ]}
      ctaTitle="Ready to Move to the Cloud?"
      ctaDescription="Transform your infrastructure with scalable, secure, and cost-effective cloud solutions."
      ctaButtonText="Start Migration"
      ctaButtonHref="/contact"
      primaryColor="bg-teal-500"
      gradientFrom="from-teal-500"
      gradientTo="to-green-500"
    />
  );
}