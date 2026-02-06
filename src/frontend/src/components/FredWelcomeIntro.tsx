import { MessageSquare, Zap, Swords, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface FredWelcomeIntroProps {
  onStartChat: () => void;
}

export default function FredWelcomeIntro({ onStartChat }: FredWelcomeIntroProps) {
  const topics = [
    {
      icon: Zap,
      title: 'Game Mechanics',
      description: 'Elixir management, tower targeting, card roles, and damage types',
    },
    {
      icon: Users,
      title: 'Deck Archetypes',
      description: 'Cycle, beatdown, control, siege, bait, bridge spam, and more',
    },
    {
      icon: Swords,
      title: 'Battle Interactions',
      description: 'Kiting, spell timing, punishing, and King Tower activation',
    },
    {
      icon: Target,
      title: 'Deck Building & Reviews',
      description: 'Win conditions, spell packages, balance—plus full deck analysis!',
    },
    {
      icon: TrendingUp,
      title: 'Strategy & Matchups',
      description: 'Elixir advantage, countering decks, ladder tips, and progression',
    },
    {
      icon: MessageSquare,
      title: 'Card Guidance',
      description: 'Detailed info on Hog Rider, Giant, Balloon, X-Bow, and many more',
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to Ask Fred!
        </h1>
        <p className="text-lg text-muted-foreground">
          Your offline Clash Royale strategy assistant. Fred has expanded knowledge covering mechanics, archetypes, 
          interactions, deck building, strategy, card guidance, matchups, and progression—all generated locally 
          without any external AI or internet connection.
        </p>
        <p className="text-base text-muted-foreground">
          <strong>New:</strong> Fred can now review your deck! Just list all 8 cards and get detailed analysis 
          with strengths, weaknesses, and actionable suggestions.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => {
          const Icon = topic.icon;
          return (
            <Card key={topic.title} className="transition-colors hover:bg-accent">
              <CardContent className="flex flex-col items-center space-y-3 p-6 text-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{topic.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {topic.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex justify-center pt-4">
        <Button onClick={onStartChat} size="lg" className="px-8">
          Start Chatting with Fred
        </Button>
      </div>
    </div>
  );
}
