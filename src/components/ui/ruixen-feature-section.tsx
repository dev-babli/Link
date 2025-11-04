"use client"

import { cn } from "@/lib/utils"
import { CardContent } from "@/components/ui/card";
import { TbHeartPlus } from "react-icons/tb";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-gray-100 text-[#000000] px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Sarah Chen",
    designation: "Frontend Developer",
    content: (
      <p>
        <Highlight>Link Innovations</Highlight> has completely transformed our development workflow. The solutions are beautifully crafted and{" "}
        <Highlight>incredibly easy to integrate</Highlight> into any modern application.
      </p>
    ),
  },
  {
    id: 1,
    name: "Alex Rodriguez",
    designation: "UI/UX Designer",
    content: (
      <p>
        The <Highlight>design system</Highlight> behind Link Innovations is both elegant and consistent. From layout to interactivity, every detail is thoughtfully built with{" "}
        <Highlight>accessibility and usability</Highlight> in mind.
      </p>
    ),
  },
  {
    id: 2,
    name: "David Kim",
    designation: "Product Manager",
    content: (
      <p>
        After adopting <Highlight>Link Innovations</Highlight>, our team shipped features 40% faster. The comprehensive solutions and{" "}
        <Highlight>clear documentation</Highlight> have made it an essential tool in our product development.
      </p>
    ),
  },
];

const integrations = [
  {
    name: "Figma",
    desc: "Design collaboratively in real-time with intuitive UI tools",
    icon: "🎨",
  },
  {
    name: "Vercel",
    desc: "Deploy your projects seamlessly with global scale",
    icon: "🚀",
  }
];

export default function RuixenFeatureSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <motion.div
        className="mx-auto max-w-2xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-gray-200">
          <p className="text-xs font-medium text-[#000000] uppercase tracking-wider">FEATURES</p>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-[#000000] sm:text-5xl mb-4">
          Powerful Features
        </h2>
        <p className="text-lg leading-8 text-[#000000]">
          Discover features that simplify workflows and grow your business with intelligent solutions.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        {/* Left Block */}
        <div className="flex flex-col items-start justify-center border border-gray-200 p-4 sm:p-6 lg:p-8 bg-white">
          {/* Card */}
          <div className="relative w-full mb-4 sm:mb-6">
            <div className="absolute inset-x-0 -bottom-2 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
            <CardStack items={CARDS} />
          </div>

          {/* Content */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-[#000000] leading-relaxed">
            Intuitive Dashboard Experience <span className="text-[#000000] font-semibold">Link Innovations</span>{" "}
            <span className="text-[#666666] text-sm sm:text-base lg:text-lg"> Simplify your development workflow with our beautifully designed solutions that provide actionable insights out of the box.</span>
          </h3>
        </div>

        {/* Right Block */}
        <div className="flex flex-col items-center justify-start border border-gray-200 p-4 sm:p-6 lg:p-8 bg-white">
          {/* Content */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-[#000000] mb-4 sm:mb-6 leading-relaxed">
            Seamless Integration Ecosystem <span className="text-[#000000] font-semibold">Link Innovations</span>{" "}
            <span className="text-[#666666] text-sm sm:text-base lg:text-lg"> Integrate effortlessly with your favorite tools using Link Innovations' smart API-ready architecture and eliminate silos in seconds.</span>
          </h3>
          <div
            className={cn(
              "group relative mt-auto w-full inline-flex cursor-pointer items-center justify-center rounded-xl border-0 bg-white px-4 sm:px-6 lg:px-8 py-2 font-medium text-[#000000] transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
              "before:absolute before:bottom-[8%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
            )}
          >
            {/* Integration List */}
            <CardContent className="p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4 bg-white border border-gray-200 rounded-2xl sm:rounded-3xl z-10 w-full">
              {integrations.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-2 sm:gap-3 flex-1">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm sm:text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-[#000000] truncate">{item.name}</p>
                      <p className="text-xs text-[#666666] line-clamp-1 sm:line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                  <button className="rounded-full border border-gray-200 p-1.5 sm:p-2 text-xs font-semibold flex-shrink-0 ml-2 hover:bg-gray-100"><TbHeartPlus className="w-3 h-3 sm:w-4 sm:h-4 text-[#000000]" /></button>
                </div>
              ))}
            </CardContent>
          </div>
        </div>
      </div>
      
      {/* Stats and Testimonial Section */}
      <div className="mt-12 sm:mt-16 lg:mt-20 grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="flex justify-center items-center p-4 sm:p-6">
          <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 w-full text-center sm:text-left">
            <div className="space-y-2 sm:space-y-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#000000]">+1200</div>
              <p className="text-sm sm:text-base text-[#666666]">Projects Delivered</p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#000000]">22M</div>
              <p className="text-sm sm:text-base text-[#666666]">Lines of Code</p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#000000]">+500</div>
              <p className="text-sm sm:text-base text-[#666666]">Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <blockquote className="border-l-2 border-gray-200 pl-4 sm:pl-6 lg:pl-8 text-[#666666]">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">Using Link Innovations has been like unlocking a new level of productivity. It's the perfect fusion of simplicity and versatility, enabling us to create exceptional digital solutions.</p>
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <cite className="block font-medium text-sm sm:text-base text-[#000000]">Saurabh, CEO</cite>
              <Image 
                className="h-8 sm:h-10 w-fit" 
                src="https://opencv.org/wp-content/uploads/2022/05/logo.png" 
                alt="Company Logo" 
                height={40} 
                width={100}
                unoptimized
              />
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative mx-auto h-48 w-full md:h-48 md:w-96 my-4">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-white h-48 w-full md:h-48 md:w-96 rounded-3xl p-4 shadow-xl border border-gray-200 flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-normal text-[#000000]">
              {card.content}
            </div>
            <div>
              <p className="text-[#000000] font-medium">
                {card.name}
              </p>
              <p className="text-[#666666] font-normal">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

