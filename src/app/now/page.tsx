
// src/app/now/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Sparkles, Zap } from 'lucide-react';
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
  // For a "Now" page, it's common to manually update this date when you update the content.
  const manuallyUpdatedDate = "October 26, 2023"; // MANUALLY UPDATE THIS WHEN YOU UPDATE THE PAGE CONTENT


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
                  <Zap className="h-6 w-6 mr-2" /> Current Focus
                </h2>
                <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground">
                  <li>Deep diving into scalable serverless architectures for upcoming projects.</li>
                  <li>Contributing to an open-source GenAI toolkit, focusing on developer experience.</li>
                  <li>Preparing a workshop on "Ethical AI in Creative Industries".</li>
                </ul>
              </section>

              <section>
                <h2 className="flex items-center text-2xl font-semibold text-accent mb-3">
                  <Sparkles className="h-6 w-6 mr-2" /> Learning & Exploring
                </h2>
                <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground">
                  <li>Experimenting with advanced prompting techniques for multimodal AI models.</li>
                  <li>Studying the latest developments in quantum computing (out of sheer curiosity!).</li>
                  <li>Improving my Spanish language skills through daily practice.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  Personal Goals
                </h2>
                <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground">
                  <li>Read at least two non-fiction books a month.</li>
                  <li>Complete a 10k run by the end of the quarter.</li>
                  <li>Spend more time offline, exploring nature.</li>
                </ul>
              </section>

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
