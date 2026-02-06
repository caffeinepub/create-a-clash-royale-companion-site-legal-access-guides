// Static knowledge content for Fred's offline Q&A system
// All content is deterministic and generated locally

export interface TopicDefinition {
  id: string;
  keywords: string[];
  synonyms: string[];
  answer: string;
  category: string;
}

// Core mechanics topics
export const mechanicsTopics: TopicDefinition[] = [
  {
    id: 'elixir',
    keywords: ['elixir', 'resource', 'mana', 'energy', 'cost'],
    synonyms: ['elixir management', 'elixir advantage', 'elixir count', 'elixir economy'],
    answer: "Elixir is the resource you use to deploy cards in Clash Royale. You start with 5 elixir and gain 1 elixir every 2.8 seconds (1.4 seconds in double elixir). Managing your elixir efficiently is crucial - avoid overspending and try to maintain an elixir advantage over your opponent. A good rule of thumb: don't waste elixir on unnecessary troops when you're already defending successfully!",
    category: 'mechanics'
  },
  {
    id: 'tower-targeting',
    keywords: ['tower', 'targeting', 'aggro', 'princess tower', 'king tower', 'retarget'],
    synonyms: ['tower aggro', 'tower focus', 'tower range', 'activation'],
    answer: "Tower targeting in Clash Royale follows specific rules:\n\n• Princess Towers have 7.5 tile range and target the closest enemy\n• King Tower activates when damaged and has 7 tile range\n• Troops target the nearest building or tower\n• You can manipulate targeting by placing troops to 'pull' or 'kite' enemy units away from your towers\n• Activating the King Tower early (intentionally) can be beneficial as it provides extra DPS and coverage\n\nMastering tower aggro is key to advanced defense!",
    category: 'mechanics'
  },
  {
    id: 'card-roles',
    keywords: ['card role', 'tank', 'support', 'swarm', 'spell', 'building', 'troop type'],
    synonyms: ['card types', 'unit roles', 'troop roles'],
    answer: "Cards in Clash Royale have different roles:\n\n• Tanks: High HP units that absorb damage (Giant, Golem, Knight)\n• Win Conditions: Cards designed to damage towers (Hog, Balloon, Miner)\n• Support: Units that assist your push (Musketeer, Wizard, Baby Dragon)\n• Swarm: Low-cost, high-count troops (Skeletons, Goblins, Bats)\n• Splash: Units that damage multiple enemies (Valkyrie, Bomber)\n• Buildings: Defensive structures (Tesla, Cannon, Inferno Tower)\n• Spells: Direct damage or effects (Fireball, Zap, Freeze)\n\nA balanced deck includes multiple roles!",
    category: 'mechanics'
  },
  {
    id: 'damage-types',
    keywords: ['damage type', 'splash', 'single target', 'area damage', 'melee', 'ranged'],
    synonyms: ['damage', 'attack type', 'dps'],
    answer: "Understanding damage types helps you counter effectively:\n\n• Single Target: High DPS against one unit (Mini PEKKA, Prince)\n• Splash/Area: Damages multiple units (Wizard, Valkyrie, Bomber)\n• Melee: Must be close to attack (Knight, Valkyrie)\n• Ranged: Attacks from distance (Musketeer, Archers)\n\nUse splash units against swarms, and single-target high-DPS units against tanks. Ranged units are great for support but vulnerable to spells. Melee units often have better stats for their cost!",
    category: 'mechanics'
  }
];

