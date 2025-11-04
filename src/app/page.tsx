import Navigation from '@/components/ui/dropdown-v1-navbar';
import Hero from '@/orbai_clone/components/sections/hero';
import RotatingText from '@/components/RotatingText';
import FounderNote from '@/orbai_clone/components/sections/founder-note';
import Bento3Section from '@/components/ui/bento-monochrome-1';
import FUIBentoGridDark from '@/components/ui/bento';
import RuixenFeatureSection from '@/components/ui/ruixen-feature-section';
import FeaturedSectionStats from '@/components/ui/featured-section-stats';
import StackFeatureSection from '@/components/ui/stack-feature-section';
import RuixenBentoCards from '@/components/ui/ruixen-bento-cards';
import GalleryHoverCarousel from '@/components/ui/gallery-hover-carousel';
import IndustriesAnimatedCards from '@/components/ui/industries-animated-cards';
import ProjectsSection from '@/orbai_clone/components/sections/projects';
import TestimonialsColumns from '@/components/ui/testimonials-columns-1';
import FaqSection from '@/orbai_clone/components/sections/faq';
import { TrustedBySparkles } from '@/components/ui/trusted-by-sparkles';
import Footer from '@/orbai_clone/components/sections/footer';
import { Process } from '@/components/ui/cards-stack-demo';
import CenterModeProductivitySlider from '@/components/ui/center-mode-productivity-slider';
import { CardHoverRevealSection } from '@/components/ui/card-hover-reveal-section';
import { ScrollCardsDemo } from '@/components/ui/scroll-cards-demo';
import { FeaturesCarouselSection } from '@/components/ui/features-carousel-section';
import { WhyChooseUsBento } from '@/components/ui/why-choose-us-bento';
import { ServicesZoomParallaxSection } from '@/components/ui/services-zoom-parallax-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <Hero />
      <section className="py-20 px-6 bg-[#f5f5f5] border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4 text-[#1a1a1a]">
              We Deliver
            </h2>
            <div className="h-20 md:h-24 flex items-center justify-center overflow-hidden">
              <RotatingText
                texts={[
                  'Innovative Solutions',
                  'Digital Excellence',
                  'Business Growth',
                  'Technology Leadership',
                  'Outstanding Results'
                ]}
                rotationInterval={2500}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1a1a1a] inline-block"
                mainClassName="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1a1a1a]"
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
              />
            </div>
          </div>
        </div>
      </section>
      <FounderNote />
      <CenterModeProductivitySlider />
      <Bento3Section />
      <section className="relative bg-white overflow-hidden">
        <FUIBentoGridDark />
      </section>
      <RuixenFeatureSection />
      <FeaturesCarouselSection />
      <ServicesZoomParallaxSection />
      <WhyChooseUsBento />
      <FeaturedSectionStats />
      <StackFeatureSection />
      <RuixenBentoCards />
      <GalleryHoverCarousel heading="Simple & Scalable" />
      <CardHoverRevealSection />
      <ScrollCardsDemo />
      <ProjectsSection />
      <IndustriesAnimatedCards />
      <Process />
      <TestimonialsColumns />
      <FaqSection />
      <TrustedBySparkles />
      <Footer />
      </div>
    </main>
  );
}
