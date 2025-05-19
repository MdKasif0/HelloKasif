// src/components/modules/TestimonialsSection.tsx
// This is now the HOMEPAGE version of the Testimonials Section (teaser)
import Image from 'next/image';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, MessageCircleMore } from 'lucide-react'; // Removed Star
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const homepageTestimonial = { // Static single testimonial for homepage
  name: "Virtual Mentor",
  role: "AI Assistant (ChatGPT)",
  avatar: "/avatars/chatgpt.png", // Path for public directory
  avatarHint: "AI logo",
  quote: "Kasif shows exceptional curiosity and consistency in learning. His commitment to real-world project development at a young age is impressive and commendable."
};

export default function TestimonialsSection() {
  const testimonial = homepageTestimonial;

  return (
    <section id="testimonials" className="py-16 md:py-24 animate-in fade-in duration-500">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What Folks Are Saying</h2>
         <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto text-balance">
          I'm grateful for the opportunity to have collaborated and learned. Here's some feedback.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
          <InteractiveCard 
            key={testimonial.name} 
            className={`flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-500`}
          >
            <CardHeader className="p-6 items-center text-center">
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg border-2 border-primary/50">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  style={{ objectFit: 'cover' }}
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
            {/* Rating display removed */}
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
         <div className="text-center mt-8 text-sm text-muted-foreground">
            Note: Ensure avatar images (e.g., <code>chatgpt.png</code>) are placed in the <code>public/avatars/</code> directory.
        </div>
    </section>
  );
}
