// src/components/ai/EnvironmentDisplay.tsx
import { aiDetailerEnvironmentGeneration } from '@/ai/flows/ai-detailer-environment';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WandSparkles } from 'lucide-react'; // Changed to WandSparkles for more "magical" feel

// Example site content for the portfolio
const portfolioSiteContent = `
  PersonaVerse: An interactive and immersive portfolio by a visionary creator.
  This digital space showcases skills in Next.js, Tailwind CSS, TypeScript, and cutting-edge AI integration.
  Featured projects include innovative web applications, design explorations, and spatial UI concepts.
  The overall theme is futuristic, sophisticated, and deeply engaging, inviting users to explore a world of digital craftsmanship.
`;

export default async function EnvironmentDisplay() {
  let environmentDetails;
  try {
    environmentDetails = await aiDetailerEnvironmentGeneration({
      siteContent: portfolioSiteContent,
    });
  } catch (error) {
    console.error('Error generating environment details:', error);
    // Fallback content in case of AI error
    environmentDetails = {
      environmentDescription: 'The digital ether hums with latent energy, particles of code coalescing into emergent forms. A faint glow pulses from the core of this space, hinting at the creative forces at play...'
    };
  }

  return (
    <Card className="bg-card/50 backdrop-blur-md border-border/30 shadow-xl my-8 mx-auto max-w-3xl transform-style-preserve-3d transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 animate-in fade-in zoom-in-95 duration-700">
      <CardHeader className="flex flex-row items-center gap-3 p-4 sm:p-6">
        <WandSparkles className="h-6 w-6 text-accent sm:h-7 sm:w-7" />
        <CardTitle className="text-lg text-accent sm:text-xl">Ambient Echoes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <CardDescription className="text-sm text-muted-foreground italic sm:text-base text-balance">
          {environmentDetails.environmentDescription}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
