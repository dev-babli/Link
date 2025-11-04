"use client"

import { CardHoverReveal, CardHoverRevealMain, CardHoverRevealContent } from "@/components/ui/reveal-on-hover"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const industries = [
  {
    id: 1,
    name: "Healthcare",
    description: "Transforming healthcare delivery with innovative digital solutions, telemedicine platforms, and patient management systems that improve care quality and accessibility.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["EHR Systems", "Telemedicine", "Health Analytics"],
    technologies: ["HIPAA Compliance", "Cloud Infrastructure"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    name: "Finance & Banking",
    description: "Secure fintech solutions including payment gateways, banking platforms, and financial analytics tools that ensure compliance and enhance customer trust.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["Payment Solutions", "Banking Apps", "Risk Management"],
    technologies: ["Blockchain", "Security Compliance"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    name: "E-commerce & Retail",
    description: "Complete e-commerce platforms with inventory management, order processing, and customer engagement tools that drive sales and enhance shopping experiences.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["Online Stores", "Mobile Commerce", "Supply Chain"],
    technologies: ["React", "Node.js"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    name: "Education & EdTech",
    description: "Learning management systems, virtual classrooms, and educational platforms that enhance the learning experience and make education more accessible.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["LMS Platforms", "Virtual Classrooms", "Student Portals"],
    technologies: ["Vue.js", "MongoDB"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 5,
    name: "Manufacturing",
    description: "Industrial IoT solutions, production management systems, and automation tools for modern manufacturing that optimize operations and increase efficiency.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["IoT Solutions", "Production Management", "Quality Control"],
    technologies: ["Python", "IoT Platforms"],
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: 6,
    name: "Real Estate",
    description: "Property management systems, real estate platforms, and virtual property viewing solutions that streamline operations and enhance customer experiences.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["Property Platforms", "Virtual Tours", "CRM Systems"],
    technologies: ["Next.js", "3D Visualization"],
    color: "from-indigo-500/20 to-blue-500/20",
  },
]

export const CardHoverRevealSection = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-6 inline-flex items-center rounded-full bg-white px-5 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs font-semibold text-[#000000] uppercase tracking-wider">Industries We Serve</p>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1a1a1a]">
            Industries We <span className="bg-gradient-to-r from-[#1a1a1a] to-[#666666] bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-lg md:text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            Discover how we deliver innovative solutions across diverse industries, driving digital transformation and business growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CardHoverReveal 
                className="h-[520px] w-full rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-500 group"
              >
                <CardHoverRevealMain>
                  <Image
                    width={800}
                    height={600}
                    alt={`${industry.name} industry`}
                    src={industry.image}
                    className="inline-block size-full max-h-full max-w-full object-cover align-middle transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </CardHoverRevealMain>

                <CardHoverRevealContent className="space-y-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-100 p-6 md:p-8 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">{industry.name}</h3>
                      <div className="shrink-0 w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-[#666666] leading-relaxed text-sm md:text-base">
                      {industry.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <div>
                      <h4 className="text-xs font-semibold text-[#1a1a1a] uppercase tracking-wider mb-3">Services</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.services.map((service, idx) => (
                          <div key={idx} className="rounded-full bg-gray-50 px-4 py-2 border border-gray-100 hover:bg-gray-100 transition-colors">
                            <p className="text-xs font-medium text-[#1a1a1a] leading-normal">{service}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-[#1a1a1a] uppercase tracking-wider mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.technologies.map((tech, idx) => (
                          <div key={idx} className="rounded-full bg-[#1a1a1a] px-4 py-2 hover:bg-[#000000] transition-colors">
                            <p className="text-xs font-medium text-white leading-normal">{tech}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHoverRevealContent>
              </CardHoverReveal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
