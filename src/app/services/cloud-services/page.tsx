"use client";

import MainlineServiceTemplate from "@/components/MainlineServiceTemplate";

export default function CloudServicesPage() {
  return (
    <MainlineServiceTemplate
      serviceName="Cloud Services"
      heroTitle="Scale Your Infrastructure with Reliable Cloud Solutions"
      heroSubtitle="Cloud Infrastructure"
      heroDescription="We provide reliable, secure, and cost-effective cloud solutions with 24/7 monitoring and support. Scale your infrastructure as your business grows."
      heroImage="/mainline_service_template/hero.webp"
      primaryCTA={{ text: "Cloud Migration", href: "/contact" }}
      secondaryCTA={{ text: "Cloud Strategy", href: "/services" }}
      impactMetrics={[
        { metric: "Cost Savings", value: "40%", description: "Infrastructure cost reduction" },
        { metric: "Uptime", value: "99.9%", description: "Service availability" },
        { metric: "Scalability", value: "10x", description: "Auto-scaling capability" },
        { metric: "Migration Speed", value: "50%", description: "Faster than traditional" }
      ]}
      features={[
        {
          icon: "☁️",
          title: "Cloud Migration",
          description: "Seamless migration to AWS, Azure, or GCP with zero downtime."
        },
        {
          icon: "📈",
          title: "Auto-Scaling",
          description: "Automatically scale resources based on demand."
        },
        {
          icon: "💰",
          title: "Cost Optimization",
          description: "Right-size infrastructure and reduce cloud costs."
        },
        {
          icon: "🔒",
          title: "Security & Compliance",
          description: "Enterprise-grade security and compliance automation."
        },
        {
          icon: "📊",
          title: "Monitoring & Analytics",
          description: "Comprehensive monitoring and cost analytics."
        },
        {
          icon: "🔄",
          title: "Disaster Recovery",
          description: "Automated backups and disaster recovery solutions."
        }
      ]}
      useCases={[
        {
          title: "Cloud Migration",
          description: "Migrate from on-premise to cloud",
          examples: [
            "Lift and shift migrations",
            "Application modernization",
            "Database migrations"
          ],
          icon: "🚀"
        },
        {
          title: "SaaS Platforms",
          description: "Scalable infrastructure for SaaS",
          examples: [
            "Multi-tenant architectures",
            "Auto-scaling solutions",
            "High availability"
          ],
          icon: "💼"
        },
        {
          title: "E-Commerce",
          description: "High-traffic e-commerce infrastructure",
          examples: [
            "Peak traffic handling",
            "CDN optimization",
            "Database scaling"
          ],
          icon: "🛒"
        },
        {
          title: "Data Analytics",
          description: "Big data and analytics platforms",
          examples: [
            "Data lakes",
            "Analytics pipelines",
            "ML infrastructure"
          ],
          icon: "📊"
        },
        {
          title: "Enterprise Applications",
          description: "Mission-critical enterprise systems",
          examples: [
            "Legacy modernization",
            "Hybrid cloud",
            "Disaster recovery"
          ],
          icon: "🏢"
        },
        {
          title: "Startups",
          description: "Cost-effective cloud for startups",
          examples: [
            "MVP infrastructure",
            "Cost optimization",
            "Rapid scaling"
          ],
          icon: "🌟"
        }
      ]}
      capabilities={[
        { title: "Cloud Migration", description: "AWS, Azure, GCP migration expertise.", icon: "🚀" },
        { title: "Infrastructure Design", description: "Scalable, secure cloud architectures.", icon: "🏗️" },
        { title: "Cost Optimization", description: "Right-sizing and cost reduction strategies.", icon: "💰" },
        { title: "Security", description: "Security hardening and compliance automation.", icon: "🔒" },
        { title: "Monitoring", description: "Comprehensive monitoring and alerting.", icon: "📊" },
        { title: "Support", description: "24/7 cloud infrastructure support.", icon: "🛠️" }
      ]}
      technologies={["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform", "CloudFormation", "Ansible", "Prometheus", "Grafana"]}
      whyChooseUs={[
        { title: "Multi-Cloud Expertise", description: "Experience across AWS, Azure, and GCP.", icon: "☁️" },
        { title: "Cost Optimization", description: "Reduce cloud costs by up to 40% with optimization.", icon: "💰" },
        { title: "Zero Downtime", description: "Seamless migrations with zero business disruption.", icon: "⚡" },
        { title: "24/7 Support", description: "Round-the-clock monitoring and support.", icon: "🛠️" }
      ]}
      testimonials={[
        {
          quote: "They migrated our entire infrastructure to AWS with zero downtime and reduced costs by 35%.",
          author: "James Wilson",
          position: "Infrastructure Lead",
          company: "DataCorp"
        },
        {
          quote: "Their cloud architecture scales perfectly with our growth, handling 10x traffic without issues.",
          author: "Maria Garcia",
          position: "CTO",
          company: "ScaleUp"
        }
      ]}
      faq={[
        { question: "Which cloud platforms do you support?", answer: "We support AWS, Azure, and GCP, and can help you choose the best platform." },
        { question: "How long does cloud migration take?", answer: "Typically 4-12 weeks depending on infrastructure complexity and size." },
        { question: "Can you help reduce cloud costs?", answer: "Yes, we specialize in cloud cost optimization and can reduce costs by 30-40%." },
        { question: "Do you provide 24/7 support?", answer: "Yes, we offer 24/7 monitoring and support for cloud infrastructure." },
        { question: "What about security?", answer: "Security is built into every cloud solution with best practices and compliance automation." }
      ]}
      ctaTitle="Ready to move to the cloud?"
      ctaDescription="Let's migrate your infrastructure to the cloud with zero downtime and significant cost savings."
      ctaButtonText="Start Cloud Migration"
      ctaButtonHref="/contact"
    />
  );
}
