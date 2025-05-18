
// src/components/modules/AboutSection.tsx
// This is now the HOMEPAGE version of the About Section (teaser)
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowRight, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 animate-in fade-in duration-500">
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <InteractiveCard className="lg:col-span-1 p-0 animate-in fade-in slide-in-from-left-10 duration-700">
          <Image
            src="https://placehold.co/600x750.png" 
            alt="Jane Doe - Digital Architect"
            width={600}
            height={750}
            className="rounded-t-xl object-cover w-full h-auto"
            data-ai-hint="futuristic developer portrait"
            priority
          />
          <CardHeader className="p-6">
            <CardTitle className="text-3xl text-center">Jane Doe</CardTitle>
            <CardDescription className="text-center text-primary mt-1">
              Visionary Developer & Digital Artisan
            </CardDescription>
          </CardHeader>
        </InteractiveCard>

        <div className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-right-10 duration-700 delay-200">
          <InteractiveCard>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <UserCircle className="h-7 w-7 text-primary" />
                Meet the Architect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6 text-balance">
                I craft digital experiences that fuse technology with human-centric design, building bridges between complex systems and intuitive interaction. My passion is to create solutions that are not only functional but also memorable and deeply engaging.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground group">
                <Link href="/about">
                  Learn More About Me <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </InteractiveCard>
        </div>
      </div>
    </section>
  );
}

    