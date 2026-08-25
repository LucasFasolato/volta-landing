# VOLTA Corporate — Handoff

There is one genuine pending handoff.

## CORP-INIT-003

- Code is merged to `main` at `6e05ebefba6441f892c9926bbceab0416e2f8a63`.
- GitHub quality run `32897006491` passed clean install, corporate verification, lint and build.
- The production alias has not yet received this merge.
- Normal Git-to-Vercel deployment did not trigger.
- The manual Vercel API deployment path is temporarily blocked by the daily Hobby quota and is expected to reset on 2026-08-26 around 17:45 Argentina time.

**Next action:** publish current `main` after the quota resets, verify the three external product routes in production, then close `CORP-INIT-003`. Keep the Git/Vercel integration debt open until auto-deploy itself is proven fixed.

Do not use this file for backlog or historical context; those belong in ROADMAP, DEBT and initiative documents.
