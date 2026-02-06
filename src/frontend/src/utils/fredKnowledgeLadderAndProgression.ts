// Ladder fundamentals and progression terminology module for Fred's knowledge base
// Covers levels, upgrades, resources, and trophy systems

import { TopicDefinition } from './fredKnowledgeTopics';

export const ladderAndProgressionTopics: TopicDefinition[] = [
  {
    id: 'card-levels',
    keywords: ['card level', 'levels', 'leveling', 'upgrade', 'max level'],
    synonyms: ['card upgrades', 'level up', 'card progression'],
    answer: "Card levels in Clash Royale:\n\n**Level System**:\n• Common: Levels 1-15\n• Rare: Levels 3-15\n• Epic: Levels 6-15\n• Legendary: Levels 9-15\n• Champions: Levels 11-15\n\n**Why Levels Matter**:\n• Higher level = more HP and damage\n• Level differences significantly impact interactions\n• Underleveled cards struggle on ladder\n\n**Tips**: Focus on upgrading one deck first. Don't spread resources thin. Request cards from clan. Use wild cards wisely. Challenges and tournaments use level 11 (equal levels)!",
    category: 'progression'
  },
  {
    id: 'gold-and-gems',
    keywords: ['gold', 'gems', 'currency', 'resources', 'coins'],
    synonyms: ['how to get gold', 'earn gold', 'spend gems'],
    answer: "Resources in Clash Royale:\n\n**Gold**:\n• Used to upgrade cards\n• Earned from chests, donations, challenges\n• Most important resource for progression\n• Tip: Save gold for key cards in your main deck\n\n**Gems**:\n• Premium currency\n• Used for chests, challenges, emotes\n• Best value: Classic/Grand Challenges, Global Tournaments\n• Don't waste on chest speed-ups!\n\n**Tips**: Donate to clan for gold. Complete daily quests. Play challenges for best gold value. Save gems for special challenges and emotes!",
    category: 'progression'
  },
  {
    id: 'wild-cards',
    keywords: ['wild card', 'wildcards', 'wild cards', 'book of cards'],
    synonyms: ['how to use wild cards', 'wild card strategy'],
    answer: "Wild Cards and Books:\n\n**Wild Cards**:\n• Can be converted to any card of same rarity\n• Earned from chests, Pass Royale, events\n• Use on cards you're actively upgrading\n• Don't hoard - use them to progress!\n\n**Books of Cards**:\n• Instantly upgrade a card (if you have gold)\n• Very valuable - use on expensive upgrades\n• Best used on Legendary or Epic cards\n\n**Tips**: Use wild cards on your main deck cards. Save books for level 14→15 upgrades (most expensive). Don't waste on cards you don't use!",
    category: 'progression'
  },
  {
    id: 'trophy-road',
    keywords: ['trophy road', 'trophies', 'arenas', 'leagues', 'ladder'],
    synonyms: ['trophy system', 'arena progression', 'trophy pushing'],
    answer: "Trophy Road and Ladder:\n\n**Arenas** (0-7500 trophies):\n• Unlock new cards as you progress\n• Can't drop below certain arena thresholds\n• Rewards at each arena milestone\n\n**Leagues** (7500+ trophies):\n• Challenger, Master, Champion, Ultimate Champion\n• Season resets (lose some trophies each month)\n• Better rewards at higher leagues\n\n**Tips**: Focus on one deck for ladder. Upgrade it fully before switching. Don't tilt - take breaks after losses. Trophy pushing is easier at season start. Card levels matter more than skill on ladder!",
    category: 'progression'
  },
  {
    id: 'path-of-legends',
    keywords: ['path of legends', 'pol', 'path legends', 'ranked'],
    synonyms: ['path of legends mode', 'pol mode'],
    answer: "Path of Legends (PoL):\n\n**What is it?**:\n• Alternative ranked mode with level caps\n• Progress through ranks with limited card levels\n• More skill-based than ladder (less level advantage)\n• Separate from trophy road\n\n**Ranks**:\n• Bronze, Silver, Gold, Diamond, Mythic, Legendary\n• Each rank has level caps (e.g., Gold = level 11)\n• Can't lose ranks once achieved\n\n**Tips**: Great for players with underleveled cards. More fair than ladder. Focus on skill and strategy. Rewards are excellent. Play PoL if ladder feels unfair due to levels!",
    category: 'progression'
  },
  {
    id: 'masteries',
    keywords: ['mastery', 'masteries', 'card mastery', 'mastery rewards'],
    synonyms: ['how to get masteries', 'mastery system'],
    answer: "Card Masteries:\n\n**What are Masteries?**:\n• Progression system for individual cards\n• Complete tasks with each card to earn rewards\n• Three tiers per card with increasing difficulty\n\n**Rewards**:\n• Gold, gems, emotes, banners\n• Exclusive rewards for completing all tiers\n• Great source of free resources\n\n**Tips**: Work on masteries for cards you use often. Some tasks are easier in Party Mode or 2v2. Don't force masteries - play naturally and they'll complete. Focus on your main deck cards first!",
    category: 'progression'
  },
  {
    id: 'challenges',
    keywords: ['challenge', 'challenges', 'classic challenge', 'grand challenge', 'special challenge'],
    synonyms: ['how to play challenges', 'challenge rewards'],
    answer: "Challenges in Clash Royale:\n\n**Classic Challenge** (10 gems):\n• 12 wins max, 3 losses = out\n• Level 11 cards (equal levels)\n• Great rewards for low cost\n\n**Grand Challenge** (100 gems):\n• Same format, better rewards\n• Best value for gems if you're skilled\n\n**Special Challenges**:\n• Limited-time events\n• Unique rules and rewards\n• Often free or low cost\n\n**Tips**: Challenges are the best way to practice with equal levels. Use meta decks. Watch pros for strategies. Classic Challenges are best gem value for practice!",
    category: 'progression'
  },
  {
    id: 'pass-royale',
    keywords: ['pass royale', 'pass', 'season pass', 'premium pass'],
    synonyms: ['is pass royale worth it', 'pass royale benefits'],
    answer: "Pass Royale (Season Pass):\n\n**Benefits**:\n• Exclusive tower skin and emote\n• Queue chest unlocks (open multiple chests)\n• Unlimited retries in special challenges\n• Extra rewards on trophy road\n• Wild cards and books\n\n**Cost**: ~$5 USD per month\n\n**Worth it?**:\n• Best value purchase in the game\n• Significantly speeds up progression\n• Great for active players\n\n**Tips**: If you play daily, Pass Royale is worth it. Queue chest unlocks save tons of time. Unlimited retries help complete challenges. Don't buy if you play casually!",
    category: 'progression'
  },
  {
    id: 'clan-wars',
    keywords: ['clan wars', 'clan war', 'war', 'river race', 'clan'],
    synonyms: ['how to play clan wars', 'clan war strategy'],
    answer: "Clan Wars (River Race):\n\n**How it Works**:\n• Weekly competition between clans\n• Complete battles to earn medals\n• Medals move your boat up the river\n• First clan to finish wins\n\n**Battle Types**:\n• Duel (1v1 with 3 decks)\n• PvP (standard 1v1)\n• Boat Battle (attack enemy boats)\n\n**Rewards**:\n• Gold, cards, and clan trophies\n• Better rewards for higher finish\n• Legendary League has best rewards\n\n**Tips**: Use all 4 daily attacks. Coordinate with clan. Save strong decks for important battles. Boat attacks are crucial - don't waste them!",
    category: 'progression'
  },
  {
    id: 'tournaments',
    keywords: ['tournament', 'tournaments', 'global tournament', 'private tournament'],
    synonyms: ['how to play tournaments', 'tournament rewards'],
    answer: "Tournaments:\n\n**Global Tournaments**:\n• Weekly tournaments for all players\n• Level 11 cards (equal levels)\n• Free to enter, optional bonus rewards\n• Great practice and rewards\n\n**Private Tournaments**:\n• Created by players\n• Custom rules and settings\n• Good for clan practice\n\n**Tips**: Always play Global Tournaments - free rewards! Use meta decks. Practice new decks in tournaments before ladder. Watch top players' replays to learn. Tournaments are best for skill-based play!",
    category: 'progression'
  }
];
