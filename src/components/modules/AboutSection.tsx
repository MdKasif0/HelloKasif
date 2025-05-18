// src/components/modules/AboutSection.tsx
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Lightbulb, Cpu, Palette } from 'lucide-react'; // Icons: Lightbulb for philosophy, Cpu for skills, Palette for design sense

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">The Architect Behind the Verse</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <InteractiveCard className="lg:col-span-1 p-0">
          <Image
            src="https://placehold.co/600x750.png" 
            alt="Your Name - Digital Architect"
            width={600}
            height={750}
            className="rounded-t-xl object-cover w-full h-auto"
            data-ai-hint="futuristic developer portrait"
          />
          <CardHeader className="p-6">
            <CardTitle className="text-3xl text-center">Your Name</CardTitle>
            <CardDescription className="text-center text-primary mt-1">
              Digital Craftsman & Visionary Developer
            </CardDescription>
          </CardHeader>
        </InteractiveCard>

        <div className="lg:col-span-2 space-y-8">
          <InteractiveCard>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl"><Lightbulb className="h-7 w-7 text-primary" /> My Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I believe in crafting digital experiences that are not only functional but also memorable and deeply engaging. My approach fuses cutting-edge technology with human-centric design to build solutions that resonate, inspire, and push the boundaries of what's possible on the web.
              </p>
            </CardContent>
          </InteractiveCard>

          <InteractiveCard>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl"><Cpu className="h-7 w-7 text-primary" /> Core Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-muted-foreground text-lg">
                {[
                  "Next.js & React", "TypeScript", "Tailwind CSS", 
                  "Node.js", "AI & Genkit", "Spatial UI/UX",
                  "Server Components", "Performance Optimization"
                ].map(skill => (
                  <li key={skill} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 mr-2 text-accent flex-shrink-0"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </InteractiveCard>
           <InteractiveCard>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl"><Palette className="h-7 w-7 text-primary" /> Design & Interaction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Passionate about creating visually stunning and intuitive interfaces. I focus on subtle animations, adaptive depth, and interactive elements to build immersive digital environments that captivate and guide the user.
              </p>
            </CardContent>
          </InteractiveCard>
        </div>
      </div>
    </section>
  );
}
