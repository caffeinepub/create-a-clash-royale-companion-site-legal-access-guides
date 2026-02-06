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
    synonyms: ['elixir management', 'elixir advantage', 'elixir count'],
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
    synonyms: ['cycle deck', 'fast deck', 'cheap deck'],
    answer: "A cycle deck is a deck with low average elixir cost (usually 2.6-3.0) that allows you to quickly cycle back to your key cards. The most famous example is the 2.6 Hog Cycle deck. These decks rely on speed and repetition - you can play your win condition more frequently than your opponent can defend it. Cycle decks require good timing and elixir management, but they're very rewarding when mastered!",
    category: 'archetypes'
  },
  {
    id: 'beatdown',
    keywords: ['beatdown', 'golem', 'giant', 'lava', 'tank', 'heavy', 'big push'],
    synonyms: ['beatdown deck', 'tank deck', 'heavy deck'],
    answer: "Beatdown is an archetype focused on building large pushes with tanky units like Golem, Giant, or Lava Hound. The strategy is to invest elixir in the back, build a massive push, and overwhelm your opponent. Beatdown decks are typically slower and more expensive (3.5-4.5 average elixir). They excel in double elixir time when you can support your tank with multiple troops. Key tip: defend efficiently in single elixir, then unleash devastating pushes later!",
    category: 'archetypes'
  },
  {
    id: 'control',
    keywords: ['control', 'defensive', 'counter push', 'reactive'],
    synonyms: ['control deck', 'defensive deck'],
    answer: "Control decks focus on defending efficiently and counter-pushing. They use defensive buildings, spells, and versatile troops to shut down enemy pushes while chipping away at towers. Examples include X-Bow and Mortar decks. Control players need excellent defensive skills and patience - you win by outlasting your opponent and capitalizing on their mistakes. These decks often include multiple spells and defensive structures.",
    category: 'archetypes'
  },
  {
    id: 'siege',
    keywords: ['siege', 'x-bow', 'xbow', 'mortar', 'long range'],
    synonyms: ['siege deck', 'xbow deck', 'mortar deck'],
    answer: "Siege decks use long-range win conditions like X-Bow or Mortar that can attack towers from your side of the arena. The strategy is to place your siege building, then defend it aggressively while it chips away at the enemy tower. Siege requires strong defensive play and good building placement. It's a high-skill archetype that rewards patience and precise timing. Popular siege decks include 2.9 X-Bow and 2.6 Mortar cycles.",
    category: 'archetypes'
  },
  {
    id: 'bridge-spam',
    keywords: ['bridge spam', 'bridgespam', 'aggressive', 'bandit', 'battle ram', 'pressure'],
    synonyms: ['spam deck', 'aggressive deck', 'rush deck'],
    answer: "Bridge spam is an aggressive archetype that applies constant pressure at the bridge with fast, hard-hitting units like Bandit, Battle Ram, and Royal Ghost. The goal is to catch your opponent off-guard and overwhelm them before they can build a proper defense. Bridge spam decks are typically medium cost (3.3-3.8 elixir) and require quick decision-making. They're great for punishing opponents who overcommit on offense!",
    category: 'archetypes'
  },
  {
    id: 'bait',
    keywords: ['bait', 'log bait', 'spell bait', 'goblin barrel', 'princess'],
    synonyms: ['bait deck', 'spell bait deck', 'log bait deck'],
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
    synonyms: ['gy deck', 'graveyard poison'],
    answer: "Graveyard decks use the Graveyard spell as a win condition, spawning skeletons directly at the opponent's tower. These decks typically pair Graveyard with:\n\n• A tank (Knight, Ice Golem, Giant) to absorb tower damage\n• Poison to counter small troops and buildings\n• Defensive cards to survive until you can build a push\n\nGraveyard is unique because it bypasses ground defenses and can be placed anywhere. It's a control-style archetype that requires patience and good spell timing. Master the Graveyard placement to avoid King Tower activation!",
    category: 'archetypes'
  }
];

