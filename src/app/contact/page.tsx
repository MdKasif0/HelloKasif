
// src/app/contact/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactSectionContent from '@/components/modules/ContactSection';
import type { Metadata } from 'next';
import BackToTopButton from '@/components/interactive/BackToTopButton';

const pageTitle = 'Contact Md Kasif Uddin | Let\'s Connect | HelloKasif';
const pageDescription = 'Get in touch with Md Kasif Uddin. Send a message, ask a question, or discuss a potential project through HelloKasif.';

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
        url: '/og-image-contact.png', // Ensure this image exists in public/og-image-contact.png
        width: 1200,
        height: 630,
        alt: 'Md Kasif Uddin - Contact Me',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/twitter-image-contact.png'], // Ensure this image exists in public/twitter-image-contact.png
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
