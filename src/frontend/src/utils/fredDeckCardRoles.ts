// Static card role mappings for deterministic deck analysis
// Used by deck parser and deck review to evaluate deck composition

export interface CardRole {
  name: string;
  roles: string[];
  elixir: number;
}

// Comprehensive card database with roles and elixir costs
export const CARD_ROLES: Record<string, CardRole> = {
  // Win Conditions
  'hog rider': { name: 'Hog Rider', roles: ['win-condition', 'fast', 'building-targeting'], elixir: 4 },
  'giant': { name: 'Giant', roles: ['win-condition', 'tank', 'building-targeting'], elixir: 5 },
  'golem': { name: 'Golem', roles: ['win-condition', 'tank', 'building-targeting', 'death-damage'], elixir: 8 },
  'balloon': { name: 'Balloon', roles: ['win-condition', 'air', 'building-targeting'], elixir: 5 },
  'miner': { name: 'Miner', roles: ['win-condition', 'mini-tank', 'versatile'], elixir: 3 },
  'goblin barrel': { name: 'Goblin Barrel', roles: ['win-condition', 'spell', 'swarm'], elixir: 3 },
  'xbow': { name: 'X-Bow', roles: ['win-condition', 'building', 'siege'], elixir: 6 },
  'x-bow': { name: 'X-Bow', roles: ['win-condition', 'building', 'siege'], elixir: 6 },
  'mortar': { name: 'Mortar', roles: ['win-condition', 'building', 'siege'], elixir: 4 },
  'graveyard': { name: 'Graveyard', roles: ['win-condition', 'spell', 'swarm'], elixir: 5 },
  'royal giant': { name: 'Royal Giant', roles: ['win-condition', 'tank', 'ranged'], elixir: 6 },
  'lava hound': { name: 'Lava Hound', roles: ['win-condition', 'tank', 'air'], elixir: 7 },
  'pekka': { name: 'P.E.K.K.A', roles: ['win-condition', 'tank', 'high-dps'], elixir: 7 },
  'mega knight': { name: 'Mega Knight', roles: ['win-condition', 'tank', 'splash'], elixir: 7 },
  'electro giant': { name: 'Electro Giant', roles: ['win-condition', 'tank'], elixir: 8 },
  'ram rider': { name: 'Ram Rider', roles: ['win-condition', 'fast', 'building-targeting'], elixir: 5 },
  'battle ram': { name: 'Battle Ram', roles: ['win-condition', 'fast', 'building-targeting'], elixir: 4 },
  'wall breakers': { name: 'Wall Breakers', roles: ['win-condition', 'fast', 'building-targeting'], elixir: 2 },
  'goblin giant': { name: 'Goblin Giant', roles: ['win-condition', 'tank', 'building-targeting'], elixir: 6 },
  'sparky': { name: 'Sparky', roles: ['win-condition', 'splash', 'high-damage'], elixir: 6 },
  'three musketeers': { name: 'Three Musketeers', roles: ['win-condition', 'ranged', 'high-dps'], elixir: 9 },
  'elixir golem': { name: 'Elixir Golem', roles: ['win-condition', 'tank'], elixir: 3 },

  // Tanks and Mini Tanks
  'knight': { name: 'Knight', roles: ['mini-tank', 'melee'], elixir: 3 },
  'valkyrie': { name: 'Valkyrie', roles: ['mini-tank', 'splash', 'melee'], elixir: 4 },
  'mini pekka': { name: 'Mini P.E.K.K.A', roles: ['mini-tank', 'high-dps', 'melee'], elixir: 4 },
  'prince': { name: 'Prince', roles: ['mini-tank', 'high-dps', 'charge'], elixir: 5 },
  'dark prince': { name: 'Dark Prince', roles: ['mini-tank', 'splash', 'charge'], elixir: 4 },
  'ice golem': { name: 'Ice Golem', roles: ['mini-tank', 'kiting', 'death-damage'], elixir: 2 },
  'giant skeleton': { name: 'Giant Skeleton', roles: ['tank', 'death-damage'], elixir: 6 },

  // Ranged Support
  'musketeer': { name: 'Musketeer', roles: ['ranged', 'air-targeting', 'support'], elixir: 4 },
  'archers': { name: 'Archers', roles: ['ranged', 'air-targeting', 'support'], elixir: 3 },
  'wizard': { name: 'Wizard', roles: ['ranged', 'splash', 'air-targeting', 'support'], elixir: 5 },
  'baby dragon': { name: 'Baby Dragon', roles: ['air', 'splash', 'air-targeting', 'support'], elixir: 4 },
  'mega minion': { name: 'Mega Minion', roles: ['air', 'air-targeting', 'support'], elixir: 3 },
  'minions': { name: 'Minions', roles: ['air', 'swarm', 'air-targeting', 'support'], elixir: 3 },
  'minion horde': { name: 'Minion Horde', roles: ['air', 'swarm', 'air-targeting', 'support'], elixir: 5 },
  'executioner': { name: 'Executioner', roles: ['ranged', 'splash', 'air-targeting', 'support'], elixir: 5 },
  'hunter': { name: 'Hunter', roles: ['ranged', 'air-targeting', 'support'], elixir: 4 },
  'magic archer': { name: 'Magic Archer', roles: ['ranged', 'splash', 'air-targeting', 'support'], elixir: 4 },
  'firecracker': { name: 'Firecracker', roles: ['ranged', 'splash', 'air-targeting', 'support'], elixir: 3 },
  'princess': { name: 'Princess', roles: ['ranged', 'splash', 'air-targeting', 'support'], elixir: 3 },
  'dart goblin': { name: 'Dart Goblin', roles: ['ranged', 'air-targeting', 'support'], elixir: 3 },
  'spear goblins': { name: 'Spear Goblins', roles: ['ranged', 'swarm', 'air-targeting', 'support'], elixir: 2 },
  'bats': { name: 'Bats', roles: ['air', 'swarm', 'air-targeting', 'support'], elixir: 2 },

  // Swarms
  'skeleton army': { name: 'Skeleton Army', roles: ['swarm', 'melee'], elixir: 3 },
  'goblin gang': { name: 'Goblin Gang', roles: ['swarm', 'melee', 'ranged'], elixir: 3 },
  'skeletons': { name: 'Skeletons', roles: ['swarm', 'melee', 'cycle'], elixir: 1 },
  'goblins': { name: 'Goblins', roles: ['swarm', 'melee'], elixir: 2 },
  'guards': { name: 'Guards', roles: ['swarm', 'melee'], elixir: 3 },

  // Buildings
  'tesla': { name: 'Tesla', roles: ['building', 'defensive', 'air-targeting'], elixir: 4 },
  'cannon': { name: 'Cannon', roles: ['building', 'defensive'], elixir: 3 },
  'inferno tower': { name: 'Inferno Tower', roles: ['building', 'defensive', 'air-targeting', 'tank-killer'], elixir: 5 },
  'bomb tower': { name: 'Bomb Tower', roles: ['building', 'defensive', 'splash'], elixir: 4 },
  'tombstone': { name: 'Tombstone', roles: ['building', 'defensive', 'spawner'], elixir: 3 },
  'goblin cage': { name: 'Goblin Cage', roles: ['building', 'defensive'], elixir: 4 },
  'furnace': { name: 'Furnace', roles: ['building', 'spawner'], elixir: 4 },
  'goblin hut': { name: 'Goblin Hut', roles: ['building', 'spawner'], elixir: 5 },
  'barbarian hut': { name: 'Barbarian Hut', roles: ['building', 'spawner'], elixir: 6 },

  // Small Spells
  'zap': { name: 'Zap', roles: ['small-spell', 'reset', 'air-targeting'], elixir: 2 },
  'log': { name: 'The Log', roles: ['small-spell', 'knockback'], elixir: 2 },
  'arrows': { name: 'Arrows', roles: ['small-spell', 'air-targeting'], elixir: 3 },
  'snowball': { name: 'Snowball', roles: ['small-spell', 'knockback', 'air-targeting'], elixir: 2 },
  'barbarian barrel': { name: 'Barbarian Barrel', roles: ['small-spell', 'knockback'], elixir: 2 },
  'giant snowball': { name: 'Giant Snowball', roles: ['small-spell', 'knockback', 'air-targeting'], elixir: 2 },

  // Medium/Big Spells
  'fireball': { name: 'Fireball', roles: ['medium-spell', 'air-targeting'], elixir: 4 },
  'poison': { name: 'Poison', roles: ['medium-spell', 'air-targeting', 'area-denial'], elixir: 4 },
  'rocket': { name: 'Rocket', roles: ['big-spell', 'air-targeting', 'building-damage'], elixir: 6 },
  'lightning': { name: 'Lightning', roles: ['big-spell', 'air-targeting', 'reset'], elixir: 6 },
  'earthquake': { name: 'Earthquake', roles: ['medium-spell', 'building-damage'], elixir: 3 },
  'freeze': { name: 'Freeze', roles: ['medium-spell', 'air-targeting', 'utility'], elixir: 4 },
  'rage': { name: 'Rage', roles: ['small-spell', 'utility'], elixir: 2 },
  'tornado': { name: 'Tornado', roles: ['medium-spell', 'air-targeting', 'utility'], elixir: 3 },

  // Special/Utility
  'inferno dragon': { name: 'Inferno Dragon', roles: ['air', 'tank-killer', 'air-targeting'], elixir: 4 },
  'electro wizard': { name: 'Electro Wizard', roles: ['ranged', 'reset', 'air-targeting', 'support'], elixir: 4 },
  'ice wizard': { name: 'Ice Wizard', roles: ['ranged', 'splash', 'air-targeting', 'support', 'utility'], elixir: 3 },
  'bandit': { name: 'Bandit', roles: ['mini-tank', 'fast', 'dash'], elixir: 3 },
  'royal ghost': { name: 'Royal Ghost', roles: ['mini-tank', 'splash', 'invisible'], elixir: 3 },
  'fisherman': { name: 'Fisherman', roles: ['mini-tank', 'utility', 'pull'], elixir: 3 },
  'mother witch': { name: 'Mother Witch', roles: ['ranged', 'splash', 'air-targeting', 'utility'], elixir: 4 },
  'night witch': { name: 'Night Witch', roles: ['ranged', 'spawner', 'air-targeting', 'support'], elixir: 4 },
  'battle healer': { name: 'Battle Healer', roles: ['support', 'healer', 'melee'], elixir: 4 },
  'ice spirit': { name: 'Ice Spirit', roles: ['cycle', 'utility', 'air-targeting'], elixir: 1 },
  'fire spirit': { name: 'Fire Spirit', roles: ['cycle', 'splash', 'air-targeting'], elixir: 1 },
  'electro spirit': { name: 'Electro Spirit', roles: ['cycle', 'reset', 'air-targeting'], elixir: 1 },
  'heal spirit': { name: 'Heal Spirit', roles: ['cycle', 'healer'], elixir: 1 },
};

// Normalize card name for lookup
export function normalizeCardName(name: string): string {
  return name.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, ' ');
}

// Get card info by name
export function getCardInfo(name: string): CardRole | null {
  const normalized = normalizeCardName(name);
  return CARD_ROLES[normalized] || null;
}

// Check if card has specific role
export function hasRole(cardName: string, role: string): boolean {
  const card = getCardInfo(cardName);
  return card ? card.roles.includes(role) : false;
}

// Get all cards with specific role
export function getCardsByRole(role: string): CardRole[] {
  return Object.values(CARD_ROLES).filter(card => card.roles.includes(role));
}

// Calculate average elixir cost
export function calculateAverageElixir(cardNames: string[]): number {
  const costs = cardNames
    .map(name => getCardInfo(name)?.elixir || 0)
    .filter(cost => cost > 0);
  
  if (costs.length === 0) return 0;
  return costs.reduce((sum, cost) => sum + cost, 0) / costs.length;
}
