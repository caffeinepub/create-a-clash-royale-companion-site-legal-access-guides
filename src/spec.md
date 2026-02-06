# Specification

## Summary
**Goal:** Significantly upgrade Fred’s offline, deterministic Clash Royale Q&A coverage—especially for broader strategy topics and higher-quality deck feedback—without adding any network calls or external AI.

**Planned changes:**
- Expand Fred’s local Clash Royale topic knowledge base with substantially more English entries covering common cards, archetypes, matchups/counterplay, ladder fundamentals, progression terms, and practical decision-making scenarios (with keywords, synonyms, and answers).
- Add deterministic deck-question handling to detect when users provide (near) 8-card deck lists or request deck feedback, and return a structured deck review (win condition(s), inferred archetype, strengths, weaknesses, and actionable improvement suggestions), including clarifying questions for incomplete decks.
- Improve deterministic matching/routing to better handle common phrasing variations, punctuation, pluralization, and shorthand (e.g., xbow/x-bow, gy/graveyard, bridgespam/bridge spam) so relevant answers are found more reliably.
- Update Ask Fred UI helper text and disclaimer copy to reflect the expanded offline coverage (including improved deck help) while remaining accurate about limitations (offline, deterministic, may ask clarifying questions).

**User-visible outcome:** Users can ask a wider range of Clash Royale questions and get relevant offline answers more often; when they paste a deck list or ask for deck help, Fred provides a structured, deterministic deck review instead of generic/fallback replies, with updated on-screen guidance that sets accurate expectations.
