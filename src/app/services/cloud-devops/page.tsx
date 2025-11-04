"use client";

import EnhancedServicePageTemplate from "@/components/EnhancedServicePageTemplate";

export default function CloudDevOpsPage() {
    return (
        <EnhancedServicePageTemplate
            serviceName="Cloud DevOps"
            heroTitle="Streamline Development with Modern DevOps Practices"
            heroDescription="Accelerate delivery with automated CI/CD pipelines, infrastructure as code, and modern DevOps practices. We help you build, deploy, and scale applications with confidence and efficiency."
            heroImage="/images/service-cards/cloud-devops-service-card.webp"
            primaryCTA={{
                text: "Start DevOps Journey",
                href: "/contact"
            }}
            secondaryCTA={{
                text: "View Case Studies",
                href: "/services"
            }}
            approachTabData={[
                {
                    id: 0,
                    number: '01',
                    label: 'Assessment',
                    title: ['Discover your potential with ', 'DevOps assessment'],
                    subtitle: 'DevOps Assessment',
                    description: 'We begin every DevOps project with a comprehensive assessment of your current development and deployment processes.',
                    features: ['Process Analysis', 'Tool Evaluation', 'Infrastructure Review', 'Automation Opportunities'],
                    image: '/images/tabbedfeatures_cards/discovery.jpeg',
                    fallback: '/images/tabbedfeatures_cards/discovery.jpeg',
                },
                {
                    id: 1,
                    number: '02',
                    label: 'Design',
                    title: ['Design efficient workflows with ', 'DevOps architecture'],
                    subtitle: 'DevOps Architecture Design',
                    description: 'Our DevOps architects design efficient CI/CD pipelines and infrastructure automation solutions tailored to your needs.',
                    features: ['CI/CD Pipeline Design', 'Infrastructure as Code', 'Monitoring Strategy', 'Security Integration'],
                    image: '/images/tabbedfeatures_cards/development.jpeg',
                    fallback: '/images/tabbedfeatures_cards/development.jpeg',
                },
                {
                    id: 2,
                    number: '03',
                    label: 'Implementation',
                    title: ['Implement with ', 'DevOps automation'],
                    subtitle: 'DevOps Implementation',
                    description: 'We implement comprehensive DevOps solutions using industry-leading tools and automation practices for maximum efficiency.',
                    features: ['Pipeline Setup', 'Infrastructure Automation', 'Monitoring Implementation', 'Security Hardening'],
                    image: '/images/tabbedfeatures_cards/testing.jpeg',
                    fallback: '/images/tabbedfeatures_cards/testing.jpeg',
                },
                {
                    id: 3,
                    number: '04',
                    label: 'Optimization',
                    title: ['Optimize with continuous ', 'DevOps improvement'],
                    subtitle: 'DevOps Optimization',
                    description: 'Ongoing optimization and monitoring to ensure your DevOps processes deliver maximum efficiency and reliability.',
                    features: ['Performance Monitoring', 'Process Optimization', 'Continuous Improvement', 'Team Training'],
                    image: '/images/tabbedfeatures_cards/deployment.jpeg',
                    fallback: '/images/tabbedfeatures_cards/deployment.jpeg',
                },
            ]}
            challenges={[
                { challenge: "Manual deployment processes causing delays and errors", solution: "Automated CI/CD pipelines" },
                { challenge: "Inconsistent environments between development and production", solution: "Infrastructure as Code" },
                { challenge: "Lack of monitoring and alerting for production issues", solution: "Comprehensive monitoring and alerting" },
                { challenge: "Security vulnerabilities in deployment pipelines", solution: "DevSecOps security practices" },
                { challenge: "Difficulty scaling infrastructure with business growth", solution: "Auto-scaling and cloud-native solutions" }
            ]}
            solutions={[
                { title: "CI/CD Pipelines", description: "Automated deployments", icon: "🔄" },
                { title: "Infrastructure as Code", description: "Consistent environments", icon: "🏗️" },
                { title: "Monitoring & Alerting", description: "Proactive issue detection", icon: "📊" }
            ]}
            capabilities={[
                { title: "CI/CD Setup", description: "GitHub Actions, GitLab CI", icon: "🔄" },
                { title: "Container Orchestration", description: "Kubernetes, Docker", icon: "🐳" },
                { title: "Infrastructure as Code", description: "Terraform, CloudFormation", icon: "🏗️" },
                { title: "Cloud Platforms", description: "AWS, Azure, GCP", icon: "☁️" },
                { title: "Monitoring", description: "Prometheus, Grafana", icon: "📈" },
                { title: "Security", description: "DevSecOps practices", icon: "🔒" }
            ]}
            technologies={[
                "Kubernetes", "Docker", "Terraform", "AWS", "Azure", "GitHub Actions"
            ]}
            whyChooseUs={[
                {
                    title: "DevOps Expertise",
                    description: "Deep experience with modern DevOps tools and best practices",
                    icon: "🔄"
                },
                {
                    title: "Cloud-Native Focus",
                    description: "Optimized for scalability, reliability, and cost-effectiveness",
                    icon: "☁️"
                },
                {
                    title: "Security First",
                    description: "DevSecOps approach with security built into every pipeline",
                    icon: "🔒"
                }
            ]}
            ctaTitle="Ready to Modernize Your DevOps?"
            ctaDescription="Let's transform your development workflow with modern DevOps practices that accelerate delivery and improve reliability."
            ctaButtonText="Get Started"
            ctaButtonHref="/contact"
            primaryColor="bg-orange-500"
            gradientFrom="from-orange-500"
            gradientTo="to-red-500"
        />
    );
}