// Archetype topics
export const archetypeTopics: TopicDefinition[] = [
  {
    id: 'cycle',
    keywords: ['cycle', 'fast cycle', 'low cost', '2.6', '2.9', 'quick cycle'],
    synonyms: ['cycle deck', 'fast deck', 'cheap deck', 'hog cycle', 'xbow cycle'],
    answer: "A cycle deck is a deck with low average elixir cost (usually 2.6-3.0) that allows you to quickly cycle back to your key cards. The most famous example is the 2.6 Hog Cycle deck. These decks rely on speed and repetition - you can play your win condition more frequently than your opponent can defend it. Cycle decks require good timing and elixir management, but they're very rewarding when mastered!",
    category: 'archetypes'
  },
  {
    id: 'beatdown',
    keywords: ['beatdown', 'golem', 'giant', 'lava', 'tank', 'heavy', 'big push'],
    synonyms: ['beatdown deck', 'tank deck', 'heavy deck', 'golem deck', 'giant deck'],
    answer: "Beatdown is an archetype focused on building large pushes with tanky units like Golem, Giant, or Lava Hound. The strategy is to invest elixir in the back, build a massive push, and overwhelm your opponent. Beatdown decks are typically slower and more expensive (3.5-4.5 average elixir). They excel in double elixir time when you can support your tank with multiple troops. Key tip: defend efficiently in single elixir, then unleash devastating pushes later!",
    category: 'archetypes'
  },
  {
    id: 'control',
    keywords: ['control', 'defensive', 'counter push', 'reactive'],
    synonyms: ['control deck', 'defensive deck', 'reactive deck'],
    answer: "Control decks focus on defending efficiently and counter-pushing. They use defensive buildings, spells, and versatile troops to shut down enemy pushes while chipping away at towers. Examples include X-Bow and Mortar decks. Control players need excellent defensive skills and patience - you win by outlasting your opponent and capitalizing on their mistakes. These decks often include multiple spells and defensive structures.",
    category: 'archetypes'
  },
  {
    id: 'siege',
    keywords: ['siege', 'x-bow', 'xbow', 'mortar', 'long range'],
    synonyms: ['siege deck', 'xbow deck', 'mortar deck', 'x bow deck'],
    answer: "Siege decks use long-range win conditions like X-Bow or Mortar that can attack towers from your side of the arena. The strategy is to place your siege building, then defend it aggressively while it chips away at the enemy tower. Siege requires strong defensive play and good building placement. It's a high-skill archetype that rewards patience and precise timing. Popular siege decks include 2.9 X-Bow and 2.6 Mortar cycles.",
    category: 'archetypes'
  },
  {
    id: 'bridge-spam',
    keywords: ['bridge spam', 'bridgespam', 'aggressive', 'bandit', 'battle ram', 'pressure'],
    synonyms: ['spam deck', 'aggressive deck', 'rush deck', 'bridge spam deck'],
    answer: "Bridge spam is an aggressive archetype that applies constant pressure at the bridge with fast, hard-hitting units like Bandit, Battle Ram, and Royal Ghost. The goal is to catch your opponent off-guard and overwhelm them before they can build a proper defense. Bridge spam decks are typically medium cost (3.3-3.8 elixir) and require quick decision-making. They're great for punishing opponents who overcommit on offense!",
    category: 'archetypes'
  },
  {
    id: 'bait',
    keywords: ['bait', 'log bait', 'spell bait', 'goblin barrel', 'princess'],
    synonyms: ['bait deck', 'spell bait deck', 'log bait deck', 'logbait'],
    answer: "Bait decks force your opponent to use their spells inefficiently by running multiple cards that require the same counter. Classic Log Bait uses Goblin Barrel, Princess, and Goblin Gang - all vulnerable to Log. Once your opponent uses their spell, you punish with the card they can't counter! Bait decks require careful tracking of opponent's spell cycle and good timing. They're excellent for outplaying opponents through mind games and prediction!",
    category: 'archetypes'
  },
  {
    id: 'split-lane',
    keywords: ['split lane', 'dual lane', 'both lanes', 'split push', 'pressure both'],
    synonyms: ['split lane pressure', 'double lane', 'two lanes'],
    answer: "Split lane pressure involves attacking both lanes simultaneously to overwhelm your opponent's defense. This strategy works best with:\n\n• Cards that naturally split (Elixir Golem, Battle Healer)\n• Cheap cycle cards to apply pressure on one lane while pushing the other\n• Punishing opponents who overcommit to one side\n\nSplit lane is effective against decks with limited defensive options or expensive counters. It forces difficult decisions and can lead to tower trades. Best used when you have an elixir advantage!",
    category: 'archetypes'
  },
  {
    id: 'graveyard',
    keywords: ['graveyard', 'gy', 'graveyard deck', 'graveyard control'],
    synonyms: ['gy deck', 'graveyard poison', 'gy control'],
    answer: "Graveyard decks use the Graveyard spell as a win condition, spawning skeletons directly at the opponent's tower. These decks typically pair Graveyard with:\n\n• A tank (Knight, Ice Golem, Giant) to absorb tower damage\n• Poison to counter small troops and buildings\n• Defensive cards to survive until you can build a push\n\nGraveyard is unique because it bypasses ground defenses and can be placed anywhere. It's a control-style archetype that requires patience and good spell timing. Master the Graveyard placement to avoid King Tower activation!",
    category: 'archetypes'
  }
];

