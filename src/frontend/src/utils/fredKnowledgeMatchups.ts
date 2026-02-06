// Matchup and counterplay guidance module for Fred's knowledge base
// Covers common win conditions and archetype-vs-archetype advice

import { TopicDefinition } from './fredKnowledgeTopics';

export const matchupTopics: TopicDefinition[] = [
  {
    id: 'beat-hog-rider',
    keywords: ['beat hog', 'counter hog', 'defend hog', 'stop hog rider'],
    synonyms: ['hog defense', 'hog counter', 'against hog'],
    answer: "Defending Hog Rider effectively:\n\n**Best Counters**:\n• Buildings: Cannon (3 elixir), Tesla (4 elixir) - place 3-4 tiles from river\n• Mini tanks: Knight, Valkyrie - place in center to kite\n• Swarms: Skeleton Army, Goblin Gang - but vulnerable to spells\n\n**Kiting**: Place troops in center to pull Hog across both towers for maximum damage.\n\n**Prediction**: If opponent always spells your counter, pre-place troops before Hog arrives.\n\n**Tips**: Don't panic-spell. Save Fireball for their support troops. Cannon is the most efficient counter. Learn 4-3 plant (4 tiles from river, 3 from side) for perfect placement!",
    category: 'matchups'
  },
  {
    id: 'beat-balloon',
    keywords: ['beat balloon', 'counter balloon', 'defend balloon', 'stop loon'],
    synonyms: ['balloon defense', 'loon counter', 'against balloon'],
    answer: "Defending Balloon (must-have air defense!):\n\n**Best Counters**:\n• Buildings: Tesla, Inferno Tower - pull Balloon away from tower\n• Ranged troops: Musketeer, Mega Minion, Bats, Minions\n• Swarms: Minion Horde (but vulnerable to spells)\n\n**Key Points**:\n• Balloon survives Fireball - need troops or buildings!\n• Watch for Freeze or Rage - save extra elixir\n• Don't group air troops - vulnerable to spells\n• Tesla in center pulls Balloon and survives death damage\n\n**Tips**: Always have 2-3 air counters in your deck. Balloon punishes weak air defense harder than any card. Bats are great cheap counter but die to Zap!",
    category: 'matchups'
  },
  {
    id: 'beat-golem',
    keywords: ['beat golem', 'counter golem', 'defend golem', 'stop golem'],
    synonyms: ['golem defense', 'golem counter', 'against golem', 'vs golem'],
    answer: "Defending Golem beatdown:\n\n**Strategy**:\n• Punish opposite lane when Golem is played in back\n• Use Inferno Tower/Dragon for Golem itself\n• Save spells for support troops (Night Witch, Baby Dragon)\n• Don't let support build up behind Golem\n\n**Best Counters**:\n• Buildings: Inferno Tower (watch for Lightning!)\n• High DPS: Mini PEKKA, Prince, Inferno Dragon\n• Swarms: Skeleton Army, Goblin Gang (for support)\n\n**Tips**: Golem is 8 elixir - always punish opposite lane! Defend efficiently and counter-push. Kill support troops first, then Golem. Watch for Lightning on your Inferno Tower. Cycle decks can out-cycle Golem pushes!",
    category: 'matchups'
  },
  {
    id: 'beat-xbow',
    keywords: ['beat xbow', 'counter xbow', 'defend xbow', 'stop xbow', 'against xbow'],
    synonyms: ['xbow counter', 'vs xbow', 'xbow matchup'],
    answer: "Playing against X-Bow siege:\n\n**Strategy**:\n• Use tanks (Giant, Golem, Knight) to distract X-Bow\n• Buildings (Tesla, Cannon) pull X-Bow aggro\n• Earthquake and Rocket destroy X-Bow\n• Pressure opposite lane to prevent X-Bow placement\n\n**Best Counters**:\n• Tanks: Any tank walks to X-Bow and distracts\n• Buildings: Tesla, Cannon, Inferno Tower\n• Spells: Earthquake (4 elixir, great value), Rocket\n\n**Tips**: Don't let X-Bow lock onto your tower! Place troops immediately. X-Bow players defend well - be patient. Spell cycle if you can't break through. Beatdown decks counter X-Bow naturally. Cycle decks struggle - need Earthquake or Rocket!",
    category: 'matchups'
  },
  {
    id: 'beat-log-bait',
    keywords: ['beat log bait', 'counter log bait', 'defend log bait', 'against bait'],
    synonyms: ['log bait counter', 'vs log bait', 'bait matchup'],
    answer: "Playing against Log Bait:\n\n**Strategy**:\n• Track their spell-bait cards (Goblin Barrel, Princess, Goblin Gang)\n• Don't waste your spell - wait for value\n• Pressure them so they can't bait freely\n• Use troops to counter Princess (don't spell)\n\n**Best Counters**:\n• Spells: Log, Zap, Arrows, Barbarian Barrel\n• Troops: Knight (tanks Barrel), Valkyrie (kills swarms)\n• Buildings: Tesla (defends Barrel + other threats)\n\n**Tips**: If you have Log, save it for Goblin Barrel. Use troops for Princess and Goblin Gang. If you have 2 spells, you're favored. Don't let them bait your spell then punish with Barrel. Prediction Log on Barrel is game-changing!",
    category: 'matchups'
  },
  {
    id: 'beat-graveyard',
    keywords: ['beat graveyard', 'counter graveyard', 'defend graveyard', 'stop gy'],
    synonyms: ['graveyard counter', 'gy defense', 'vs graveyard'],
    answer: "Defending Graveyard:\n\n**Best Counters**:\n• Splash troops: Valkyrie, Bomber, Baby Dragon\n• Spells: Poison, Arrows (kills skeletons)\n• Swarms: Archers, Minions (stay alive longer)\n\n**Key Points**:\n• Watch for Poison - it counters most Graveyard counters\n• Don't activate King Tower with Graveyard placement\n• Kill the tank first if possible\n• Place troops on top of Graveyard to kill skeletons fast\n\n**Tips**: Valkyrie is the best Graveyard counter. If they have Poison, use troops that survive it (Valkyrie, Knight). Don't use buildings - skeletons spawn around them. Learn safe Graveyard placements to avoid King activation!",
    category: 'matchups'
  },
  {
    id: 'beat-lavaloon',
    keywords: ['beat lavaloon', 'counter lavaloon', 'defend lavaloon', 'lava balloon'],
    synonyms: ['lavaloon counter', 'vs lavaloon', 'lavaloon matchup'],
    answer: "Defending LavaLoon (Lava Hound + Balloon):\n\n**Strategy**:\n• Punish opposite lane when Lava Hound is played\n• Save air defense for Balloon (priority target!)\n• Don't ignore Lava Pups - they deal damage\n• Watch for Arrows/Zap on your air troops\n\n**Best Counters**:\n• Buildings: Tesla, Inferno Tower (pull Balloon)\n• Air troops: Mega Minion, Musketeer, Bats, Minions\n• Spells: Fireball (for support), Arrows (for Lava Pups)\n\n**Tips**: Balloon is the real threat - focus it first. Use building to pull Balloon away from tower. Don't group air troops (vulnerable to Arrows). Always punish opposite lane - LavaLoon is expensive! Inferno Dragon is great if you have it!",
    category: 'matchups'
  },
  {
    id: 'beat-bridge-spam',
    keywords: ['beat bridge spam', 'counter bridge spam', 'defend bridge spam', 'stop spam'],
    synonyms: ['bridge spam counter', 'vs bridge spam', 'spam matchup'],
    answer: "Defending Bridge Spam:\n\n**Strategy**:\n• Don't overcommit on offense - save elixir for defense\n• Use buildings to distract (Cannon, Tesla)\n• Splash troops counter their swarms (Valkyrie, Wizard)\n• Don't let them build elixir advantage\n\n**Best Counters**:\n• Buildings: Cannon, Tesla (distract Battle Ram, Bandit)\n• Splash: Valkyrie, Wizard, Baby Dragon\n• Mini tanks: Knight, Valkyrie (tank damage)\n\n**Tips**: Bridge spam punishes overcommitment. Play conservatively and defend efficiently. Use buildings to distract their charges (Bandit, Battle Ram). Don't let them pressure both lanes. Splash troops are MVP against their swarms. Stay calm and defend - they'll run out of elixir!",
    category: 'matchups'
  },
  {
    id: 'cycle-vs-beatdown',
    keywords: ['cycle vs beatdown', 'cycle against beatdown', 'fast cycle vs tank'],
    synonyms: ['cycle beatdown matchup', 'how to beat beatdown with cycle'],
    answer: "Cycle vs Beatdown matchup:\n\n**Cycle Advantages**:\n• Can out-cycle their counters\n• Cheaper cards = more flexible defense\n• Can pressure opposite lane easily\n\n**Strategy**:\n• Defend their pushes efficiently with buildings and kiting\n• Pressure opposite lane when they play tank in back\n• Out-cycle their counters to your win condition\n• Don't overcommit - save elixir for defense\n\n**Tips**: Cycle decks are favored if played correctly. Use buildings (Tesla, Cannon) for tanks. Kite troops to center. Pressure opposite lane constantly. In double elixir, you can cycle faster than they can push. Patience is key - don't panic!",
    category: 'matchups'
  },
  {
    id: 'beatdown-vs-siege',
    keywords: ['beatdown vs siege', 'beatdown against xbow', 'tank vs siege'],
    synonyms: ['beatdown siege matchup', 'how to beat siege with beatdown'],
    answer: "Beatdown vs Siege matchup:\n\n**Beatdown Advantages**:\n• Tanks distract siege buildings easily\n• More HP to tank X-Bow/Mortar damage\n• Can overwhelm in double elixir\n\n**Strategy**:\n• Place tank in front of X-Bow/Mortar to distract\n• Don't let them lock onto your tower\n• Build big pushes in double elixir\n• Use spells on their defensive buildings\n\n**Tips**: Beatdown is heavily favored vs siege. Any tank (Giant, Golem, Lava Hound) distracts X-Bow/Mortar. Don't let siege building lock onto tower. Be patient and build elixir advantage. In double elixir, your pushes are unstoppable. Earthquake is great if you have it!",
    category: 'matchups'
  },
  {
    id: 'control-vs-bait',
    keywords: ['control vs bait', 'control against bait', 'defensive vs bait'],
    synonyms: ['control bait matchup'],
    answer: "Control vs Bait matchup:\n\n**Control Advantages**:\n• Multiple spells to handle bait cards\n• Defensive buildings counter Goblin Barrel\n• Can out-defend and spell cycle\n\n**Strategy**:\n• Use buildings (Tesla) for Goblin Barrel\n• Save spells for high-value targets\n• Don't get baited - use troops when possible\n• Pressure with your win condition when they're low\n\n**Tips**: Control decks are favored if you have 2+ spells. Use troops for Princess and Goblin Gang. Save Log for Goblin Barrel. Tesla defends Barrel well. Don't waste spells early. Out-defend them and spell cycle in overtime. Patience wins this matchup!",
    category: 'matchups'
  },
  {
    id: 'beat-mega-knight',
    keywords: ['beat mega knight', 'counter mega knight', 'defend mk', 'stop mega knight'],
    synonyms: ['mega knight counter', 'mk defense', 'vs mega knight'],
    answer: "Defending Mega Knight:\n\n**Best Counters**:\n• Mini tanks: Knight, Valkyrie (tank jump, high DPS)\n• High DPS: Mini PEKKA, Prince, Inferno Dragon\n• Kiting: Pull to center with Ice Golem, Skeletons\n• Swarms: Skeleton Army, Goblin Gang (after jump)\n\n**Key Points**:\n• Mega Knight's jump deals area damage - don't group troops\n• Kite to center for both towers to target\n• High DPS single-target troops counter MK easily\n• Don't panic - MK is expensive and has clear counters\n\n**Tips**: Knight is the best budget counter (positive elixir trade). Surround with swarms after jump. Don't let MK jump on your troops - place them after he lands. Kiting is key!",
    category: 'matchups'
  }
];
