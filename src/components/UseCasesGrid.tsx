"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface UseCase {
  title: string;
  description: string;
  examples?: string[];
  icon?: string;
}

interface UseCasesGridProps {
  useCases: UseCase[];
  title?: string;
  description?: string;
}

export default function UseCasesGrid({
  useCases,
  title = "Use Cases",
  description = "Explore how our solutions transform different industries and functions",
}: UseCasesGridProps) {
  return (
    <section className="bg-background-primary py-24">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-medium text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-border-subtle bg-background-secondary p-8 shadow-soft transition-all hover:shadow-lg hover:-translate-y-1 group"
            >
              {useCase.icon && (
                <div className="text-5xl mb-4">{useCase.icon}</div>
              )}
              <h3 className="text-xl font-medium text-text-primary mb-3">
                {useCase.title}
              </h3>
              <p className="text-base text-text-secondary leading-relaxed mb-4">
                {useCase.description}
              </p>
              {useCase.examples && useCase.examples.length > 0 && (
                <div className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <ArrowRight className="w-4 h-4 text-accent-yellow flex-shrink-0" />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



