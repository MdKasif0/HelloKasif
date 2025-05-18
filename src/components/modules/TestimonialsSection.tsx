
// src/components/modules/TestimonialsSection.tsx
// This is now the HOMEPAGE version of the Testimonials Section (teaser)
import Image from 'next/image';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, Star, MessageCircleMore } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const testimonialsData = [ // Keep a small set for homepage, full set on /testimonials page
  {
    id: 1,
    name: "Alex Chen",
    role: "Lead Developer @ TechSolutions",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "professional portrait",
    quote: "Jane is an incredibly talented developer with a keen eye for detail and a passion for creating intuitive user experiences. A true asset to any team!",
    rating: 5,
  }
  // Add more testimonials to src/app/testimonials/page.tsx
];

const highlightedTestimonial = testimonialsData[0];

export default function TestimonialsSection() {
  if (!highlightedTestimonial) {
    return null;
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 animate-in fade-in duration-500">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Hear From Others</h2>
         <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto text-balance">
          I've been lucky to work with some amazing people. Here's a kind word from one of them.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
          <InteractiveCard 
            key={highlightedTestimonial.id} 
            className={`flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-500`}
          >
            <CardHeader className="p-6 items-center text-center">
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg border-2 border-primary/50">
                <Image
                  src={highlightedTestimonial.avatarUrl}
                  alt={highlightedTestimonial.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={highlightedTestimonial.avatarHint}
                />
              </div>
              <CardTitle className="text-xl">{highlightedTestimonial.name}</CardTitle>
              <CardDescription className="text-primary">{highlightedTestimonial.role}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 text-center flex-grow">
              <Quote className="mx-auto h-8 w-8 text-accent mb-4 transform rotate-180" />
              <p className="text-muted-foreground italic text-balance leading-relaxed">
                "{highlightedTestimonial.quote}"
              </p>
            </CardContent>
            {highlightedTestimonial.rating && (
              <CardContent className="p-6 pt-0">
                <div className="flex justify-center gap-1 mt-4">
                  {Array(highlightedTestimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  {Array(5 - highlightedTestimonial.rating).fill(0).map((_, i) => (
                     <Star key={i + highlightedTestimonial.rating} className="h-5 w-5 text-muted-foreground/50" />
                  ))}
                </div>
              </CardContent>
            )}
          </InteractiveCard>
      </div>
      <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group border-primary/50 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/testimonials">
              Read More Testimonials <MessageCircleMore className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div> 
    </section>
  );
}
    
