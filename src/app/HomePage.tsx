import { Header } from '@/components/header-3';
import HeroSectionNew from '@/components/HeroSectionNew';
import ProcessCards from '@/homepage-versions/shared/components/ProcessCards';
import OurAIServices from '@/components/MStackCard';
import CenterModeProductivitySlider from '@/components/ui/center-mode-productivity-slider';
import AITransformationCirrusInteractive from '@/components/MVerticalCard';
import { Process } from '@/components/ui/cards-stack-demo';
import RuixenFeatureSection from '@/components/ui/ruixen-feature-section';
import StackFeatureSection from '@/components/ui/stack-feature-section';
import { WhyChooseUsBento } from '@/components/ui/why-choose-us-bento';
import GalleryHoverCarousel from '@/components/ui/gallery-hover-carousel';
import RuixenBentoCards from '@/components/ui/ruixen-bento-cards';
import ProjectsSection from '@/orbai_clone/components/sections/projects';
import { CardHoverRevealSection } from '@/components/ui/card-hover-reveal-section';
import TestimonialsColumns from '@/components/ui/testimonials-columns-1';
import FaqSection from '@/orbai_clone/components/sections/faq';
import { TrustedBySparkles } from '@/components/ui/trusted-by-sparkles';
import { CTAWithShader } from '@/components/ui/cta-with-shader';
import Footer from '@/orbai_clone/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-0 [&>*]:mb-0 [&>*]:pb-0 [&>*:not(:first-child)]:mt-12 [&>*:not(:last-child)]:mb-12 md:[&>*:not(:first-child)]:mt-16 md:[&>*:not(:last-child)]:mb-16">
        <HeroSectionNew />
        <ProcessCards />
        <OurAIServices />
        <CenterModeProductivitySlider />
        <AITransformationCirrusInteractive />
        <Process />
        <RuixenFeatureSection />
        <StackFeatureSection />
        <WhyChooseUsBento />
        <GalleryHoverCarousel heading="Simple & Scalable" />
        <RuixenBentoCards />
        <ProjectsSection />
        <CardHoverRevealSection />
        <TestimonialsColumns />
        <FaqSection />
        <TrustedBySparkles />
        <CTAWithShader />
        <Footer />
      </div>
    </main>
  );
}

