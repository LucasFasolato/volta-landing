# Corporate dependency review — 2026-09-06

## Scope

A clean install during the corporate redesign exposed existing dependency advisories. This review is bounded to safely shipping the affected public page, not an assertion that all VOLTA repositories are patched.

Next.js 16.2.2 is replaced with the vendor's 16.3.3 security baseline, with the matching ESLint configuration. The vendor's August release explains the patches: https://nextjs.org/blog/august-2026-security-release . The generated lockfile also updates Next's affected transitive dependencies. React is unchanged. No forced major upgrade or new application vendor is introduced.

## Verification evidence

The isolated review run `34012806000` built Next.js 16.3.3 successfully, passed source checks, ESLint, TypeScript, viewport checks from 320 to 1440px, three Axe scans and navigation/analytics interaction checks. Its last failure was a test's comparison of equivalent root canonical URLs with/without a trailing slash; the assertion is normalized through the URL API, not removed.

`npm audit --omit=dev` changed from **4 high package findings to 0 findings** in this reviewed graph. This is a point-in-time package advisory result, not a security guarantee or evidence of prior exploitation.

## Remaining development-only findings

The full graph still reports five existing development-tool package findings: `@babel/core` (low), `@humanfs/node` (moderate), `brace-expansion`, `browserslist` and `js-yaml` (high). They are not in the production dependency report. Their described attack inputs involve untrusted build/configuration content; this corporate site does not accept visitor-authored CSS, YAML or filesystem configuration.

Keep these visible as bounded development-tool debt, owned by repository maintenance. Patch with a reviewed compatible lockfile refresh, not `npm audit fix --force`. Reassess immediately if the build begins processing untrusted customer content, these dependencies enter runtime, or the exposure changes. CI is time-bounded and normal verification has read-only repository permissions.

Do not claim that the whole repository has zero advisories. Preserve the distinction between the clean production dependency report and the remaining development graph.
