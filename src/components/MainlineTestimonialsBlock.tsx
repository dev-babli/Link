import Image from "next/image";

import { ArrowRight } from "lucide-react";

import { MainlineDashedLine } from "./MainlineDashedLine";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CarouselPrevious, CarouselNext } from "./MainlineCarouselButtons";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

interface MainlineTestimonialsBlockProps {
  className?: string;
  dashedLineClassName?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  items: Testimonial[];
}

export const MainlineTestimonialsBlock = ({
  className,
  dashedLineClassName,
  heading = "Trusted by product builders",
  description = "Mainline is built on the habits that make the best product teams successful: staying focused, moving quickly, and always aiming for high-quality work.",
  buttonText,
  buttonHref,
  items,
}: MainlineTestimonialsBlockProps) => {
  // Duplicate items for carousel loop effect
  const carouselItems = [...items, ...items];

  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              {description}
            </p>
            {buttonText && buttonHref && (
              <Button variant="outline" className="shadow-md" asChild>
                <a href={buttonHref}>
                  {buttonText} <ArrowRight className="size-4" />
                </a>
              </Button>
            )}
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel className="w-full">
              <CarouselContent className="">
                {carouselItems.map((testimonial, index) => {
                  const imageSrc = testimonial.image 
                    ? (testimonial.image.startsWith("/") ? testimonial.image : `/mainline_service_template/${testimonial.image}`)
                    : `/mainline_service_template/testimonials/${testimonial.author.toLowerCase().replace(/\s+/g, '-')}.webp`;
                  
                  return (
                    <CarouselItem
                      key={index}
                      className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                    >
                      <Card className="bg-muted h-full overflow-hidden border-none">
                        <CardContent className="flex h-full flex-col p-0">
                          {testimonial.image && (
                            <div className="relative h-[288px] lg:h-[328px]">
                              <Image
                                src={imageSrc}
                                alt={testimonial.author}
                                fill
                                className="object-cover object-top"
                              />
                            </div>
                          )}
                          <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                            <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                              &quot;{testimonial.quote}&quot;
                            </blockquote>
                            <div className="space-y-0.5">
                              <div className="text-primary font-semibold">
                                {testimonial.author}, {testimonial.role}
                              </div>
                              <div className="text-muted-foreground text-sm">
                                {testimonial.company}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <MainlineDashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};

