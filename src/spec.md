# Specification

## Summary
**Goal:** Add a new in-site “Ask Fred” chat page where users can ask Clash Royale questions and receive offline, deterministic FAQ-style responses (no external AI).

**Planned changes:**
- Add a new top-level “Ask Fred” page reachable from the main site navigation on desktop and mobile.
- Implement a chat-style UI on the Fred page (message history, user input, send via button and Enter; user vs. Fred messages clearly differentiated) with session-only persistence.
- Create a client-side, deterministic rules/FAQ knowledge base for Fred focused on Clash Royale fundamentals (including elixir, win conditions, cycle decks, beatdown/control/siege/bridge spam, and choosing spells) plus safe fallbacks for unknown questions.
- Add refusal behavior for requests related to bypassing restrictions or “unblocked” gameplay, aligned with the site’s legal stance.
- Update page routing/types and SiteLayout navigation to include the Fred page while keeping existing pages and admin-only navigation behavior intact.
- Add an on-page disclaimer stating Fred is an offline helper with limited knowledge, provides informational guidance only, is not affiliated with Supercell, and does not provide “unblocked” gameplay or bypass methods.

**User-visible outcome:** Users can open an “Ask Fred” page from the site navigation and chat with Fred to get offline Clash Royale guidance; unsupported or disallowed requests receive clear fallback/refusal responses along with helpful pointers to relevant site sections.
