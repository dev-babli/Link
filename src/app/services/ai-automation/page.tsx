"use client";

import GroviaServiceTemplate from "@/components/GroviaServiceTemplate";

export default function AIAutomationPage() {
  return (
    <GroviaServiceTemplate
      serviceName="AI Solutions"
      heroTitle="Transform Your Business with Intelligent Automation"
      heroSubtitle="Leverage artificial intelligence to automate processes, gain insights, and create intelligent solutions."
      heroDescription="At Link Innovation, we design and develop AI solutions that combine cutting-edge technology with ethical practices. Our expert team crafts intelligent automation that enhances productivity, drives insights, and delivers measurable business value while respecting user privacy."
      heroImage="/images/service-cards/ai-automation-service-card.webp"
      primaryCTA={{
        text: "Talk to an AI Expert",
        href: "/contact"
      }}
      secondaryCTA={{
        text: "Explore AI Solutions",
        href: "/services"
      }}
      trustedByLogos={["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Hugging Face", "AWS SageMaker"]}
      impactMetrics={[
        {
          metric: "Process Automation",
          value: "80%",
          description: "Average reduction in manual work"
        },
        {
          metric: "Faster Operations",
          value: "10x",
          description: "Speed improvement with AI"
        },
        {
          metric: "Accuracy Rate",
          value: "95%",
          description: "In predictive analytics"
        },
        {
          metric: "Cost Reduction",
          value: "60%",
          description: "In operational expenses"
        }
      ]}
      approachTabData={[
        {
          id: 0,
          number: '01',
          label: 'Assessment',
          title: ['Discover your potential with ', 'AI readiness assessment'],
          subtitle: 'AI Readiness Assessment',
          description: 'We begin every AI project with a comprehensive assessment of your data, infrastructure, and business processes to determine AI readiness.',
          features: ['Data Quality Analysis', 'Infrastructure Assessment', 'Process Mapping', 'ROI Evaluation'],
          image: '/images/tabbedfeatures_cards/discovery.jpeg',
          fallback: '/images/tabbedfeatures_cards/discovery.jpeg',
        },
        {
          id: 1,
          number: '02',
          label: 'Design',
          title: ['Design intelligent solutions with ', 'ethical AI principles'],
          subtitle: 'AI Solution Design',
          description: 'Our AI team designs custom solutions that align with your business goals while maintaining ethical AI practices and transparency.',
          features: ['Solution Architecture', 'Model Selection', 'Ethics Framework', 'Privacy Design'],
          image: '/images/tabbedfeatures_cards/development.jpeg',
          fallback: '/images/tabbedfeatures_cards/development.jpeg',
        },
        {
          id: 2,
          number: '03',
          label: 'Development',
          title: ['Build intelligent systems with ', 'advanced AI technologies'],
          subtitle: 'AI Development',
          description: 'Our development team uses cutting-edge AI technologies and frameworks to build robust, scalable, and maintainable AI solutions.',
          features: ['Model Training', 'API Development', 'Integration', 'Performance Optimization'],
          image: '/images/tabbedfeatures_cards/testing.jpeg',
          fallback: '/images/tabbedfeatures_cards/testing.jpeg',
        },
        {
          id: 3,
          number: '04',
          label: 'Deployment',
          title: ['Deploy with confidence using ', 'AI monitoring and governance'],
          subtitle: 'AI Production Deployment',
          description: 'Seamless deployment processes with comprehensive monitoring, governance, and continuous learning to keep your AI systems running optimally.',
          features: ['Production Deployment', 'Model Monitoring', 'Governance Framework', 'Continuous Learning'],
          image: '/images/tabbedfeatures_cards/deployment.jpeg',
          fallback: '/images/tabbedfeatures_cards/deployment.jpeg',
        },
      ]}
      challengesTitle="Solving the Challenges of AI Implementation"
      challenges={[
        {
          challenge: "Manual processes consuming valuable time and resources",
          solution: "Intelligent automation that handles repetitive tasks efficiently."
        },
        {
          challenge: "Difficulty extracting insights from massive data volumes",
          solution: "Advanced analytics and machine learning for actionable insights."
        },
        {
          challenge: "Repetitive tasks reducing team productivity",
          solution: "AI-powered workflow automation and process optimization."
        },
        {
          challenge: "Inconsistent decision-making across operations",
          solution: "Data-driven AI systems for consistent, accurate decisions."
        },
        {
          challenge: "High operational costs with limited scalability",
          solution: "Scalable AI solutions that reduce costs and improve efficiency."
        },
        {
          challenge: "Privacy concerns with AI and data usage",
          solution: "Ethical AI with transparent data usage and privacy protection."
        }
      ]}
      capabilitiesTitle="End-to-End AI Solutions Capabilities"
      capabilities={[
        {
          icon: "🤖",
          title: "Machine Learning",
          description: "Custom ML models for predictive analytics and pattern recognition."
        },
        {
          icon: "💬",
          title: "Natural Language Processing",
          description: "Text analysis, chatbots, and conversational AI interfaces."
        },
        {
          icon: "👁️",
          title: "Computer Vision",
          description: "Image recognition, object detection, and visual analysis."
        },
        {
          icon: "⚡",
          title: "Process Automation",
          description: "RPA and intelligent workflow orchestration."
        },
        {
          icon: "📊",
          title: "Predictive Analytics",
          description: "Forecasting trends and predicting outcomes."
        },
        {
          icon: "🔒",
          title: "Ethical AI",
          description: "Transparent, privacy-first AI solutions."
        }
      ]}
      industriesTitle="Transforming Industries Through AI Innovation"
      industries={[
        {
          industry: "Healthcare",
          example: "Medical diagnosis assistance and patient care optimization"
        },
        {
          industry: "Finance",
          example: "Fraud detection and algorithmic trading systems"
        },
        {
          industry: "Manufacturing",
          example: "Predictive maintenance and quality control automation"
        },
        {
          industry: "Retail",
          example: "Personalized recommendations and inventory optimization"
        },
        {
          industry: "Customer Service",
          example: "Intelligent chatbots and automated support systems"
        },
        {
          industry: "Marketing",
          example: "Predictive analytics and automated campaign optimization"
        }
      ]}
      techStackTitle="Our AI Technology Stack"
      technologies={["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "AWS SageMaker", "Google Cloud AI", "Azure AI", "Anthropic"]}
      whyChooseUsTitle="Why Choose Link Innovation for AI Solutions"
      whyChooseUs={[
        {
          icon: "🧠",
          title: "AI Expertise",
          description: "Deep experience in ML, LLMs, and autonomous systems."
        },
        {
          icon: "🔒",
          title: "Ethical AI",
          description: "Transparent, privacy-first AI solutions that respect user data."
        },
        {
          icon: "📈",
          title: "Measurable ROI",
          description: "Focus on business outcomes with clear KPIs and optimization."
        },
        {
          icon: "🏢",
          title: "Enterprise Security",
          description: "Bank-grade security and compliance for mission-critical AI."
        }
      ]}
      testimonialsTitle="What Our Clients Say"
      testimonials={[
        {
          quote: "Our AI implementation exceeded expectations — Link Innovation delivered intelligent automation that transformed our operations.",
          author: "Dr. Amanda Rodriguez",
          position: "CTO",
          company: "MedTech Solutions"
        },
        {
          quote: "They built an AI system that reduced our processing time by 80% while maintaining 99% accuracy.",
          author: "James Park",
          position: "Operations Director",
          company: "DataFlow Inc"
        }
      ]}
      faqTitle="Frequently Asked Questions"
      faq={[
        {
          question: "Do you build both machine learning and generative AI solutions?",
          answer: "Yes — we specialize in ML models, LLMs, and comprehensive AI systems."
        },
        {
          question: "How do you ensure AI ethics and privacy?",
          answer: "We follow ethical AI principles with transparent data usage and privacy protection."
        },
        {
          question: "Can you integrate AI with our existing systems?",
          answer: "Absolutely — we design AI solutions that seamlessly integrate with your current infrastructure."
        },
        {
          question: "How do you measure AI success?",
          answer: "We establish clear KPIs and continuously monitor performance to ensure measurable ROI."
        },
        {
          question: "What's the typical AI implementation timeline?",
          answer: "12–16 weeks for most AI projects, depending on complexity and data requirements."
        }
      ]}
      ctaTitle="Ready to Transform with AI?"
      ctaDescription="Let's create intelligent automation that revolutionizes your business operations and drives measurable results."
      ctaButtonText="Schedule a Free AI Assessment"
      ctaButtonHref="/contact"
      primaryColor="bg-purple-500"
      gradientFrom="from-purple-500"
      gradientTo="to-pink-500"
    />
  );
}