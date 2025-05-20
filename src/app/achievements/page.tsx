// src/app/achievements/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BadgeCheck, Zap, TrendingUp, Rocket, Github, FlaskConical, GraduationCap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';
import BackToTopButton from '@/components/interactive/BackToTopButton';

const pageTitle = 'Achievements & Milestones | Md Kasif Uddin | HelloKasif';
const pageDescription = 'Explore the key achievements, certifications, and milestones of Md Kasif Uddin, featured on HelloKasif.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/achievements',
    type: 'website',
    images: [
      {
        url: '/og-image-achievements.png', // Ensure this image exists
        width: 1200,
        height: 630,
        alt: 'Md Kasif Uddin - Achievements',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/twitter-image-achievements.png'], // Ensure this image exists
  },
};

interface AchievementItem {
  icon: React.ElementType;
  title: string;
  description: string;
  link?: string;
}

// Re-using the same data structure as AchievementsSection
const allAchievements: AchievementItem[] = [
  {
    icon: Rocket,
    title: "Published First Web App – 'Note It'",
    description: "Developed and deployed a task and note management app using HTML, CSS, and JavaScript.",
    link: "https://note-it0.netlify.app/"
  },
  {
    icon: Github,
    title: "GitHub Portfolio Established",
    description: "Created a public GitHub profile to showcase personal projects and collaborate in the open-source community.",
    link: "https://github.com/MdKasif0"
  },
  {
    icon: FlaskConical,
    title: "AI/ML Integration Research",
    description: "Initiated research and prototyping to combine AI/ML technologies with frontend development."
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence in STEM",
    description: "Pursuing Physics, Chemistry, and Math at Class 12 level with a competitive edge for IIT JEE preparation."
  }
];


export default function AchievementsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[calc(100vh-8rem)]">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="font-mono text-4xl md:text-5xl font-bold tracking-tight">Milestones & Recognition</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto text-balance">
            A collection of my significant achievements and learning milestones.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {allAchievements.map((achievement, index) => (
            <InteractiveCard 
              key={index}
              className={`flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-500`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="flex flex-row items-start gap-4 p-6">
                <achievement.icon className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-1">{achievement.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </CardContent>
              {achievement.link && achievement.link !== "#" && (
                <CardContent className="p-6 pt-0 mt-auto">
                  <Button variant="outline" asChild className="w-full sm:w-auto border-accent/50 text-accent hover:bg-accent/10 hover:text-accent hover:border-accent">
                    <Link href={achievement.link} target="_blank" rel="noopener noreferrer">
                      View Link <ExternalLink size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              )}
            </InteractiveCard>
          ))}
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}
