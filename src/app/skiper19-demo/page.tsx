import { Header } from '@/components/header-3';
import Skiper19Premium from '@/components/skiper19-premium';
import Footer from '@/orbai_clone/components/sections/footer';

export default function Skiper19DemoPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0f]">
            <Header />
            <div className="pt-0">
                <Skiper19Premium />
            </div>
            <Footer />
        </main>
    );
}

