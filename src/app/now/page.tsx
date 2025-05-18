
// src/app/now/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Sparkles, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import BackToTopButton from '@/components/interactive/BackToTopButton';
import { useEffect, useState } from 'react'; // Required for client-side date formatting

const pageTitle = 'What Jane Doe Is Doing Now | Current Focus & Learnings';
const pageDescription = 'A snapshot of what Jane Doe is currently focused on, learning, and exploring in her professional and personal life at PersonaVerse.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
   openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/now',
    type: 'article', // 'article' might be more fitting for a "Now" page
     images: [
      {
        url: '/og-image-now.png', // Replace with a specific OG image for now page
        width: 1200,
        height: 630,
        alt: 'Jane Doe - What I\'m Doing Now',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/twitter-image-now.png'], // Replace with a specific Twitter image
  },
};

// This component needs to be a client component to use `new Date()` without hydration errors.
// However, metadata must be exported from server components.
// For this page, we'll keep the page as a server component for metadata,
// and handle the dynamic date formatting within a client component or directly in the return if careful.
// A simpler approach for a "Now" page is often to manually update the date in the text.
// For this exercise, I'll show the manual update approach as it's simpler for static generation.

export default function NowPage() {
  // For a "Now" page, it's common to manually update this date when you update the content.
  // Using new Date() directly here can cause hydration mismatches if not handled in useEffect.
  // const currentDate = new Date().toLocaleDateString('en-US', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // });
  // For simplicity and to avoid hydration issues if this page remains mostly static:
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
