// Dedicated card guidance module for Fred's knowledge base
// Covers commonly referenced cards and win conditions with deterministic answers

import { TopicDefinition } from './fredKnowledgeTopics';

export const cardTopics: TopicDefinition[] = [
  {
    id: 'hog-rider',
    keywords: ['hog rider', 'hog', 'hogrider'],
    synonyms: ['hog deck', 'hog cycle', 'defend hog', 'counter hog'],
    answer: "Hog Rider is a 4-elixir fast win condition that targets buildings. Key points:\n\n**Offense**: Pair with spells (Fireball, Earthquake) to clear defensive buildings. Use prediction spells on common counters.\n\n**Defense**: Counter with buildings (Cannon, Tesla), mini tanks (Knight, Valkyrie), or swarms (Skeleton Army, Goblin Gang). Kite to center for both towers to target.\n\n**Synergies**: Works great in cycle decks (2.6 Hog), with Earthquake for buildings, or with Freeze for surprise damage.\n\nHog Rider is versatile and beginner-friendly but requires good spell timing at higher levels!",
    category: 'cards'
  },
  {
    id: 'giant',
    keywords: ['giant', 'giant deck'],
    synonyms: ['giant beatdown', 'giant push'],
    answer: "Giant is a 5-elixir tank win condition that targets buildings. Strategy:\n\n**Offense**: Play Giant in the back during single elixir, support with ranged troops (Musketeer, Mega Minion). Giant absorbs damage while support deals tower damage.\n\n**Defense**: Use high-DPS troops (Mini PEKKA, Inferno Dragon), swarms, or buildings. Don't let support troops build up behind Giant.\n\n**Synergies**: Pairs well with Graveyard, Sparky, or ranged support. Common in beatdown decks with Miner for chip damage.\n\nGiant is cost-effective and great for learning beatdown fundamentals!",
    category: 'cards'
  },
  {
    id: 'balloon',
    keywords: ['balloon', 'loon', 'balloon deck'],
    synonyms: ['loon deck', 'balloon cycle', 'defend balloon'],
    answer: "Balloon is a 5-elixir air win condition that deals massive damage to towers. Key info:\n\n**Offense**: Pair with tank (Lava Hound, Giant) or use with Freeze/Rage. Balloon is slow but devastating if it connects.\n\n**Defense**: Must have air-targeting troops (Musketeer, Mega Minion, Bats) or buildings (Tesla, Inferno Tower). Don't rely only on spells - Balloon survives Fireball!\n\n**Synergies**: Classic with Lava Hound (LavaLoon), or in cycle decks with Miner. Freeze makes Balloon nearly unstoppable.\n\nBalloon punishes weak air defense - always have 2-3 air counters in your deck!",
    category: 'cards'
  },
  {
    id: 'miner',
    keywords: ['miner', 'miner chip', 'miner control'],
    synonyms: ['miner deck', 'miner poison', 'miner wallbreakers'],
    answer: "Miner is a 3-elixir legendary that can be placed anywhere on the arena. Versatile uses:\n\n**Offense**: Chip towers directly, tank for support troops (Bats, Minions), or snipe Elixir Collectors and Princess.\n\n**Defense**: Can distract and tank damage, though not ideal for defense.\n\n**Synergies**: Pairs with Poison (Miner Poison control), Wall Breakers (Miner WB cycle), or as secondary win condition in beatdown.\n\n**Tips**: Vary Miner placement to avoid predictable counters. Use to tank for Balloon or Graveyard. Great for chip damage in overtime!\n\nMiner is one of the most versatile cards in the game!",
    category: 'cards'
  },
  {
    id: 'goblin-barrel',
    keywords: ['goblin barrel', 'barrel', 'gob barrel'],
    synonyms: ['barrel deck', 'log bait', 'defend barrel'],
    answer: "Goblin Barrel is a 3-elixir spell that deploys 3 Goblins at the target. Core of bait decks:\n\n**Offense**: Throw at tower, vary placement (center, corners) to avoid prediction spells. Bait out Log/Zap with Princess or Goblin Gang first.\n\n**Defense**: Counter with Log, Zap, Arrows, Barbarian Barrel, or any small spell. Can also use swarms but less efficient.\n\n**Synergies**: Classic in Log Bait with Princess and Goblin Gang. Works with Rocket for spell cycle.\n\n**Tips**: Master different placements. Throw when opponent is low on elixir. In overtime, Barrel + spell can finish games!\n\nGoblin Barrel rewards prediction and mind games!",
    category: 'cards'
  },
  {
    id: 'xbow',
    keywords: ['xbow', 'x-bow', 'x bow'],
    synonyms: ['xbow deck', 'xbow cycle', '2.9 xbow', 'defend xbow'],
    answer: "X-Bow is a 6-elixir siege building with 11.5 tile range. High-skill win condition:\n\n**Offense**: Place X-Bow at the bridge, defend it aggressively with Tesla, Archers, and spells. X-Bow locks onto tower and chips from your side.\n\n**Defense**: Use buildings (Tesla), swarms, or tanks to distract. Earthquake and Rocket counter X-Bow hard.\n\n**Synergies**: Classic 2.9 X-Bow cycle with Tesla, Archers, Skeletons, Ice Spirit, Log, Fireball. Requires excellent defensive skills.\n\n**Tips**: Don't force X-Bow against hard counters. Play defensively and spell cycle if needed. Master Tesla placement!\n\nX-Bow is one of the hardest archetypes but incredibly rewarding!",
    category: 'cards'
  },
  {
    id: 'graveyard-card',
    keywords: ['graveyard spell', 'gy spell'],
    synonyms: ['graveyard placement', 'gy placement'],
    answer: "Graveyard is a 5-elixir spell that spawns skeletons at the target for 10 seconds:\n\n**Offense**: Place on opponent's tower with a tank (Knight, Ice Golem, Giant). Pair with Poison to counter small troops and buildings.\n\n**Defense**: Counter with splash troops (Valkyrie, Bomber), Poison, or Arrows. Buildings help but skeletons spawn around them.\n\n**Synergies**: Graveyard + Poison is classic. Works with Freeze for surprise damage. Pairs with any tank.\n\n**Tips**: Vary placement to avoid King Tower activation. Best placement is slightly off-center toward Princess Tower. Use when opponent is low on elixir!\n\nGraveyard bypasses ground defenses and rewards good timing!",
    category: 'cards'
  },
  {
    id: 'pekka',
    keywords: ['pekka', 'pekka deck'],
    synonyms: ['pekka bridge spam', 'pekka beatdown'],
    answer: "PEKKA is a 7-elixir tank with massive single-target damage:\n\n**Offense**: Use in bridge spam (PEKKA + Battle Ram + Bandit) or as a defensive counter-push card. PEKKA is slow but destroys tanks.\n\n**Defense**: Excellent against tanks (Giant, Golem, Mega Knight). Weak to swarms - support with splash troops (Wizard, Valkyrie).\n\n**Synergies**: Bridge spam with Battle Ram, Bandit, Royal Ghost. Or beatdown with support troops behind.\n\n**Tips**: Don't play PEKKA in the back unless you have elixir advantage. Best used on defense, then counter-push. Pair with Zap/Electro Wizard to reset Inferno units!\n\nPEKKA is a defensive powerhouse that transitions to offense!",
    category: 'cards'
  },
  {
    id: 'golem',
    keywords: ['golem', 'golem deck'],
    synonyms: ['golem beatdown', 'golem push', 'golem night witch'],
    answer: "Golem is an 8-elixir tank with death damage and Golemites:\n\n**Offense**: Play in the back during single elixir, build a massive push with Night Witch, Baby Dragon, or Mega Minion. Overwhelm in double elixir.\n\n**Defense**: Use Inferno Tower/Dragon, swarms, or high-DPS troops. Don't let support build up. Golem is slow - punish opposite lane!\n\n**Synergies**: Classic with Night Witch (spawns Bats), Baby Dragon (splash), Lightning (clears Inferno). Tornado helps group troops.\n\n**Tips**: Golem is the ultimate beatdown card. Defend efficiently early, then unleash devastating pushes. Save Lightning for Inferno Tower!\n\nGolem requires patience but delivers unstoppable pushes!",
    category: 'cards'
  },
  {
    id: 'lava-hound',
    keywords: ['lava hound', 'lava', 'lavahound'],
    synonyms: ['lava deck', 'lavaloon', 'lava hound balloon'],
    answer: "Lava Hound is a 7-elixir air tank that splits into Lava Pups:\n\n**Offense**: Play in the back, support with Balloon (LavaLoon), Inferno Dragon, or Minions. Lava Hound tanks while support deals damage.\n\n**Defense**: Use air-targeting troops (Musketeer, Mega Minion, Bats) and buildings (Tesla, Inferno Tower). Don't ignore Lava Pups - they deal significant damage!\n\n**Synergies**: Classic LavaLoon (Lava Hound + Balloon). Pairs with Miner for chip, Tombstone for defense.\n\n**Tips**: Lava Hound is slow - build pushes patiently. Save Arrows/Zap for Minion Horde. Punish opposite lane when opponent plays Lava Hound!\n\nLava Hound is the premier air beatdown tank!",
    category: 'cards'
  },
  {
    id: 'mega-knight',
    keywords: ['mega knight', 'mk', 'megaknight'],
    synonyms: ['mega knight deck', 'mk deck', 'defend mega knight'],
    answer: "Mega Knight is a 7-elixir legendary with spawn and jump damage:\n\n**Offense**: Drop at bridge for surprise damage, or use as counter-push after defense. Jump damage clears swarms.\n\n**Defense**: Excellent against swarms and medium troops. Weak to high-DPS single-target (Mini PEKKA, Inferno Dragon). Kite to center!\n\n**Synergies**: Pairs with Inferno Dragon, Bats, or Miner. Common in bridge spam and beatdown.\n\n**Tips**: Mega Knight is overused at mid-ladder but has clear counters. Don't overcommit - it's expensive. Best used reactively on defense, then counter-push.\n\n**Counter**: Knight, Valkyrie, Mini PEKKA, or any high-DPS troop. Surround with swarms if you bait the jump!\n\nMega Knight is flashy but has exploitable weaknesses!",
    category: 'cards'
  },
  {
    id: 'royal-giant',
    keywords: ['royal giant', 'rg', 'royalgiant'],
    synonyms: ['royal giant deck', 'rg deck'],
    answer: "Royal Giant is a 6-elixir ranged win condition that outranges towers:\n\n**Offense**: Place at bridge, support with Fisherman (pulls troops away) or Mother Witch. RG chips towers from safe distance.\n\n**Defense**: Use buildings (Tesla, Inferno Tower), high-DPS troops, or swarms. RG is tanky but slow.\n\n**Synergies**: Pairs with Fisherman, Mother Witch, Hunter, or Earthquake. Common with Lightning for buildings.\n\n**Tips**: RG is straightforward but effective. Place at bridge when opponent is low on elixir. Use spells to clear defensive buildings. RG + Fisherman combo is powerful!\n\nRoyal Giant is a reliable, beginner-friendly win condition!",
    category: 'cards'
  },
  {
    id: 'electro-giant',
    keywords: ['electro giant', 'egiant', 'e giant'],
    synonyms: ['electro giant deck', 'egiant deck'],
    answer: "Electro Giant is an 8-elixir tank that reflects damage and stuns:\n\n**Offense**: Play in the back, support with Tornado, Mother Witch, or Lightning. E-Giant punishes swarm defenses with reflected damage.\n\n**Defense**: Use buildings (Tesla, Inferno Tower) from distance, or high-DPS ranged troops (Musketeer, Hunter). Don't swarm - you'll take reflected damage!\n\n**Synergies**: Tornado groups troops for reflected damage. Lightning clears buildings. Mother Witch converts swarms to Hogs.\n\n**Tips**: E-Giant is polarizing - strong against swarms, weak to buildings. Don't play into Inferno Tower. Best in beatdown with heavy spell support!\n\nElectro Giant requires specific counters and spell support!",
    category: 'cards'
  },
  {
    id: 'sparky',
    keywords: ['sparky', 'sparky deck'],
    synonyms: ['sparky goblin giant', 'defend sparky'],
    answer: "Sparky is a 6-elixir legendary with massive area damage but slow charge:\n\n**Offense**: Pair with tank (Giant, Goblin Giant) and Zap/Electro Wizard to reset Inferno units. Sparky one-shots most troops.\n\n**Defense**: Counter with Zap/Electro Wizard (resets charge), swarms (Skeleton Army, Goblin Gang), or Rocket. Don't group troops!\n\n**Synergies**: Classic with Goblin Giant (shields Sparky). Pairs with Tornado (groups enemies), Zap (resets counters).\n\n**Tips**: Sparky is high-risk, high-reward. Protect from resets and swarms. Devastating if it charges! Best in beatdown with reset protection.\n\n**Counter**: Zap, Electro Wizard, Electro Spirit, or swarms. Rocket for positive trade!\n\nSparky requires careful support but delivers explosive damage!",
    category: 'cards'
  },
  {
    id: 'mortar',
    keywords: ['mortar', 'mortar deck'],
    synonyms: ['mortar cycle', '2.9 mortar', 'defend mortar'],
    answer: "Mortar is a 4-elixir siege building with 11.5 tile range:\n\n**Offense**: Place Mortar at bridge, defend with Knight, Archers, and spells. Mortar chips towers from your side.\n\n**Defense**: Use buildings, tanks, or swarms to distract. Earthquake and Rocket counter Mortar.\n\n**Synergies**: Classic 2.9 Mortar cycle with Knight, Archers, Skeletons, Ice Spirit, Log, Fireball. Similar to X-Bow but cheaper.\n\n**Tips**: Mortar is more flexible than X-Bow - can be used defensively. Don't force Mortar against hard counters. Spell cycle if needed. Master defensive Mortar placement!\n\nMortar is a versatile siege option with lower commitment than X-Bow!",
    category: 'cards'
  },
  {
    id: 'ram-rider',
    keywords: ['ram rider', 'ramrider'],
    synonyms: ['ram rider deck', 'defend ram rider'],
    answer: "Ram Rider is a 5-elixir win condition that snares towers and targets buildings:\n\n**Offense**: Ram Rider charges fast and snares towers (slows attack speed). Pair with spells to clear buildings.\n\n**Defense**: Counter with buildings (Cannon, Tesla), swarms, or mini tanks. Snare doesn't affect buildings.\n\n**Synergies**: Works in cycle decks, bridge spam, or control. Pairs with Fireball, Earthquake, or Freeze.\n\n**Tips**: Ram Rider is versatile - decent on offense and defense. Snare effect is unique and powerful. Use to pressure and chip towers!\n\nRam Rider is a balanced, flexible win condition!",
    category: 'cards'
  },
  {
    id: 'three-musketeers',
    keywords: ['three musketeers', '3m', '3 musketeers'],
    synonyms: ['3m deck', 'three musk', 'split musketeers'],
    answer: "Three Musketeers is a 9-elixir card that deploys 3 Musketeers:\n\n**Offense**: Split 2-1 or 1-2 to pressure both lanes. Forces opponent to defend both sides or take heavy damage.\n\n**Defense**: Excellent defensive value - 3 Musketeers have high DPS. Counter-push after defense.\n\n**Synergies**: Pairs with Battle Ram, Miner, or Elixir Pump. Heal Spirit keeps them alive.\n\n**Tips**: 3M is high-risk - vulnerable to Fireball, Lightning, Poison. Use Elixir Pump to build elixir advantage. Split lane pressure is key!\n\n**Counter**: Fireball + Zap, Lightning, Poison, or Rocket. Positive elixir trade!\n\nThree Musketeers rewards split lane mastery but is spell-vulnerable!",
    category: 'cards'
  },
  {
    id: 'wall-breakers',
    keywords: ['wall breakers', 'wallbreakers', 'wb'],
    synonyms: ['wall breaker deck', 'miner wb', 'defend wall breakers'],
    answer: "Wall Breakers are 2-elixir troops that rush buildings and deal massive death damage:\n\n**Offense**: Pair with Miner (tanks for WB), spells, or use as chip damage. WB can take a tower if they connect!\n\n**Defense**: Counter with any troop, Log, or Zap. Don't let them reach your tower!\n\n**Synergies**: Classic Miner WB cycle. Pairs with Earthquake, Fireball, or Freeze.\n\n**Tips**: WB are high-risk, high-reward. Use when opponent is low on elixir or has no counters in hand. Devastating in overtime!\n\n**Counter**: Any troop, Log, Zap, or Snowball. Easy to counter but punishing if ignored!\n\nWall Breakers are explosive chip damage in cycle decks!",
    category: 'cards'
  },
  {
    id: 'elixir-golem',
    keywords: ['elixir golem', 'egolem', 'e golem'],
    synonyms: ['elixir golem deck', 'egolem deck', 'battle healer egolem'],
    answer: "Elixir Golem is a 3-elixir tank that gives opponent elixir when destroyed:\n\n**Offense**: Split at bridge for dual lane pressure, support with Battle Healer, Night Witch, or Rage. Overwhelm with speed and numbers.\n\n**Defense**: Let Elixir Golem die to gain elixir back, then counter-push. Don't overcommit on defense.\n\n**Synergies**: Classic with Battle Healer (heals push), Night Witch (spawns Bats), Rage (speeds push).\n\n**Tips**: Elixir Golem is unique - cheap but gives opponent elixir. Best in aggressive decks that pressure both lanes. Don't use in slow decks!\n\n**Counter**: Defend efficiently, gain elixir, then punish hard. Elixir Golem feeds you resources!\n\nElixir Golem is high-tempo aggression with a drawback!",
    category: 'cards'
  }
];
