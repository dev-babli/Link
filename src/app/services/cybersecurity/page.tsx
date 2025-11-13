"use client";

import MainlineServiceTemplate from "@/components/MainlineServiceTemplate";

export default function CybersecurityPage() {
  return (
    <MainlineServiceTemplate
      serviceName="Cybersecurity"
      heroTitle="Protect Your Digital Assets with Comprehensive Security Solutions"
      heroSubtitle="Security & Compliance"
      heroDescription="Safeguard your business with comprehensive security solutions. From threat assessment to incident response, we keep your digital assets secure with transparent security practices and clear communication."
      heroImage="/mainline_service_template/hero.webp"
      primaryCTA={{ text: "Security Assessment", href: "/contact" }}
      secondaryCTA={{ text: "Security Resources", href: "/services" }}
      impactMetrics={[
        { metric: "Threat Detection", value: "99.9%", description: "Threat detection rate" },
        { metric: "Response Time", value: "<1hr", description: "Incident response time" },
        { metric: "Compliance", value: "100%", description: "Compliance achievement" },
        { metric: "Vulnerabilities Fixed", value: "95%", description: "Within 48 hours" }
      ]}
      features={[
        {
          icon: "🔍",
          title: "Security Assessment",
          description: "Comprehensive vulnerability assessments and security audits."
        },
        {
          icon: "🛡️",
          title: "Threat Protection",
          description: "Advanced threat detection and prevention systems."
        },
        {
          icon: "🔒",
          title: "Data Encryption",
          description: "End-to-end encryption for data at rest and in transit."
        },
        {
          icon: "📋",
          title: "Compliance",
          description: "GDPR, HIPAA, SOC 2, and industry compliance support."
        },
        {
          icon: "🚨",
          title: "Incident Response",
          description: "24/7 monitoring and rapid incident response."
        },
        {
          icon: "🔐",
          title: "Access Control",
          description: "Identity and access management solutions."
        }
      ]}
      useCases={[
        {
          title: "Financial Services",
          description: "Bank-grade security for financial institutions",
          examples: [
            "PCI DSS compliance",
            "Fraud prevention",
            "Secure transactions"
          ],
          icon: "💰"
        },
        {
          title: "Healthcare",
          description: "HIPAA-compliant security for healthcare",
          examples: [
            "HIPAA compliance",
            "Patient data protection",
            "Secure communications"
          ],
          icon: "🏥"
        },
        {
          title: "E-Commerce",
          description: "Secure e-commerce platforms",
          examples: [
            "Payment security",
            "Customer data protection",
            "Fraud prevention"
          ],
          icon: "🛒"
        },
        {
          title: "Enterprise",
          description: "Enterprise security solutions",
          examples: [
            "Network security",
            "Endpoint protection",
            "Security monitoring"
          ],
          icon: "🏢"
        },
        {
          title: "SaaS Platforms",
          description: "Multi-tenant security for SaaS",
          examples: [
            "Data isolation",
            "Access controls",
            "API security"
          ],
          icon: "☁️"
        },
        {
          title: "Startups",
          description: "Security foundations for startups",
          examples: [
            "Security architecture",
            "Compliance readiness",
            "Threat protection"
          ],
          icon: "🚀"
        }
      ]}
      capabilities={[
        { title: "Security Assessment", description: "Vulnerability scanning, penetration testing, and audits.", icon: "🔍" },
        { title: "Threat Protection", description: "Firewalls, IDS/IPS, and advanced threat detection.", icon: "🛡️" },
        { title: "Data Encryption", description: "Encryption at rest, in transit, and key management.", icon: "🔒" },
        { title: "Compliance", description: "GDPR, HIPAA, SOC 2, PCI DSS compliance support.", icon: "📋" },
        { title: "Incident Response", description: "24/7 monitoring, SIEM, and rapid response.", icon: "🚨" },
        { title: "Access Control", description: "IAM, MFA, and identity management solutions.", icon: "🔐" }
      ]}
      technologies={["OWASP", "NIST", "ISO 27001", "SIEM", "Firewalls", "IDS/IPS", "Encryption", "MFA", "IAM"]}
      whyChooseUs={[
        { title: "Comprehensive Protection", description: "Multi-layered security across all attack vectors.", icon: "🛡️" },
        { title: "Compliance Expertise", description: "Deep knowledge of industry compliance requirements.", icon: "📋" },
        { title: "Rapid Response", description: "24/7 monitoring and fast incident response times.", icon: "⚡" },
        { title: "Transparent Practices", description: "Clear security policies and transparent communication.", icon: "🔍" }
      ]}
      testimonials={[
        {
          quote: "Their security assessment identified critical vulnerabilities we didn't know existed, and their remediation was flawless.",
          author: "Mark Thompson",
          position: "CISO",
          company: "SecureBank"
        },
        {
          quote: "We achieved SOC 2 compliance in record time thanks to their expertise and guidance.",
          author: "Emily Davis",
          position: "Security Director",
          company: "CloudTech"
        }
      ]}
      faq={[
        { question: "What security standards do you support?", answer: "We support GDPR, HIPAA, SOC 2, PCI DSS, ISO 27001, and other industry standards." },
        { question: "How quickly can you respond to security incidents?", answer: "Our incident response team responds within 1 hour of detection." },
        { question: "Do you provide 24/7 security monitoring?", answer: "Yes, we offer 24/7 security monitoring and alerting services." },
        { question: "Can you help with compliance audits?", answer: "Yes, we assist with compliance audits and help you achieve certification." },
        { question: "What's included in a security assessment?", answer: "Security assessments include vulnerability scanning, penetration testing, and comprehensive security audits." }
      ]}
      ctaTitle="Ready to secure your digital assets?"
      ctaDescription="Let's assess your security posture and implement comprehensive protection for your business."
      ctaButtonText="Schedule Security Assessment"
      ctaButtonHref="/contact"
    />
  );
}
