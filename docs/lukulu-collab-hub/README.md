# Lukulu Collab Hub — GitHub Handoff

**Status:** Private-production repository proposed; this folder is a **documentation-only staging handoff** in the existing Lukulu-WebService repository. It is NOT a deployed web app or a source-code export from Softr. No secrets, audio, collaborator emails, or invitations are stored in this repository.

## Product
Lukulu Recordings' browser-based collaboration workspace for producers, vocalists and remixers.

Core journeys:
1. **Beat Library:** producer uploads an authorized MP3/WAV, cover and optional stems, edits BPM/key/genre and publisher/master metadata, and chooses beats for a showcase.
2. **Beat Showcase:** an invited vocalist previews the permitted beats, selects one or several and submits a private interest request with a creative idea.
3. **Producer Inbox:** producer receives and reviews requests, approves or declines, then opens an authorized collaboration session.
4. **Vocal Studio:** beat playback plus a deliberately lightweight lead/harmony/backing multi-track recorder, waveforms, simple presets, mix preview and separate track export.
5. **Remix Studio:** share an original track and Spotify reference, request permission to remix, then expose only approved stems with clear rights and deadlines.
6. **Smart Audio:** optional BPM/key suggestions, transcription, denoise and mastering; corrections by producer and opt-in consent are required.

## Existing builder work (as of 2026-11-06)
- Softr: Beat Library, Soulful Journey Beat Showcase, Collaboration Inbox and local-only browser recording prototype.
- Softr databases: Beats, Beat Showcases, Beat Interest Requests, Collaboration Sessions, Songs & Remix Projects, Collab Hub Users, Collaboration Invitations, Producer Notifications.
- Soulful Journey is an **illustrative metadata record with NO uploaded playable audio**.
- Interest request table has a producer-email ownership filter for logged-in viewers; update actions are similarly filtered. These are configured but have NOT passed real-user testing.
- No external vocalist invitations, provider email alerts, or protected media distribution are operational.
- The Softr plan currently rejects custom user groups. Do not interpret a client-side producer-email check as authorization.
- App intentionally remains **unpublished**.

## Recommendation
Create a standalone **private** repository, `DjNastor/lukulu-collab-hub`, with a protected API, database migrations and separate web-client code. Preserve the current Softr prototype as design/reference until a verified migration is ready. The GitHub connection currently supports branches, commits and pull requests but not creating a new repository; create the private repository in the GitHub UI first.

## External documentation
Product roadmap and connected app management remain in the private project workspace. Review its configured permissions before sharing access.

See [SECURITY_AND_BACKEND.md](SECURITY_AND_BACKEND.md) and [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md).
