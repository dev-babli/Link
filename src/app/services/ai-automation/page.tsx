"use client";

import MainlineServiceTemplate from "@/components/MainlineServiceTemplate";

export default function AIAutomationPage() {
  return (
    <MainlineServiceTemplate
      serviceName="AI Solutions"
      heroTitle="Transform Your Business with Intelligent Automation"
      heroSubtitle="AI Solutions"
      heroDescription="Leverage artificial intelligence to automate processes, gain insights, and create intelligent solutions. At Link Innovation, we design and develop AI solutions that combine cutting-edge technology with ethical practices."
      heroImage="/mainline_service_template/hero.webp"
      primaryCTA={{
        text: "Talk to an AI Expert",
        href: "/contact"
      }}
      secondaryCTA={{
        text: "Explore AI Solutions",
        href: "/services"
      }}
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
      features={[
        {
          icon: "🔍",
          title: "Enterprise Search",
          description: "Intelligent search across all your enterprise data sources with role-based access controls."
        },
        {
          icon: "⚡",
          title: "Process Automation",
          description: "Automate complex workflows and multi-step processes across your organization."
        },
        {
          icon: "🤖",
          title: "AI Agents",
          description: "Pre-built AI agents for search, generation, and automation across departments."
        },
        {
          icon: "🔧",
          title: "AI Agent Builder",
          description: "Build enterprise AI agents with no-code to pro-code tools for any employee."
        },
        {
          icon: "🎯",
          title: "Intelligent Orchestration",
          description: "Orchestrate complex, multi-agent workflows with seamless coordination."
        },
        {
          icon: "🛡️",
          title: "Admin Controls",
          description: "Govern enterprise AI with unified oversight and comprehensive analytics."
        }
      ]}
      useCases={[
        {
          title: "Healthcare",
          description: "Medical diagnosis assistance and patient care optimization",
          examples: [
            "Medical diagnosis assistance",
            "Patient care optimization",
            "Healthcare data analysis"
          ],
          icon: "🏥"
        },
        {
          title: "Finance",
          description: "Fraud detection and algorithmic trading systems",
          examples: [
            "Fraud detection systems",
            "Algorithmic trading",
            "Risk assessment automation"
          ],
          icon: "💼"
        },
        {
          title: "Manufacturing",
          description: "Predictive maintenance and quality control automation",
          examples: [
            "Predictive maintenance",
            "Quality control automation",
            "Supply chain optimization"
          ],
          icon: "🏭"
        },
        {
          title: "Retail",
          description: "Personalized recommendations and inventory optimization",
          examples: [
            "Personalized recommendations",
            "Inventory optimization",
            "Customer behavior analysis"
          ],
          icon: "🛒"
        },
        {
          title: "Customer Service",
          description: "Intelligent chatbots and automated support systems",
          examples: [
            "Intelligent chatbots",
            "Automated support systems",
            "Customer query resolution"
          ],
          icon: "💬"
        },
        {
          title: "Marketing",
          description: "Predictive analytics and automated campaign optimization",
          examples: [
            "Predictive analytics",
            "Campaign optimization",
            "Customer segmentation"
          ],
          icon: "📊"
        }
      ]}
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
      technologies={["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "AWS SageMaker", "Google Cloud AI", "Azure AI", "Anthropic"]}
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
    />
  );
}