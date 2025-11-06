import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Service {
  name: string;
  description: string;
  logoUrl: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  imageUrl: string;
  category: string;
  gradientClass: string;
  href: string;
}

const services: Service[] = [
  {
    name: "Web Development",
    description: "Custom web applications built with modern frameworks. Full-stack solutions with React, Next.js, and TypeScript for responsive and performant websites.",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a742ab7bef148ae7f7d458_Fakebrand_201-18.png",
    logoAlt: "Web Development",
    logoWidth: 36,
    logoHeight: 36,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a742939ba34c8fb0d91e78_Minimalist_20Note_20Card_-15.png",
    category: "Development",
    gradientClass: "bg-gradient-to-t from-[#4da99b]/20 to-[#f2994a]/20",
    href: "/services/web-development"
  },
  {
    name: "Mobile Apps",
    description: "Native iOS and Android applications with cross-platform solutions. React Native and Flutter for seamless mobile experiences across all devices.",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a7433c1a7c6b809ff8f256_Fakebrand_202-20.png",
    logoAlt: "Mobile Apps",
    logoWidth: 36,
    logoHeight: 36,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a745441309ecaba6105106_Minimalist_20Pastel_20Com-17.png",
    category: "Development",
    gradientClass: "bg-gradient-to-t from-[#f1ab70]/20 to-[#e8d99c]/20",
    href: "/services/mobile-apps"
  },
  {
    name: "Cloud Services",
    description: "Cloud infrastructure and migration solutions. AWS, Azure, and Google Cloud expertise for scalable cloud architecture and seamless deployments.",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a7459a4ac7c1810db6bdf0_Fakebrand_205-16.png",
    logoAlt: "Cloud Services",
    logoWidth: 36,
    logoHeight: 36,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a742e3f716a8f915fd5b48_Modern_20object_20in_20co-19.png",
    category: "Infrastructure",
    gradientClass: "bg-gradient-to-t from-[#e49ca2]/20 to-[#a6d1a9]/20",
    href: "/services/cloud-services"
  },
  {
    name: "AI Solutions",
    description: "Machine learning and AI automation services. Natural language processing, computer vision, and intelligent systems to transform your business operations.",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a7460135293b95f9dc7850_Fakebrand_206-14.png",
    logoAlt: "AI Solutions",
    logoWidth: 84,
    logoHeight: 20,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7e6eac5d-453f-448a-9950-5c71cf8711bf-grovia-template-webflow-io/assets/images/68a7dc54fc9aee7d7140fd95_Modern_20Laptop_20_26_20P-21.png",
    category: "Innovation",
    gradientClass: "bg-gradient-to-t from-[#f1c40f]/10 to-[#50a1a1]/20",
    href: "/services/ai-automation"
  }
];

const SuccessStories = () => {
  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-medium tracking-[-0.015em] text-text-primary sm:text-[56px] sm:leading-[1.15]">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-text-secondary md:text-xl">
            Link Innovations provides comprehensive IT and technology solutions to help your business thrive. Explore our range of services designed to meet your digital needs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 sm:mt-20 md:grid-cols-2">
          {services.map((service) => (
            <Link key={service.name} href={service.href} className="group block overflow-hidden rounded-2xl bg-background-secondary shadow-soft border border-border-subtle transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1.5">
              <div className="relative h-[340px] overflow-hidden">
                <div
                  className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.imageUrl})` }}
                />
                <div className={`absolute inset-0 ${service.gradientClass}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-5xl font-medium text-white drop-shadow-lg sm:text-6xl">
                    {service.name}
                  </h3>
                </div>
                <div className="absolute bottom-6 right-6 rounded-full bg-black/40 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                  {service.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-[28px] font-medium leading-[1.3] text-text-primary">
                  {service.name}
                </h3>
                <p className="mt-2 text-base text-text-secondary">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-base font-medium text-text-primary">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/services" className="inline-block rounded-full border border-gray-300 bg-white px-6 py-3.5 text-base font-medium !text-black shadow-sm transition hover:bg-black hover:!text-white hover:border-black">
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;