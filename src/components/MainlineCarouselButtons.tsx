"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { useCarousel } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function CarouselPrevious({ className }: { className?: string }) {
  const { index, setIndex } = useCarousel();

  return (
    <button
      type="button"
      onClick={() => {
        if (index > 0) {
          setIndex(index - 1);
        }
      }}
      disabled={index === 0}
      className={cn(
        "bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8",
        "rounded-full border p-2 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      aria-label="Previous slide"
    >
      <ChevronLeft className="size-6 lg:size-8" />
    </button>
  );
}

export function CarouselNext({ className }: { className?: string }) {
  const { index, setIndex, itemsCount } = useCarousel();

  return (
    <button
      type="button"
      onClick={() => {
        if (index < itemsCount - 1) {
          setIndex(index + 1);
        }
      }}
      disabled={index + 1 === itemsCount}
      className={cn(
        "bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8",
        "rounded-full border p-2 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      aria-label="Next slide"
    >
      <ChevronRight className="size-6 lg:size-8" />
    </button>
  );
}

