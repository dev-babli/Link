"use client";

import React from 'react';
import { ZoomParallax } from './zoom-parallax';
import { motion } from 'framer-motion';

const servicesData = [
	{
		src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Web Development',
		title: 'Web Development',
		description: 'Modern, responsive websites built with React, Next.js, and cutting-edge technologies',
		href: '/services/web-development',
	},
	{
		src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Mobile Applications',
		title: 'Mobile Applications',
		description: 'Native iOS & Android apps with seamless user experiences and offline-first architecture',
		href: '/services/mobile-app-development',
	},
	{
		src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'AI & Machine Learning',
		title: 'AI & Machine Learning',
		description: 'Intelligent automation and predictive analytics that transform operations',
		href: '/services/ai-automation',
	},
	{
		src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Cloud Solutions',
		title: 'Cloud Solutions & DevOps',
		description: 'Scalable cloud infrastructure on AWS, Azure, and GCP with DevOps excellence',
		href: '/services/cloud-devops',
	},
	{
		src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Cybersecurity',
		title: 'Cybersecurity',
		description: 'Enterprise security solutions with 24/7 monitoring and threat detection',
		href: '/services/cybersecurity',
	},
	{
		src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Data Analytics',
		title: 'Data Analytics',
		description: 'Business intelligence dashboards and advanced analytics for data-driven decisions',
		href: '/services/data-analytics',
	},
	{
		src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: 'Managed Services',
		title: 'Managed Services',
		description: '24/7 support, monitoring, and maintenance for your digital infrastructure',
		href: '/services/managed-services',
	},
];

export function ServicesZoomParallaxSection() {
	return (
		<section className="relative bg-gradient-to-b from-white via-gray-50 to-white w-full">
			{/* Header Section */}
			<div className="relative z-10 px-4 py-20">
				<div className="max-w-7xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-4"
					>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1a1a1a]">
							Our Services
						</h2>
						<p className="text-lg text-[#666666] max-w-2xl mx-auto">
							Scroll to explore our comprehensive suite of technology solutions
						</p>
					</motion.div>
				</div>
			</div>

			{/* Zoom Parallax Component */}
			<div className="relative w-full bg-white">
				<ZoomParallax images={servicesData} showText={true} />
			</div>

			{/* Bottom Spacer */}
			<div className="min-h-[60vh] relative z-10 bg-white flex items-center">
				<div className="max-w-7xl mx-auto px-4 py-16 w-full">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center space-y-4"
					>
						<h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
							Ready to Transform Your Business?
						</h3>
						<p className="text-lg text-[#666666] max-w-2xl mx-auto mb-8">
							Let's discuss how our services can help you achieve your goals
						</p>
						<a
							href="/contact"
							className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
						>
							<span>Get Started Today</span>
							<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

