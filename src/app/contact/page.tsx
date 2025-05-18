
// src/app/contact/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactSectionContent from '@/components/modules/ContactSection';
import type { Metadata } from 'next';
import BackToTopButton from '@/components/interactive/BackToTopButton';

const pageTitle = 'Contact Jane Doe | Let\'s Connect | PersonaVerse';
const pageDescription = 'Get in touch with Jane Doe. Send a message, ask a question, or discuss a potential project. Find contact details and social media links for PersonaVerse.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/contact',
    type: 'website',
    images: [
      {
        url: '/og-image-contact.png', // Replace with a specific OG image for contact page
        width: 1200,
        height: 630,
        alt: 'Jane Doe - Contact Me',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/twitter-image-contact.png'], // Replace with a specific Twitter image
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[calc(100vh-8rem)]">
        <ContactSectionContent /> {/* Reusing the existing contact section component which includes the form and title */}
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}
