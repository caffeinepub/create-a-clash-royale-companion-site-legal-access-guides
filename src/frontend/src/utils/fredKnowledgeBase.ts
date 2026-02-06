// Fred's knowledge base - a deterministic, client-side Q&A system for Clash Royale
// All responses are generated locally without external APIs or AI services

import { allTopics } from './fredKnowledgeTopics';
import { cardTopics } from './fredKnowledgeCards';
import { matchupTopics } from './fredKnowledgeMatchups';
import { ladderAndProgressionTopics } from './fredKnowledgeLadderAndProgression';
import { findBestMatch, containsAny, normalizeText } from './fredMatcher';
import { isDeckList, parseDeck, getClarifyingQuestion } from './fredDeckParser';
import { generateDeckReview } from './fredDeckReview';

// Combine all knowledge sources
const allKnowledge = [
  ...allTopics,
  ...cardTopics,
  ...matchupTopics,
  ...ladderAndProgressionTopics
];

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

  // Check for deck list BEFORE other checks
  if (isDeckList(userMessage)) {
    const parsed = parseDeck(userMessage);
    
    if (parsed.isComplete) {
      // Generate full deck review
      return generateDeckReview(parsed);
    } else {
      // Ask clarifying question
      return getClarifyingQuestion(parsed);
    }
  }

  // Check for greetings
  if (isGreeting(input)) {
    return "Hey there! I'm Fred, your Clash Royale helper. I can answer questions about:\n\n• **Game mechanics** (elixir, tower targeting, card roles)\n• **Deck archetypes** (beatdown, cycle, control, siege, bait, bridge spam)\n• **Battle interactions** (kiting, spell timing, punishing)\n• **Deck building** (win conditions, spells, air defense, balance)\n• **Strategy tips** (elixir advantage, matchups, ladder climbing)\n• **Card guidance** (Hog Rider, Giant, Balloon, X-Bow, and more)\n• **Matchups** (how to beat specific decks and cards)\n• **Progression** (levels, gold, wild cards, challenges)\n\n**I can also review your deck!** Just list all 8 cards and I'll analyze it.\n\nWhat would you like to know?";
  }

  // Check for thanks
  if (isThanks(input)) {
    return "You're welcome! Feel free to ask me anything else about Clash Royale strategy. Good luck in the arena! 👑";
  }

  // Check for help/what can you do
  if (isHelpRequest(input)) {
    return "I can help you with these Clash Royale topics:\n\n• **Mechanics**: Elixir management, tower targeting, card roles, damage types\n• **Archetypes**: Cycle, beatdown, control, siege, bridge spam, bait, split lane, graveyard\n• **Interactions**: Kiting/pulling, spell timing, punishing, King Tower activation\n• **Deck Building**: Win conditions, spell selection, air defense, buildings, deck balance\n• **Strategy**: Elixir advantage, starting hands, matchups, ladder tips\n• **Cards**: Hog Rider, Giant, Balloon, X-Bow, Graveyard, PEKKA, and many more\n• **Matchups**: How to beat Hog Rider, Golem, X-Bow, Log Bait, and other decks\n• **Progression**: Card levels, gold, wild cards, challenges, Path of Legends\n\n**Deck Reviews**: List all 8 cards in your deck and I'll analyze it with strengths, weaknesses, and suggestions!\n\nJust ask me a question about any of these topics!";
  }

  // Try to find best matching topic
  const match = findBestMatch(input, allKnowledge);
  
  if (match) {
    const topic = allKnowledge.find(t => t.id === match.topicId);
    if (topic) {
      return topic.answer;
    }
  }

  // Fallback response for unknown questions
  return "I'm Fred, an offline helper with expanded knowledge about Clash Royale! I can answer questions about:\n\n• **Mechanics**: Elixir, tower targeting, card roles, damage types\n• **Archetypes**: Cycle, beatdown, control, siege, bait, bridge spam, graveyard\n• **Interactions**: Kiting, spell timing, punishing, King activation\n• **Deck Building**: Win conditions, spells, air defense, buildings, balance\n• **Strategy**: Elixir advantage, matchups, ladder tips, overtime play\n• **Cards**: Hog Rider, Giant, Balloon, X-Bow, Miner, PEKKA, Graveyard, and more\n• **Matchups**: How to beat specific decks and cards\n• **Progression**: Levels, gold, wild cards, challenges, masteries\n\n**Deck Reviews**: List all 8 cards and I'll analyze your deck!\n\nFor more detailed information, check out our Beginner Guide and Deck Tips pages, or visit the official Clash Royale website at supercell.com/en/games/clashroyale/\n\nCould you rephrase your question to focus on one of these topics?";
}
