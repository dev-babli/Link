"use client"

import { Button } from "@/components/ui/button"
import { DitheringShader } from "@/components/ui/dithering-shader"
import { cn } from "@/lib/utils"
import { Moon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

interface CTAWithShaderProps {
  className?: string
}

export function CTAWithShader({ className }: CTAWithShaderProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 800 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: Math.max(800, window.innerHeight * 0.6),
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  return (
    <section className={cn("relative w-full overflow-hidden py-12 md:py-24", className)}>
      {/* Shader Background */}
      <div className="absolute inset-0 z-0">
        <DitheringShader
          width={dimensions.width}
          height={dimensions.height}
          shape="wave"
          type="8x8"
          colorBack="#0d2b1f"
          colorFront="#8b2d1a"
          pxSize={3}
          speed={0.6}
          className="w-full h-full"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-container px-8">
        <div className="relative rounded-3xl bg-gray-900/40 backdrop-blur-sm p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Marketing Content */}
            <div className="flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  Start your journey
                </h2>
                <p className="text-lg text-white/90 md:text-xl">
                  Let's start building something great together.
                </p>
              </div>

              <div className="space-y-4">
                {/* Contact Info */}
                <div className="space-y-2">
                  <a
                    href="tel:206-473-1725"
                    className="block text-lg text-white hover:text-white/80 transition-colors"
                  >
                    206-473-1725
                  </a>
                  <a
                    href="mailto:hello@grovia.io"
                    className="block text-lg text-white hover:text-white/80 transition-colors"
                  >
                    hello@grovia.io
                  </a>
                </div>

                {/* Customer Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                        alt="Customer avatar 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                        alt="Customer avatar 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                        alt="Customer avatar 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">4.9/5 Rated</div>
                    <div className="text-sm text-white/80">Over 9.2K Customers</div>
                  </div>
                </div>
              </div>

              {/* Get Template Button */}
              <Button
                variant="light"
                size="lg"
                className="w-fit rounded-lg gap-2"
                asChild
              >
                <a href="#">
                  Get Template
                  <Moon className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Right Column - Contact Form */}
            <div className="rounded-2xl bg-gray-800/80 backdrop-blur-sm p-6 md:p-8">
              <form className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    className="w-full rounded-lg bg-gray-700/50 px-4 py-3 text-white placeholder:text-white/60 border border-gray-600 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/50 transition-colors"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter email address"
                    className="w-full rounded-lg bg-gray-700/50 px-4 py-3 text-white placeholder:text-white/60 border border-gray-600 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/50 transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-white">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Enter your message"
                    className="w-full rounded-lg bg-gray-700/50 px-4 py-3 text-white placeholder:text-white/60 border border-gray-600 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/50 transition-colors resize-none"
                  />
                </div>

                {/* Send Email Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white font-semibold transition-colors"
                >
                  Send email
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

