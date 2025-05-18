import HeroSection from '@/components/modules/HeroSection';
import AboutSection from '@/components/modules/AboutSection';
import ProjectsSection from '@/components/modules/ProjectsSection';
import TestimonialsSection from '@/components/modules/TestimonialsSection';
import TimelineSection from '@/components/modules/TimelineSection';
import AchievementsSection from '@/components/modules/AchievementsSection';
import ContactSection from '@/components/modules/ContactSection';
import EnvironmentDisplay from '@/components/ai/EnvironmentDisplay';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection /> 
      
      <main className="container mx-auto px-4 space-y-16 md:space-y-24 relative z-10 pb-16 md:pb-24">
        <div className="my-12 md:my-16">
           <EnvironmentDisplay />
        </div>

        <AboutSection />
        
        <Separator className="my-16 md:my-20 bg-border/30 h-[2px] rounded-full max-w-md mx-auto" />

        <ProjectsSection />

        <Separator className="my-16 md:my-20 bg-border/30 h-[2px] rounded-full max-w-md mx-auto" />
        
        <TestimonialsSection />

        <Separator className="my-16 md:my-20 bg-border/30 h-[2px] rounded-full max-w-md mx-auto" />

        <TimelineSection />

        <Separator className="my-16 md:my-20 bg-border/30 h-[2px] rounded-full max-w-md mx-auto" />

        <AchievementsSection />

        <Separator className="my-16 md:my-20 bg-border/30 h-[2px] rounded-full max-w-md mx-auto" />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
