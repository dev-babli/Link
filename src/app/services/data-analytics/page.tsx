"use client";

import PremiumServiceTemplate from "@/components/PremiumServiceTemplate";

export default function DataAnalyticsPage() {
  return (
    <PremiumServiceTemplate
      serviceName="Data Analytics"
      heroTitle="Turn Your Data Into Actionable Insights"
      heroSubtitle="Business Intelligence"
      heroDescription="Transform data into insights while respecting user privacy. We provide transparent analytics with clear data usage policies, helping you make data-driven decisions that drive business success."
      heroImage="/images/service-cards/data-analytics-service-card.webp"
      primaryCTA={{ text: "Start Analytics Project", href: "/contact" }}
      secondaryCTA={{ text: "View Analytics Examples", href: "/services" }}
      impactMetrics={[
        { metric: "Data Processing", value: "10x", description: "Faster data processing" },
        { metric: "Insight Accuracy", value: "95%", description: "Predictive accuracy" },
        { metric: "Cost Reduction", value: "30%", description: "Operational cost savings" },
        { metric: "Decision Speed", value: "5x", description: "Faster decision making" }
      ]}
      features={[
        {
          icon: "📊",
          title: "Data Warehousing",
          description: "Centralized data warehouses for unified analytics."
        },
        {
          icon: "📈",
          title: "Business Intelligence",
          description: "Interactive dashboards and reporting solutions."
        },
        {
          icon: "🔮",
          title: "Predictive Analytics",
          description: "Machine learning models for forecasting and predictions."
        },
        {
          icon: "🔄",
          title: "Data Pipelines",
          description: "Automated ETL pipelines for data processing."
        },
        {
          icon: "👁️",
          title: "Real-Time Analytics",
          description: "Real-time dashboards and streaming analytics."
        },
        {
          icon: "🔒",
          title: "Data Privacy",
          description: "Privacy-compliant analytics with data governance."
        }
      ]}
      useCases={[
        {
          title: "Business Intelligence",
          description: "Executive dashboards and KPI tracking",
          examples: [
            "Executive dashboards",
            "KPI tracking",
            "Performance metrics"
          ],
          icon: "📊"
        },
        {
          title: "Customer Analytics",
          description: "Customer behavior and segmentation",
          examples: [
            "Customer segmentation",
            "Behavior analysis",
            "Churn prediction"
          ],
          icon: "👥"
        },
        {
          title: "Financial Analytics",
          description: "Financial reporting and forecasting",
          examples: [
            "Financial reporting",
            "Revenue forecasting",
            "Cost analysis"
          ],
          icon: "💰"
        },
        {
          title: "Marketing Analytics",
          description: "Campaign performance and ROI",
          examples: [
            "Campaign analytics",
            "ROI measurement",
            "Attribution modeling"
          ],
          icon: "📢"
        },
        {
          title: "Operations Analytics",
          description: "Operational efficiency and optimization",
          examples: [
            "Process optimization",
            "Resource utilization",
            "Performance monitoring"
          ],
          icon: "⚙️"
        },
        {
          title: "Product Analytics",
          description: "Product usage and feature adoption",
          examples: [
            "Feature adoption",
            "User engagement",
            "Product metrics"
          ],
          icon: "📱"
        }
      ]}
      capabilities={[
        { title: "Data Warehousing", description: "Snowflake, BigQuery, Redshift data warehouses.", icon: "📊" },
        { title: "BI Tools", description: "Tableau, Power BI, Looker dashboards.", icon: "📈" },
        { title: "Data Pipelines", description: "ETL/ELT pipelines with Airflow, dbt.", icon: "🔄" },
        { title: "ML Analytics", description: "Predictive models and ML pipelines.", icon: "🔮" },
        { title: "Real-Time Analytics", description: "Streaming analytics and real-time dashboards.", icon: "⚡" },
        { title: "Data Governance", description: "Data quality, privacy, and compliance.", icon: "🔒" }
      ]}
      technologies={["Snowflake", "BigQuery", "Redshift", "Tableau", "Power BI", "Looker", "Airflow", "dbt", "Python", "SQL", "Spark"]}
      whyChooseUs={[
        { title: "Data-Driven Insights", description: "Transform raw data into actionable business insights.", icon: "📊" },
        { title: "Privacy Compliant", description: "Analytics with full privacy and compliance support.", icon: "🔒" },
        { title: "Scalable Solutions", description: "Handle data at any scale with cloud-native solutions.", icon: "📈" },
        { title: "Fast Implementation", description: "Quick setup and deployment of analytics solutions.", icon: "⚡" }
      ]}
      testimonials={[
        {
          quote: "Their analytics platform gave us insights we never had before, leading to 25% revenue growth.",
          author: "David Park",
          position: "VP Analytics",
          company: "RetailCorp"
        },
        {
          quote: "The real-time dashboards transformed how we make decisions, reducing decision time by 80%.",
          author: "Sarah Johnson",
          position: "Data Director",
          company: "TechFlow"
        }
      ]}
      faq={[
        { question: "What data sources can you integrate?", answer: "We integrate with databases, APIs, cloud storage, and third-party platforms." },
        { question: "How long does analytics setup take?", answer: "Typically 4-8 weeks depending on data complexity and requirements." },
        { question: "Do you provide ongoing support?", answer: "Yes, we provide ongoing maintenance, updates, and optimization." },
        { question: "What about data privacy?", answer: "We ensure full compliance with GDPR, CCPA, and other privacy regulations." },
        { question: "Can you build custom dashboards?", answer: "Yes, we create custom dashboards tailored to your specific business needs." }
      ]}
      ctaTitle="Ready to unlock insights from your data?"
      ctaDescription="Let's build analytics solutions that transform your data into actionable business intelligence."
      ctaButtonText="Start Analytics Project"
      ctaButtonHref="/contact"
    />
  );
}
