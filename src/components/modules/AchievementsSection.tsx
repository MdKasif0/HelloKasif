// src/components/modules/AchievementsSection.tsx
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BadgeCheck, Zap, TrendingUp, Rocket, Github, FlaskConical, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Achievement {
  icon: React.ElementType;
  title: string;
  description: string;
  link?: string;
}

const achievements: Achievement[] = [
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
    // No link provided for this one, so the button won't render
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence in STEM",
    description: "Pursuing Physics, Chemistry, and Math at Class 12 level with a competitive edge for IIT JEE preparation."
    // No link provided
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 md:py-24 animate-in fade-in duration-500">
      <h2 className="font-mono text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700">Milestones & Recognition</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <InteractiveCard 
            key={index} // Using index as key since id is not available
            className={`flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-500`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardHeader className="flex flex-row items-start gap-4 p-6">
              <achievement.icon className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <CardTitle className="text-xl mb-1">{achievement.title}</CardTitle>
                {/* Source removed as it's not in new data */}
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-grow">
              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
            </CardContent>
            {achievement.link && achievement.link !== "#" && (
               <CardContent className="p-6 pt-0 mt-auto">
                <Button variant="outline" asChild className="w-full sm:w-auto border-accent/50 text-accent hover:bg-accent/10 hover:text-accent hover:border-accent">
                  <Link href={achievement.link} target="_blank" rel="noopener noreferrer">
                    View Link 
                  </Link>
                </Button>
              </CardContent>
            )}
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}
