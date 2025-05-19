// src/app/testimonials/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote } from 'lucide-react'; // Removed Star as rating is not in new data
import type { Metadata } from 'next';
import BackToTopButton from '@/components/interactive/BackToTopButton';

const pageTitle = 'Kind Words | What People Say About Md Kasif Uddin | HelloKasif';
const pageDescription = 'Read testimonials and recommendations for Md Kasif Uddin on HelloKasif.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/testimonials',
    type: 'website',
    images: [
      {
        url: '/og-image-testimonials.png',
        width: 1200,
        height: 630,
        alt: 'Md Kasif Uddin - Testimonials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/twitter-image-testimonials.png'], 
  },
};

const allTestimonials = [
  {
    name: "Virtual Mentor",
    role: "AI Assistant (ChatGPT)",
    avatar: "/avatars/chatgpt.png", // Path for public directory
    avatarHint: "AI logo",
    quote: "Kasif shows exceptional curiosity and consistency in learning. His commitment to real-world project development at a young age is impressive and commendable."
  },
  {
    name: "Tech Enthusiast Friend",
    role: "Peer Reviewer",
    avatar: "/avatars/friend1.png", // Path for public directory
    avatarHint: "person icon",
    quote: "The 'Note It' app by Kasif is clean, functional, and showcases the fundamentals of web development well. It’s inspiring to see such initiative in a student."
  }
];

export default function AllTestimonialsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[calc(100vh-8rem)]">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">What Folks Are Saying</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto text-balance">
            I'm grateful for the opportunity to have collaborated and learned. Here's some feedback.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <InteractiveCard 
              key={index} 
              className={`flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-500`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="p-6 items-center text-center">
                <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg border-2 border-primary/50">
                  <Image
                    src={testimonial.avatar} // Assumes images are in public/avatars/
                    alt={testimonial.name}
                    fill 
                    style={{ objectFit: 'cover' }} 
                    data-ai-hint={testimonial.avatarHint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              {/* Rating display removed as it's not in the new data */}
            </InteractiveCard>
          ))}
        </div>
        {/* Reminder for user to place avatar images */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
            Note: Ensure avatar images (e.g., <code>chatgpt.png</code>, <code>friend1.png</code>) are placed in the <code>public/avatars/</code> directory.
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}