// Interaction and mechanics topics
export const interactionTopics: TopicDefinition[] = [
  {
    id: 'kiting',
    keywords: ['kite', 'kiting', 'pull', 'pulling', 'lure', 'distract'],
    synonyms: ['pull troops', 'lure units', 'distract'],
    answer: "Kiting (or pulling) is a defensive technique where you place a troop to lure enemy units away from your tower, often into the opposite lane or into range of both Princess Towers. Common kiting troops:\n\n• Ice Golem: Cheap tank with death damage\n• Skeletons: 1 elixir distraction\n• Ice Spirit: Freezes while kiting\n\nPlace your kiting troop in the center or opposite lane to pull units across the arena. This maximizes tower damage on the enemy while minimizing damage to your towers. Kiting is essential against Hog Rider, Giant, and other ground units!",
    category: 'interactions'
  },
  {
    id: 'spell-timing',
    keywords: ['spell timing', 'when to spell', 'spell usage', 'prediction spell'],
    synonyms: ['spell', 'fireball timing', 'log timing'],
    answer: "Spell timing can win or lose games! Key principles:\n\n• Prediction spells: Cast before opponent plays their card (e.g., Log on Goblin Barrel spawn)\n• Value spells: Wait for multiple targets (Fireball on Musketeer + tower)\n• Defensive spells: Use immediately to prevent damage (Zap on Inferno Dragon)\n• Spell cycling: In overtime, spell the tower directly if you're ahead\n\nDon't waste spells early - track what your opponent plays and save spells for high-value moments. A well-timed Fireball can swing the game!",
    category: 'interactions'
  },
  {
    id: 'punish',
    keywords: ['punish', 'punishing', 'counter push', 'opposite lane', 'pressure'],
    synonyms: ['punish window', 'punish play', 'opposite lane pressure'],
    answer: "Punishing is attacking when your opponent is low on elixir or has just committed heavily to one lane. Punish opportunities:\n\n• Opponent plays expensive card in back (Golem, Lava Hound)\n• Opponent overcommits on defense\n• Opponent uses all elixir on one lane\n\nBest punish cards: Hog Rider, Goblin Barrel, Miner, Battle Ram - fast units that reach the tower quickly. Punishing forces your opponent into difficult decisions and can lead to tower damage or elixir advantages. Always be ready to punish opposite lane!",
    category: 'interactions'
  },
  {
    id: 'king-activation',
    keywords: ['king activation', 'king tower', 'activate king', 'tornado', 'fisherman'],
    synonyms: ['activate king tower', 'king tower activation'],
    answer: "Activating your King Tower early can be a huge advantage! Once activated, the King Tower provides:\n\n• Extra DPS on defense\n• Better coverage of both lanes\n• Harder for opponent to take a tower\n\nCommon activation methods:\n\n• Tornado: Pull Hog Rider, Balloon, or other troops to King Tower\n• Fisherman: Hook troops to King Tower\n• Intentional damage: Let Goblin Barrel or Rocket hit King Tower in specific matchups\n\nKing activation is especially valuable against beatdown and bridge spam decks!",
    category: 'interactions'
  }
];

// Deck building topics
export const deckBuildingTopics: TopicDefinition[] = [
  {
    id: 'win-condition',
    keywords: ['win condition', 'wincondition', 'wincon', 'tower damage', 'main damage'],
    synonyms: ['win con', 'primary damage', 'main threat'],
    answer: "A win condition is a card designed to deal significant damage to enemy towers. Common win conditions include Hog Rider, Giant, Balloon, Miner, and X-Bow. Every good deck needs at least one reliable win condition. Your win condition is typically your main offensive threat, and the rest of your deck should support it. For example, if you're using Hog Rider, you might include spells like Fireball or Earthquake to clear defensive buildings.",
    category: 'deck-building'
  },
  {
    id: 'spells',
    keywords: ['spell', 'zap', 'fireball', 'rocket', 'log', 'arrows', 'poison', 'lightning', 'earthquake', 'freeze'],
    synonyms: ['spell selection', 'which spells', 'best spells'],
    answer: "Choosing the right spells is crucial! Most decks run 2-3 spells. Here's a quick guide:\n\n• Small spell (Zap, Log, Arrows): Essential for clearing swarms and resetting units\n• Medium spell (Fireball, Poison): Great for damaging troops and towers\n• Big spell (Rocket, Lightning): High damage but expensive\n\nPick spells that synergize with your deck. For example, Hog decks love Earthquake for buildings, while Graveyard pairs well with Poison. Always have at least one spell that can hit air troops!",
    category: 'deck-building'
  },
  {
    id: 'air-defense',
    keywords: ['air defense', 'anti air', 'air counter', 'balloon', 'lava hound', 'flying'],
    synonyms: ['air defense', 'counter air', 'defend air'],
    answer: "Every deck needs reliable air defense! Common air counters:\n\n• Buildings: Tesla, Inferno Tower (target air)\n• Ranged troops: Musketeer, Archers, Mega Minion\n• Splash: Wizard, Baby Dragon, Executioner\n• Spells: Fireball, Arrows, Zap\n\nAim for 2-3 cards that can hit air. Balloon and Lava Hound decks will punish weak air defense. Consider both single-target (for tanks) and splash (for swarms like Minion Horde). Don't rely solely on spells - you need troops that can consistently defend air!",
    category: 'deck-building'
  },
  {
    id: 'spell-package',
    keywords: ['spell package', 'spell combo', 'which spells together'],
    synonyms: ['spell combination', 'spell synergy'],
    answer: "A spell package is the combination of spells in your deck. Common packages:\n\n• Log + Fireball: Versatile, covers most situations\n• Zap + Poison: Good for Graveyard and control decks\n• Log + Rocket: Spell cycle and high damage\n• Arrows + Lightning: Beats Minion Horde and targets buildings\n\nYour spell package should:\n• Cover both small and medium/large threats\n• Synergize with your win condition\n• Include at least one spell that hits air\n\nAvoid running 3+ spells unless you're playing spell cycle - you need troops too!",
    category: 'deck-building'
  },
  {
    id: 'buildings',
    keywords: ['building', 'defensive building', 'tesla', 'cannon', 'inferno', 'bomb tower'],
    synonyms: ['defensive structure', 'building choice'],
    answer: "Defensive buildings are crucial for many decks:\n\n• Cannon: Cheap, ground-only, great vs Hog/Giant\n• Tesla: Versatile, hits air, retracts when not attacking\n• Inferno Tower: Melts tanks, vulnerable to swarms/resets\n• Bomb Tower: Splash damage, good vs swarms\n• Goblin Cage: Spawns Goblin Brawler on death\n\nBuildings are especially important in cycle and control decks. They provide consistent defense and help you maintain elixir advantage. Place buildings in the center (4-3 or 3-4 tiles from river) to pull troops and maximize tower damage on them!",
    category: 'deck-building'
  },
  {
    id: 'deck-balance',
    keywords: ['deck balance', 'balanced deck', 'average elixir', 'deck cost'],
    synonyms: ['deck composition', 'deck structure'],
    answer: "A balanced deck typically includes:\n\n• 1 win condition\n• 2-3 spells\n• 1-2 defensive buildings or high-HP troops\n• 2-3 support/versatile troops\n• Air defense\n• Ground swarm counter\n\nAverage elixir cost:\n• Fast cycle: 2.6-3.0\n• Balanced: 3.0-3.5\n• Beatdown: 3.5-4.5\n\nMake sure you can defend common threats (Hog, Balloon, Golem) and have a clear win condition. Test your deck and adjust based on what you struggle against!",
    category: 'deck-building'
  }
];

