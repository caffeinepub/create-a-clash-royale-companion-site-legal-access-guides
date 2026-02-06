import { ExternalLink, BookOpen, Swords, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b border-border/40">
        <div className="container py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Master Clash Royale
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Your ultimate companion for learning strategies, building powerful decks, and
                dominating the arena. Access official resources and expert guides all in one place.
              </p>

              <div className="bg-muted/50 border border-border/60 rounded-lg p-4 space-y-2">
                <p className="text-sm font-medium">⚠️ Important Notice</p>
                <p className="text-sm text-muted-foreground">
                  This site provides informational content and links to official sources only. We do
                  not host the game, provide "unblocked" access, or any means to bypass restrictions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild className="gap-2">
                  <a
                    href="https://clashroyale.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="gap-2">
                  <a
                    href="https://apps.apple.com/app/clash-royale/id1053012308"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download on iOS
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="gap-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.supercell.clashroyale"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download on Android
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <img
                src="/assets/generated/hero-illustration.dim_1600x900.png"
                alt="Clash Royale Battle Arena"
                className="rounded-lg shadow-2xl border border-border/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Clash Royale */}
      <section className="container py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What is Clash Royale?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Clash Royale is a real-time multiplayer card battle game developed by Supercell. Collect
            and upgrade dozens of cards featuring Clash of Clans troops, spells, and defenses. Build
            your ultimate Battle Deck to defeat opponents and win trophies, crowns, and glory in the
            Arena.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Beginner Guides</CardTitle>
              <CardDescription>
                Learn the fundamentals of gameplay, elixir management, and winning strategies
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Swords className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Deck Building</CardTitle>
              <CardDescription>
                Master the art of creating balanced, synergistic decks that counter your opponents
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Pro Strategies</CardTitle>
              <CardDescription>
                Advanced tactics and tips to climb the ladder and dominate in competitive play
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Game Features */}
      <section className="bg-muted/30 border-y border-border/40 py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
              Game Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Real-Time Battles</h3>
                <p className="text-muted-foreground">
                  Duel players from around the world in fast-paced, 3-minute matches
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Collect & Upgrade</h3>
                <p className="text-muted-foreground">
                  Unlock and upgrade over 100 unique cards with different rarities
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Join a Clan</h3>
                <p className="text-muted-foreground">
                  Team up with friends, share cards, and participate in Clan Wars
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Competitive Ladder</h3>
                <p className="text-muted-foreground">
                  Climb through multiple arenas and reach the ultimate Legend League
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
