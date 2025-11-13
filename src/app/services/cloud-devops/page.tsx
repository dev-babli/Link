"use client";

import MainlineServiceTemplate from "@/components/MainlineServiceTemplate";

export default function CloudDevOpsPage() {
  return (
    <MainlineServiceTemplate
      serviceName="Cloud DevOps"
      heroTitle="Streamline Development with Modern DevOps Practices"
      heroSubtitle="DevOps & Cloud Infrastructure"
      heroDescription="Accelerate delivery with automated CI/CD pipelines, infrastructure as code, and modern DevOps practices. We help you build, deploy, and scale applications with confidence and efficiency."
      heroImage="/mainline_service_template/hero.webp"
      primaryCTA={{ text: "Start DevOps Journey", href: "/contact" }}
      secondaryCTA={{ text: "View Case Studies", href: "/services" }}
      impactMetrics={[
        { metric: "Deployment Speed", value: "10x", description: "Faster with automation" },
        { metric: "Uptime", value: "99.9%", description: "Application availability" },
        { metric: "Cost Reduction", value: "40%", description: "Infrastructure costs" },
        { metric: "Release Frequency", value: "Daily", description: "Automated deployments" }
      ]}
      features={[
        {
          icon: "🔄",
          title: "CI/CD Pipelines",
          description: "Automated build, test, and deployment pipelines for continuous delivery."
        },
        {
          icon: "☁️",
          title: "Cloud Infrastructure",
          description: "Scalable cloud architectures on AWS, Azure, and GCP."
        },
        {
          icon: "📦",
          title: "Container Orchestration",
          description: "Kubernetes and Docker for containerized deployments."
        },
        {
          icon: "📊",
          title: "Monitoring & Observability",
          description: "Comprehensive monitoring, logging, and alerting solutions."
        },
        {
          icon: "🔒",
          title: "Security & Compliance",
          description: "Infrastructure security and compliance automation."
        },
        {
          icon: "⚡",
          title: "Infrastructure as Code",
          description: "Terraform, CloudFormation, and automated provisioning."
        }
      ]}
      useCases={[
        {
          title: "SaaS Platforms",
          description: "Scalable infrastructure for SaaS applications",
          examples: [
            "Multi-tenant architectures",
            "Auto-scaling solutions",
            "High availability setups"
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
          title: "Enterprise Applications",
          description: "Mission-critical enterprise systems",
          examples: [
            "Legacy modernization",
            "Hybrid cloud solutions",
            "Disaster recovery"
          ],
          icon: "🏢"
        },
        {
          title: "Startups",
          description: "Cost-effective cloud solutions for startups",
          examples: [
            "MVP infrastructure",
            "Cost optimization",
            "Rapid scaling"
          ],
          icon: "🚀"
        },
        {
          title: "FinTech",
          description: "Secure, compliant financial infrastructure",
          examples: [
            "Security hardening",
            "Compliance automation",
            "High-performance systems"
          ],
          icon: "💰"
        },
        {
          title: "Healthcare",
          description: "HIPAA-compliant healthcare infrastructure",
          examples: [
            "Compliance automation",
            "Secure data handling",
            "High availability"
          ],
          icon: "🏥"
        }
      ]}
      capabilities={[
        { title: "CI/CD Automation", description: "Jenkins, GitHub Actions, GitLab CI, and custom pipelines.", icon: "🔄" },
        { title: "Cloud Platforms", description: "AWS, Azure, GCP expertise and multi-cloud strategies.", icon: "☁️" },
        { title: "Containerization", description: "Docker, Kubernetes, and container orchestration.", icon: "📦" },
        { title: "Infrastructure as Code", description: "Terraform, CloudFormation, and Ansible automation.", icon: "⚡" },
        { title: "Monitoring", description: "Prometheus, Grafana, Datadog, and custom dashboards.", icon: "📊" },
        { title: "Security", description: "Security scanning, compliance automation, and hardening.", icon: "🔒" }
      ]}
      technologies={["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform", "Jenkins", "GitHub Actions", "Ansible", "Prometheus", "Grafana"]}
      whyChooseUs={[
        { title: "Automation First", description: "Everything automated for speed and reliability.", icon: "⚡" },
        { title: "Cloud Expertise", description: "Deep experience across AWS, Azure, and GCP.", icon: "☁️" },
        { title: "Cost Optimization", description: "Right-size infrastructure and reduce costs significantly.", icon: "💰" },
        { title: "Security Focus", description: "Security built into every layer of infrastructure.", icon: "🛡️" }
      ]}
      testimonials={[
        {
          quote: "They transformed our deployment process from weeks to hours with automated CI/CD pipelines.",
          author: "David Kim",
          position: "DevOps Lead",
          company: "TechCorp"
        },
        {
          quote: "Their cloud architecture reduced our infrastructure costs by 40% while improving performance.",
          author: "Lisa Wang",
          position: "CTO",
          company: "ScaleUp Inc"
        }
      ]}
      faq={[
        { question: "Which cloud platforms do you support?", answer: "We work with AWS, Azure, and GCP, and can help you choose the best platform for your needs." },
        { question: "How do you ensure security?", answer: "Security is built into every layer with automated scanning, compliance checks, and best practices." },
        { question: "Can you help migrate to the cloud?", answer: "Yes, we specialize in cloud migrations with minimal downtime and zero data loss." },
        { question: "Do you provide 24/7 monitoring?", answer: "Yes, we can set up comprehensive monitoring and alerting for your infrastructure." },
        { question: "How quickly can you set up CI/CD?", answer: "Typically 1-2 weeks to set up complete CI/CD pipelines depending on complexity." }
      ]}
      ctaTitle="Ready to streamline your DevOps?"
      ctaDescription="Let's automate your development and deployment processes for faster, more reliable releases."
      ctaButtonText="Start DevOps Transformation"
      ctaButtonHref="/contact"
    />
  );
}
