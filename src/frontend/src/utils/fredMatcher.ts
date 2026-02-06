// Deterministic matching utility for Fred's knowledge base
// All logic is local and produces consistent results

interface MatchResult {
  topicId: string;
  score: number;
}

// Normalize text for matching
export function normalizeText(text: string): string {
  return text.toLowerCase().trim().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ');
}

// Tokenize text into words
export function tokenize(text: string): string[] {
  return normalizeText(text).split(' ').filter(word => word.length > 0);
}

// Common word expansions and synonyms
const synonymMap: Record<string, string[]> = {
  'defend': ['defense', 'counter', 'stop', 'beat'],
  'attack': ['offense', 'push', 'pressure'],
  'best': ['good', 'top', 'great', 'optimal'],
  'how': ['what', 'when', 'why'],
  'deck': ['decks', 'composition'],
  'card': ['cards', 'troop', 'troops', 'unit', 'units'],
  'win': ['winning', 'victory'],
  'lose': ['losing', 'loss'],
  'tower': ['towers', 'princess tower', 'king tower'],
  'spell': ['spells'],
  'building': ['buildings', 'structure', 'structures'],
};

// Expand a word with its synonyms
function expandWord(word: string): string[] {
  const normalized = word.toLowerCase();
  const expansions = [normalized];
  
  if (synonymMap[normalized]) {
    expansions.push(...synonymMap[normalized]);
  }
  
  // Check if this word is a synonym of another
  for (const [key, values] of Object.entries(synonymMap)) {
    if (values.includes(normalized) && !expansions.includes(key)) {
      expansions.push(key);
    }
  }
  
  return expansions;
}

// Calculate match score between input and topic
export function calculateMatchScore(
  inputTokens: string[],
  keywords: string[],
  synonyms: string[]
): number {
  let score = 0;
  const expandedInput = inputTokens.flatMap(token => expandWord(token));
  
  // Check keyword matches (higher weight)
  for (const keyword of keywords) {
    const keywordTokens = tokenize(keyword);
    for (const keywordToken of keywordTokens) {
      if (expandedInput.includes(keywordToken)) {
        score += 3;
      }
    }
  }
  
  // Check synonym matches (medium weight)
  for (const synonym of synonyms) {
    const synonymTokens = tokenize(synonym);
    for (const synonymToken of synonymTokens) {
      if (expandedInput.includes(synonymToken)) {
        score += 2;
      }
    }
  }
  
  // Bonus for multi-word phrase matches
  const inputText = expandedInput.join(' ');
  for (const keyword of keywords) {
    if (inputText.includes(normalizeText(keyword))) {
      score += 5;
    }
  }
  
  for (const synonym of synonyms) {
    if (inputText.includes(normalizeText(synonym))) {
      score += 3;
    }
  }
  
  return score;
}

// Find best matching topic
export function findBestMatch(
  input: string,
  topics: Array<{ id: string; keywords: string[]; synonyms: string[] }>
): MatchResult | null {
  const inputTokens = tokenize(input);
  const matches: MatchResult[] = [];
  
  for (const topic of topics) {
    const score = calculateMatchScore(inputTokens, topic.keywords, topic.synonyms);
    if (score > 0) {
      matches.push({ topicId: topic.id, score });
    }
  }
  
  // Sort by score descending
  matches.sort((a, b) => b.score - a.score);
  
  // Return best match if score is significant
  if (matches.length > 0 && matches[0].score >= 3) {
    return matches[0];
  }
  
  return null;
}

// Check if input contains any of the given keywords
export function containsAny(input: string, keywords: string[]): boolean {
  const normalized = normalizeText(input);
  return keywords.some(keyword => normalized.includes(normalizeText(keyword)));
}
