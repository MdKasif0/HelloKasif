import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Correct import for next/font/google
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';
import { Toaster } from "@/components/ui/toaster"; // For contact form feedback

const geistSans = Geist({ // Correct usage for variable fonts
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({ // Correct usage for variable fonts
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PersonaVerse | Interactive Portfolio',
  description: 'An immersive and interactive portfolio experience by a visionary creator.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <MainLayout>
          {children}
          <Toaster />
        </MainLayout>
      </body>
    </html>
  );
}
