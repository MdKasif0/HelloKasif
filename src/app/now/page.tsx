
// src/app/now/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Sparkles, Zap, Brain } from 'lucide-react'; // Added Brain icon
import type { Metadata } from 'next';
import BackToTopButton from '@/components/interactive/BackToTopButton';

const pageTitle = 'What Md Kasif Uddin Is Doing Now | Current Focus & Learnings';
const pageDescription = 'A snapshot of what Md Kasif Uddin is currently focused on, learning, and exploring in his professional and personal life at HelloKasif.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
   openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/now',
    type: 'article',
     images: [
      {
        url: '/og-image-now.png',
        width: 1200,
        height: 630,
        alt: 'Md Kasif Uddin - What I\'m Doing Now',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/twitter-image-now.png'],
  },
};


export default function NowPage() {
  const manuallyUpdatedDate = "May 19, 2025"; // Updated date

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[calc(100vh-8rem)]">
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <Card className="bg-card/70 backdrop-blur-md border-border/50 shadow-xl">
            <CardHeader className="text-center border-b border-border/30 pb-6">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 mx-auto">
                <CalendarDays className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <CardTitle>What I'm Doing Now</CardTitle>
              </h1>
              <CardDescription className="text-muted-foreground text-lg mt-2">
                Last updated: {manuallyUpdatedDate}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8 space-y-8 text-lg">
              <section>
                <h2 className="flex items-center text-2xl font-semibold text-primary mb-3">
                  <Brain className="h-6 w-6 mr-2" /> Current Focus & Learning
                </h2>
                <p className="text-muted-foreground leading-relaxed text-balance">
                  Currently, I am focused on exploring and learning how to integrate Artificial Intelligence (AI) and Machine Learning (ML) models into modern web applications. I'm experimenting with various APIs, studying model deployment techniques, and looking into frameworks that bridge the gap between frontend and intelligent backend systems.
                </p>
              </section>

              {/* You can add other sections like "Personal Goals" or "Reading" back here if needed */}

              <p className="text-sm text-center text-muted-foreground/80 pt-6 border-t border-border/30">
                This page is inspired by <a href="https://nownownow.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">nownownow.com</a>.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}