// Interaction and mechanics topics
export const interactionTopics: TopicDefinition[] = [
  {
    id: 'kiting',
    keywords: ['kite', 'kiting', 'pull', 'pulling', 'lure', 'distract'],
    synonyms: ['pull troops', 'lure units', 'distract', 'kite troops'],
    answer: "Kiting (or pulling) is a defensive technique where you place a troop to lure enemy units away from your tower, often into the opposite lane or into range of both Princess Towers. Common kiting troops:\n\n• Ice Golem: Cheap tank with death damage\n• Skeletons: 1 elixir distraction\n• Ice Spirit: Freezes while kiting\n\nPlace your kiting troop in the center or opposite lane to pull units across the arena. This maximizes tower damage on the enemy while minimizing damage to your towers. Kiting is essential against Hog Rider, Giant, and other ground units!",
    category: 'interactions'
  },
  {
    id: 'spell-timing',
    keywords: ['spell timing', 'when to spell', 'spell usage', 'prediction spell'],
    synonyms: ['spell', 'fireball timing', 'log timing', 'when to use spells'],
    answer: "Spell timing can win or lose games! Key principles:\n\n• Prediction spells: Cast before opponent plays their card (e.g., Log on Goblin Barrel spawn)\n• Value spells: Wait for multiple targets (Fireball on Musketeer + tower)\n• Defensive spells: Use immediately to prevent damage (Zap on Inferno Dragon)\n• Spell cycling: In overtime, spell the tower directly if you're ahead\n\nDon't waste spells early - track what your opponent plays and save spells for high-value moments. A well-timed Fireball can swing the game!",
    category: 'interactions'
  },
  {
    id: 'punish',
    keywords: ['punish', 'punishing', 'counter push', 'opposite lane', 'pressure'],
    synonyms: ['punish window', 'punish play', 'opposite lane pressure', 'punish opponent'],
    answer: "Punishing is attacking when your opponent is low on elixir or has just committed heavily to one lane. Punish opportunities:\n\n• Opponent plays expensive card in back (Golem, Lava Hound)\n• Opponent overcommits on defense\n• Opponent uses all elixir on one lane\n\nBest punish cards: Hog Rider, Goblin Barrel, Miner, Battle Ram - fast units that reach the tower quickly. Punishing forces your opponent into difficult decisions and can lead to tower damage or elixir advantages. Always be ready to punish opposite lane!",
    category: 'interactions'
  },
  {
    id: 'king-activation',
    keywords: ['king activation', 'king tower', 'activate king', 'tornado', 'fisherman'],
    synonyms: ['activate king tower', 'king tower activation', 'king activation'],
    answer: "Activating your King Tower early can be a huge advantage! Once activated, the King Tower provides:\n\n• Extra DPS on defense\n• Better coverage of both lanes\n• Harder for opponent to take a tower\n\nCommon activation methods:\n\n• Tornado: Pull Hog Rider, Balloon, or other troops to King Tower\n• Fisherman: Hook troops to King Tower\n• Intentional damage: Let Goblin Barrel or Rocket hit King Tower in specific matchups\n\nKing activation is especially valuable against beatdown and bridge spam decks!",
    category: 'interactions'
  }
];