// Strategy topics
export const strategyTopics: TopicDefinition[] = [
  {
    id: 'elixir-advantage',
    keywords: ['elixir advantage', 'elixir lead', 'positive trade', 'negative trade'],
    synonyms: ['elixir trading', 'positive elixir'],
    answer: "Elixir advantage is when you have more elixir than your opponent, either in hand or through efficient trades. Gaining advantage:\n\n• Positive trades: Defend with less elixir than opponent spent (Knight vs Musketeer = +1)\n• Spell value: Fireball on Musketeer + tower = great value\n• Punishing: Attack when opponent is low on elixir\n\nTrack elixir mentally: if opponent plays 10 elixir and you defend with 6, you have a +4 advantage. Use this to pressure or build a bigger push!",
    category: 'strategy'
  },
  {
    id: 'starting-hand',
    keywords: ['starting hand', 'first play', 'opening move', 'start of game'],
    synonyms: ['opening hand', 'first card'],
    answer: "Your starting hand strategy matters!\n\n• Cycle decks: Play cheap cards in back to cycle to your win condition\n• Beatdown: Play tank in back to build elixir\n• Control: Wait and react to opponent's first move\n• Bridge spam: Consider aggressive opening if you have the right cards\n\nGeneral tips:\n• Don't play win condition first unless it's very cheap (Miner)\n• Avoid giving opponent spell value\n• Play troops in back to build elixir safely\n• Scout opponent's deck before committing heavily",
    category: 'strategy'
  },
  {
    id: 'defend-hog',
    keywords: ['defend hog', 'counter hog', 'stop hog rider', 'hog defense'],
    synonyms: ['hog rider defense', 'counter hog rider'],
    answer: "Hog Rider is one of the most common win conditions. Effective counters:\n\n• Buildings: Cannon, Tesla (place 4-3 or 3-4 tiles from river)\n• Mini PEKKA: High DPS, kills Hog quickly\n• Skeletons + Ice Spirit: Cheap cycle defense\n• Tornado: Pull Hog to King Tower for activation\n• Pekka, Mega Knight: Overkill but effective\n\nKey tips:\n• Place building in center to pull Hog and maximize tower damage\n• Use cheap troops to distract after Hog locks on\n• Watch for prediction spells (Log, Earthquake)\n• Counter-push with surviving troops!",
    category: 'strategy'
  }
];

// All topics combined
export const allTopics: TopicDefinition[] = [
  ...mechanicsTopics,
  ...archetypeTopics,
  ...interactionTopics,
  ...deckBuildingTopics,
  ...strategyTopics
];
