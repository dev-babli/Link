"use client"

import React from "react"
import { cn } from "@/lib/utils"

const cardContents = [
  {
    title: "Modern Technology Stack",
    description:
      "Built with cutting-edge technologies including React, Next.js, TypeScript, and Tailwind CSS for exceptional performance and developer experience.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Our solutions are designed to grow with your business, ensuring scalability and performance as your needs evolve.",
  },
  {
    title: "Comprehensive IT Services",
    description:
      "From web development and mobile apps to cloud infrastructure, cybersecurity, and AI solutions—we provide end-to-end IT services tailored to your business needs. Our team combines expertise across multiple domains to deliver integrated solutions that drive growth, enhance security, and optimize operations.",
  },  
  {
    title: "Expert Team",
    description:
      "Work with experienced professionals who understand your business challenges and deliver solutions that make a difference.",
  },
  {
    title: "Fast Delivery",
    description:
      "We prioritize speed without compromising quality, delivering projects on time while maintaining the highest standards.",
  },
]

const PlusCard: React.FC<{
  className?: string
  title: string
  description: string
}> = ({
  className = "",
  title,
  description,
}) => {
  return (
    <div
      className={cn(
        "relative border border-dashed border-gray-300 rounded-lg p-6 bg-white min-h-[200px]",
        "flex flex-col justify-between",
        "hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300",
        className
      )}
    >
      <CornerPlusIcons />
      {/* Content */}
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-bold text-[#1a1a1a]">
          {title}
        </h3>
        <p className="text-[#666666]">{description}</p>
      </div>
    </div>
  )
}

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
)

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={`text-[#1a1a1a] size-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

export default function RuixenBentoCards() {
  return (
    <section className="bg-[#f5f5f5] border-t border-gray-200">
      <div className="mx-auto container border-b border-gray-200 py-12 px-4 max-w-7xl">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
          <PlusCard {...cardContents[0]} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...cardContents[1]} className="lg:col-span-2 lg:row-span-2" />
          <PlusCard {...cardContents[2]} className="lg:col-span-4 lg:row-span-1" />
          <PlusCard {...cardContents[3]} className="lg:col-span-2 lg:row-span-1" />
          <PlusCard {...cardContents[4]} className="lg:col-span-2 lg:row-span-1" />
        </div>

        {/* Section Footer Heading */}
        <div className="max-w-2xl ml-auto text-right px-4 mt-6 lg:-mt-20">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-4">
            Built for performance. Designed for flexibility.
          </h2>
          <p className="text-[#666666] text-lg">
            Link Innovations gives you the tools to build beautiful, high-performing solutions with lightning speed. Each solution is thoughtfully designed to be flexible, scalable, and accessible.
          </p>
        </div>
      </div>
    </section>
  )
}

