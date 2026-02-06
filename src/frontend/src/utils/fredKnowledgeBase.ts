// Fred's knowledge base - a deterministic, client-side Q&A system for Clash Royale basics

interface FredResponse {
  answer: string;
  category?: string;
}

// Normalize user input for matching
function normalizeInput(input: string): string {
  return input.toLowerCase().trim();
}

// Check if input contains any of the keywords
function containsAny(input: string, keywords: string[]): boolean {
  const normalized = normalizeInput(input);
  return keywords.some(keyword => normalized.includes(keyword.toLowerCase()));
}

// Knowledge base with predefined Q&A
const knowledgeBase: Record<string, FredResponse> = {
  elixir: {
    answer: "Elixir is the resource you use to deploy cards in Clash Royale. You start with 5 elixir and gain 1 elixir every 2.8 seconds (1.4 seconds in double elixir). Managing your elixir efficiently is crucial - avoid overspending and try to maintain an elixir advantage over your opponent. A good rule of thumb: don't waste elixir on unnecessary troops when you're already defending successfully!",
    category: "basics"
  },
  winCondition: {
    answer: "A win condition is a card designed to deal significant damage to enemy towers. Common win conditions include Hog Rider, Giant, Balloon, Miner, and X-Bow. Every good deck needs at least one reliable win condition. Your win condition is typically your main offensive threat, and the rest of your deck should support it. For example, if you're using Hog Rider, you might include spells like Fireball or Earthquake to clear defensive buildings.",
    category: "strategy"
  },
  cycleDeck: {
    answer: "A cycle deck is a deck with low average elixir cost (usually 2.6-3.0) that allows you to quickly cycle back to your key cards. The most famous example is the 2.6 Hog Cycle deck. These decks rely on speed and repetition - you can play your win condition more frequently than your opponent can defend it. Cycle decks require good timing and elixir management, but they're very rewarding when mastered!",
    category: "archetypes"
  },
  beatdown: {
    answer: "Beatdown is an archetype focused on building large pushes with tanky units like Golem, Giant, or Lava Hound. The strategy is to invest elixir in the back, build a massive push, and overwhelm your opponent. Beatdown decks are typically slower and more expensive (3.5-4.5 average elixir). They excel in double elixir time when you can support your tank with multiple troops. Key tip: defend efficiently in single elixir, then unleash devastating pushes later!",
    category: "archetypes"
  },
  control: {
    answer: "Control decks focus on defending efficiently and counter-pushing. They use defensive buildings, spells, and versatile troops to shut down enemy pushes while chipping away at towers. Examples include X-Bow and Mortar decks. Control players need excellent defensive skills and patience - you win by outlasting your opponent and capitalizing on their mistakes. These decks often include multiple spells and defensive structures.",
    category: "archetypes"
  },
  siege: {
    answer: "Siege decks use long-range win conditions like X-Bow or Mortar that can attack towers from your side of the arena. The strategy is to place your siege building, then defend it aggressively while it chips away at the enemy tower. Siege requires strong defensive play and good building placement. It's a high-skill archetype that rewards patience and precise timing. Popular siege decks include 2.9 X-Bow and 2.6 Mortar cycles.",
    category: "archetypes"
  },
  bridgeSpam: {
    answer: "Bridge spam is an aggressive archetype that applies constant pressure at the bridge with fast, hard-hitting units like Bandit, Battle Ram, and Royal Ghost. The goal is to catch your opponent off-guard and overwhelm them before they can build a proper defense. Bridge spam decks are typically medium cost (3.3-3.8 elixir) and require quick decision-making. They're great for punishing opponents who overcommit on offense!",
    category: "archetypes"
  },
  spells: {
    answer: "Choosing the right spells is crucial! Most decks run 2-3 spells. Here's a quick guide:\n\n• Small spell (Zap, Log, Arrows): Essential for clearing swarms and resetting units\n• Medium spell (Fireball, Poison): Great for damaging troops and towers\n• Big spell (Rocket, Lightning): High damage but expensive\n\nPick spells that synergize with your deck. For example, Hog decks love Earthquake for buildings, while Graveyard pairs well with Poison. Always have at least one spell that can hit air troops!",
    category: "deck-building"
  }
};

