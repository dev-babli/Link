import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  questions: FAQItem[];
}

interface MainlineFAQBlockProps {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
  heading?: string;
  description?: string;
  contactLink?: string;
  categories?: FAQCategory[];
  faqItems?: FAQItem[];
}

export const MainlineFAQBlock = ({
  headerTag = "h2",
  className,
  className2,
  heading = "Got Questions?",
  description = "If you can't find what you're looking for,",
  contactLink = "/contact",
  categories,
  faqItems,
}: MainlineFAQBlockProps) => {
  // Convert flat FAQ items to categories if needed
  const displayCategories = categories || (faqItems ? [{
    title: "Frequently Asked Questions",
    questions: faqItems,
  }] : []);

  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                {heading}
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                {heading}
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              {description}{" "}
              <Link href={contactLink} className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {displayCategories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

