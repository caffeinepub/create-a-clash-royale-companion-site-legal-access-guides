// Deterministic deck review generation for Fred's deck analysis system
// Analyzes deck composition and provides structured feedback

import { ParsedDeck } from './fredDeckParser';
import { getCardInfo, hasRole, calculateAverageElixir } from './fredDeckCardRoles';

export interface DeckReview {
  winConditions: string[];
  archetype: string;
  averageElixir: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
}

// Analyze deck and generate review
export function generateDeckReview(parsed: ParsedDeck): string {
  if (!parsed.isComplete) {
    return '';
  }
  
  const review = analyzeDeck(parsed.cards);
  
  // Format the review as a structured response
  let response = `**Deck Review**\n\n`;
  
  // Win Conditions
  response += `**Win Condition${review.winConditions.length > 1 ? 's' : ''}**: ${review.winConditions.join(', ') || 'None detected'}\n\n`;
  
  // Archetype
  response += `**Archetype**: ${review.archetype}\n\n`;
  
  // Average Elixir
  response += `**Average Elixir**: ${review.averageElixir.toFixed(1)}\n\n`;
  
  // Strengths
  response += `**Strengths**:\n`;
  review.strengths.forEach(s => response += `• ${s}\n`);
  response += `\n`;
  
  // Weaknesses
  response += `**Weaknesses**:\n`;
  review.weaknesses.forEach(w => response += `• ${w}\n`);
  response += `\n`;
  
  // Suggestions
  response += `**Suggestions**:\n`;
  review.suggestions.forEach(s => response += `• ${s}\n`);
  
  return response;
}

// Analyze deck composition
function analyzeDeck(cards: string[]): DeckReview {
  const winConditions = identifyWinConditions(cards);
  const archetype = determineArchetype(cards, winConditions);
  const averageElixir = calculateAverageElixir(cards);
  const strengths = identifyStrengths(cards, winConditions, archetype);
  const weaknesses = identifyWeaknesses(cards);
  const suggestions = generateSuggestions(cards, weaknesses);
  
  return {
    winConditions,
    archetype,
    averageElixir,
    strengths,
    weaknesses,
    suggestions
  };
}

// Identify win conditions in deck
function identifyWinConditions(cards: string[]): string[] {
  const winCons: string[] = [];
  
  for (const card of cards) {
    if (hasRole(card, 'win-condition')) {
      const info = getCardInfo(card);
      if (info) winCons.push(info.name);
    }
  }
  
  return winCons;
}

// Determine deck archetype
function determineArchetype(cards: string[], winConditions: string[]): string {
  const avgElixir = calculateAverageElixir(cards);
  const hasSiege = cards.some(c => hasRole(c, 'siege'));
  const hasBait = cards.filter(c => 
    c.includes('goblin barrel') || c.includes('princess') || c.includes('goblin gang')
  ).length >= 2;
  const hasBeatdown = cards.some(c => 
    c.includes('golem') || c.includes('lava hound') || c.includes('elixir golem')
  );
  const hasBridgeSpam = cards.some(c => 
    c.includes('bandit') || c.includes('battle ram') || c.includes('royal ghost')
  );
  const hasGraveyard = cards.some(c => c.includes('graveyard'));
  
  if (hasSiege) return 'Siege';
  if (hasBait) return 'Bait';
  if (hasGraveyard) return 'Graveyard Control';
  if (hasBeatdown) return 'Beatdown';
  if (hasBridgeSpam) return 'Bridge Spam';
  if (avgElixir <= 3.0) return 'Cycle';
  if (avgElixir >= 3.8) return 'Heavy/Beatdown';
  
  return 'Control/Midrange';
}

// Identify deck strengths
function identifyStrengths(cards: string[], winConditions: string[], archetype: string): string[] {
  const strengths: string[] = [];
  
  // Win condition analysis
  if (winConditions.length === 1) {
    strengths.push(`Focused on ${winConditions[0]} as primary win condition`);
  } else if (winConditions.length === 2) {
    strengths.push(`Dual win condition threat with ${winConditions.join(' and ')}`);
  } else if (winConditions.length >= 3) {
    strengths.push(`Multiple win conditions provide versatility`);
  }
  
  // Spell analysis
  const spells = cards.filter(c => 
    hasRole(c, 'small-spell') || hasRole(c, 'medium-spell') || hasRole(c, 'big-spell')
  );
  if (spells.length >= 2) {
    strengths.push(`Good spell coverage with ${spells.length} spells`);
  }
  
  // Air defense
  const airDefense = cards.filter(c => hasRole(c, 'air-targeting'));
  if (airDefense.length >= 3) {
    strengths.push(`Strong air defense with ${airDefense.length} air-targeting cards`);
  }
  
  // Buildings
  const buildings = cards.filter(c => hasRole(c, 'building'));
  if (buildings.length >= 1) {
    strengths.push(`Defensive building provides structure and distraction`);
  }
  
  // Splash damage
  const splash = cards.filter(c => hasRole(c, 'splash'));
  if (splash.length >= 2) {
    strengths.push(`Good splash damage for swarm defense`);
  }
  
  // Cycle speed
  const avgElixir = calculateAverageElixir(cards);
  if (avgElixir <= 3.0) {
    strengths.push(`Fast cycle allows quick access to key cards`);
  }
  
  // Tank killers
  const tankKillers = cards.filter(c => hasRole(c, 'tank-killer') || hasRole(c, 'high-dps'));
  if (tankKillers.length >= 1) {
    strengths.push(`Has tank-killing capability`);
  }
  
  // Ensure at least 2 strengths
  if (strengths.length < 2) {
    strengths.push(`Archetype (${archetype}) has clear gameplan`);
  }
  
  return strengths.slice(0, 4);
}

