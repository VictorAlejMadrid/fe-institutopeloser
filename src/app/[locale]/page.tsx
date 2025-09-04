import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from './_components/hero';
import MissionSection from './_components/mission';
import NumbersSection from './_components/numbers';

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-36">
      <Header />

      <HeroSection />

      <MissionSection />

      <NumbersSection />

      <div className="h-[200vh] flex items-center justify-center"></div>
      <Footer />
    </div>
  );
}
