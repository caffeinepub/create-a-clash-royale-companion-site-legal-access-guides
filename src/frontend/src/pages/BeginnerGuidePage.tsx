import ContentSection from '../components/ContentSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Target, Castle, Crown } from 'lucide-react';

export default function BeginnerGuidePage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Beginner's Guide</h1>
          <p className="text-lg text-muted-foreground">
            Master the fundamentals and start your journey to becoming a Clash Royale champion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Elixir Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Elixir is your primary resource. You generate 1 elixir every 2.8 seconds (1.4 seconds
                in double elixir).
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Maximum capacity: 10 elixir</li>
                <li>Never let your elixir bar stay full - you're wasting generation</li>
                <li>Track your opponent's elixir by watching their plays</li>
                <li>Punish expensive plays with quick counter-attacks</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Castle className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Tower Mechanics</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Understanding tower behavior is crucial for both offense and defense.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Princess Towers have 2,534 HP and deal 90 damage per shot</li>
                <li>King Tower has 4,824 HP and activates when hit</li>
                <li>Towers target the closest enemy unit</li>
                <li>Activating the King Tower early gives you a huge defensive advantage</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <ContentSection>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Basic Strategy</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <h3>Starting the Match</h3>
              <ul>
                <li>
                  <strong>Wait and observe:</strong> Let your opponent make the first move to see
                  their deck composition
                </li>
                <li>
                  <strong>Cycle cheap cards:</strong> If you go first, play a low-cost card at the
                  back to build elixir
                </li>
                <li>
                  <strong>Split lane pressure:</strong> Consider splitting troops to force your
                  opponent to defend both sides
                </li>
              </ul>

              <h3>During the Battle</h3>
              <ul>
                <li>
                  <strong>Positive elixir trades:</strong> Defend with cards that cost less than
                  what you're defending against
                </li>
                <li>
                  <strong>Counter-push:</strong> After defending, support your surviving troops with
                  additional units
                </li>
                <li>
                  <strong>Spell value:</strong> Use spells when they can hit multiple targets or
                  finish off a tower
                </li>
                <li>
                  <strong>Prediction plays:</strong> As you learn opponent patterns, predict their
                  defensive placements
                </li>
              </ul>

              <h3>Final Minute (Double Elixir)</h3>
              <ul>
                <li>
                  <strong>Increase pressure:</strong> Play more aggressively with faster elixir
                  generation
                </li>
                <li>
                  <strong>Spell cycling:</strong> If ahead, use spells directly on towers to secure
                  the win
                </li>
                <li>
                  <strong>Defend smart:</strong> Don't overcommit on offense if you're winning
                </li>
              </ul>
            </CardContent>
          </Card>
        </ContentSection>

        <ContentSection>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Crown className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Win Conditions</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p>
                A win condition is a card designed to deal significant damage to towers. Every deck
                needs at least one reliable win condition.
              </p>

              <h3>Common Win Conditions</h3>
              <ul>
                <li>
                  <strong>Hog Rider:</strong> Fast, targets buildings, great for quick pressure
                </li>
                <li>
                  <strong>Giant:</strong> High HP tank that soaks damage while support troops attack
                </li>
                <li>
                  <strong>Miner:</strong> Can be placed anywhere, excellent for chip damage
                </li>
                <li>
                  <strong>Balloon:</strong> Flies over ground troops, devastating tower damage
                </li>
                <li>
                  <strong>Royal Giant:</strong> Long range, can attack towers from a safe distance
                </li>
                <li>
                  <strong>X-Bow / Mortar:</strong> Siege buildings that attack from your side
                </li>
              </ul>

              <p className="text-muted-foreground">
                Choose a win condition that matches your playstyle and build your deck around
                supporting it effectively.
              </p>
            </CardContent>
          </Card>
        </ContentSection>
      </div>
    </div>
  );
}
