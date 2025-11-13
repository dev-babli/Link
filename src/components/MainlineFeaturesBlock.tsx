import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { MainlineDashedLine } from "./MainlineDashedLine";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureItem {
  title: string;
  image?: string;
}

interface MainlineFeaturesBlockProps {
  sectionId?: string;
  dashedLineText?: string;
  heading: string;
  description: string;
  items: FeatureItem[];
}

export const MainlineFeaturesBlock = ({
  sectionId = "feature-modern-teams",
  dashedLineText = "KEY FEATURES",
  heading,
  description,
  items,
}: MainlineFeaturesBlockProps) => {
  // Default images from mainline template
  const defaultImages = [
    "/mainline_service_template/features/triage-card.svg",
    "/mainline_service_template/features/cycle-card.svg",
    "/mainline_service_template/features/overview-card.svg",
  ];

  return (
    <section id={sectionId} className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <MainlineDashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            {dashedLineText}
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground leading-snug">
            {description}
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.slice(0, 3).map((item, i) => {
              const imageSrc = item.image 
                ? (item.image.startsWith("/") ? item.image : `/mainline_service_template/${item.image}`)
                : defaultImages[i] || defaultImages[0];
              
              return (
                <div key={i} className="flex flex-1 max-md:flex-col">
                  <div className="flex-1 p-4 pe-0! md:p-6">
                    <div className="relative aspect-[1.28/1] overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={`${item.title} interface`}
                        fill
                        className="object-cover object-left-top ps-4 pt-2"
                      />
                      <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                    </div>

                    <Link
                      href="#"
                      className={
                        "group flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6"
                      }
                    >
                      <h3 className="font-display max-w-60 text-2xl leading-tight font-bold tracking-tight">
                        {item.title}
                      </h3>
                      <div className="rounded-full border p-2">
                        <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-9" />
                      </div>
                    </Link>
                  </div>
                  {i < items.length - 1 && (
                    <div className="relative hidden md:block">
                      <MainlineDashedLine orientation="vertical" />
                    </div>
                  )}
                  {i < items.length - 1 && (
                    <div className="relative block md:hidden">
                      <MainlineDashedLine orientation="horizontal" />
                    </div>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

