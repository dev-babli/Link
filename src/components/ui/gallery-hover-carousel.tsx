"use client";

import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface GalleryHoverCarouselItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

export default function GalleryHoverCarousel({
  heading = "Simple & Scalable",
  demoUrl = "#",
  items = [
    {
      id: "item-1",
      title: "Workflow Assessment",
      summary:
        "We begin by examining your existing workflows to identify where IT solutions can deliver the greatest impact for your business.",
      url: "#",
      image:
        "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-02.png",
    },
    {
      id: "item-2",
      title: "Deploy with Confidence",
      summary:
        "Our team develops custom IT systems built around your goals, ensuring safe and reliable deployment with minimal disruption.",
      url: "#",
      image:
        "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-gradient.png",
    },
    {
      id: "item-3",
      title: "Ongoing Support & Optimization",
      summary:
        "After deployment, we provide continuous support and refine your systems to keep them performing at their best and adapting to your needs.",
      url: "#",
      image:
        "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/featured-01.png",
    },
  ],
}: {
  heading?: string;
  demoUrl?: string;
  items?: GalleryHoverCarouselItem[];
}) {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl lg:text-3xl font-medium text-[#1a1a1a] leading-relaxed">
              {heading}{" "}
              <span className="text-[#666666] text-sm sm:text-base lg:text-3xl"> A transparent process of collaboration and feedback designed to deliver exceptional results for your business.</span>
            </h3>
          </div>
        </div>

        <div className="w-full max-w-full">
          <Carousel
            opts={{ breakpoints: { "(max-width: 768px)": { dragFree: true } } }}
            className="relative w-full max-w-full"
          >
            <CarouselContent className="hide-scrollbar w-full max-w-full md:ml-4 md:-mr-4">
              {items.map((item) => (
                <CarouselItem key={item.id} className="ml-6 md:max-w-[350px]">
                  <Link href={item.url} className="group block relative w-full h-[300px] md:h-[350px]">
                    <Card className="overflow-hidden rounded-xl h-full w-full rounded-3xl">
                      {/* Image */}
                      <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2">
                        <Image
                          width={400}
                          height={300}
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center"
                        />
                        {/* Fade overlay at bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      {/* Text Section */}
                      <div className="absolute bottom-0 left-0 w-full px-4 transition-all duration-500 group-hover:h-1/2 group-hover:flex flex-col justify-center bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100">
                        <h3 className="text-lg font-medium md:text-xl text-[#1a1a1a]">{item.title}</h3>
                        <p className="text-[#666666] text-sm md:text-base line-clamp-2">
                          {item.summary}
                        </p>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute bottom-2 right-2 border border-gray-200 hover:-rotate-45 transition-all duration-500 rounded-full mt-2 px-0 flex items-center gap-1 text-[#1a1a1a] hover:text-[#666666]"
                        >
                          <ArrowRight className="size-4" />
                        </Button>
                      </div>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
