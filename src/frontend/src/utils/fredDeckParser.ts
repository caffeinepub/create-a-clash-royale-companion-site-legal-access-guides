// Deterministic deck parsing utilities for Fred's deck review system
// Extracts and canonicalizes card names from user messages

import { normalizeCardName, getCardInfo, CARD_ROLES } from './fredDeckCardRoles';

export interface ParsedDeck {
  cards: string[];
  canonicalNames: string[];
  isComplete: boolean;
  confidence: 'high' | 'medium' | 'low';
  ambiguousCards: string[];
}

// Common card name variations and shortcuts
const CARD_ALIASES: Record<string, string> = {
  'hog': 'hog rider',
  'mk': 'mega knight',
  'pekka': 'pekka',
  'mini p': 'mini pekka',
  'mini pekka': 'mini pekka',
  'mp': 'mini pekka',
  'gy': 'graveyard',
  'xbow': 'x-bow',
  'x bow': 'x-bow',
  'rg': 'royal giant',
  'eg': 'electro giant',
  'egiant': 'electro giant',
  'egolem': 'elixir golem',
  'e golem': 'elixir golem',
  'lava': 'lava hound',
  'lh': 'lava hound',
  'loon': 'balloon',
  'wb': 'wall breakers',
  'wallbreakers': 'wall breakers',
  'gob barrel': 'goblin barrel',
  'barrel': 'goblin barrel',
  'log': 'log',
  'the log': 'log',
  'fb': 'fireball',
  'eq': 'earthquake',
  'ewiz': 'electro wizard',
  'e wiz': 'electro wizard',
  'iwiz': 'ice wizard',
  'i wiz': 'ice wizard',
  'mega minion': 'mega minion',
  'mm': 'mega minion',
  'bats': 'bats',
  'skarmy': 'skeleton army',
  'skeletons': 'skeletons',
  'skelly': 'skeletons',
  'gob gang': 'goblin gang',
  'goblin gang': 'goblin gang',
  'gang': 'goblin gang',
  'princess': 'princess',
  'dart gob': 'dart goblin',
  'dart goblin': 'dart goblin',
  'ice spirit': 'ice spirit',
  'fire spirit': 'fire spirit',
  'e spirit': 'electro spirit',
  'electro spirit': 'electro spirit',
  'heal spirit': 'heal spirit',
  'cannon': 'cannon',
  'tesla': 'tesla',
  'inferno tower': 'inferno tower',
  'it': 'inferno tower',
  'inferno dragon': 'inferno dragon',
  'id': 'inferno dragon',
  'valk': 'valkyrie',
  'valkyrie': 'valkyrie',
  'knight': 'knight',
  'archers': 'archers',
  'musketeer': 'musketeer',
  'musky': 'musketeer',
  'wizard': 'wizard',
  'wiz': 'wizard',
  'baby dragon': 'baby dragon',
  'baby d': 'baby dragon',
  'bd': 'baby dragon',
  'giant': 'giant',
  'golem': 'golem',
  'prince': 'prince',
  'dark prince': 'dark prince',
  'dp': 'dark prince',
  'bandit': 'bandit',
  'battle ram': 'battle ram',
  'ram': 'battle ram',
  'ram rider': 'ram rider',
  'miner': 'miner',
  'sparky': 'sparky',
  '3m': 'three musketeers',
  'three musk': 'three musketeers',
  'royal ghost': 'royal ghost',
  'ghost': 'royal ghost',
  'night witch': 'night witch',
  'nw': 'night witch',
  'mother witch': 'mother witch',
  'mw': 'mother witch',
  'fisherman': 'fisherman',
  'hunter': 'hunter',
  'executioner': 'executioner',
  'exe': 'executioner',
  'magic archer': 'magic archer',
  'ma': 'magic archer',
  'firecracker': 'firecracker',
  'fc': 'firecracker',
  'ice golem': 'ice golem',
  'ig': 'ice golem',
  'guards': 'guards',
  'goblins': 'goblins',
  'spear goblins': 'spear goblins',
  'spear gobs': 'spear goblins',
  'minions': 'minions',
  'minion horde': 'minion horde',
  'horde': 'minion horde',
  'zap': 'zap',
  'arrows': 'arrows',
  'fireball': 'fireball',
  'poison': 'poison',
  'rocket': 'rocket',
  'lightning': 'lightning',
  'earthquake': 'earthquake',
  'freeze': 'freeze',
  'rage': 'rage',
  'tornado': 'tornado',
  'nado': 'tornado',
  'snowball': 'snowball',
  'barb barrel': 'barbarian barrel',
  'barbarian barrel': 'barbarian barrel',
  'bb': 'barbarian barrel',
  'tombstone': 'tombstone',
  'tomb': 'tombstone',
  'goblin cage': 'goblin cage',
  'cage': 'goblin cage',
  'furnace': 'furnace',
  'goblin hut': 'goblin hut',
  'barb hut': 'barbarian hut',
  'barbarian hut': 'barbarian hut',
  'bomb tower': 'bomb tower',
  'bt': 'bomb tower',
  'giant skeleton': 'giant skeleton',
  'gs': 'giant skeleton',
  'goblin giant': 'goblin giant',
  'gg': 'goblin giant',
  'battle healer': 'battle healer',
  'bh': 'battle healer',
};