// Deck building topics
export const deckBuildingTopics: TopicDefinition[] = [
  {
    id: 'win-condition',
    keywords: ['win condition', 'wincondition', 'wincon', 'tower damage', 'main damage'],
    synonyms: ['win con', 'primary damage', 'main threat', 'win conditions'],
    answer: "A win condition is a card designed to deal significant damage to enemy towers. Common win conditions include Hog Rider, Giant, Balloon, Miner, and X-Bow. Every good deck needs at least one reliable win condition. Your win condition is typically your main offensive threat, and the rest of your deck should support it. For example, if you're using Hog Rider, you might include spells like Fireball or Earthquake to clear defensive buildings.",
    category: 'deck-building'
  },
  {
    id: 'spells',
    keywords: ['spell', 'zap', 'fireball', 'rocket', 'log', 'arrows', 'poison', 'lightning', 'earthquake', 'freeze'],
    synonyms: ['spell selection', 'which spells', 'best spells', 'spell choice'],
    answer: "Choosing the right spells is crucial! Most decks run 2-3 spells. Here's a quick guide:\n\n• Small spell (Zap, Log, Arrows): Essential for clearing swarms and resetting units\n• Medium spell (Fireball, Poison): Great for damaging troops and towers\n• Big spell (Rocket, Lightning): High damage but expensive\n\nPick spells that synergize with your deck. For example, Hog decks love Earthquake for buildings, while Graveyard pairs well with Poison. Always have at least one spell that can hit air troops!",
    category: 'deck-building'
  },
  {
    id: 'air-defense',
    keywords: ['air defense', 'anti air', 'air counter', 'balloon', 'lava hound', 'flying'],
    synonyms: ['air defense', 'counter air', 'defend air', 'air targeting'],
    answer: "Every deck needs reliable air defense! Common air counters:\n\n• Buildings: Tesla, Inferno Tower (target air)\n• Ranged troops: Musketeer, Archers, Mega Minion\n• Splash: Wizard, Baby Dragon, Executioner\n• Spells: Fireball, Arrows, Zap\n\nAim for 2-3 cards that can hit air. Balloon and Lava Hound decks will punish weak air defense. Consider both single-target (for tanks) and splash (for swarms like Minion Horde). Don't rely solely on spells - you need troops that can consistently defend air!",
    category: 'deck-building'
  },
  {
    id: 'spell-package',
    keywords: ['spell package', 'spell combo', 'which spells together'],
    synonyms: ['spell combination', 'spell synergy', 'spell pairing'],
    answer: "A spell package is the combination of spells in your deck. Common packages:\n\n• Log + Fireball: Versatile, covers most situations\n• Zap + Poison: Good for Graveyard and control decks\n• Log + Rocket: Spell cycle and high damage\n• Arrows + Lightning: Beats Minion Horde and targets buildings\n\nYour spell package should:\n• Cover both small and medium/large threats\n• Synergize with your win condition\n• Include at least one spell that hits air\n\nAvoid running 3+ spells unless you're playing spell cycle - you need troops too!",
    category: 'deck-building'
  },
  {
    id: 'buildings',
    keywords: ['building', 'defensive building', 'tesla', 'cannon', 'inferno', 'bomb tower'],
    synonyms: ['defensive structure', 'building choice', 'defensive buildings'],
    answer: "Defensive buildings are crucial for many decks:\n\n• Cannon: Cheap, ground-only, great vs Hog Rider\n• Tesla: Versatile, hits air, hides underground\n• Inferno Tower: Tank killer, hits air, vulnerable to swarms\n• Bomb Tower: Splash damage, good vs swarms\n• Tombstone: Spawns Skeletons, cheap distraction\n\nBuildings provide:\n• Distraction for win conditions\n• Extra DPS on defense\n• Kiting potential\n\nMost decks benefit from 1 defensive building. Cycle and control decks often run 2 (e.g., Tesla + Cannon in X-Bow).",
    category: 'deck-building'
  },
  {
    id: 'deck-balance',
    keywords: ['deck balance', 'balanced deck', 'deck composition', 'average elixir'],
    synonyms: ['deck building', 'make a deck', 'build a deck', 'deck structure'],
    answer: "A balanced deck should have:\n\n• 1-2 win conditions\n• 2-3 spells (small + medium/big)\n• 2-3 air-targeting cards\n• 1 defensive building (optional but recommended)\n• 1-2 splash damage cards\n• 1-2 tanks or mini-tanks\n• Average elixir: 3.0-4.0 (lower for cycle, higher for beatdown)\n\nAvoid:\n• Too many expensive cards (hard to defend)\n• No win condition (can't take towers)\n• Weak air defense (loses to Balloon/Lava Hound)\n• No spells (can't deal with swarms or buildings)\n\nTest your deck in challenges before ladder!",
    category: 'deck-building'
  },
  {
    id: 'defensive-core',
    keywords: ['defensive core', 'defense', 'defensive cards', 'how to defend'],
    synonyms: ['defensive setup', 'defense cards', 'defensive troops'],
    answer: "A strong defensive core is essential for any deck:\n\n**Key Components**:\n• Building (Tesla, Cannon, Inferno Tower)\n• Mini-tank (Knight, Valkyrie, Mini PEKKA)\n• Ranged support (Musketeer, Archers, Mega Minion)\n• Small spell (Log, Zap, Arrows)\n\n**Why It Matters**:\n• Allows efficient defense to build elixir advantage\n• Enables counter-pushes with surviving troops\n• Provides flexibility against different archetypes\n\n**Tips**: Your defensive core should handle both ground and air threats. Practice defending common pushes (Hog Rider, Giant, Balloon) with minimal elixir!",
    category: 'deck-building'
  }
];