// Identify deck weaknesses
function identifyWeaknesses(cards: string[]): string[] {
  const weaknesses: string[] = [];
  
  // Win condition check
  const winCons = cards.filter(c => hasRole(c, 'win-condition'));
  if (winCons.length === 0) {
    weaknesses.push(`No clear win condition - will struggle to take towers`);
  }
  
  // Spell check
  const smallSpells = cards.filter(c => hasRole(c, 'small-spell'));
  const mediumBigSpells = cards.filter(c => hasRole(c, 'medium-spell') || hasRole(c, 'big-spell'));
  
  if (smallSpells.length === 0) {
    weaknesses.push(`No small spell - vulnerable to swarms and bait decks`);
  }
  if (mediumBigSpells.length === 0) {
    weaknesses.push(`No medium/big spell - can't deal with clumped troops or buildings`);
  }
  
  // Air defense check
  const airDefense = cards.filter(c => hasRole(c, 'air-targeting'));
  if (airDefense.length < 2) {
    weaknesses.push(`Weak air defense - vulnerable to Balloon, Lava Hound, and air swarms`);
  }
  
  // Building check
  const buildings = cards.filter(c => hasRole(c, 'building'));
  if (buildings.length === 0) {
    weaknesses.push(`No defensive building - harder to defend win conditions like Hog Rider`);
  }
  
  // Splash check
  const splash = cards.filter(c => hasRole(c, 'splash'));
  if (splash.length === 0) {
    weaknesses.push(`No splash damage - vulnerable to swarm cards`);
  }
  
  // Tank check
  const tanks = cards.filter(c => hasRole(c, 'tank') || hasRole(c, 'mini-tank'));
  if (tanks.length === 0) {
    weaknesses.push(`No tank or mini-tank - fragile on defense and offense`);
  }
  
  // Elixir cost
  const avgElixir = calculateAverageElixir(cards);
  if (avgElixir >= 4.0) {
    weaknesses.push(`High average elixir (${avgElixir.toFixed(1)}) - may struggle in single elixir`);
  }
  
  // Reset cards
  const resets = cards.filter(c => hasRole(c, 'reset'));
  const hasTankKiller = cards.some(c => hasRole(c, 'tank-killer'));
  if (!resets.length && hasTankKiller) {
    weaknesses.push(`No reset card - Inferno Tower/Dragon can shut down your pushes`);
  }
  
  return weaknesses.slice(0, 4);
}

// Generate actionable suggestions
function generateSuggestions(cards: string[], weaknesses: string[]): string[] {
  const suggestions: string[] = [];
  
  // Address specific weaknesses
  if (weaknesses.some(w => w.includes('No clear win condition'))) {
    suggestions.push(`Add a reliable win condition like Hog Rider, Giant, or Miner`);
  }
  
  if (weaknesses.some(w => w.includes('No small spell'))) {
    suggestions.push(`Add a small spell (Log, Zap, or Arrows) to counter swarms and bait`);
  }
  
  if (weaknesses.some(w => w.includes('No medium/big spell'))) {
    suggestions.push(`Add Fireball, Poison, or Rocket for better spell coverage`);
  }
  
  if (weaknesses.some(w => w.includes('Weak air defense'))) {
    suggestions.push(`Add more air-targeting troops like Musketeer, Mega Minion, or Bats`);
  }
  
  if (weaknesses.some(w => w.includes('No defensive building'))) {
    suggestions.push(`Consider adding Cannon, Tesla, or Inferno Tower for better defense`);
  }
  
  if (weaknesses.some(w => w.includes('No splash damage'))) {
    suggestions.push(`Add splash troops like Valkyrie, Baby Dragon, or Wizard`);
  }
  
  if (weaknesses.some(w => w.includes('No tank or mini-tank'))) {
    suggestions.push(`Add a tank like Knight, Valkyrie, or Giant for better push support`);
  }
  
  if (weaknesses.some(w => w.includes('High average elixir'))) {
    suggestions.push(`Replace expensive cards with cheaper alternatives to lower average elixir`);
  }
  
  if (weaknesses.some(w => w.includes('No reset card'))) {
    suggestions.push(`Consider adding Zap, Electro Wizard, or Electro Spirit to counter Inferno units`);
  }
  
  // General suggestions if not enough specific ones
  if (suggestions.length < 2) {
    suggestions.push(`Practice your deck in challenges to learn matchups and timing`);
  }
  if (suggestions.length < 2) {
    suggestions.push(`Watch pro players using similar archetypes to learn advanced strategies`);
  }
  
  return suggestions.slice(0, 4);
}
