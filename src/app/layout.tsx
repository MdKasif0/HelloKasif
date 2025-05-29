
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
const profileImageUrl = "https://raw.githubusercontent.com/MdKasif0/HelloKasif/b6b03e2ca12e6e5bc66fa496c78bab57bf7b3fa4/public/Images/file_0000000006c851f78147f7ea8a5edc00_conversation_id%3D67e8916e-6574-8002-a80a-054fd38329e9%26message_id%3Dc5173a0a-1dc0-4b3f-bfde-02b77bed7523(1)_copy_600x750.jpg";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // Crucial for canonical URLs and absolute OG URLs
  title: {
    default: 'HelloKasif | Md Kasif Uddin | Aspiring Developer',
    template: '%s | HelloKasif | Md Kasif Uddin',
  },
  description: 'Interactive portfolio of Md Kasif Uddin, a Grade 12th PCM student exploring web development and AI/ML.',
  authors: [{ name: 'Md Kasif Uddin', url: siteUrl }],
  manifest: '/manifest.json', // Link to the manifest file
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
  appleWebApp: { // For iOS "Add to Home Screen"
    capable: true,
    statusBarStyle: 'default', // Or 'black' or 'black-translucent'
    title: 'HelloKasif',
    // startupImage: [], // You can add startup images for different iOS device sizes here
  },
  // PWA specific meta tags, often covered by manifest but good for quick access
  applicationName: 'HelloKasif',
  themeColor: '#000000', // Match your dark theme's background, or your manifest's theme_color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Standard PWA meta tags */}
        <meta name="application-name" content="HelloKasif" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HelloKasif" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#BE185D" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Theme Color for browsers */}
        <meta name="theme-color" content="#000000" />

        {/* Link to Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href={profileImageUrl} />
        {/* You can add more specific sizes if needed:
        <link rel="apple-touch-icon" sizes="152x152" href={profileImageUrl} />
        <link rel="apple-touch-icon" sizes="180x180" href={profileImageUrl} />
        <link rel="apple-touch-icon" sizes="167x167" href={profileImageUrl} />
        */}

        {/* Favicons */}
        <link rel="icon" type="image/jpeg" sizes="32x32" href={profileImageUrl} />
        <link rel="icon" type="image/jpeg" sizes="16x16" href={profileImageUrl} />
        {/* <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#BE185D" />  Removed as profile image is not SVG */}
        <link rel="shortcut icon" href={profileImageUrl} type="image/jpeg" />

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
      </body>
    </html>
  );
}
