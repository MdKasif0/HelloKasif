
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
  metadataBase: new URL(siteUrl), // Crucial for canonical URLs and absolute OG URLs
  title: {
    default: 'HelloKasif | Md Kasif Uddin | Aspiring Developer',
    template: '%s | HelloKasif | Md Kasif Uddin',
  },
  description: 'Interactive portfolio of Md Kasif Uddin, a Grade 12th PCM student exploring web development and AI/ML.',
  authors: [{ name: 'Md Kasif Uddin', url: siteUrl }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'HelloKasif | Md Kasif Uddin | Aspiring Developer',
    description: 'Explore the projects and journey of Md Kasif Uddin, an aspiring developer.',
    images: [
      {
        url: `/og-image.png`, // Relative to public folder, metadataBase will make it absolute
        width: 1200,
        height: 630,
        alt: 'HelloKasif Banner by Md Kasif Uddin',
      },
    ],
    siteName: 'HelloKasif by Md Kasif Uddin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HelloKasif | Md Kasif Uddin | Aspiring Developer',
    description: 'Discover Md Kasif Uddin\'s interactive portfolio.',
    // creator: '@YourTwitterHandle', // Uncomment and replace if you have a Twitter handle
    images: [`/twitter-image.png`], // Relative to public folder, metadataBase will make it absolute
  },
  // keywords: ['Next.js', 'React', 'Tailwind CSS', 'Portfolio', 'Developer', 'AI', 'Md Kasif Uddin', 'Web Developer', 'Student Developer'],
  // Consider adding a favicon link here if you have one in your public folder
  // icons: {
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').then(registration => {
                    console.log('SW registered: ', registration);
                  }).catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
