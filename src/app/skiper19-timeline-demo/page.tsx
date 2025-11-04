import { Header } from '@/components/header-3';
import Skiper19Timeline from '@/components/skiper19-timeline';
import Footer from '@/orbai_clone/components/sections/footer';

export default function Skiper19TimelineDemoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <div className="pt-0">
        <Skiper19Timeline />
      </div>
      <Footer />
    </main>
  );
}

