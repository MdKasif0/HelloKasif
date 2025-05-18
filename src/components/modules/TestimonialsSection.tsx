// src/components/modules/TestimonialsSection.tsx
import Image from 'next/image';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Lead Developer @ TechSolutions",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "professional portrait",
    quote: "Jane is an incredibly talented developer with a keen eye for detail and a passion for creating intuitive user experiences. A true asset to any team!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Project Manager @ Innovate Inc.",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "corporate headshot",
    quote: "Working with Jane was a fantastic experience. Their proactive approach and commitment to quality are second to none. Highly recommended.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    role: "Professor of Computer Science",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "academic profile",
    quote: "Jane consistently demonstrated exceptional problem-solving skills and a deep understanding of complex concepts. A bright future ahead!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 animate-in fade-in duration-500">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700">Words From Collaborators</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <InteractiveCard 
            key={testimonial.id} 
            className={`flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-500`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardHeader className="p-6 items-center text-center">
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg border-2 border-primary/50">
                <Image
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
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
    </section>
  );
}
