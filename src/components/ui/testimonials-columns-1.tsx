"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-white"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300 max-w-xs w-full" key={i}>
                  <div className="text-[#1a1a1a] leading-relaxed">{text}</div>
                  <div className="flex items-center gap-3 mt-6">
                    <Image
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border border-gray-200"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-[#1a1a1a]">{name}</div>
                      <div className="leading-5 text-[#666666] tracking-tight text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "Link Innovations transformed our operations with their innovative IT solutions. The cloud-based platform streamlined our processes and boosted productivity significantly.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Chen",
    role: "Operations Manager",
  },
  {
    text: "Implementing Link Innovations' solutions was seamless and efficient. Their customizable, user-friendly interface made team training effortless and adoption smooth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Michael Rodriguez",
    role: "IT Manager",
  },
  {
    text: "The support team at Link Innovations is exceptional. They guided us through setup and provided ongoing assistance, ensuring our complete satisfaction with the service.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Emily Johnson",
    role: "Customer Support Lead",
  },
  {
    text: "Link Innovations' seamless integration enhanced our business operations and efficiency. Highly recommend for their intuitive interface and robust features.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "David Kim",
    role: "CEO",
  },
  {
    text: "Their robust solutions and quick support have transformed our workflow, making us significantly more efficient and competitive in the market.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Jessica Martinez",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded our expectations. It streamlined our processes and improved overall business performance dramatically.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Ryan Thompson",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with Link Innovations' user-friendly design and excellent customer feedback system. Highly recommend their services.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    name: "Amanda White",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations with innovative technology solutions.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "James Wilson",
    role: "Sales Manager",
  },
  {
    text: "Using Link Innovations' solutions, our online presence and conversions significantly improved, boosting our business performance and customer satisfaction.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    name: "Lisa Anderson",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumns = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-gray-200">
            <p className="text-xs font-medium text-[#000000] uppercase tracking-wider">TESTIMONIALS</p>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-[#000000] sm:text-5xl mb-4 text-center">
            What Our Clients Say
          </h2>
          <p className="text-lg leading-8 text-[#000000] text-center">
            See what our customers have to say about Link Innovations.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsColumns;

