import { useState } from 'react';
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

type Page = 'home' | 'beginner' | 'deck-tips' | 'about' | 'admin-feedback' | 'fred-chat' | 'discussions';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
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
        return <HomePage />;
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
