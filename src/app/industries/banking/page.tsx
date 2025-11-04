"use client";

import { EnhancedIndustryPageTemplate } from "@/components/EnhancedIndustryPageTemplate";

export default function BankingPage() {
  return (
    <EnhancedIndustryPageTemplate
      title="Banking & Finance"
      subtitle="Digital Banking Solutions"
      description="Empower financial institutions with secure, compliant, and innovative technology solutions. We build fintech platforms, payment systems, and banking applications that deliver exceptional customer experiences while ensuring regulatory compliance."
      heroImage="/images/industry_cards/Banking and Finance.webp"
      keyStats={[
        { value: "50+", label: "Finance Projects" },
        { value: "100%", label: "Regulatory Compliant" },
        { value: "$500M+", label: "Transactions Processed" },
        { value: "25+", label: "Financial Clients" },
      ]}
      challenges={[
        "Ensuring regulatory compliance (PCI-DSS, GDPR, SOX)",
        "Modernizing legacy banking systems",
        "Preventing fraud and cybersecurity threats",
        "Improving customer experience and digital banking",
        "Managing risk and compliance reporting",
        "Integrating with third-party payment providers",
        "Enabling real-time transaction processing",
        "Supporting open banking and API integrations",
      ]}
      solutions={[
        {
          title: "Digital Banking Platforms",
          description: "Comprehensive mobile and web banking applications with features including account management, transfers, bill pay, investment tracking, and personal financial management."
        },
        {
          title: "Payment Processing Systems",
          description: "Secure payment gateways and processing systems that handle credit cards, ACH transfers, wire transfers, and real-time payment networks."
        },
        {
          title: "Core Banking Systems",
          description: "Modern core banking platforms that manage accounts, loans, deposits, and transactions while ensuring regulatory compliance and data security."
        },
        {
          title: "Fraud Detection & Prevention",
          description: "AI-powered fraud detection systems that monitor transactions in real-time, identify suspicious patterns, and prevent financial fraud."
        },
        {
          title: "Compliance & Risk Management",
          description: "Automated compliance platforms that manage KYC/AML processes, regulatory reporting, risk assessments, and audit trails."
        },
        {
          title: "Open Banking APIs",
          description: "Secure API platforms that enable open banking, third-party integrations, and innovative fintech partnerships while maintaining security and compliance."
        },
      ]}
      caseStudies={[
        {
          title: "Regional Bank - Digital Transformation",
          description: "Developed a comprehensive digital banking platform with mobile apps, online banking, and integrated payment processing for a regional bank with 150+ branches.",
          result: "Increased mobile banking adoption by 65%, reduced call center costs by 40%, and improved customer satisfaction scores by 32%"
        },
        {
          title: "Fintech Startup - Payment Platform",
          description: "Built a secure payment processing platform with fraud detection, real-time transaction monitoring, and compliance automation for a fast-growing fintech company.",
          result: "Processed $500M+ in transactions, achieved PCI-DSS Level 1 certification, and reduced fraud incidents by 85%"
        },
        {
          title: "Credit Union - Core Banking Modernization",
          description: "Migrated legacy core banking systems to a modern cloud-based platform with improved performance, enhanced security, and better regulatory compliance.",
          result: "Reduced transaction processing time by 70%, improved system uptime to 99.9%, and reduced infrastructure costs by 45%"
        },
      ]}
      expertise={[
        "Core Banking",
        "Payment Processing",
        "PCI-DSS Compliance",
        "KYC/AML Solutions",
        "Fraud Detection",
        "Mobile Banking",
        "Open Banking APIs",
        "Blockchain & Crypto",
        "Risk Management",
        "RegTech Solutions",
        "Wealth Management",
        "Lending Platforms",
      ]}
    />
  );
}
