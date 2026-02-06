import { Sparkles, Zap, Target, Layers, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FredWelcomeIntroProps {
  onStartChat: () => void;
}

export default function FredWelcomeIntro({ onStartChat }: FredWelcomeIntroProps) {
  const exampleTopics = [
    { icon: Zap, label: 'Elixir Management', description: 'Learn to manage your resources efficiently' },
    { icon: Target, label: 'Win Conditions', description: 'Understand cards that deal tower damage' },
    { icon: Layers, label: 'Deck Archetypes', description: 'Explore beatdown, cycle, control, siege & more' },
    { icon: Wand2, label: 'Spell Selection', description: 'Choose the right spells for your deck' },
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
            Your friendly Clash Royale strategy helper. Fred can answer questions about game basics, 
            deck building, and battle tactics to help you improve your gameplay.
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
          Fred is ready to answer your Clash Royale questions!
        </p>
      </div>
    </div>
  );
}