// Detect if message contains a deck list
export function isDeckList(message: string): boolean {
  const normalized = message.toLowerCase();
  
  // Check for deck-related keywords
  const deckKeywords = [
    'deck', 'my deck', 'this deck', 'rate my', 'review',
    'using', 'running', 'playing with', 'cards are',
    'composition', 'lineup'
  ];
  
  const hasKeyword = deckKeywords.some(kw => normalized.includes(kw));
  
  // Check for multiple card names or list format
  const hasCommas = (normalized.match(/,/g) || []).length >= 2;
  const hasNewlines = (normalized.match(/\n/g) || []).length >= 2;
  const hasBullets = (normalized.match(/[-•*]/g) || []).length >= 2;
  
  // Count potential card names
  const words = normalized.split(/[\s,\n•*-]+/).filter(w => w.length > 2);
  const cardMatches = words.filter(word => {
    const alias = CARD_ALIASES[word];
    return alias && CARD_ROLES[alias];
  });
  
  return (hasKeyword && cardMatches.length >= 3) || 
         (hasCommas && cardMatches.length >= 4) ||
         (hasNewlines && cardMatches.length >= 4) ||
         (hasBullets && cardMatches.length >= 4) ||
         cardMatches.length >= 6;
}

// Parse deck from message
export function parseDeck(message: string): ParsedDeck {
  const normalized = message.toLowerCase();
  
  // Split by common delimiters
  const tokens = normalized.split(/[\s,\n•*\-:]+/)
    .map(t => t.trim())
    .filter(t => t.length > 0);
  
  const foundCards: string[] = [];
  const canonicalNames: string[] = [];
  const ambiguousCards: string[] = [];
  
  // Try to match each token to a card
  for (const token of tokens) {
    // Try direct alias match
    const alias = CARD_ALIASES[token];
    if (alias && CARD_ROLES[alias]) {
      if (!foundCards.includes(alias)) {
        foundCards.push(alias);
        canonicalNames.push(CARD_ROLES[alias].name);
      }
      continue;
    }
    
    // Try partial match for multi-word cards
    for (const [key, value] of Object.entries(CARD_ALIASES)) {
      if (key.includes(token) && token.length >= 3) {
        if (!foundCards.includes(value)) {
          foundCards.push(value);
          canonicalNames.push(CARD_ROLES[value].name);
          break;
        }
      }
    }
  }
  
  // Try to find multi-word card names in the original message
  for (const [alias, canonical] of Object.entries(CARD_ALIASES)) {
    if (alias.includes(' ') && normalized.includes(alias)) {
      if (!foundCards.includes(canonical)) {
        foundCards.push(canonical);
        canonicalNames.push(CARD_ROLES[canonical].name);
      }
    }
  }
  
  const isComplete = foundCards.length === 8;
  const confidence = foundCards.length >= 7 ? 'high' :
                     foundCards.length >= 5 ? 'medium' : 'low';
  
  return {
    cards: foundCards,
    canonicalNames,
    isComplete,
    confidence,
    ambiguousCards
  };
}

// Generate clarifying question for incomplete decks
export function getClarifyingQuestion(parsed: ParsedDeck): string {
  const count = parsed.cards.length;
  
  if (count === 0) {
    return "I'd love to review your deck! Please list all 8 cards in your deck. You can separate them with commas or put each on a new line. For example:\n\nHog Rider, Musketeer, Valkyrie, Cannon, Fireball, Log, Ice Spirit, Skeletons";
  }
  
  if (count < 5) {
    return `I found ${count} card${count === 1 ? '' : 's'} (${parsed.canonicalNames.join(', ')}), but I need all 8 cards to give you a complete deck review. Can you list all 8 cards in your deck?`;
  }
  
  if (count < 8) {
    return `I found ${count} cards (${parsed.canonicalNames.join(', ')}). You're close! Can you list the remaining ${8 - count} card${8 - count === 1 ? '' : 's'} to complete your deck?`;
  }
  
  return '';
}
