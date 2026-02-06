// Fred's knowledge base - a deterministic, client-side Q&A system for Clash Royale
// All responses are generated locally without external APIs or AI services

import { allTopics } from './fredKnowledgeTopics';
import { findBestMatch, containsAny, normalizeText } from './fredMatcher';

interface FredResponse {
  answer: string;
  category?: string;
}

// Safety check for inappropriate requests
function checkForBypassRequest(input: string): boolean {
  const bypassKeywords = [
    'unblock', 'bypass', 'vpn', 'proxy', 'hack', 'cheat',
    'mod', 'exploit', 'circumvent', 'restriction', 'access control',
    'unblocked', 'get around', 'workaround'
  ];
  return containsAny(input, bypassKeywords);
}

// Check for greetings
function isGreeting(input: string): boolean {
  return containsAny(input, [
    'hello', 'hi', 'hey', 'greetings', 'sup', 'yo', 'howdy',
    'good morning', 'good afternoon', 'good evening'
  ]);
}

// Check for thanks
function isThanks(input: string): boolean {
  return containsAny(input, [
    'thank', 'thanks', 'thx', 'appreciate', 'ty', 'tysm'
  ]);
}

// Check for help request
function isHelpRequest(input: string): boolean {
  return containsAny(input, [
    'help', 'what can you', 'what do you know', 'topics',
    'capabilities', 'what can fred', 'what are you', 'who are you'
  ]);
}

// Main function to get Fred's response
export function getFredResponse(userMessage: string): string {
  const input = normalizeText(userMessage);

  // Safety check - highest priority
  if (checkForBypassRequest(input)) {
    return "I can't help with bypassing restrictions or accessing blocked content. This site provides informational content about Clash Royale strategy only, with links to official Supercell sources. If you have questions about gameplay strategy, deck building, or game mechanics, I'd be happy to help with those!";
  }

  // Check for greetings
  if (isGreeting(input)) {
    return "Hey there! I'm Fred, your Clash Royale helper. I can answer questions about:\n\n• Game mechanics (elixir, tower targeting, card roles)\n• Deck archetypes (beatdown, cycle, control, siege, bait, bridge spam)\n• Battle interactions (kiting, spell timing, punishing)\n• Deck building (win conditions, spells, air defense, balance)\n• Strategy tips\n\nWhat would you like to know?";
  }

  // Check for thanks
  if (isThanks(input)) {
    return "You're welcome! Feel free to ask me anything else about Clash Royale strategy. Good luck in the arena! 👑";
  }

  // Check for help/what can you do
  if (isHelpRequest(input)) {
    return "I can help you with these Clash Royale topics:\n\n• **Mechanics**: Elixir management, tower targeting, card roles, damage types\n• **Archetypes**: Cycle, beatdown, control, siege, bridge spam, bait, split lane, graveyard\n• **Interactions**: Kiting/pulling, spell timing, punishing, King Tower activation\n• **Deck Building**: Win conditions, spell selection, air defense, buildings, deck balance\n• **Strategy**: Elixir advantage, starting hands, defending common threats\n\nJust ask me a question about any of these topics! For more detailed guides, check out the Beginner Guide and Deck Tips pages.";
  }

  // Try to find best matching topic
  const match = findBestMatch(input, allTopics);
  
  if (match) {
    const topic = allTopics.find(t => t.id === match.topicId);
    if (topic) {
      return topic.answer;
    }
  }

  // Fallback response for unknown questions
  return "I'm Fred, a simple offline helper with limited knowledge about Clash Royale basics. I can answer questions about:\n\n• **Mechanics**: Elixir, tower targeting, card roles, damage types\n• **Archetypes**: Cycle, beatdown, control, siege, bait, bridge spam, split lane, graveyard\n• **Interactions**: Kiting, spell timing, punishing, King activation\n• **Deck Building**: Win conditions, spells, air defense, buildings, balance\n• **Strategy**: Elixir advantage, starting hands, defending Hog Rider\n\nFor more detailed information, check out our Beginner Guide and Deck Tips pages, or visit the official Clash Royale website at supercell.com/en/games/clashroyale/\n\nCould you rephrase your question to focus on one of these topics?";
}
