import { useEffect, useState } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, AlertTriangle, Globe } from 'lucide-react';
import { getDisplayHost } from '../config/site';

export default function AboutPage() {
  const [currentHost, setCurrentHost] = useState<string>('');

  useEffect(() => {
    // Get the current browser host for display
    setCurrentHost(getDisplayHost());
  }, []);

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About This Site</h1>
          <p className="text-lg text-muted-foreground">
            Your trusted resource for Clash Royale guides and official game access
          </p>
        </div>

        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Info className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              ClashRoyaleHub is an informational companion site dedicated to helping players
              improve their skills, learn strategies, and access official game resources. We provide
              beginner guides, deck building tips, and links to legitimate ways to play Clash Royale.
            </p>
            <p>
              Our goal is to create a helpful community resource that respects the game, its
              developers, and its players. We believe in fair play and supporting the official game
              through proper channels.
            </p>
          </CardContent>
        </Card>

        <Card 
          id="site-address-section" 
          tabIndex={-1}
          className="border-2 border-blue-500/50 bg-blue-500/5 scroll-mt-20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-background"
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>About the Site Address</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {currentHost && (
              <div className="bg-background/50 border border-border rounded-lg p-4 mb-4">
                <p className="text-sm font-medium text-foreground mb-1">Current Browser Address:</p>
                <code className="text-sm font-mono text-primary break-all">{currentHost}</code>
              </div>
            )}
            <p>
              The web address (URL) you see in your browser's address bar is controlled by deployment and hosting configuration, not by the site content or app interface. This site is deployed on the Internet Computer blockchain, which provides the technical infrastructure and assigns the domain.
            </p>
            <p>
              While the site is branded as <strong>"ClashRoyaleHub"</strong> for identification and sharing purposes, the browser address reflects the deployment configuration (such as the canister URL or any custom domain configured by the site operator).
            </p>
            <p>
              <strong>Important distinction:</strong> The branding text you see <em>inside</em> the site (like "ClashRoyaleHub" in the header and pages) is separate from the actual domain shown in your browser's address bar. Updating the app content does not change the deployment URL.
            </p>
            <p className="text-sm border-l-4 border-blue-500 pl-4 py-2 bg-blue-500/5">
              <strong>Note:</strong> The browser address cannot be changed through the app interface—it requires deployment-level configuration changes outside of this application, such as setting up a custom domain or changing the canister deployment settings.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/50 bg-destructive/5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <CardTitle>Important Legal Notice</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p className="font-medium text-foreground">
              This site does NOT provide "unblocked" gameplay or any means to bypass restrictions.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>We do not host, embed, or stream the Clash Royale game client</li>
              <li>We do not provide VPN services, proxy instructions, or circumvention tools</li>
              <li>We do not offer any methods to bypass network restrictions or access controls</li>
              <li>All game access links point exclusively to official Supercell sources</li>
            </ul>
            <p>
              This site is purely informational and educational. We only link to legitimate, official
              ways to download and play Clash Royale through proper channels.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              This website is not affiliated with, endorsed by, or connected to Supercell. Clash
              Royale and all related marks, logos, and images are trademarks of Supercell.
            </p>
            <p>
              All game information, strategies, and tips provided on this site are based on publicly
              available information and community knowledge. We do not claim ownership of any game
              content, characters, or intellectual property belonging to Supercell.
            </p>
            <p>
              The content on this site is provided for informational and educational purposes only. We
              make no guarantees about the accuracy, completeness, or effectiveness of any strategies
              or tips provided.
            </p>
          </CardContent>
        </Card>

        <div className="pt-8">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}
