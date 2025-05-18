import HeroSection from '@/components/modules/HeroSection';
import AboutSection from '@/components/modules/AboutSection';
import ProjectsSection from '@/components/modules/ProjectsSection';
import ContactSection from '@/components/modules/ContactSection';
import EnvironmentDisplay from '@/components/ai/EnvironmentDisplay';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      <Header />
      {/* HeroSection is designed to be full-height-ish and might overlap header space, so it's first */}
      <HeroSection /> 
      
      <main className="container mx-auto px-4 space-y-16 md:space-y-24 relative z-10 pb-16 md:pb-24">
        {/* AI Display can be strategically placed, e.g., after hero or before a specific section */}
        <div className="my-12 md:my-16">
           <EnvironmentDisplay />
        </div>

        <AboutSection />
        
        <Separator className="my-12 bg-border/30 h-[2px] rounded-full max-w-sm mx-auto" />

        <ProjectsSection />

        <Separator className="my-12 bg-border/30 h-[2px] rounded-full max-w-sm mx-auto" />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
