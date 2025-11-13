"use client";

import MainlineServiceTemplate from "@/components/MainlineServiceTemplate";

export default function AutomationTestingPage() {
  return (
    <MainlineServiceTemplate
      serviceName="Automation Testing"
      heroTitle="Ensure Quality with Comprehensive Testing Solutions"
      heroSubtitle="Quality Assurance"
      heroDescription="Comprehensive testing solutions to ensure quality and reliability. Automated testing that catches issues early, integrates with your CI/CD pipeline, and provides confidence in every release."
      heroImage="/mainline_service_template/hero.webp"
      primaryCTA={{ text: "Start Testing Project", href: "/contact" }}
      secondaryCTA={{ text: "View Testing Examples", href: "/services" }}
      impactMetrics={[
        { metric: "Bug Detection", value: "95%", description: "Early bug detection rate" },
        { metric: "Test Coverage", value: "90%+", description: "Code coverage achieved" },
        { metric: "Time Saved", value: "70%", description: "Reduction in manual testing" },
        { metric: "Release Confidence", value: "99%", description: "Confidence in releases" }
      ]}
      features={[
        {
          icon: "🤖",
          title: "Test Automation",
          description: "Comprehensive automated test suites for web, mobile, and API testing."
        },
        {
          icon: "🔄",
          title: "CI/CD Integration",
          description: "Seamless integration with your CI/CD pipeline for continuous testing."
        },
        {
          icon: "📊",
          title: "Test Reporting",
          description: "Detailed test reports and analytics for quality insights."
        },
        {
          icon: "⚡",
          title: "Performance Testing",
          description: "Load, stress, and performance testing for scalable applications."
        },
        {
          icon: "🔒",
          title: "Security Testing",
          description: "Automated security scanning and vulnerability testing."
        },
        {
          icon: "👁️",
          title: "Visual Regression",
          description: "Automated visual testing to catch UI regressions."
        }
      ]}
      useCases={[
        {
          title: "Web Applications",
          description: "Comprehensive testing for web applications",
          examples: [
            "E2E testing",
            "API testing",
            "Visual regression"
          ],
          icon: "🌐"
        },
        {
          title: "Mobile Apps",
          description: "Testing for iOS and Android applications",
          examples: [
            "Device testing",
            "Cross-platform testing",
            "Performance testing"
          ],
          icon: "📱"
        },
        {
          title: "APIs",
          description: "API testing and validation",
          examples: [
            "REST API testing",
            "GraphQL testing",
            "Integration testing"
          ],
          icon: "🔌"
        },
        {
          title: "E-Commerce",
          description: "Critical path testing for e-commerce",
          examples: [
            "Checkout flows",
            "Payment testing",
            "Inventory validation"
          ],
          icon: "🛒"
        },
        {
          title: "Enterprise Software",
          description: "Testing for enterprise applications",
          examples: [
            "Workflow testing",
            "Data validation",
            "Security testing"
          ],
          icon: "🏢"
        },
        {
          title: "SaaS Platforms",
          description: "Testing for SaaS applications",
          examples: [
            "Multi-tenant testing",
            "Subscription flows",
            "Feature testing"
          ],
          icon: "☁️"
        }
      ]}
      capabilities={[
        { title: "E2E Testing", description: "Selenium, Cypress, Playwright for end-to-end testing.", icon: "🌐" },
        { title: "API Testing", description: "Postman, REST Assured, and custom API test frameworks.", icon: "🔌" },
        { title: "Mobile Testing", description: "Appium, Espresso, XCUITest for mobile app testing.", icon: "📱" },
        { title: "Performance Testing", description: "JMeter, LoadRunner, and custom performance tests.", icon: "⚡" },
        { title: "Visual Testing", description: "Percy, Applitools for visual regression testing.", icon: "👁️" },
        { title: "Security Testing", description: "OWASP ZAP, Burp Suite for security testing.", icon: "🔒" }
      ]}
      technologies={["Selenium", "Cypress", "Playwright", "Jest", "Mocha", "Postman", "Appium", "JMeter", "TestNG", "Pytest"]}
      whyChooseUs={[
        { title: "Comprehensive Coverage", description: "Test all layers from UI to API to database.", icon: "📊" },
        { title: "CI/CD Integration", description: "Seamless integration with your development workflow.", icon: "🔄" },
        { title: "Fast Execution", description: "Parallel test execution for faster feedback.", icon: "⚡" },
        { title: "Maintainable Tests", description: "Well-structured, maintainable test frameworks.", icon: "🛠️" }
      ]}
      testimonials={[
        {
          quote: "Their automated testing caught critical bugs before production, saving us from costly issues.",
          author: "Robert Martinez",
          position: "QA Manager",
          company: "AppTech"
        },
        {
          quote: "The test automation reduced our testing time by 70% while improving quality significantly.",
          author: "Jennifer Lee",
          position: "Engineering Director",
          company: "CloudSoft"
        }
      ]}
      faq={[
        { question: "What types of testing do you offer?", answer: "We offer E2E, API, mobile, performance, security, and visual regression testing." },
        { question: "How long does it take to set up test automation?", answer: "Typically 2-4 weeks depending on application complexity and test scope." },
        { question: "Can you integrate with our CI/CD pipeline?", answer: "Yes, we integrate with all major CI/CD tools including Jenkins, GitHub Actions, and GitLab CI." },
        { question: "Do you maintain the test suites?", answer: "Yes, we provide ongoing maintenance and updates to keep tests current with your application." },
        { question: "What's the ROI of test automation?", answer: "Most clients see 60-80% reduction in testing time and significant improvement in release confidence." }
      ]}
      ctaTitle="Ready to ensure quality with automation?"
      ctaDescription="Let's set up comprehensive test automation that catches issues early and gives you confidence in every release."
      ctaButtonText="Start Testing Project"
      ctaButtonHref="/contact"
    />
  );
}
