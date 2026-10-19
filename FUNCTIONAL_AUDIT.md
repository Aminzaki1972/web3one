# WEB3ONE Functional Audit — 2026-10-19

## Scope and safety

This is a source-code review of the current `main` branch, not a live browser test. No application code, database, or production deployment has been changed by this audit branch. GitHub Pages being online confirms hosting only; it does not confirm that integrations or transactions work.

## Findings

### P0 — Wallet must not be used with real funds

- `WalletModule.tsx` imports `BLOCKCHAIN_NETWORKS` and `INITIAL_WALLET_ASSETS` from `mockData.ts`, so the initial networks/assets are demo data.
- The module contains a hard-coded 12-word seed phrase in source and exposes it through the backup UI. This is not a generated wallet recovery phrase and must never be presented as one.
- The send flow updates React state and displays a success state after a timeout; it is not evidence of a signed or broadcast blockchain transaction.
- The swap flow is explicitly a simulator and changes local asset values after a timeout.
- A fixed wallet address is embedded in the UI. It must not be represented as the user's actual wallet address.

**Required immediate safety action:** label the wallet as demo-only and disable any send/swap/backup success claims until a real wallet provider, transaction signing, chain validation, and transaction receipt verification are implemented. Never ask users to enter a real seed phrase into this app.

### P1 — Marketplace and deal-room claims are simulated

- `Web3MarketModule.tsx` starts with `WEB3_PROJECT_LISTINGS` from `mockData.ts`.
- The repository scan calls GitHub's public repository API for some metadata, then sets a result after a timeout; this is not a full security audit and should not imply that vulnerabilities or ownership were verified.
- Listing and deal state are held in component state, so there is no demonstrated persistence or cross-user synchronization in this module.
- The deal/escrow completion and dispute controls use alert messages that claim funds were sent/frozen. No on-chain transaction is initiated by those handlers.

**Required repair:** label sample listings and scans clearly; replace transaction claims with truthful status; implement real persistence and an independently verified on-chain escrow flow before showing settlement success.

### P1 — Social and jobs actions can imply real delivery without a backend

- `SocialModule.tsx` imports initial posts from `SOCIAL_POSTS`; chat replies are explicitly simulated with a timeout. The tipping control uses an alert claiming a transfer occurred.
- `Web3JobsModule.tsx` imports `WEB3_JOB_LISTINGS`; applying and posting listings update local component state and display success messages without a demonstrated server-side submission.

**Required repair:** distinguish local demo actions from saved/shared actions, and only show submission or payment success after a real backend/provider confirms it.

### P2 — Other sections use sample data

- `MarketsModule.tsx` imports market datasets from `mockData.ts`; do not describe them as live quotes unless connected to a live source.
- `NewsModule.tsx` imports `NEWS_ARTICLES` from `mockData.ts`; bookmarking displays an alert rather than demonstrating persistent storage.
- `WeatherModule.tsx` imports `CITIES_WEATHER` from `mockData.ts`; values are sample data unless a weather API is added.
- `CinemaModule.tsx` imports channel/show data from `mockData.ts`; playback and stream availability need to be checked separately.

## Recommended repair order

1. Safety-first wallet UI: remove the hard-coded seed phrase, fixed-address claims, and simulated send/swap success. Show a clear demo label until genuine wallet integration exists.
2. Remove misleading marketplace escrow completion/dispute messages; distinguish mock scan output from verified results.
3. Add backend persistence and authentication for listings, jobs, posts, bookmarks, and chat where required.
4. Integrate and validate real data providers for markets, news, and weather, including loading/error states and source timestamps.
5. Test every button on mobile and desktop; require explicit evidence before marking a function complete.

## Verification criteria

A function is considered real only when there is observable evidence: a successful API response and persisted record for backend actions, or a transaction hash confirmed on the correct chain for blockchain actions. A timeout, local state update, alert, or green UI message is not proof of success.