// Strategy topics
export const strategyTopics: TopicDefinition[] = [
  {
    id: 'elixir-advantage',
    keywords: ['elixir advantage', 'elixir lead', 'positive trade', 'elixir management'],
    synonyms: ['elixir advantage', 'positive elixir', 'elixir economy', 'elixir trades'],
    answer: "Elixir advantage is when you've spent less elixir than your opponent to achieve the same or better result. Examples:\n\n• Defending Hog Rider (4) with Cannon (3) = +1 elixir\n• Killing Minion Horde (5) with Arrows (3) = +2 elixir\n• Defending Giant push (10+) with 7 elixir = +3 elixir\n\nWhy it matters:\n• More elixir = stronger pushes\n• Can pressure both lanes\n• Forces opponent into bad trades\n\nTips: Track elixir mentally. Defend efficiently. Don't overcommit. Small advantages add up!",
    category: 'strategy'
  },
  {
    id: 'starting-hand',
    keywords: ['starting hand', 'opening', 'first play', 'start of game'],
    synonyms: ['opening hand', 'first move', 'game start', 'beginning'],
    answer: "Your starting hand strategy:\n\n**Safe Plays**:\n• Cycle cards in back (Skeletons, Ice Spirit)\n• Defensive buildings in back (Tesla, Cannon)\n• Ranged support in back (Musketeer, Archers)\n\n**Risky Plays**:\n• Win condition at bridge (can be punished)\n• Expensive cards (leaves you vulnerable)\n\n**Tips**:\n• Don't reveal your win condition immediately\n• Scout opponent's deck first\n• Play defensively until you know their counters\n• In double elixir, aggressive starts are safer\n\nPatience in the opening can win games!",
    category: 'strategy'
  },
  {
    id: 'defending-hog',
    keywords: ['defend hog', 'counter hog', 'stop hog rider', 'hog defense'],
    synonyms: ['hog rider defense', 'defending hog rider', 'counter hog rider'],
    answer: "Defending Hog Rider efficiently:\n\n**Best Counters**:\n• Cannon (3 elixir): Place 3-4 tiles from river, center\n• Tesla (4 elixir): Pulls Hog, survives for next push\n• Knight (3 elixir): Kite to center, tanks hits\n• Skeleton Army (3 elixir): Instant counter, but spell-vulnerable\n\n**Placement Tips**:\n• Center placement pulls Hog between both towers\n• 4-3 plant (4 tiles from river, 3 from side) is optimal\n• Kite with troops to maximize tower damage\n\n**Watch For**: Earthquake (destroys buildings), Fireball (kills swarms), prediction spells!",
    category: 'strategy'
  },
  {
    id: 'overtime-strategy',
    keywords: ['overtime', 'sudden death', 'overtime strategy', 'tiebreaker'],
    synonyms: ['overtime tips', 'sudden death strategy', 'overtime play'],
    answer: "Overtime strategy (3x elixir):\n\n**If Ahead**:\n• Play defensively\n• Spell cycle their tower if safe\n• Don't overcommit on offense\n• Force them to make risky plays\n\n**If Behind**:\n• Aggressive pushes - you need tower damage\n• Spell their tower for chip damage\n• Pressure both lanes if possible\n• Take calculated risks\n\n**If Tied**:\n• Balance offense and defense\n• Look for elixir advantage opportunities\n• One good push can win\n\n**Tips**: Elixir regenerates fast - don't waste it. Spells can finish games. Stay calm!",
    category: 'strategy'
  },
  {
    id: 'ladder-tips',
    keywords: ['ladder', 'trophy pushing', 'climb ladder', 'ladder tips'],
    synonyms: ['ladder strategy', 'trophy push', 'ranking up', 'ladder climbing'],
    answer: "Ladder tips for climbing trophies:\n\n**Deck Selection**:\n• Stick to ONE deck and max it out\n• Choose a deck that handles meta threats\n• Upgrade win condition and spells first\n\n**Gameplay**:\n• Don't tilt - take breaks after 2 losses\n• Play at season start (easier opponents)\n• Learn your bad matchups\n• Watch replays to improve\n\n**Progression**:\n• Request cards from clan daily\n• Focus resources on main deck\n• Play challenges for practice\n• Card levels matter more than skill on ladder\n\n**Mental Game**: Patience is key. Losses happen. Focus on improvement!",
    category: 'strategy'
  },
  {
    id: 'matchup-knowledge',
    keywords: ['matchup', 'matchups', 'counter deck', 'bad matchup', 'good matchup'],
    synonyms: ['deck matchup', 'matchup knowledge', 'counter matchup'],
    answer: "Understanding matchups:\n\n**Favorable Matchups**:\n• Your deck naturally counters theirs\n• Play aggressively and capitalize\n• Don't give them chances to outplay\n\n**Unfavorable Matchups**:\n• Their deck counters yours\n• Play defensively and spell cycle\n• Look for mistakes to punish\n• Sometimes a draw is a win\n\n**Even Matchups**:\n• Skill determines winner\n• Elixir management is crucial\n• Outplay with timing and placement\n\n**Tips**: Learn common matchups for your deck. Watch pros play your deck. Some matchups are nearly impossible - don't tilt!",
    category: 'strategy'
  }
];

// Combine all topics
export const allTopics: TopicDefinition[] = [
  ...mechanicsTopics,
  ...archetypeTopics,
  ...interactionTopics,
  ...deckBuildingTopics,
  ...strategyTopics
];
