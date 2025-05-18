import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Correct import for next/font/google
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';
import { Toaster } from "@/components/ui/toaster"; // For contact form feedback
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'; // Added Google Analytics

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'; // Define a default or use env var

export const metadata: Metadata = {
  title: 'Jane Doe | PersonaVerse | Interactive Portfolio',
  description: 'An immersive and interactive portfolio experience by Jane Doe, a visionary creator and developer.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Jane Doe | PersonaVerse | Interactive Portfolio',
    description: 'Explore the innovative projects and digital craftsmanship of Jane Doe.',
    images: [
      {
        url: `${siteUrl}/og-image.png`, // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: 'PersonaVerse Portfolio Banner',
      },
    ],
    siteName: 'PersonaVerse by Jane Doe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jane Doe | PersonaVerse | Interactive Portfolio',
    description: 'Discover Jane Doe\'s interactive portfolio showcasing visionary development and design.',
    // Uncomment and replace with your Twitter handle if you have one
    // creator: '@yourTwitterHandle', 
    images: [`${siteUrl}/twitter-image.png`], // Replace with your actual Twitter image path
  },
  // Add more relevant meta tags here like keywords, author etc. if needed
  // keywords: ['Next.js', 'React', 'Tailwind CSS', 'Portfolio', 'Developer', 'AI'],
  // authors: [{ name: 'Jane Doe', url: siteUrl }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>
            {children}
            <Toaster />
          </MainLayout>
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
