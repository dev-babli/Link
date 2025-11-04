"use client"

import { CardHoverReveal, CardHoverRevealMain, CardHoverRevealContent } from "@/components/ui/reveal-on-hover"

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["Branding", "UI UX"],
    stack: ["Figma", "Webflow"],
    description: "Comprehensive platform designed for an agency, Creating professional and business-oriented brand."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["Web Development", "E-commerce"],
    stack: ["React", "Next.js"],
    description: "Modern e-commerce platform with seamless user experience and advanced payment integration."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["Mobile App", "iOS & Android"],
    stack: ["React Native", "TypeScript"],
    description: "Cross-platform mobile application delivering exceptional performance and native-like experience."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["Data Analytics", "AI/ML"],
    stack: ["Python", "TensorFlow"],
    description: "Advanced analytics platform powered by machine learning for actionable business insights."
  }
]

export const CardHoverRevealSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Our Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of innovative solutions that drive business growth and digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
          {projects.map((project) => (
            <CardHoverReveal 
              key={project.id} 
              className="h-[512px] w-full max-w-[385px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <CardHoverRevealMain>
                <img
                  width={1077}
                  height={606}
                  alt={`Project ${project.id} image`}
                  src={project.image}
                  className="inline-block size-full max-h-full max-w-full object-cover align-middle"
                />
              </CardHoverRevealMain>

              <CardHoverRevealContent className="space-y-4 rounded-2xl bg-zinc-900/75 text-zinc-50">
                <div className="space-y-2">
                  <h3 className="text-sm text-zinc-400">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, idx) => (
                      <div key={idx} className="rounded-full bg-zinc-800 px-3 py-1">
                        <p className="text-xs leading-normal">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm text-zinc-400">Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <div key={idx} className="rounded-full bg-[hsl(18,56%,32%)] px-3 py-1">
                        <p className="text-xs leading-normal">{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm text-zinc-400">Profile</h3>
                  <div className="flex flex-wrap gap-2">
                    <p className="text-sm text-zinc-200 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardHoverRevealContent>
            </CardHoverReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

