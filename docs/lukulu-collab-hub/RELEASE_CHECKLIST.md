# Lukulu Collab Hub — Build and Release Checklist

**6 November 2026 — Draft / not released**

## Available in builder (not production validated)
- [x] Soulful Journey demo beat record in catalog
- [x] Database-backed Beat Showcase interest form, linked to selected beat/showcase
- [x] Producer Inbox compiled with request filtering and review actions
- [x] Beat Library compiled: browse/search, metadata, WAV/MP3 upload hooks, optional artwork/stems and audio player
- [x] Collab Hub Users table connected to Softr login
- [x] Invitation and Notification schema placeholders created
- [x] Interest-request producer-email VIEW restriction and producer-email-scoped approval action
- [x] Private builder previews (temporary links)
- [x] Google Drive roadmap and Linear development tasks

## P0 security — blockers
- [ ] Create dedicated private GitHub repository and initialize code from approved reference
- [ ] Choose backend auth/storage provider and establish secrets only in hosting environment
- [ ] Enforce producer-admin access on library, inbox and all source audio; no client-only checks
- [ ] Add expiring, revocable, recipient-bound invitation tokens and authenticated file access
- [ ] Create separate approved-stems access control for remixers
- [ ] Verify authorized and unauthorized user journeys with real accounts
- [ ] Confirm recording/beat files cannot leak through public or cacheable URLs

## P1 real feature tests
- [ ] Upload a genuinely owned Soulful Journey WAV or MP3, BPM/key, creator/master data
- [ ] Test on mobile and desktop: upload, progress/error, audio playback, request submit, producer review
- [ ] Connect automatic producer notification to approved sender; dedupe, delivery audit and test
- [ ] Multi-track vocal recording with lead/harmony/backing, synchronized playback and separate exports
- [ ] Verify file type/size limits, audio latency and Safari/Chrome microphone permissions

## P2 optional AI and release features
- [ ] Audio analysis (BPM/key as suggestions, confidence and manual corrections)
- [ ] Smart voice-idea transcription and lyrics prompts with informed consent
- [ ] Remix original/Spotify metadata; *never* rip Spotify audio or assume platform grants master rights
- [ ] Opt-in denoise, EQ/presets, mastering and optional visuals
- [ ] Accessibility/performance and usage-cost monitoring

## Public launch gate
Publish only after sign-in, privacy policy, producer-only access, private audio, invitations, database policies, test evidence and an explicit owner approval. No emails should be sent to collaborators before their selection and approval.

### Tracking
Linear project: https://linear.app/luluku-webservice/project/lukulu-collab-hub-web-app-79435a9ad0a8
