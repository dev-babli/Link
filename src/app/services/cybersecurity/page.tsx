"use client";

import GroviaServiceTemplate from "@/components/GroviaServiceTemplate";

export default function CybersecurityPage() {
    return (
        <GroviaServiceTemplate
            serviceName="Cybersecurity"
            heroTitle="Protect Your Digital Assets with Comprehensive Security Solutions"
            heroDescription="Safeguard your business with comprehensive security solutions. From threat assessment to incident response, we keep your digital assets secure with transparent security practices and clear communication."
            heroImage="/images/service-cards/cybersecurity-service-card.webp"
            primaryCTA={{
                text: "Security Assessment",
                href: "/contact"
            }}
            secondaryCTA={{
                text: "Security Resources",
                href: "/services"
            }}
            approachTabData={[
                {
                    id: 0,
                    number: '01',
                    label: 'Assessment',
                    title: ['Discover your potential with ', 'security assessment'],
                    subtitle: 'Security Assessment',
                    description: 'We begin every security project with a comprehensive assessment of your current security posture, vulnerabilities, and compliance requirements.',
                    features: ['Vulnerability Assessment', 'Compliance Review', 'Risk Analysis', 'Security Audit'],
                    image: '/images/tabbedfeatures_cards/discovery.jpeg',
                    fallback: '/images/tabbedfeatures_cards/discovery.jpeg',
                },
                {
                    id: 1,
                    number: '02',
                    label: 'Design',
                    title: ['Design secure solutions with ', 'security architecture'],
                    subtitle: 'Security Architecture Design',
                    description: 'Our security architects design comprehensive security frameworks tailored to your specific business needs and threat landscape.',
                    features: ['Security Framework', 'Policy Development', 'Architecture Design', 'Compliance Planning'],
                    image: '/images/tabbedfeatures_cards/development.jpeg',
                    fallback: '/images/tabbedfeatures_cards/development.jpeg',
                },
                {
                    id: 2,
                    number: '03',
                    label: 'Implementation',
                    title: ['Implement with confidence using ', 'security best practices'],
                    subtitle: 'Security Implementation',
                    description: 'We implement security solutions using industry best practices and proven methodologies to protect your digital assets.',
                    features: ['Security Tools', 'Monitoring Setup', 'Access Controls', 'Incident Response'],
                    image: '/images/tabbedfeatures_cards/testing.jpeg',
                    fallback: '/images/tabbedfeatures_cards/testing.jpeg',
                },
                {
                    id: 3,
                    number: '04',
                    label: 'Monitoring',
                    title: ['Monitor with continuous ', 'security management'],
                    subtitle: 'Security Monitoring',
                    description: 'Ongoing monitoring and management to ensure your security posture remains strong and adaptive to emerging threats.',
                    features: ['24/7 Monitoring', 'Threat Detection', 'Incident Response', 'Security Updates'],
                    image: '/images/tabbedfeatures_cards/deployment.jpeg',
                    fallback: '/images/tabbedfeatures_cards/deployment.jpeg',
                },
            ]}
            challenges={[
                { challenge: "Increasing cyber threats and sophisticated attacks", solution: "Advanced threat detection and response" },
                { challenge: "Compliance requirements and regulatory obligations", solution: "Compliance automation and monitoring" },
                { challenge: "Lack of security expertise and resources", solution: "Managed security services and training" },
                { challenge: "Outdated security measures and vulnerabilities", solution: "Security modernization and patching" },
                { challenge: "Incident response and recovery planning", solution: "Automated incident response and recovery" }
            ]}
            solutions={[
                { title: "Security Audits", description: "Comprehensive assessments", icon: "🔍" },
                { title: "Threat Protection", description: "Advanced security measures", icon: "🛡️" },
                { title: "Incident Response", description: "Rapid threat mitigation", icon: "⚡" }
            ]}
            capabilities={[
                { title: "Security Audits", description: "Comprehensive assessments", icon: "🔍" },
                { title: "Penetration Testing", description: "Vulnerability assessments", icon: "🎯" },
                { title: "Compliance", description: "GDPR, HIPAA, SOC 2", icon: "📋" },
                { title: "Incident Response", description: "24/7 threat monitoring", icon: "🚨" },
                { title: "Security Training", description: "Team education", icon: "🎓" },
                { title: "Risk Management", description: "Strategic planning", icon: "📊" }
            ]}
            technologies={[
                "Nessus", "Burp Suite", "OWASP ZAP", "Splunk", "CrowdStrike", "SentinelOne"
            ]}
            whyChooseUs={[
                {
                    title: "Security Expertise",
                    description: "Certified security professionals with deep threat intelligence",
                    icon: "🛡️"
                },
                {
                    title: "Proactive Approach",
                    description: "Prevent attacks before they happen with comprehensive monitoring",
                    icon: "🔍"
                },
                {
                    title: "Compliance Focus",
                    description: "Ensure regulatory compliance with transparent security practices",
                    icon: "📋"
                }
            ]}
            ctaTitle="Ready to Secure Your Business?"
            ctaDescription="Protect your digital assets with our comprehensive cybersecurity solutions and expert guidance."
            ctaButtonText="Get Security Assessment"
            ctaButtonHref="/contact"
            primaryColor="bg-red-500"
            gradientFrom="from-red-500"
            gradientTo="to-pink-500"
        />
    );
}