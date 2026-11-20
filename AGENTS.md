# AGENTS.md

AI agent instructions for this repository (Claude Code, Cursor, Codex and similar). `CLAUDE.md` is a symlink to this file.

## Filing issues

- **Type**: Bug = broken. Feature = user notices the change. Task = user doesn't (upgrade, refactor, infra).
- **Title**: imperative, ≤60 chars. **Size**: one issue = one PR; split bigger work into sub-issues.
- **Body headings** (same as the [issue forms](https://github.com/Kosha-Tech/.github/tree/main/.github/ISSUE_TEMPLATE)):
  - Feature: `User story`, `Acceptance criteria`, `Context`, `Repo`, `What it touches`, `Dependencies`, `Risk`
  - Bug: `Problem`, `Steps to reproduce`, `Acceptance criteria`, `Environment`, `Repo`, `What it touches`, `Risk`
  - Task: `Acceptance criteria`, `Context`, `Repo`, `What it touches`, `Dependencies`, `Risk`
- Acceptance criteria are 3–7 pass/fail `- [ ]` checks. Risk is Low / Medium / High.
- **Create**: `gh api repos/Kosha-Tech/<repo>/issues -f title=... -F body=@body.md -f type=<Feature|Bug|Task>`
- **Board**: `gh project item-add <N> --owner Kosha-Tech --url <issue-url>`; N=2 (Kosha Business: personal-assistant-*), N=3 (Kosha Platform: website, infra, IAC).
- Don't set Priority or Iteration. Only work issues in **Ready**; link PRs with `Closes Kosha-Tech/<repo>#N`.
