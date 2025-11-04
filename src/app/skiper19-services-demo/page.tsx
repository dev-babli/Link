import { Header } from '@/components/header-3';
import Skiper19Services from '@/components/skiper19-services';
import Footer from '@/orbai_clone/components/sections/footer';

export default function Skiper19ServicesDemoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <div className="pt-0">
        <Skiper19Services />
      </div>
      <Footer />
    </main>
  );
}

