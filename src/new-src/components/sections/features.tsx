"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, BarChart3, RefreshCw, SlidersHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("client-focused");
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabsListRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { value: "expert-team", label: "Expert Team", icon: User },
    { value: "cutting-edge", label: "Cutting-Edge Tech", icon: BarChart3 },
    { value: "proven-track", label: "Proven Track Record", icon: RefreshCw },
    { value: "client-focused", label: "Client-Focused", icon: SlidersHorizontal },
  ];

  const activeIndex = tabs.findIndex(tab => tab.value === activeTab);

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

  // Update slider position smoothly
  useEffect(() => {
    const updateSliderPosition = () => {
      const activeTabElement = tabRefs.current[activeIndex];
      const tabsListElement = tabsListRef.current;

      if (activeTabElement && tabsListElement) {
        const tabsListRect = tabsListElement.getBoundingClientRect();
        const activeTabRect = activeTabElement.getBoundingClientRect();

        setSliderStyle({
          left: activeTabRect.left - tabsListRect.left,
          width: activeTabRect.width,
        });
      }
    };

    // Use double requestAnimationFrame for smoother updates
    let rafId1: number;
    let rafId2: number;

    rafId1 = requestAnimationFrame(() => {
      rafId2 = requestAnimationFrame(() => {
        updateSliderPosition();
      });
    });

    // Also update on resize with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        requestAnimationFrame(updateSliderPosition);
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId1);
      if (rafId2) cancelAnimationFrame(rafId2);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeIndex, isVisible]);

  return (
    <section ref={sectionRef} id="feature" className="bg-[#F5F3EF] py-16 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 text-center md:px-20">
        <div className={`mx-auto mb-16 max-w-3xl transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-[3rem] font-medium leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] md:text-[56px] md:leading-[1.15] md:tracking-[-0.015em]">
            Why Choose Us
          </h2>
          <p className="text-large-paragraph mt-4 text-[#4a4a4a]">
            Link Innovations delivers exceptional digital solutions with expertise, innovation, and a commitment to your success. Discover what sets us apart.
          </p>
        </div>

        <Tabs defaultValue="client-focused" onValueChange={setActiveTab} className={`w-full transition-all duration-1000 ease-in-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-12 flex justify-center">
            {/* Rounded Rectangular Box Container with Elevation - Beige Background */}
            <div className="relative inline-flex rounded-2xl bg-[#E8E3DD] p-2.5 shadow-[0px_2px_8px_rgba(0,0,0,0.06)]">
              <TabsList ref={tabsListRef} className="relative inline-flex h-auto flex-wrap justify-center gap-3 bg-transparent p-0 shadow-none">
                {/* Sliding Glassmorphic Indicator */}
                <div
                  className="absolute inset-y-0 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-[0px_2px_8px_rgba(0,0,0,0.08)] pointer-events-none z-0"
                  style={{
                    left: `${sliderStyle.left}px`,
                    width: `${sliderStyle.width}px`,
                    transition: 'left 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    willChange: 'left, width',
                  }}
                />
                <div
                  className="absolute inset-y-0 rounded-full bg-gradient-to-br from-white/60 via-white/40 to-white/30 backdrop-blur-sm pointer-events-none z-0"
                  style={{
                    left: `${sliderStyle.left}px`,
                    width: `${sliderStyle.width}px`,
                    transition: 'left 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    willChange: 'left, width',
                  }}
                />

                {tabs.map((tab, index) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    ref={(el) => { tabRefs.current[index] = el; }}
                    className="group relative flex items-center gap-3 rounded-full border-none bg-transparent px-6 py-3 text-base font-medium text-[#666666] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#1a1a1a] hover:scale-100 data-[state=active]:text-[#1a1a1a] data-[state=active]:scale-100 z-10"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {/* Content */}
                    <div className="relative z-10 flex items-center gap-3">
                      <tab.icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          <TabsContent
            value="expert-team"
            className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0"
          >
            <FeatureTab
              tag="Expert Team"
              title="Experienced professionals at your service"
              description="Our team of skilled developers, designers, and strategists brings years of industry experience to every project. We combine technical expertise with creative problem-solving to deliver exceptional results."
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a4af8269dc1ef2ce14b1f9_Welcome_20Card-30.png"
                alt="Expert team collaboration"
                fill
                className="object-contain object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </FeatureTab>
          </TabsContent>

          <TabsContent
            value="cutting-edge"
            className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0"
          >
            <FeatureTab
              tag="Cutting-Edge Tech"
              title="Latest technologies and best practices"
              description="We leverage the most advanced tools, frameworks, and methodologies to build scalable, secure, and future-proof solutions. Stay ahead with modern tech stacks and innovative approaches."
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a4af6379634f53e60e3f1b_Revenue_20Card-28.png"
                alt="Cutting-edge technology"
                fill
                className="object-contain object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </FeatureTab>
          </TabsContent>

          <TabsContent
            value="proven-track"
            className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0"
          >
            <FeatureTab
              tag="Proven Track Record"
              title="Delivering success across industries"
              description="With a portfolio of successful projects and satisfied clients, we've proven our ability to deliver on time, within budget, and exceed expectations. Your success is our reputation."
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a4af6f92cfc6de1cfe10dc_Task_20Card-29.png"
                alt="Proven track record"
                fill
                className="object-contain object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </FeatureTab>
          </TabsContent>

          <TabsContent
            value="client-focused"
            className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0"
          >
            <FeatureTab
              tag="Client-Focused"
              title="Your success is our priority"
              description="We prioritize your business goals and work closely with you throughout the entire process. From initial consultation to ongoing support, we're committed to your success and satisfaction."
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a492d1b6570b95dd597824_Customer_20Card-27.png"
                alt="Client-focused approach"
                fill
                className="object-contain object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a4af74b2e4e34cd6835eb4_Invite-9.png"
                alt="Invite bar UI"
                width={436}
                height={68}
                className="absolute left-1/2 top-6 z-20 w-11/12 max-w-[436px] -translate-x-1/2 transition-transform duration-700 ease-in-out group-hover:scale-105 md:top-11"
              />
            </FeatureTab>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const FeatureTab = ({
  tag,
  title,
  description,
  children,
}: {
  tag: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <div className="group flex w-full flex-col items-center gap-8 rounded-xl border border-black/[.04] bg-white p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.06)] transition-all duration-700 ease-in-out hover:border-black/[.08] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] lg:flex-row lg:gap-12 lg:p-12">
    <div className="relative h-[240px] w-full flex-1 self-stretch overflow-hidden rounded-lg bg-gray-50 lg:h-[320px] lg:rounded-xl">
      {/* Illumination effect from behind on hover */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 ease-in-out -z-10" />
      <div className="absolute -inset-2 bg-gradient-to-br from-blue-300/30 via-purple-300/30 to-pink-300/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 ease-in-out -z-10" />

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#5226bb]/[0.05] to-[#f64949]/[0.05] transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
      {children}
    </div>
    <div className="flex w-full flex-col gap-5 text-left lg:w-auto lg:flex-shrink-0 lg:basis-[400px]">
      <div>
        <div className="inline-block rounded-md bg-accent-yellow px-3 py-1.5 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-md">
          <span className="text-xs font-semibold uppercase tracking-[0.02em] text-[#1a1a1a]">
            {tag}
          </span>
        </div>
      </div>
      <h3 className="text-2xl font-semibold leading-[1.3] tracking-[-0.01em] text-[#1a1a1a] transition-all duration-700 ease-in-out group-hover:translate-x-1 lg:text-3xl">
        {title}
      </h3>
      <p className="text-base leading-[1.6] text-[#4a4a4a] transition-all duration-700 ease-in-out group-hover:text-[#1a1a1a]">
        {description}
      </p>
    </div>
  </div>
);

export default FeaturesSection;