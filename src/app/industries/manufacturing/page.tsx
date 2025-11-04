"use client";

import { EnhancedEnhancedIndustryPageTemplate } from "@/components/EnhancedEnhancedIndustryPageTemplate";

export default function ManufacturingPage() {
  return (
    <EnhancedIndustryPageTemplate
      title="Manufacturing & Automotive"
      subtitle="Smart Manufacturing Solutions"
      description="Transform your manufacturing operations with Industry 4.0 technologies. We build smart factories, optimize supply chains, and deliver automation solutions that drive operational excellence and competitive advantage."
      heroImage="/images/industry_cards/Manufacturing and Automotive.webp"
      keyStats={[
        { value: "35+", label: "Manufacturing Projects" },
        { value: "40%", label: "Average Efficiency Gain" },
        { value: "$50M+", label: "Cost Savings Generated" },
        { value: "20+", label: "Manufacturing Clients" },
      ]}
      challenges={[
        "Optimizing production lines and reducing downtime",
        "Integrating legacy manufacturing systems with modern IoT",
        "Managing complex supply chains and inventory",
        "Ensuring quality control and compliance",
        "Implementing predictive maintenance strategies",
        "Reducing operational costs while maintaining quality",
        "Managing workforce training and skills development",
        "Adapting to changing market demands and regulations",
      ]}
      solutions={[
        {
          title: "Smart Factory Automation",
          description: "IoT-powered manufacturing systems that connect machines, sensors, and production lines for real-time monitoring, predictive maintenance, and automated quality control."
        },
        {
          title: "Supply Chain Optimization",
          description: "Advanced analytics platforms that optimize inventory management, reduce waste, streamline logistics, and provide end-to-end supply chain visibility."
        },
        {
          title: "Manufacturing Execution Systems (MES)",
          description: "Comprehensive MES solutions that track production in real-time, manage work orders, optimize scheduling, and ensure regulatory compliance."
        },
        {
          title: "Quality Management Systems",
          description: "Digital quality control platforms that automate inspections, track defects, manage non-conformances, and ensure consistent product quality."
        },
        {
          title: "Predictive Maintenance",
          description: "AI-driven maintenance systems that predict equipment failures, optimize maintenance schedules, and reduce unplanned downtime."
        },
        {
          title: "Manufacturing Analytics",
          description: "Real-time dashboards and analytics that provide insights into production efficiency, equipment performance, and operational metrics."
        },
      ]}
      caseStudies={[
        {
          title: "Automotive Parts Manufacturer - Smart Factory Implementation",
          description: "Deployed a comprehensive Industry 4.0 solution across 5 production facilities, integrating IoT sensors, MES, and predictive analytics.",
          result: "Reduced downtime by 45%, improved OEE by 32%, and generated $12M in annual cost savings"
        },
        {
          title: "Consumer Goods Company - Supply Chain Optimization",
          description: "Implemented an AI-powered supply chain optimization platform that integrates with ERP systems and provides real-time visibility across the entire supply network.",
          result: "Reduced inventory costs by 28%, improved on-time delivery by 35%, and eliminated $8M in waste"
        },
        {
          title: "Aerospace Manufacturer - Quality Management System",
          description: "Developed a digital quality management platform with automated inspection workflows and real-time defect tracking for aerospace components.",
          result: "Improved first-pass yield by 42%, reduced quality costs by 38%, and achieved AS9100 certification"
        },
      ]}
      expertise={[
        "Industry 4.0",
        "IoT & Sensors",
        "MES Systems",
        "SCADA Integration",
        "PLC Programming",
        "Robotics & Automation",
        "Supply Chain Management",
        "Quality Management",
        "Predictive Maintenance",
        "Digital Twins",
        "Manufacturing Analytics",
        "Lean Manufacturing",
      ]}
    />
  );
}
