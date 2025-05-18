// src/components/modules/AchievementsSection.tsx
import InteractiveCard from '@/components/interactive/InteractiveCard';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BadgeCheck, Zap, TrendingUp } from 'lucide-react'; // Added Zap, TrendingUp
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const achievements = [
  {
    id: 1,
    icon: Award,
    title: "Innovation Award 2023",
    description: "Recognized for developing a groundbreaking AI-driven accessibility tool.",
    source: "Tech Innovators Guild",
    link: "#",
  },
  {
    id: 2,
    icon: BadgeCheck,
    title: "Certified Kubernetes Administrator (CKA)",
    description: "Successfully passed the rigorous CKA exam, demonstrating expertise in Kubernetes.",
    source: "Cloud Native Computing Foundation",
    link: "#",
  },
  {
    id: 3,
    icon: Zap,
    title: "Performance Optimization Challenge Winner",
    description: "Achieved a 40% performance boost in a company-wide coding challenge.",
    source: "Internal @ PreviousCompany",
    link: "#",
  },
   {
    id: 4,
    icon: TrendingUp,
    title: "Top Contributor - Open Source Project X",
    description: "Consistently ranked among the top contributors for critical bug fixes and feature enhancements.",
    source: "GitHub Community",
    link: "#",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 md:py-24 animate-in fade-in duration-500">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700">Milestones & Recognition</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <InteractiveCard 
            key={achievement.id}
            className={`flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-500`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardHeader className="flex flex-row items-start gap-4 p-6">
              <achievement.icon className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <CardTitle className="text-xl mb-1">{achievement.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{achievement.source}</p>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-grow">
              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
            </CardContent>
            {achievement.link && achievement.link !== "#" && (
               <CardContent className="p-6 pt-0 mt-auto">
                <Button variant="outline" asChild className="w-full sm:w-auto border-accent/50 text-accent hover:bg-accent/10 hover:text-accent hover:border-accent">
                  <Link href={achievement.link} target="_blank" rel="noopener noreferrer">
                    View Credential
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
