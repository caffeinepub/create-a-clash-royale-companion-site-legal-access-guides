import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import BeginnerGuidePage from './pages/BeginnerGuidePage';
import DeckTipsPage from './pages/DeckTipsPage';
import AboutPage from './pages/AboutPage';
import AdminFeedbackPage from './pages/AdminFeedbackPage';
import FredChatPage from './pages/FredChatPage';
import DiscussionsPage from './pages/DiscussionsPage';
import { Toaster } from '@/components/ui/sonner';
import { getCanonicalUrl } from './config/site';

type Page = 'home' | 'beginner' | 'deck-tips' | 'about' | 'admin-feedback' | 'fred-chat' | 'discussions';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [scrollToSection, setScrollToSection] = useState<string | null>(null);

  // Handle navigation with optional scroll target
  const handleNavigate = (page: Page, sectionId?: string) => {
    setCurrentPage(page);
    if (sectionId) {
      setScrollToSection(sectionId);
    }
  };

  // Scroll to section after page change
  useEffect(() => {
    if (scrollToSection) {
      // Wait for page to render
      setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          element.focus({ preventScroll: true });
        }
        setScrollToSection(null);
      }, 100);
    }
  }, [scrollToSection, currentPage]);

  // Enforce document title and update canonical URL across navigation
  useEffect(() => {
    document.title = 'CLASHROYALEHUB';
    
    // Map page to path for canonical URL
    const pathMap: Record<Page, string> = {
      'home': '',
      'beginner': '/beginner-guide',
      'deck-tips': '/deck-tips',
      'about': '/about',
      'admin-feedback': '/admin',
      'fred-chat': '/ask-fred',
      'discussions': '/discussions',
    };
    
    const canonicalUrl = getCanonicalUrl(pathMap[currentPage]);
    
    // Update or create canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
    
    // Update or create Open Graph URL meta tag
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement('meta');
      ogUrlMeta.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlMeta);
    }
    ogUrlMeta.setAttribute('content', canonicalUrl);
    
    // Update or create Twitter URL meta tag
    let twitterUrlMeta = document.querySelector('meta[name="twitter:url"]');
    if (!twitterUrlMeta) {
      twitterUrlMeta = document.createElement('meta');
      twitterUrlMeta.setAttribute('name', 'twitter:url');
      document.head.appendChild(twitterUrlMeta);
    }
    twitterUrlMeta.setAttribute('content', canonicalUrl);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigateToAbout={(sectionId) => handleNavigate('about', sectionId)} />;
      case 'beginner':
        return <BeginnerGuidePage />;
      case 'deck-tips':
        return <DeckTipsPage />;
      case 'about':
        return <AboutPage />;
      case 'admin-feedback':
        return <AdminFeedbackPage />;
      case 'fred-chat':
        return <FredChatPage />;
      case 'discussions':
        return <DiscussionsPage />;
      default:
        return <HomePage onNavigateToAbout={(sectionId) => handleNavigate('about', sectionId)} />;
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SiteLayout currentPage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </SiteLayout>
      <Toaster />
    </ThemeProvider>
  );
}
