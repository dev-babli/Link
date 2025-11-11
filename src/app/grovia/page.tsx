import Navigation from "../../new-src/components/sections/navigation";
import ProcessSection from "../../new-src/components/sections/process";
import FeaturesSection from "../../new-src/components/sections/features";
import SuccessStories from "../../new-src/components/sections/success-stories";
import Footer from "../../new-src/components/sections/footer";
// Main homepage components
import HeroSectionNew from '@/components/HeroSectionNew';
import { Process } from '@/components/ui/cards-stack-demo';
import ShaderShowcase from '@/components/ui/hero';
import RuixenFeatureSection from '@/components/ui/ruixen-feature-section';
import { FlowAnimationSection } from '@/components/ui/flow-animation-section';
import { PhilosophyPromiseSection } from '@/components/ui/philosophy-promise-section';
import TestimonialsColumns from '@/components/ui/testimonials-columns-1';
import { TrustedBySparkles } from '@/components/ui/trusted-by-sparkles';
import { CTAWithShader } from '@/components/ui/cta-with-shader';
import OurAIServices from '@/components/MStackCard';

export default function GroviaHomePage() {
    return (
        <main className="min-h-screen bg-background-primary">
            <Navigation />
            
            {/* ============================================
                IDEAL STRUCTURE (8-10 sections max)
            ============================================ */}
            
            {/* 1️⃣ Hero */}
            <HeroSectionNew />
            
            {/* 2️⃣ Why Choose Us */}
            <FeaturesSection />
            
            {/* 3️⃣ Services Cards */}
            <SuccessStories />
            
            {/* 4️⃣ Our Process (6-Step Journey) */}
            <Process />
            
            {/* 5️⃣ CTA (Transformed from Hero) - MIDDLE */}
            <ShaderShowcase />
            
            {/* 6️⃣ The Link Innovations Way */}
            <ProcessSection />
            
            {/* 7️⃣ Technologies Showcase */}
            <RuixenFeatureSection />
            
            {/* 8️⃣ Flow Animation Component */}
            <FlowAnimationSection />
            
            {/* 9️⃣ Our Promise & What We Believe - MStack Cards */}
            <OurAIServices />
            
            {/* 🔟 Philosophy & Promise & Beliefs (Merged) */}
            <PhilosophyPromiseSection />
            
            {/* 1️⃣1️⃣ Social Proof */}
            <div className="bg-background-primary">
                <TestimonialsColumns />
                <TrustedBySparkles />
            </div>
            
            {/* 1️⃣1️⃣ Final CTA */}
            <CTAWithShader />
            
            {/* 1️⃣2️⃣ Footer */}
            <Footer />
        </main>
    );
}
