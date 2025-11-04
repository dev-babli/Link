"use client";

import EnhancedServicePageTemplate from "@/components/EnhancedServicePageTemplate";

export default function MobileAppDevelopmentPage() {
  return (
    <EnhancedServicePageTemplate
      serviceName="Mobile App Development"
      heroTitle="Build Powerful, Scalable Mobile Apps that Users Love"
      heroSubtitle="Turn your ideas into seamless, high-performing mobile experiences for iOS and Android."
      heroDescription="At Link Innovation, we design and develop mobile applications that combine stunning interfaces with rock-solid performance. Our expert team crafts native and cross-platform apps that enhance engagement, drive conversions, and deliver measurable business value."
      heroImage="/images/service-cards/mobile-app-development-service-card.webp"
      primaryCTA={{
        text: "Talk to a Mobile Expert",
        href: "/contact"
      }}
      secondaryCTA={{
        text: "Explore Mobile Solutions",
        href: "/services"
      }}
      trustedByLogos={["Apple", "Google", "React Native", "Flutter", "Firebase", "AWS Mobile"]}
      impactMetrics={[
        {
          metric: "User retention",
          value: "+50%",
          description: "Higher engagement through UX-optimized design"
        },
        {
          metric: "App performance",
          value: "99.9%",
          description: "Fast, stable, and responsive across devices"
        },
        {
          metric: "Time-to-market",
          value: "2× faster",
          description: "Streamlined development with agile methods"
        },
        {
          metric: "Cross-platform reach",
          value: "+70%",
          description: "Broaden audience with hybrid frameworks"
        }
      ]}
      approachTabData={[
        {
          id: 0,
          number: '01',
          label: 'Discovery',
          title: ['Discover your potential with ', 'strategic mobile assessment'],
          subtitle: 'Strategic Discovery',
          description: 'We begin every mobile project with a comprehensive discovery phase to understand your business goals, target users, and platform requirements.',
          features: ['Business Analysis', 'User Research', 'Platform Selection', 'Requirements Gathering'],
          image: '/images/tabbedfeatures_cards/discovery.jpeg',
          fallback: '/images/tabbedfeatures_cards/discovery.jpeg',
        },
        {
          id: 1,
          number: '02',
          label: 'Design',
          title: ['Create intuitive interfaces with ', 'mobile-first design'],
          subtitle: 'Mobile UI/UX Design',
          description: 'Our design team creates intuitive, platform-specific interfaces that engage users and drive conversions through mobile-optimized design principles.',
          features: ['Wireframing', 'Prototyping', 'Platform-Specific Design', 'Usability Testing'],
          image: '/images/tabbedfeatures_cards/development.jpeg',
          fallback: '/images/tabbedfeatures_cards/development.jpeg',
        },
        {
          id: 2,
          number: '03',
          label: 'Development',
          title: ['Build powerful apps with ', 'native and cross-platform development'],
          subtitle: 'Agile Development',
          description: 'Our development team uses modern frameworks and best practices to create fast, secure, and maintainable mobile applications.',
          features: ['Native Development', 'Cross-Platform Solutions', 'API Integration', 'Performance Optimization'],
          image: '/images/tabbedfeatures_cards/testing.jpeg',
          fallback: '/images/tabbedfeatures_cards/testing.jpeg',
        },
        {
          id: 3,
          number: '04',
          label: 'Deployment',
          title: ['Launch with confidence using ', 'app store optimization'],
          subtitle: 'App Store Deployment',
          description: 'Seamless deployment processes with app store optimization, monitoring, and ongoing maintenance to keep your app running smoothly.',
          features: ['App Store Submission', 'ASO Optimization', 'Performance Monitoring', 'Ongoing Support'],
          image: '/images/tabbedfeatures_cards/deployment.jpeg',
          fallback: '/images/tabbedfeatures_cards/deployment.jpeg',
        },
      ]}
      challengesTitle="Solving the Challenges of Mobile App Development"
      challenges={[
        {
          challenge: "Fragmented device ecosystem",
          solution: "Deliver consistent performance across devices and OS versions."
        },
        {
          challenge: "High development costs",
          solution: "Use cross-platform frameworks to accelerate delivery."
        },
        {
          challenge: "Security concerns",
          solution: "Implement end-to-end encryption and secure APIs."
        },
        {
          challenge: "Poor app engagement",
          solution: "Design immersive and intuitive user experiences."
        },
        {
          challenge: "Slow performance",
          solution: "Optimize with native SDKs and efficient architecture."
        },
        {
          challenge: "Scalability issues",
          solution: "Build modular, cloud-connected architectures."
        }
      ]}
      capabilitiesTitle="End-to-End Mobile App Development Capabilities"
      capabilities={[
        {
          icon: "📱",
          title: "Native App Development",
          description: "iOS (Swift, SwiftUI) and Android (Kotlin, Java) apps built for performance."
        },
        {
          icon: "🔁",
          title: "Cross-Platform Solutions",
          description: "React Native and Flutter apps with shared code and native feel."
        },
        {
          icon: "☁️",
          title: "Backend & API Development",
          description: "Scalable APIs and databases using Node.js, Firebase, or AWS."
        },
        {
          icon: "🧩",
          title: "UI/UX Design",
          description: "Human-centered design to enhance usability and engagement."
        },
        {
          icon: "🔒",
          title: "App Security",
          description: "Biometric authentication, encryption, and compliance safeguards."
        },
        {
          icon: "📊",
          title: "Maintenance & Analytics",
          description: "Continuous updates, monitoring, and data insights."
        }
      ]}
      industriesTitle="Transforming Industries Through Mobile Innovation"
      industries={[
        {
          industry: "FinTech",
          example: "Secure digital banking and wallet apps"
        },
        {
          industry: "Healthcare",
          example: "Telemedicine and patient engagement solutions"
        },
        {
          industry: "Retail",
          example: "Mobile commerce with personalized offers"
        },
        {
          industry: "Education",
          example: "eLearning and gamified learning apps"
        },
        {
          industry: "Logistics",
          example: "Fleet tracking and delivery optimization"
        },
        {
          industry: "Entertainment",
          example: "Streaming, gaming, and media-rich experiences"
        }
      ]}
      techStackTitle="Our Mobile Technology Stack"
      technologies={["Swift", "Kotlin", "Flutter", "React Native", "Firebase", "AWS Amplify", "Node.js", "MongoDB", "Azure Mobile"]}
      whyChooseUsTitle="Why Choose Link Innovation for Mobile Development"
      whyChooseUs={[
        {
          icon: "📲",
          title: "Cross-Platform Mastery",
          description: "Build once, deploy everywhere — native performance, faster time-to-market."
        },
        {
          icon: "🧠",
          title: "User-First Design",
          description: "We prioritize simplicity, engagement, and accessibility."
        },
        {
          icon: "⚙️",
          title: "Scalable Architecture",
          description: "Build apps that evolve with your user base and business goals."
        },
        {
          icon: "🔒",
          title: "Security at Every Layer",
          description: "End-to-end encryption, data compliance, and regular audits."
        }
      ]}
      testimonialsTitle="What Our Clients Say"
      testimonials={[
        {
          quote: "Our mobile app launch exceeded expectations — Link Innovation delivered an intuitive, secure solution in record time.",
          author: "Rohit Sharma",
          position: "Product Manager",
          company: "FinGrow"
        },
        {
          quote: "They turned our concept into a polished app with 4.9⭐ ratings across platforms.",
          author: "Priya Kapoor",
          position: "CEO",
          company: "EduWave Mobile"
        }
      ]}
      faqTitle="Frequently Asked Questions"
      faq={[
        {
          question: "Do you build both iOS and Android apps?",
          answer: "Yes — we specialize in both native and cross-platform development."
        },
        {
          question: "Which frameworks do you use?",
          answer: "Swift, Kotlin, React Native, Flutter, and Firebase."
        },
        {
          question: "Can you help publish to the App Store and Play Store?",
          answer: "Absolutely — we manage the full deployment and compliance process."
        },
        {
          question: "How do you handle post-launch support?",
          answer: "We provide continuous monitoring, maintenance, and updates."
        },
        {
          question: "What's the typical development timeline?",
          answer: "10–16 weeks, depending on features and complexity."
        }
      ]}
      ctaTitle="Ready to Build Your Next Mobile App?"
      ctaDescription="Let's create an exceptional mobile experience that connects, engages, and scales with your business."
      ctaButtonText="Schedule a Free Consultation"
      ctaButtonHref="/contact"
      primaryColor="bg-blue-500"
      gradientFrom="from-blue-500"
      gradientTo="to-indigo-500"
    />
  );
}