"use client";

import GroviaServiceTemplate from "@/components/GroviaServiceTemplate";

export default function AutomationTestingPage() {
  return (
    <GroviaServiceTemplate
      serviceName="Automation Testing"
      heroTitle="Ensure Quality with Comprehensive Testing Solutions"
      heroDescription="Comprehensive testing solutions to ensure quality and reliability. Automated testing that catches issues early, integrates with your CI/CD pipeline, and provides confidence in every release."
      heroImage="/images/service-cards/automation-testing-service-card.webp"
      primaryCTA={{
        text: "Start Testing Project",
        href: "/contact"
      }}
      secondaryCTA={{
        text: "View Testing Examples",
        href: "/services"
      }}
      approachTabData={[
        {
          id: 0,
          number: '01',
          label: 'Assessment',
          title: ['Discover your potential with ', 'testing assessment'],
          subtitle: 'Testing Assessment',
          description: 'We begin every testing project with a comprehensive assessment of your current testing processes, coverage gaps, and automation opportunities.',
          features: ['Test Coverage Analysis', 'Process Review', 'Tool Evaluation', 'Automation Planning'],
          image: '/images/tabbedfeatures_cards/discovery.jpeg',
          fallback: '/images/tabbedfeatures_cards/discovery.jpeg',
        },
        {
          id: 1,
          number: '02',
          label: 'Design',
          title: ['Design comprehensive ', 'testing strategies'],
          subtitle: 'Testing Strategy Design',
          description: 'Our testing architects design comprehensive testing strategies that ensure quality while accelerating your development cycles.',
          features: ['Test Strategy', 'Framework Design', 'CI/CD Integration', 'Quality Gates'],
          image: '/images/tabbedfeatures_cards/development.jpeg',
          fallback: '/images/tabbedfeatures_cards/development.jpeg',
        },
        {
          id: 2,
          number: '03',
          label: 'Implementation',
          title: ['Implement with ', 'automated testing'],
          subtitle: 'Test Implementation',
          description: 'We implement automated testing solutions using industry-leading tools and best practices for maximum coverage and reliability.',
          features: ['Test Automation', 'Framework Setup', 'CI/CD Integration', 'Performance Testing'],
          image: '/images/tabbedfeatures_cards/testing.jpeg',
          fallback: '/images/tabbedfeatures_cards/testing.jpeg',
        },
        {
          id: 3,
          number: '04',
          label: 'Monitoring',
          title: ['Monitor with continuous ', 'quality assurance'],
          subtitle: 'Quality Monitoring',
          description: 'Ongoing monitoring and optimization to ensure your testing processes deliver consistent quality and catch issues early.',
          features: ['Quality Metrics', 'Test Reporting', 'Continuous Improvement', 'Ongoing Support'],
          image: '/images/tabbedfeatures_cards/deployment.jpeg',
          fallback: '/images/tabbedfeatures_cards/deployment.jpeg',
        },
      ]}
      challenges={[
        { challenge: "Manual testing processes slowing down development cycles", solution: "Automated testing pipelines" },
        { challenge: "Inconsistent test coverage across different features", solution: "Comprehensive test coverage strategies" },
        { challenge: "Difficulty testing across multiple browsers and devices", solution: "Cross-platform testing automation" },
        { challenge: "Lack of automated regression testing", solution: "Automated regression test suites" },
        { challenge: "Integration testing complexity with multiple systems", solution: "API testing and integration automation" }
      ]}
      solutions={[
        { title: "Automated Testing", description: "Comprehensive test suites", icon: "🤖" },
        { title: "CI/CD Integration", description: "Continuous testing", icon: "🔄" },
        { title: "Cross-Platform", description: "Multi-browser testing", icon: "🌐" }
      ]}
      capabilities={[
        { title: "Unit Testing", description: "Code-level testing", icon: "🧪" },
        { title: "Integration Testing", description: "API & system testing", icon: "🔗" },
        { title: "E2E Testing", description: "Full user journey testing", icon: "🎯" },
        { title: "Performance Testing", description: "Load & stress testing", icon: "⚡" },
        { title: "Security Testing", description: "Vulnerability scanning", icon: "🔒" },
        { title: "Mobile Testing", description: "iOS & Android testing", icon: "📱" }
      ]}
      technologies={[
        "Selenium", "Cypress", "Jest", "Playwright", "Postman", "JMeter"
      ]}
      whyChooseUs={[
        {
          title: "Testing Expertise",
          description: "Comprehensive testing strategies tailored to your technology stack",
          icon: "🧪"
        },
        {
          title: "CI/CD Integration",
          description: "Seamless integration with your development workflow",
          icon: "🔄"
        },
        {
          title: "Quality Assurance",
          description: "Focus on preventing bugs before they reach production",
          icon: "✅"
        }
      ]}
      ctaTitle="Ready to Improve Your Testing?"
      ctaDescription="Implement comprehensive testing solutions that ensure quality and accelerate your development process."
      ctaButtonText="Start Testing"
      ctaButtonHref="/contact"
      primaryColor="bg-yellow-500"
      gradientFrom="from-yellow-500"
      gradientTo="to-orange-500"
    />
  );
}