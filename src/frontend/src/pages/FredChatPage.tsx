import { useState, useRef, useEffect } from 'react';
import { Send, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getFredResponse } from '../utils/fredKnowledgeBase';
import { FRED_DISCLAIMER } from '../content/disclaimer';
import { useSessionFlag } from '../hooks/useSessionFlag';
import FredWelcomeIntro from '../components/FredWelcomeIntro';

interface Message {
  id: string;
  role: 'user' | 'fred';
  content: string;
  timestamp: Date;
}

export default function FredChatPage() {
  const [introDismissed, setIntroDismissed] = useSessionFlag('fred-intro-dismissed', false);
  const [showIntro, setShowIntro] = useState(!introDismissed);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'fred',
      content: "Hi! I'm Fred, your Clash Royale helper. I can answer questions about elixir management, win conditions, deck archetypes, and spell selection. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const handleStartChat = () => {
    setShowIntro(false);
    setIntroDismissed(true);
    // Focus the input after a brief delay to ensure the chat UI is rendered
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 100);
  };

  const handleShowIntro = () => {
    setShowIntro(true);
  };

  const handleSend = () => {
    if (!input.trim() || isProcessing) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);

    // Simulate a brief delay for more natural feel
    setTimeout(() => {
      const fredResponseText = getFredResponse(userMessage.content);
      const fredMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'fred',
        content: fredResponseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, fredMessage]);
      setIsProcessing(false);
      textareaRef.current?.focus();
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="container max-w-4xl py-8 px-4">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Ask Fred</h1>
            <p className="text-muted-foreground">
              Your friendly Clash Royale strategy assistant
            </p>
          </div>
          {!showIntro && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleShowIntro}
              className="gap-2"
            >
              <Info className="h-4 w-4" />
              About Fred
            </Button>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <Alert className="mb-6 border-primary/20 bg-primary/5">
        <AlertDescription className="text-sm leading-relaxed">
          {FRED_DISCLAIMER}
        </AlertDescription>
      </Alert>

      {/* Welcome Intro or Chat Interface */}
      {showIntro ? (
        <FredWelcomeIntro onStartChat={handleStartChat} />
      ) : (
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle>Chat with Fred</CardTitle>
            <CardDescription>
              Ask about elixir, win conditions, deck archetypes, and more
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            {/* Messages */}
            <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold">
                          {message.role === 'user' ? 'You' : 'Fred'}
                        </span>
                        <span className="text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}
                {isProcessing && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg px-4 py-3 bg-muted">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold">Fred</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Thinking...</p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Fred a question... (Press Enter to send, Shift+Enter for new line)"
                  className="min-h-[60px] max-h-[120px] resize-none"
                  disabled={isProcessing}
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isProcessing}
                  size="icon"
                  className="h-[60px] w-[60px] shrink-0"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Fred is an offline helper with limited knowledge. For detailed guides, visit our Beginner Guide and Deck Tips pages.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
