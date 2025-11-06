"use client"

import { cn } from "@/lib/utils"
import { CardContent } from "@/components/ui/card";
import { TbHeartPlus } from "react-icons/tb";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
        "font-medium bg-background-primary text-text-primary px-1 py-0.5",
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
  const leftBlockRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    if (leftBlockRef.current) {
      observer.observe(leftBlockRef.current);
    }
    return () => {
      if (leftBlockRef.current) {
        observer.unobserve(leftBlockRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full bg-background-primary py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-20">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center rounded-[6px] bg-accent-yellow px-3 py-1">
            <p className="text-xs font-medium text-text-primary uppercase tracking-[0.02em]">FEATURES</p>
          </div>
          <h2 className="text-[56px] font-medium leading-[1.15] tracking-[-0.015em] text-text-primary mb-4">
            Powerful Features
          </h2>
          <p className="text-large-paragraph text-text-secondary">
            Discover features that simplify workflows and grow your business with intelligent solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative">
          {/* Left Block - Enhanced with scroll animations and buttons */}
          <div
            ref={leftBlockRef}
            className="flex flex-col items-start justify-center border border-border-subtle bg-background-secondary rounded-2xl p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.06)] relative overflow-hidden"
          >
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background-primary/50 via-transparent to-background-secondary/30 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Card */}
            <div className={`relative w-full mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="absolute inset-x-0 -bottom-2 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-background-secondary to-transparent z-10"></div>
              <CardStack items={CARDS} />
            </div>

            {/* Reduced Content with scroll animation */}
            <div className={`relative z-10 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-[28px] font-medium leading-[1.3] tracking-[-0.01em] text-text-primary mb-4">
                Intuitive Dashboard Experience
              </h3>
              <p className="text-base leading-[1.6] text-text-secondary mb-6">
                Simplify your development workflow with beautifully designed solutions.
              </p>
            </div>

            {/* Grovia-style Buttons with scroll animation */}
            <div className={`relative z-10 w-full flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Primary Button - About Us */}
              <Link
                href="/about"
                className="group relative rounded-full px-8 py-4 bg-white text-text-primary font-medium text-base flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_8px_24px_0_rgba(0,0,0,0.15)] overflow-hidden w-full sm:w-auto"
              >
                {/* Button Background Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-background-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Hover illumination effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] transition-opacity duration-300" />
                <span className="relative z-10">Learn More</span>
                <div className="relative z-10 bg-text-primary/10 rounded-full p-1.5 flex items-center justify-center backdrop-blur-sm">
                  <ArrowRight className="w-5 h-5 text-text-primary transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                </div>
              </Link>

              {/* Secondary Button - Glassmorphic */}
              <Link
                href="/about"
                className="group relative rounded-full px-8 py-4 bg-white/30 backdrop-blur-md border border-white/60 text-text-primary font-medium text-base transition-all duration-300 hover:bg-white/40 hover:border-white/80 hover:scale-[1.05] hover:shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] w-full sm:w-auto flex items-center justify-center"
              >
                <span className="relative z-10">About Us</span>
              </Link>
            </div>

            {/* Creative floating elements */}
            <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-accent-yellow/20 to-transparent rounded-full blur-2xl transition-all duration-1000 ease-out delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
            <div className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-background-primary/30 to-transparent rounded-full blur-xl transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
          </div>

          {/* Right Block */}
          <div className="flex flex-col items-center justify-start border border-border-subtle bg-background-secondary rounded-2xl p-6 lg:p-8 shadow-[0px_2px_8px_rgba(0,0,0,0.06)]">
            {/* Content */}
            <h3 className="text-[28px] font-medium leading-[1.3] tracking-[-0.01em] text-text-primary mb-6">
              Seamless Integration Ecosystem <span className="text-text-primary font-medium">Link Innovations</span>{" "}
              <span className="text-base leading-[1.6] text-text-secondary"> Integrate effortlessly with your favorite tools using Link Innovations' smart API-ready architecture and eliminate silos in seconds.</span>
            </h3>
            <div
              className={cn(
                "group relative mt-auto w-full inline-flex cursor-pointer items-center justify-center rounded-2xl border-0 bg-background-secondary px-6 lg:px-8 py-2 font-medium text-text-primary transition-colors",
              )}
            >
              {/* Integration List */}
              <CardContent className="p-4 lg:p-6 space-y-4 bg-background-secondary border border-border-subtle rounded-2xl z-10 w-full shadow-[0px_2px_8px_rgba(0,0,0,0.06)]">
                {integrations.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 border border-border-subtle rounded-xl hover:bg-background-primary transition"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-8 h-8 rounded-lg bg-background-primary flex items-center justify-center text-lg flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-text-primary truncate">{item.name}</p>
                        <p className="text-xs text-text-secondary line-clamp-2">{item.desc}</p>
                      </div>
                    </div>
                    <button className="rounded-full border border-border-subtle p-2 text-xs font-semibold flex-shrink-0 ml-2 hover:bg-background-primary transition"><TbHeartPlus className="w-4 h-4 text-text-primary" /></button>
                  </div>
                ))}
              </CardContent>
            </div>
          </div>
        </div>

        {/* Stats and Testimonial Section */}
        <div className="mt-16 lg:mt-20 grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex justify-center items-center p-6">
            <div className="grid grid-cols-3 gap-6 lg:gap-8 w-full text-center sm:text-left">
              <div className="space-y-3">
                <div className="text-4xl font-medium text-text-primary">+1200</div>
                <p className="text-base text-text-secondary">Projects Delivered</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-medium text-text-primary">22M</div>
                <p className="text-base text-text-secondary">Lines of Code</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-medium text-text-primary">+500</div>
                <p className="text-base text-text-secondary">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-2 border-border-subtle pl-6 lg:pl-8 text-text-secondary">
              <p className="text-base lg:text-lg leading-[1.6]">Using Link Innovations has been like unlocking a new level of productivity. It's the perfect fusion of simplicity and versatility, enabling us to create exceptional digital solutions.</p>
              <div className="mt-6 space-y-3">
                <cite className="block font-medium text-base text-text-primary">Saurabh, CEO</cite>
                <Image
                  className="h-10 w-fit"
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
      </div>
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}</style>
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
            className="absolute bg-background-secondary h-48 w-full md:h-48 md:w-96 rounded-2xl p-4 shadow-[0px_8px_32px_rgba(0,0,0,0.12)] border border-border-subtle flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-normal text-text-primary">
              {card.content}
            </div>
            <div>
              <p className="text-text-primary font-medium">
                {card.name}
              </p>
              <p className="text-text-secondary font-normal">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

