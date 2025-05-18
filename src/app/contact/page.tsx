
// src/app/contact/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactSectionContent from '@/components/modules/ContactSection'; // Reusing the ContactSection component
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Jane Doe | Let\'s Connect | PersonaVerse',
  description: 'Get in touch with Jane Doe. Send a message, ask a question, or discuss a project. Find contact details and social links.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[calc(100vh-8rem)]">
         {/* We can reuse the ContactSection directly. It includes the title "Let's Connect" */}
        <ContactSectionContent />
      </main>
      <Footer />
    </>
  );
}

    