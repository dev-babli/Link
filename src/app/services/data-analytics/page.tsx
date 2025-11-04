"use client";

import EnhancedServicePageTemplate from "@/components/EnhancedServicePageTemplate";

export default function DataAnalyticsPage() {
    return (
        <EnhancedServicePageTemplate
            serviceName="Data Analytics"
            heroTitle="Turn Your Data Into Actionable Insights"
            heroDescription="Transform data into insights while respecting user privacy. We provide transparent analytics with clear data usage policies, helping you make data-driven decisions that drive business success."
            heroImage="/images/service-cards/data-analytics-service-card.webp"
            primaryCTA={{
                text: "Start Analytics Project",
                href: "/contact"
            }}
            secondaryCTA={{
                text: "View Analytics Examples",
                href: "/services"
            }}
            approachTabData={[
                {
                    id: 0,
                    number: '01',
                    label: 'Discovery',
                    title: ['Discover your potential with ', 'data assessment'],
                    subtitle: 'Data Assessment',
                    description: 'We begin every analytics project with a comprehensive assessment of your data sources, quality, and business requirements.',
                    features: ['Data Audit', 'Quality Assessment', 'Requirements Analysis', 'Privacy Review'],
                    image: '/images/tabbedfeatures_cards/discovery.jpeg',
                    fallback: '/images/tabbedfeatures_cards/discovery.jpeg',
                },
                {
                    id: 1,
                    number: '02',
                    label: 'Design',
                    title: ['Design insights with ', 'analytics architecture'],
                    subtitle: 'Analytics Architecture Design',
                    description: 'Our data architects design scalable analytics solutions that transform your data into actionable business insights.',
                    features: ['Data Architecture', 'Dashboard Design', 'Reporting Framework', 'Privacy Compliance'],
                    image: '/images/tabbedfeatures_cards/development.jpeg',
                    fallback: '/images/tabbedfeatures_cards/development.jpeg',
                },
                {
                    id: 2,
                    number: '03',
                    label: 'Development',
                    title: ['Build with advanced ', 'analytics technologies'],
                    subtitle: 'Analytics Development',
                    description: 'We develop robust analytics solutions using modern technologies and best practices for data processing and visualization.',
                    features: ['Data Processing', 'Model Development', 'Dashboard Creation', 'API Development'],
                    image: '/images/tabbedfeatures_cards/testing.jpeg',
                    fallback: '/images/tabbedfeatures_cards/testing.jpeg',
                },
                {
                    id: 3,
                    number: '04',
                    label: 'Deployment',
                    title: ['Deploy with continuous ', 'analytics monitoring'],
                    subtitle: 'Analytics Deployment',
                    description: 'Seamless deployment with ongoing monitoring and optimization to ensure your analytics deliver continuous value.',
                    features: ['Production Deployment', 'Performance Monitoring', 'Data Quality Checks', 'Ongoing Optimization'],
                    image: '/images/tabbedfeatures_cards/deployment.jpeg',
                    fallback: '/images/tabbedfeatures_cards/deployment.jpeg',
                },
            ]}
            challenges={[
                { challenge: "Data scattered across multiple systems and platforms", solution: "Data integration and consolidation" },
                { challenge: "Difficulty extracting meaningful insights from raw data", solution: "Advanced analytics and visualization" },
                { challenge: "Lack of real-time analytics and reporting capabilities", solution: "Real-time dashboards and reporting" },
                { challenge: "Privacy concerns and data governance requirements", solution: "Privacy-first analytics and governance" },
                { challenge: "Need for predictive analytics and forecasting", solution: "Machine learning and predictive models" }
            ]}
            solutions={[
                { title: "Real-time Dashboards", description: "Live data visualization", icon: "📊" },
                { title: "Predictive Analytics", description: "Forecast trends", icon: "🔮" },
                { title: "Data Integration", description: "Unified data sources", icon: "🔗" }
            ]}
            capabilities={[
                { title: "Business Intelligence", description: "Interactive dashboards", icon: "📈" },
                { title: "Data Visualization", description: "Charts and reports", icon: "📊" },
                { title: "Predictive Modeling", description: "ML forecasting", icon: "🤖" },
                { title: "Data Warehousing", description: "Centralized storage", icon: "🏗️" },
                { title: "ETL Pipelines", description: "Data processing", icon: "⚙️" },
                { title: "Privacy Compliance", description: "GDPR, CCPA ready", icon: "🔒" }
            ]}
            technologies={[
                "Python", "R", "Tableau", "Power BI", "Apache Spark", "Snowflake"
            ]}
            whyChooseUs={[
                {
                    title: "Privacy First",
                    description: "Transparent analytics with clear data usage policies and user consent",
                    icon: "🔒"
                },
                {
                    title: "Actionable Insights",
                    description: "Focus on business outcomes with clear, actionable recommendations",
                    icon: "💡"
                },
                {
                    title: "Real-time Analytics",
                    description: "Live dashboards and instant insights for faster decision-making",
                    icon: "⚡"
                }
            ]}
            ctaTitle="Ready to Unlock Your Data's Potential?"
            ctaDescription="Transform your data into actionable insights that drive business growth and competitive advantage."
            ctaButtonText="Start Analytics"
            ctaButtonHref="/contact"
            primaryColor="bg-emerald-500"
            gradientFrom="from-emerald-500"
            gradientTo="to-blue-500"
        />
    );
}