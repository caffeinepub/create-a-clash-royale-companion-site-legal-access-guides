import { useState, useRef, useEffect } from 'react';
import { Send, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import FredWelcomeIntro from '@/components/FredWelcomeIntro';
import { useSessionFlag } from '@/hooks/useSessionFlag';
import { getFredResponse } from '@/utils/fredKnowledgeBase';
import { FRED_DISCLAIMER } from '@/content/disclaimer';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'fred';
  timestamp: Date;
}

export default function FredChatPage() {
  const [hasStartedChat, setHasStartedChat] = useSessionFlag('fred-chat-started', false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initial greeting when chat starts
  useEffect(() => {
    if (hasStartedChat && messages.length === 0) {
      const greeting: Message = {
        id: 'greeting',
        text: "Hey! I'm Fred, your Clash Royale helper. I have expanded offline knowledge covering:\n\n• **Mechanics** (elixir, tower targeting, card roles)\n• **Archetypes** (cycle, beatdown, control, siege, bait, bridge spam)\n• **Interactions** (kiting, spell timing, punishing)\n• **Deck Building** (win conditions, spells, air defense, balance)\n• **Strategy** (elixir advantage, matchups, ladder tips)\n• **Card Guidance** (Hog Rider, Giant, Balloon, X-Bow, and more)\n• **Matchups** (how to beat specific decks and cards)\n• **Progression** (levels, gold, wild cards, challenges)\n\n**New: I can review your deck!** Just list all 8 cards and I'll analyze it with strengths, weaknesses, and suggestions.\n\nWhat would you like to know?",
        sender: 'fred',
        timestamp: new Date(),
      };
      setMessages([greeting]);
    }
  }, [hasStartedChat, messages.length]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleStartChat = () => {
    setHasStartedChat(true);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay for better UX
    setTimeout(() => {
      const response = getFredResponse(input);
      const fredMessage: Message = {
        id: `fred-${Date.now()}`,
        text: response,
        sender: 'fred',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, fredMessage]);
      setIsTyping(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!hasStartedChat) {
    return <FredWelcomeIntro onStartChat={handleStartChat} />;
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      {/* Header */}
      <div className="border-b bg-card p-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Ask Fred</h1>
            <p className="text-sm text-muted-foreground">
              Offline Clash Royale helper with expanded knowledge and deck review
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Info className="mr-2 h-4 w-4" />
                About Fred
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>About Fred</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Fred is an offline, deterministic Q&A system for Clash Royale. All responses are generated 
                  locally on your device without any external AI services or internet connection.
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold">What Fred Can Help With:</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Game mechanics (elixir, tower targeting, card roles)</li>
                    <li>Deck archetypes (cycle, beatdown, control, siege, bait, bridge spam)</li>
                    <li>Battle interactions (kiting, spell timing, punishing)</li>
                    <li>Deck building (win conditions, spells, air defense, balance)</li>
                    <li>Strategy tips (elixir advantage, matchups, ladder climbing)</li>
                    <li>Card guidance (Hog Rider, Giant, Balloon, X-Bow, and more)</li>
                    <li>Matchup advice (how to beat specific decks and cards)</li>
                    <li>Progression (levels, gold, wild cards, challenges, masteries)</li>
                    <li><strong>Deck reviews</strong> (list all 8 cards for detailed analysis)</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm">{FRED_DISCLAIMER}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Chat Area */}
      <ScrollArea className="flex-1" ref={scrollRef}>
        <div className="mx-auto max-w-4xl space-y-4 p-4">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <Card
                className={`max-w-[80%] ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card'
                }`}
              >
                <CardContent className="p-4">
                  <div className="whitespace-pre-wrap break-words text-sm">
                    {message.text}
                  </div>
                  <div
                    className={`mt-2 text-xs ${
                      message.sender === 'user'
                        ? 'text-primary-foreground/70'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <Card className="bg-card">
                <CardContent className="p-4">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t bg-card p-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Clash Royale strategy, or list your 8 cards for a deck review..."
              className="flex-1"
              disabled={isTyping}
            />
            <Button onClick={handleSendMessage} disabled={!input.trim() || isTyping}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Fred provides offline, informational guidance only. For deck reviews, list all 8 cards.
          </p>
        </div>
      </div>
    </div>
  );
}
