import { Menu, X, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import LoginButton from './LoginButton';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserRole } from '../hooks/useQueries';

type Page = 'home' | 'beginner' | 'deck-tips' | 'about' | 'admin-feedback' | 'fred-chat' | 'discussions';

interface SiteLayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function SiteLayout({ children, currentPage, onNavigate }: SiteLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { identity } = useInternetIdentity();
  const { data: userRole } = useGetCallerUserRole();
  const isAdmin = userRole === 'admin';

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPage]);

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'beginner' as Page, label: 'Beginner Guide' },
    { id: 'deck-tips' as Page, label: 'Deck Tips' },
    { id: 'discussions' as Page, label: 'Discussions' },
    { id: 'fred-chat' as Page, label: 'Ask Fred' },
    { id: 'about' as Page, label: 'About' },
  ];

  if (isAdmin) {
    navItems.push({ id: 'admin-feedback' as Page, label: 'Admin' });
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-7 w-7 text-primary" />
            <button
              onClick={() => onNavigate('home')}
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              ClashRoyaleHub
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPage === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <LoginButton />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background">
            <nav className="container py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <LoginButton />
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p className="mb-2">
                <strong>Disclaimer:</strong> This site provides informational content and links to official sources only.
                We do not host, embed, or provide any means to bypass restrictions or access controls.
              </p>
              <p>Not affiliated with Supercell. Clash Royale is a trademark of Supercell.</p>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p className="mb-1">Created by Franklin Holmes and Lincoln Wood</p>
              <p>
                © 2026. Built with ❤️ using{' '}
                <a
                  href="https://caffeine.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
