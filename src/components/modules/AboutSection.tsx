
// src/components/modules/AboutSection.tsx
// This is now the HOMEPAGE version of the About Section (teaser)
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowRight, UserCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 animate-in fade-in duration-500">
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <InteractiveCard className="lg:col-span-1 p-0 animate-in fade-in slide-in-from-left-10 duration-700">
          <Image
            src="https://raw.githubusercontent.com/MdKasif0/HelloKasif/b6b03e2ca12e6e5bc66fa496c78bab57bf7b3fa4/public/Images/file_0000000006c851f78147f7ea8a5edc00_conversation_id%3D67e8916e-6574-8002-a80a-054fd38329e9%26message_id%3Dc5173a0a-1dc0-4b3f-bfde-02b77bed7523(1)_copy_600x750.jpg" 
            alt="Md Kasif Uddin - Aspiring Developer"
            width={600}
            height={750}
            className="rounded-t-xl object-cover w-full h-auto"
            data-ai-hint="Md Kasif Uddin"
            priority
          />
          <CardHeader className="p-6">
            <CardTitle className="text-3xl text-center">Md Kasif Uddin</CardTitle>
            <CardDescription className="text-center text-primary mt-1">
              Grade 12th PCM Student & Aspiring Developer
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0 text-center">
             <Button asChild size="lg" className="w-full bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 text-black font-semibold hover:opacity-90 group rounded-lg shadow-md hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105">
                <Link href="/KasifUddin_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
                  Download Resume <Download size={18} className="ml-2" />
                </Link>
              </Button>
          </CardContent>
        </InteractiveCard>

        <div className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-right-10 duration-700 delay-200">
          <InteractiveCard>
            <CardHeader>
              <CardTitle className="font-mono flex items-center gap-3 text-2xl">
                <UserCircle className="h-7 w-7 text-primary" />
                Meet the Developer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6 text-balance">
                As a Grade 12th PCM student, I'm passionate about the intersection of technology and problem-solving, particularly in web development and AI/ML. I'm driven to create impactful digital solutions.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 text-black font-semibold hover:opacity-90 group">
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
