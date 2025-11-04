"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Sparkles } from "@/components/ui/sparkles"

const companies = [
  { 
    name: "Google", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    website: "https://google.com"
  },
  { 
    name: "Microsoft", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    website: "https://microsoft.com"
  },
  { 
    name: "Amazon", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    website: "https://amazon.com"
  },
  { 
    name: "Apple", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    website: "https://apple.com"
  },
  { 
    name: "Meta", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    website: "https://meta.com"
  },
]

export function TrustedBySparkles() {
  return (
    <div className="relative w-full overflow-hidden bg-white pb-16">
      <div className="mx-auto pt-20 pb-12 w-full max-w-5xl px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-3xl font-semibold text-[#000000]">
            <span className="text-[#000000]">
              Trusted by experts.
            </span>

            <br />

            <span className="text-[#000000]">Used by the leaders.</span>
          </div>

          <div className="mt-14 grid grid-cols-5 gap-8 text-[#000000]">
            {companies.map((company, index) => {
              return (
                <motion.a
                  key={company.name}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-center group cursor-pointer"
                >
                  <div className="relative w-full h-12 flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={120}
                      height={48}
                      className="h-10 w-auto object-contain filter grayscale brightness-0 contrast-100 transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-110"
                      unoptimized
                    />
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Sparkles effect that blends into footer - Reduced size */}
      <div className="relative h-[300px] w-full overflow-visible -mb-32">
        <div className="absolute inset-0 [mask-image:radial-gradient(50%_50%,white,transparent)]">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,rgba(0,0,0,0.08),transparent_70%)] before:opacity-40" />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-[#000000]/10 bg-[#f5f5f5]" />
          <Sparkles
            density={600}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            color="#000000"
            size={1.5}
            opacity={0.4}
            background="#f5f5f5"
          />
        </div>
      </div>
    </div>
  )
}

