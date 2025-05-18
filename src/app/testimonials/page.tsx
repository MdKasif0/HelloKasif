
// src/app/testimonials/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';
import type { Metadata } from 'next';
import BackToTopButton from '@/components/interactive/BackToTopButton'; // Added

export const metadata: Metadata = {
  title: 'Testimonials | What Collaborators Say | PersonaVerse',
  description: 'Read testimonials and recommendations from colleagues, clients, and mentors about Jane Doe\'s work and skills.',
};

const allTestimonials = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Lead Developer @ TechSolutions",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "professional portrait",
    quote: "Jane is an incredibly talented developer with a keen eye for detail and a passion for creating intuitive user experiences. Their ability to tackle complex problems with innovative solutions and maintain high code quality is truly commendable. A true asset to any team!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Project Manager @ Innovate Inc.",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "corporate headshot",
    quote: "Working with Jane was a fantastic experience. Their proactive approach, clear communication, and commitment to quality are second to none. They consistently delivered beyond expectations and played a crucial role in our project's success. Highly recommended.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    role: "Professor of Computer Science @ Tech University",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "academic profile",
    quote: "Jane consistently demonstrated exceptional problem-solving skills and a deep understanding of complex computer science concepts during their studies. Their curiosity and drive to learn are remarkable. A bright future undoubtedly lies ahead!",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael B. Jordan (not the actor!)",
    role: "CEO @ StartupX",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "entrepreneur headshot",
    quote: "Jane's contributions to our early-stage product were invaluable. Their technical expertise and creative input helped shape our platform into something truly special. A pleasure to work with.",
    rating: 4,
  },
];

export default function AllTestimonialsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[calc(100vh-8rem)]">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Words From Collaborators</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto text-balance">
            Feedback and insights from people I've had the pleasure of working and learning with.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <InteractiveCard 
              key={testimonial.id} 
              className={`flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-500`}
              style={{ animationDelay: `${index * 150}ms` }} // Stagger animation
            >
              <CardHeader className="p-6 items-center text-center">
                <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg border-2 border-primary/50">
                  <Image
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    fill // Changed from layout="fill" objectFit="cover"
                    style={{ objectFit: 'cover' }} // Ensure this style is applied
                    data-ai-hint={testimonial.avatarHint}
                  />
                </div>
                <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                <CardDescription className="text-primary">{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-center flex-grow">
                <Quote className="mx-auto h-8 w-8 text-accent mb-4 transform rotate-180" />
                <p className="text-muted-foreground italic text-balance leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </CardContent>
              {testimonial.rating && (
                <CardContent className="p-6 pt-0 mt-auto">
                  <div className="flex justify-center gap-1 mt-4">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                       <Star key={i + testimonial.rating} className="h-5 w-5 text-muted-foreground/50" />
                    ))}
                  </div>
                </CardContent>
              )}
            </InteractiveCard>
          ))}
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}
