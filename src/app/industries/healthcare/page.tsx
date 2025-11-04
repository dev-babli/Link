"use client";

import { EnhancedIndustryPageTemplate } from "@/components/EnhancedIndustryPageTemplate";

export default function HealthcarePage() {
  return (
    <EnhancedIndustryPageTemplate
      title="Healthcare & Life Sciences"
      subtitle="Digital Health Solutions"
      description="Transform healthcare delivery with innovative technology solutions. We build HIPAA-compliant platforms that improve patient outcomes, streamline operations, and drive medical innovation."
      heroImage="/images/industry_cards/Healthcar and Lifesciences.webp"
      keyStats={[
        { value: "40+", label: "Healthcare Projects" },
        { value: "100%", label: "HIPAA Compliant" },
        { value: "2M+", label: "Patients Served" },
        { value: "15+", label: "Healthcare Clients" },
      ]}
      challenges={[
        "Maintaining HIPAA compliance across all systems",
        "Integrating legacy healthcare systems with modern technology",
        "Ensuring data security and patient privacy",
        "Managing complex regulatory requirements",
        "Improving patient engagement and outcomes",
        "Reducing operational costs while maintaining quality",
        "Enabling interoperability between healthcare systems",
        "Supporting remote and telemedicine capabilities",
      ]}
      solutions={[
        {
          title: "Electronic Health Records (EHR)",
          description: "Comprehensive EHR systems that streamline patient data management, improve clinical workflows, and enhance care coordination across healthcare providers."
        },
        {
          title: "Telemedicine Platforms",
          description: "Secure video consultation platforms that enable remote patient care, expanding access to healthcare services and improving patient convenience."
        },
        {
          title: "Patient Portals",
          description: "User-friendly portals that empower patients to access their health information, schedule appointments, and communicate with providers."
        },
        {
          title: "Medical Device Integration",
          description: "IoT solutions that connect medical devices, enabling real-time monitoring, data collection, and automated alerts for healthcare providers."
        },
        {
          title: "Healthcare Analytics",
          description: "Advanced analytics platforms that provide insights into patient outcomes, operational efficiency, and clinical performance metrics."
        },
        {
          title: "Clinical Decision Support",
          description: "AI-powered systems that assist healthcare providers in making informed clinical decisions based on patient data and medical research."
        },
      ]}
      caseStudies={[
        {
          title: "Regional Hospital Network - EHR Implementation",
          description: "Deployed a comprehensive EHR system across a network of 12 hospitals, enabling seamless patient data sharing and improving care coordination.",
          result: "Reduced duplicate tests by 35% and improved patient satisfaction scores by 28%"
        },
        {
          title: "Telehealth Platform for Primary Care",
          description: "Developed a HIPAA-compliant telemedicine platform that enables primary care physicians to conduct remote consultations efficiently.",
          result: "Enabled 10,000+ virtual visits monthly and expanded patient access to care by 45%"
        },
        {
          title: "Clinical Analytics Dashboard",
          description: "Built a real-time analytics platform for a large healthcare system to track quality metrics and patient outcomes.",
          result: "Improved clinical decision-making and reduced readmission rates by 22%"
        },
      ]}
      expertise={[
        "HIPAA Compliance",
        "HL7/FHIR Integration",
        "Telemedicine",
        "EHR Systems",
        "Patient Portals",
        "Medical Imaging",
        "Clinical Analytics",
        "Medical IoT",
        "Healthcare AI/ML",
        "Population Health",
        "Care Coordination",
        "Medical Billing",
      ]}
    />
  );
}