// Safety check for inappropriate requests
function checkForBypassRequest(input: string): boolean {
  const bypassKeywords = [
    'unblock', 'bypass', 'vpn', 'proxy', 'hack', 'cheat', 
    'mod', 'exploit', 'circumvent', 'restriction', 'access control'
  ];
  return containsAny(input, bypassKeywords);
}

// Main function to get Fred's response
export function getFredResponse(userMessage: string): string {
  const input = normalizeInput(userMessage);

  // Safety check
  if (checkForBypassRequest(input)) {
    return "I can't help with bypassing restrictions or accessing blocked content. This site provides informational content about Clash Royale strategy only, with links to official Supercell sources. If you have questions about gameplay strategy, deck building, or game mechanics, I'd be happy to help with those!";
  }

  // Check for greetings
  if (containsAny(input, ['hello', 'hi', 'hey', 'greetings', 'sup', 'yo'])) {
    return "Hey there! I'm Fred, your Clash Royale helper. I can answer questions about elixir management, win conditions, deck archetypes (beatdown, control, siege, bridge spam, cycle), and spell selection. What would you like to know?";
  }

  // Check for thanks
  if (containsAny(input, ['thank', 'thanks', 'thx', 'appreciate'])) {
    return "You're welcome! Feel free to ask me anything else about Clash Royale strategy. Good luck in the arena! 👑";
  }

  // Check for help/what can you do
  if (containsAny(input, ['help', 'what can you', 'what do you know', 'topics', 'capabilities'])) {
    return "I can help you with these Clash Royale topics:\n\n• Elixir management\n• Win conditions\n• Deck archetypes (cycle, beatdown, control, siege, bridge spam)\n• Spell selection\n• Basic strategy tips\n\nJust ask me a question about any of these topics! For more detailed guides, check out the Beginner Guide and Deck Tips pages.";
  }

  // Match against knowledge base
  if (containsAny(input, ['elixir', 'resource', 'mana'])) {
    return knowledgeBase.elixir.answer;
  }

  if (containsAny(input, ['win condition', 'wincondition', 'wincon', 'tower damage', 'main damage'])) {
    return knowledgeBase.winCondition.answer;
  }

  if (containsAny(input, ['cycle deck', 'cycle', 'low cost', 'fast cycle', '2.6'])) {
    return knowledgeBase.cycleDeck.answer;
  }

  if (containsAny(input, ['beatdown', 'golem', 'giant', 'lava', 'tank'])) {
    return knowledgeBase.beatdown.answer;
  }

  if (containsAny(input, ['control deck', 'control', 'defensive'])) {
    return knowledgeBase.control.answer;
  }

  if (containsAny(input, ['siege', 'x-bow', 'xbow', 'mortar', 'long range'])) {
    return knowledgeBase.siege.answer;
  }

  if (containsAny(input, ['bridge spam', 'bridgespam', 'aggressive', 'bandit', 'battle ram'])) {
    return knowledgeBase.bridgeSpam.answer;
  }

  if (containsAny(input, ['spell', 'zap', 'fireball', 'rocket', 'log', 'arrows', 'poison', 'lightning', 'earthquake'])) {
    return knowledgeBase.spells.answer;
  }

  // Fallback response
  return "I'm Fred, a simple offline helper with limited knowledge about Clash Royale basics. I can answer questions about:\n\n• Elixir management\n• Win conditions\n• Deck archetypes (cycle, beatdown, control, siege, bridge spam)\n• Spell selection\n\nFor more detailed information, check out our Beginner Guide and Deck Tips pages, or visit the official Clash Royale website at supercell.com/en/games/clashroyale/\n\nCould you rephrase your question to focus on one of these topics?";
}
