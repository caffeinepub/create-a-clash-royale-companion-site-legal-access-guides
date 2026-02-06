import { Sparkles, Zap, Target, Layers, Wand2, Swords, Lightbulb, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FredWelcomeIntroProps {
  onStartChat: () => void;
}

export default function FredWelcomeIntro({ onStartChat }: FredWelcomeIntroProps) {
  const exampleTopics = [
    { icon: Zap, label: 'Game Mechanics', description: 'Elixir, tower targeting, card roles & damage types' },
    { icon: Layers, label: 'Deck Archetypes', description: 'Beatdown, cycle, control, siege, bait, bridge spam & more' },
    { icon: Swords, label: 'Battle Interactions', description: 'Kiting, spell timing, punishing & King activation' },
    { icon: Shield, label: 'Deck Building', description: 'Win conditions, spells, air defense & balance' },
    { icon: Target, label: 'Strategy Tips', description: 'Elixir advantage, starting hands & defending threats' },
    { icon: Lightbulb, label: 'Advanced Tactics', description: 'Split lane pressure, spell packages & more' },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-2">
          <Sparkles className="w-10 h-10 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2">Meet Fred</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your friendly Clash Royale strategy helper. Fred can answer questions about game mechanics, 
            deck building, battle tactics, and advanced strategies to help you improve your gameplay.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">What can Fred help you with?</CardTitle>
          <CardDescription>
            Ask Fred about any of these Clash Royale topics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exampleTopics.map((topic) => (
              <div
                key={topic.label}
                className="flex items-start gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <topic.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1">{topic.label}</h3>
                  <p className="text-xs text-muted-foreground">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center space-y-4">
        <Button
          onClick={onStartChat}
          size="lg"
          className="px-8 py-6 text-lg font-semibold"
        >
          Start Chatting with Fred
        </Button>
        <p className="text-sm text-muted-foreground">
          Fred provides offline, informational guidance based on Clash Royale fundamentals
        </p>
      </div>
    </div>
  );
}
