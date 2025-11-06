"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Sparkles } from "@/components/ui/sparkles"
import { useEffect, useRef, useState } from "react"

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-background-primary pb-16">
      <div className="container mx-auto pt-20 pb-12 w-full max-w-5xl px-6 lg:px-20">
        <div
          className={`text-center transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary">
            <span className="text-text-primary">
              Trusted by experts.
            </span>
            <br />
            <span className="text-text-primary">Used by the leaders.</span>
          </h2>

          <div className={`mt-14 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 transition-all duration-1000 ease-in-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
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
                      className="h-10 w-auto object-contain filter grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                      unoptimized
                    />
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Sparkles effect that blends into footer - Reduced size */}
      <div className="relative h-[300px] w-full overflow-visible -mb-32">
        <div className="absolute inset-0 [mask-image:radial-gradient(50%_50%,white,transparent)]">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,rgba(0,0,0,0.08),transparent_70%)] before:opacity-40" />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-text-primary/10 bg-background-primary" />
          <Sparkles
            density={600}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            color="#000000"
            size={1.5}
            opacity={0.4}
            background="#F5F3EF"
          />
        </div>
      </div>
    </section>
  )
}

