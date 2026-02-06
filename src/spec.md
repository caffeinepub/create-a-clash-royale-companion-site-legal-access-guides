# Specification

## Summary
**Goal:** Add a simple, user-friendly welcome/intro screen to the Ask Fred (FredChatPage) experience that explains what Fred can help with and provides a clear way to start chatting.

**Planned changes:**
- Add an intro/welcome view that appears before the chat UI (at least on first visit) with English text describing Fred as a Clash Royale strategy helper and example topics users can ask about.
- Provide a prominent “Start chatting” action that dismisses the intro, shows the normal chat UI, and focuses the input.
- Persist the intro dismissal for the current browser session so returning to Ask Fred doesn’t repeatedly show the intro during typical use.
- Add a small, non-intrusive action (e.g., “About Fred” / “Show intro”) to re-open the intro on demand.
- Ensure the existing disclaimer remains visible and unchanged in meaning.

**User-visible outcome:** On first opening Ask Fred, users see a brief intro explaining what to ask and a clear button to start; after dismissing it, the chat opens with the input focused and the intro stays hidden for the session, with an option to view it again.
