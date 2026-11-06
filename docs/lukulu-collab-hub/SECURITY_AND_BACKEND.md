# Lukulu Collab Hub — Secure Backend Architecture

## Principle
**Do not publish the current app or send real audio invitations until server-enforced authorization is verified.**

## Architecture (proposed, not deployed)
- Browser frontend: React/TypeScript, responsive to Samsung Android, desktop and older Mac browsers.
- Identity: email sign-in / magic link, confirmed email, admin-managed producer/collaborator membership.
- Server-side API: authenticated routes or Edge Functions to authorize every action and prevent client-provided `producer_email` or `role` from becoming authoritative.
- Database: PostgreSQL/Supabase with row-level security, or an equivalent server-protected data store.
- File storage: private object buckets, short-lived signed preview URLs issued after permission checks; **never** public bucket links to unreleased beats/stems.
- Notifications: queue/outbox worker with idempotency keys and Gmail/provider integration; store delivery status and errors but no secrets.
- Optional analysis queue for BPM/key estimation, speech transcription and mastering. Preserve originals and maintain consent history.

## Required entities
- `users`: id, verified_email, role, status, creator, timestamps. Only trusted admins can change roles.
- `beats`: id, producer_id, title, bpm, key, genre, master_owner, publisher/writers/splits, preview_object_key, stems_object_key, status.
- `showcases`: id, producer_id, title, state, expiry; `showcase_beats` joining authorized beats.
- `invitations`: id, producer_id, recipient_email, showcase_id or remix_id, **token_hash** (never raw token), status, expires_at, used_at, revoked_at.
- `interest_requests`: id, showcase_id, beat_id, vocalist_id, producer_id (server derived), message, state, reviewed_at.
- `sessions` and `takes`: collaborator access, individual lead/harmony/backing clips, ownership, edit versions.
- `remixes`, `permissions`, `audit_events`, `notification_outbox`.

## Server request lifecycle
1. Producer with a verified session chooses showcase beats and explicitly named recipients.
2. Backend issues a cryptographically random invitation token, stores only a hash, ties it to recipient/project and expiration, and sends an approval-gated invitation. URL must not carry API keys.
3. Recipient authenticates and proves email ownership; API validates recipient, token hash, status and expiry before granting showcase access.
4. Preview API checks authorization on **every** request and returns a short-lived preview signed URL; stem access is a separate post-approval permission.
5. Interest request is submitted under authenticated recipient identity; API derives producer from the showcase, ignores spoofed producer fields, and logs the event.
6. Producer sees only requests they own and can approve/decline; collaborator cannot read other artists' requests.
7. Outbox event routes a producer notification with retry, deduplication and a clear sent/failed state.
8. Producer can revoke invitation; further API access must fail immediately. Already-issued signed URLs may remain usable until expiry, so keep them short.

## Safety testing
- Unauthenticated, invited-but-unverified, expired, revoked, wrong-recipient and cross-producer access all denied.
- Role changes and record writes blocked from client; no public listing of unreleased audio.
- Microphone access only after direct user interaction; explain consent and file retention.
- Maintain versioned original audio and separate edits; never overwrite original masters.
- Keep stems and third-party licensing files private and record rights approvals.
- No secrets in repository, browser code, logs or public `.env` files.

## Softr implementation note
The current builder has an authentication user table and a VIEW restriction on producer-email-matching interest requests. The plan rejected custom producer user groups; creator-scoped beat administration and secure invitations therefore remain launch blockers.
