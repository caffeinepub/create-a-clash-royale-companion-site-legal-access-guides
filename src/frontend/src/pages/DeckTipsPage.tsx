import ContentSection from '../components/ContentSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, Shield, Zap, TrendingUp, Users, Sparkles, Swords } from 'lucide-react';

export default function DeckTipsPage() {
  const exampleDecks = [
    {
      name: "Classic Log Bait",
      archetype: "Control",
      avgElixir: 3.3,
      cards: ["Princess", "Goblin Barrel", "Knight", "Inferno Tower", "Rocket", "The Log", "Ice Spirit", "Goblin Gang"],
      gameplan: "Bait out opponent's spell counters with Princess and Goblin Gang, then punish with Goblin Barrel.",
      strengths: "Excellent spell value, strong defense, chip damage",
      weaknesses: "Struggles against heavy spell decks, requires precise timing"
    },
    {
      name: "2.6 Hog Cycle",
      archetype: "Cycle",
      avgElixir: 2.6,
      cards: ["Hog Rider", "Musketeer", "Ice Golem", "Cannon", "Fireball", "The Log", "Ice Spirit", "Skeletons"],
      gameplan: "Quickly cycle back to Hog Rider for constant pressure while defending efficiently with cheap cards.",
      strengths: "Fast cycle, positive elixir trades, consistent pressure",
      weaknesses: "Low damage output, vulnerable to heavy beatdown"
    },
    {
      name: "Golem Beatdown",
      archetype: "Beatdown",
      avgElixir: 4.1,
      cards: ["Golem", "Night Witch", "Baby Dragon", "Mega Minion", "Lightning", "Tornado", "Lumberjack", "The Log"],
      gameplan: "Build massive pushes behind Golem with support troops, overwhelming opponents with sheer force.",
      strengths: "Devastating pushes, high damage potential, strong synergy",
      weaknesses: "High elixir cost, vulnerable to early pressure"
    },
    {
      name: "X-Bow Siege",
      archetype: "Siege",
      avgElixir: 3.0,
      cards: ["X-Bow", "Tesla", "Archers", "Ice Golem", "Fireball", "The Log", "Ice Spirit", "Skeletons"],
      gameplan: "Lock X-Bow onto tower from your side, defend with Tesla and cheap troops for positive trades.",
      strengths: "Safe damage, excellent defense, positive trades",
      weaknesses: "Hard countered by tanks, requires perfect placement"
    },
    {
      name: "Pekka Bridge Spam",
      archetype: "Bridge Spam",
      avgElixir: 3.8,
      cards: ["P.E.K.K.A", "Battle Ram", "Bandit", "Electro Wizard", "Magic Archer", "Poison", "Zap", "Dark Prince"],
      gameplan: "Apply aggressive pressure at the bridge, punish elixir disadvantages with fast units.",
      strengths: "High pressure, versatile offense and defense, punishes mistakes",
      weaknesses: "Vulnerable to swarms, requires good elixir management"
    },
    {
      name: "Miner Poison Control",
      archetype: "Control",
      avgElixir: 3.3,
      cards: ["Miner", "Poison", "Valkyrie", "Inferno Tower", "Bats", "Spear Goblins", "The Log", "Ice Spirit"],
      gameplan: "Chip away with Miner and Poison, defend efficiently and counter-push with surviving troops.",
      strengths: "Consistent chip damage, strong defense, flexible playstyle",
      weaknesses: "Low burst damage, struggles against heavy beatdown"
    },
    {
      name: "Lava Hound Beatdown",
      archetype: "Beatdown",
      avgElixir: 4.0,
      cards: ["Lava Hound", "Balloon", "Mega Minion", "Minions", "Tombstone", "Fireball", "Zap", "Guards"],
      gameplan: "Build air pushes with Lava Hound tanking for Balloon, overwhelming air defenses.",
      strengths: "Powerful air synergy, death damage, hard to defend",
      weaknesses: "Weak to air-targeting troops, expensive pushes"
    },
    {
      name: "Royal Giant Cycle",
      archetype: "Control",
      avgElixir: 3.5,
      cards: ["Royal Giant", "Fisherman", "Hunter", "Earthquake", "Heal Spirit", "The Log", "Skeletons", "Electro Spirit"],
      gameplan: "Cycle Royal Giant for consistent tower damage, use Fisherman for defensive activations.",
      strengths: "Long range, consistent damage, strong defense",
      weaknesses: "Vulnerable to buildings, requires good placement"
    }
  ];

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Deck Building Tips</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to construct powerful, balanced decks that can handle any situation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>1. Average Elixir Cost</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Keep your average elixir cost between 3.0 and 4.0 for optimal cycling and flexibility.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Lower cost (2.5-3.5): Fast cycle decks, constant pressure</li>
                <li>Medium cost (3.5-4.0): Balanced, most versatile</li>
                <li>Higher cost (4.0+): Beatdown decks, powerful pushes</li>
                <li>Include 1-2 cheap cards (1-2 elixir) for cycling</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>2. Card Synergy</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Cards should work together and complement each other's strengths and weaknesses.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Pair tanks with support troops (Giant + Musketeer)</li>
                <li>Combine splash damage with single-target DPS</li>
                <li>Use spells that complement your win condition</li>
                <li>Include cards that protect your key units</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>3. Defensive Coverage</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Your deck must be able to defend against common threats and win conditions.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Include at least one building (counters Hog, Giant, etc.)</li>
                <li>Have answers to air troops (Minions, Balloon, Lava Hound)</li>
                <li>Pack splash damage for swarm units (Skeleton Army, Minion Horde)</li>
                <li>Carry a spell to reset Inferno Tower/Dragon</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>4. Counter Meta Threats</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Adapt your deck to counter popular strategies in your trophy range.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Research current meta decks and common win conditions</li>
                <li>Include specific counters to overused cards</li>
                <li>Test your deck against popular archetypes</li>
                <li>Be flexible and adjust based on what you face</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>5. Spell Selection</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Most decks should include 2-3 spells for versatility and finishing power.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Big spell (Fireball, Poison, Lightning) for medium troops</li>
                <li>Small spell (Zap, Log, Arrows) for swarms and resets</li>
                <li>Consider a damage spell (Rocket) for tower finishing</li>
                <li>Match spells to your deck archetype and playstyle</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>6. Practice & Refinement</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Building a great deck takes time, testing, and continuous improvement.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Play 10-20 matches before judging a new deck</li>
                <li>Identify weak matchups and adjust accordingly</li>
                <li>Watch replays to spot mistakes and opportunities</li>
                <li>Don't be afraid to swap out underperforming cards</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <ContentSection>
          <Card>
            <CardHeader>
              <CardTitle>Deck Archetypes</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p>Understanding deck archetypes helps you build cohesive strategies:</p>

              <h3>Beatdown</h3>
              <p>
                Build massive pushes with tanks and support troops. High elixir cost, devastating
                when successful. Examples: Golem, Lava Hound, Giant decks.
              </p>

              <h3>Control</h3>
              <p>
                Defend efficiently and counter-push with surviving troops. Medium elixir cost,
                focuses on positive trades. Examples: Hog Cycle, Miner Control.
              </p>

              <h3>Siege</h3>
              <p>
                Attack from your side of the arena with buildings. Defensive playstyle, chip damage
                over time. Examples: X-Bow, Mortar decks.
              </p>

              <h3>Cycle</h3>
              <p>
                Low elixir cost, quickly cycle back to your win condition. Constant pressure,
                requires skill. Examples: 2.6 Hog Cycle, Miner Cycle.
              </p>

              <h3>Bridge Spam</h3>
              <p>
                Aggressive, fast-paced attacks at the bridge. Punish slow starts and elixir
                disadvantages. Examples: Pekka Bridge Spam, Ram Rider decks.
              </p>
            </CardContent>
          </Card>
        </ContentSection>

        {/* Example Decks Section */}
        <div className="space-y-6">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-3">
              <Swords className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Example Decks</h2>
            </div>
            <p className="text-muted-foreground">
              Study these proven deck compositions to understand card synergies and strategic depth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {exampleDecks.map((deck, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{deck.name}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium">
                        Archetype: <span className="text-primary">{deck.archetype}</span>
                      </span>
                      <span className="font-medium">
                        Avg Elixir: <span className="text-primary">{deck.avgElixir}</span>
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Cards:</h4>
                    <div className="grid grid-cols-2 gap-1.5 text-sm text-muted-foreground">
                      {deck.cards.map((card, cardIndex) => (
                        <div key={cardIndex} className="flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {card}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1.5">Gameplan:</h4>
                    <p className="text-sm text-muted-foreground">{deck.gameplan}</p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm">
                      <span className="font-semibold text-green-600 dark:text-green-400">Strengths:</span>{' '}
                      <span className="text-muted-foreground">{deck.strengths}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-red-600 dark:text-red-400">Weaknesses:</span>{' '}
                      <span className="text-muted-foreground">{deck.weaknesses}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
