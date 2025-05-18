
import HeroSection from '@/components/modules/HeroSection';
import AboutSection from '@/components/modules/AboutSection'; // Teaser version
import ProjectsSection from '@/components/modules/ProjectsSection'; // Teaser version
import TestimonialsSection from '@/components/modules/TestimonialsSection'; // Teaser version
import TimelineSection from '@/components/modules/TimelineSection'; // Teaser version
import AchievementsSection from '@/components/modules/AchievementsSection';
import ContactSection from '@/components/modules/ContactSection';
import EnvironmentDisplay from '@/components/ai/EnvironmentDisplay';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Separator } from '@/components/ui/separator';
import BackToTopButton from '@/components/interactive/BackToTopButton'; // Added for homepage too

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection /> 
      
      <main className="container mx-auto px-4 space-y-16 md:space-y-24 relative z-10 pb-16 md:pb-24">
        <div className="my-12 md:my-16">
           <EnvironmentDisplay />
        </div>

        {/* About Section Teaser - links to /about */}
        <AboutSection /> 
        
        <Separator className="my-16 md:my-20 bg-border/30 h-[2px] rounded-full max-w-md mx-auto" />

        {/* Projects Section Teaser - links to /projects */}
        <ProjectsSection />

        <Separator className="my-16 md:my-20 bg-border/30 h-[2px] rounded-full max-w-md mx-auto" />
        
        {/* Testimonials Section Teaser - links to /testimonials */}
        <TestimonialsSection />

        <Separator className="my-16 md:my-20 bg-border/30 h-[2px] rounded-full max-w-md mx-auto" />

        {/* Timeline Section Teaser - links to /timeline */}
        <TimelineSection />

        <Separator className="my-16 md:my-20 bg-border/30 h-[2px] rounded-full max-w-md mx-auto" />

        <AchievementsSection /> {/* This can remain as is if it's already concise, or link to /achievements if we create that page later */}

        <Separator className="my-16 md:my-20 bg-border/30 h-[2px] rounded-full max-w-md mx-auto" />

        {/* Contact Section - links to /contact */}
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton /> {/* Ensure it's available on homepage */}
    </>
  );
}
