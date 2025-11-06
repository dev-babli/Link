"use client";

import { Header } from "@/components/header-3";
import { Footer } from "@/components/Footer";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { motion } from "motion/react";
import Link from "next/link";
import { PositivusCard, PositivusButton, PositivusSection, PositivusGrid } from "@/components/positivus";
import "@/styles/positivus-theme.css";

const services = [
    {
        title: "Web Development",
        description: "Custom web applications built with modern technologies. We create responsive, accessible, and performant web experiences that serve your users' needs.",
        icon: "💻",
        features: [
            "Responsive & Mobile-First Design",
            "WCAG Accessibility Compliant",
            "Performance Optimized (Core Web Vitals)",
            "SEO & Semantic HTML",
            "Progressive Enhancement"
        ],
        link: "/services/web-development",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Web App Development",
        description: "Advanced web applications and platforms with complex functionality. Enterprise-grade solutions for modern businesses.",
        icon: "🖥️",
        features: [
            "Enterprise Web Applications",
            "Complex Business Logic",
            "API Integration",
            "Real-time Features",
            "Scalable Architecture"
        ],
        link: "/services/web-app-development",
        color: "from-cyan-500/20 to-blue-500/20"
    },
    {
        title: "Mobile App Development",
        description: "Native iOS and Android applications with platform-specific optimizations. High-performance mobile solutions.",
        icon: "📱",
        features: [
            "Native iOS & Android Development",
            "Platform-Specific UI/UX",
            "High Performance",
            "Native API Integration",
            "App Store Optimization"
        ],
        link: "/services/mobile-app-development",
        color: "from-green-500/20 to-emerald-500/20"
    },
    {
        title: "Mobile Apps",
        description: "Cross-platform mobile solutions that work seamlessly across devices. Cost-effective development with native performance.",
        icon: "📲",
        features: [
            "Cross-Platform Development",
            "React Native & Flutter",
            "Single Codebase",
            "Rapid Development",
            "Consistent User Experience"
        ],
        link: "/services/mobile-apps",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "AI Solutions",
        description: "Intelligent automation that respects user privacy and provides transparent, ethical AI solutions. No hidden algorithms or data exploitation.",
        icon: "🤖",
        features: [
            "Transparent AI Decision-Making",
            "Privacy-First Machine Learning",
            "Explainable AI Models",
            "Ethical Data Usage",
            "User-Controlled Automation"
        ],
        link: "/services/ai-automation",
        color: "from-teal-500/20 to-green-500/20"
    },
    {
        title: "Cloud Services",
        description: "Scalable cloud infrastructure that grows with your business. We provide reliable, secure, and cost-effective cloud solutions.",
        icon: "☁️",
        features: [
            "AWS, Azure & GCP Expertise",
            "Auto-Scaling Infrastructure",
            "Disaster Recovery Planning",
            "Cost Optimization",
            "24/7 Monitoring & Support"
        ],
        link: "/services/cloud-services",
        color: "from-teal-500/20 to-green-500/20"
    },
    {
        title: "Cloud DevOps",
        description: "Streamlined development workflows with modern DevOps practices. Accelerate delivery with automated CI/CD pipelines.",
        icon: "⚙️",
        features: [
            "CI/CD Pipeline Setup",
            "Infrastructure as Code",
            "Automated Testing",
            "Deployment Automation",
            "Monitoring & Logging"
        ],
        link: "/services/cloud-devops",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "Data Analytics",
        description: "Transform data into insights while respecting user privacy. Transparent analytics with clear data usage policies.",
        icon: "📊",
        features: [
            "Privacy-Compliant Analytics",
            "Real-Time Dashboards",
            "Custom Reporting",
            "Data Visualization",
            "Predictive Analytics"
        ],
        link: "/services/data-analytics",
        color: "from-emerald-500/20 to-blue-500/20"
    },
    {
        title: "Cybersecurity",
        description: "Comprehensive security solutions to protect your digital assets. Transparent security practices with clear communication.",
        icon: "🔒",
        features: [
            "Security Audits & Assessments",
            "Penetration Testing",
            "Compliance (GDPR, HIPAA)",
            "Incident Response",
            "Security Training"
        ],
        link: "/services/cybersecurity",
        color: "from-red-500/20 to-pink-500/20"
    },
    {
        title: "Automation Testing",
        description: "Comprehensive testing solutions to ensure quality and reliability. Automated testing that catches issues early.",
        icon: "🧪",
        features: [
            "Automated Test Suites",
            "CI/CD Integration",
            "Performance Testing",
            "API Testing",
            "Cross-Browser Testing"
        ],
        link: "/services/automation-testing",
        color: "from-yellow-500/20 to-orange-500/20"
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            <PerformanceOptimizer />
            <Header />

            {/* Hero Section - Positivus Style */}
            <PositivusSection background="white" padding="xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-4 py-2 text-sm text-[#8B5CF6] mb-8">
                        <span className="w-2 h-2 bg-[#8B5CF6] rounded-full"></span>
                        Our Services
                    </div>

                    {/* Main Heading */}
                    <h1 className="positivus-heading-1 text-gray-900 mb-6">
                        Digital Solutions That{" "}
                        <span className="text-[#8B5CF6]">Drive Results</span>
                    </h1>

                    {/* Description */}
                    <p className="positivus-body-large text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                        We provide comprehensive technology services focused on usability, accessibility, and measurable business outcomes. Every solution is built with ethical design principles and user needs at the forefront.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <PositivusButton variant="primary" size="lg" href="/contact">
                            Discuss Your Project
                        </PositivusButton>
                        <PositivusButton variant="outline" size="lg" href="/services">
                            Explore Services
                        </PositivusButton>
                    </div>
                </motion.div>
            </PositivusSection>

            {/* Services Grid - Same Design as Success Stories */}
            <section className="bg-background-primary py-24 sm:py-32">
                <div className="container">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-4xl font-medium tracking-[-0.015em] text-text-primary sm:text-[56px] sm:leading-[1.15]">
                            Our Services
                        </h2>
                        <p className="mt-4 text-lg text-text-secondary md:text-xl">
                            Choose a service to learn more about our approach, process, and how we can help your business succeed.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-none grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => {
                            // Map service to card design format
                            const imageUrls = [
                                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a742939ba34c8fb0d91e78_Minimalist_20Note_20Card_-15.png",
                                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a745441309ecaba6105106_Minimalist_20Pastel_20Com-17.png",
                                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a742e3f716a8f915fd5b48_Modern_20object_20in_20co-19.png",
                                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a7dc54fc9aee7d7140fd95_Modern_20Laptop_20_26_20P-21.png",
                            ];
                            const gradientClasses = [
                                "bg-gradient-to-t from-[#4da99b]/20 to-[#f2994a]/20",
                                "bg-gradient-to-t from-[#f1ab70]/20 to-[#e8d99c]/20",
                                "bg-gradient-to-t from-[#e49ca2]/20 to-[#a6d1a9]/20",
                                "bg-gradient-to-t from-[#f1c40f]/10 to-[#50a1a1]/20",
                            ];
                            const categories = ["Development", "Infrastructure", "Innovation", "Security"];

                            const imageUrl = imageUrls[index % imageUrls.length];
                            const gradientClass = gradientClasses[index % gradientClasses.length];
                            const category = categories[index % categories.length] || "Service";

                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                >
                                    <Link href={service.link} className="group block overflow-hidden rounded-2xl bg-background-secondary shadow-soft border border-border-subtle transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1.5">
                                        <div className="relative h-[340px] overflow-hidden">
                                            <div
                                                className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                                                style={{ backgroundImage: `url(${imageUrl})` }}
                                            />
                                            <div className={`absolute inset-0 ${gradientClass}`} />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <h3 className="text-4xl font-medium text-white drop-shadow-lg sm:text-5xl">
                                                    {service.title}
                                                </h3>
                                            </div>
                                            <div className="absolute bottom-6 right-6 rounded-full bg-black/40 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                                                {category}
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <h3 className="text-[28px] font-medium leading-[1.3] text-text-primary">
                                                {service.title}
                                            </h3>
                                            <p className="mt-2 text-base text-text-secondary">
                                                {service.description}
                                            </p>
                                            <div className="mt-6 flex items-center text-base font-medium text-text-primary">
                                                Learn more
                                                <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Positivus Style */}
            <PositivusSection background="white" padding="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="positivus-heading-2 text-gray-900 mb-4">
                        Why Work With Us
                    </h2>
                    <p className="positivus-body-large text-gray-600 max-w-2xl mx-auto">
                        We believe in transparent partnerships, ethical practices, and putting your users first.
                    </p>
                </motion.div>

                <PositivusGrid columns={3} gap="lg">
                    {[
                        {
                            title: "User-Centered Design",
                            description: "Every decision we make puts your users first. We follow ethical design principles and avoid dark patterns.",
                            icon: "👥"
                        },
                        {
                            title: "Accessibility Commitment",
                            description: "We build for everyone. All our projects meet WCAG 2.1 AA standards minimum, ensuring equal access.",
                            icon: "♿"
                        },
                        {
                            title: "Transparent Process",
                            description: "No hidden costs, no surprises. We communicate clearly and involve you in every decision.",
                            icon: "🔍"
                        },
                        {
                            title: "Privacy First",
                            description: "We respect user privacy and data. We only collect what's necessary and are always transparent about data usage.",
                            icon: "🔒"
                        },
                        {
                            title: "Performance Focus",
                            description: "Fast, efficient, sustainable. We optimize for speed without compromising quality or user experience.",
                            icon: "⚡"
                        },
                        {
                            title: "Long-term Support",
                            description: "We're here for the long haul. Ongoing support, maintenance, and improvements as your business grows.",
                            icon: "🛠️"
                        }
                    ].map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <PositivusCard variant="elevated" className="h-full text-center">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="positivus-heading-4 text-gray-900 mb-3">{value.title}</h3>
                                <p className="positivus-body-small text-gray-600 leading-relaxed">{value.description}</p>
                            </PositivusCard>
                        </motion.div>
                    ))}
                </PositivusGrid>
            </PositivusSection>

            {/* CTA Section - Positivus Style */}
            <PositivusSection background="gray" padding="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <PositivusCard variant="elevated" className="p-8 md:p-12">
                        <h2 className="positivus-heading-2 text-gray-900 mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="positivus-body-large text-gray-600 mb-8">
                            Let's discuss your project. No obligations, no pressure - just an honest conversation about how we can help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <PositivusButton variant="primary" size="lg" href="/contact">
                                Schedule a Call
                            </PositivusButton>
                            <PositivusButton variant="outline" size="lg" href="/services">
                                Explore Services
                            </PositivusButton>
                        </div>
                    </PositivusCard>
                </motion.div>
            </PositivusSection>

            <Footer />
        </div>
    );
}