# AGENTS.md

AI agent instructions for this repository (Claude Code, Cursor, Codex and similar). `CLAUDE.md` is a symlink to this file.

## Filing issues (Kosha-Tech convention)

Issues are how work is planned across Kosha-Tech. Humans file them through issue forms on GitHub; agents file them through the API. Both must produce the same structure. The forms in [`Kosha-Tech/.github`](https://github.com/Kosha-Tech/.github/tree/main/.github/ISSUE_TEMPLATE) are the source of truth for fields.

**Pick the type**
- **Bug**: something that worked, or should work, is broken.
- **Feature**: a change a user will notice. Has a user story.
- **Task**: a change no user notices (upgrade, refactor, infra, CI). User story only if there is a real user.

**Title**: imperative, 60 chars or less, names the outcome ("Add rate limiting to the login endpoint").
**Size**: one issue = one agent session = one PR. Split anything bigger into sub-issues of a parent issue.

**Body**: use these headings, in this order, and leave out optional ones you have nothing for.

| Feature | Bug | Task |
|---|---|---|
| `### User story` | `### Problem` | `### User story` (optional) |
| `### Acceptance criteria` | `### Steps to reproduce` | `### Acceptance criteria` |
| `### Context` | `### Acceptance criteria` | `### Context` |
| `### Repo` | `### Environment` | `### Repo` |
| `### What it touches` | `### Repo` | `### What it touches` |
| `### Dependencies` | `### What it touches` | `### Dependencies` |
| `### Risk` | `### Dependencies` | `### Risk` |
| `### Out of scope` | `### Risk` | `### Parent issue` |
| `### Links` | `### Logs` | |

- **User story**: `As a <user>, I want <capability> so that <outcome>.`
- **Acceptance criteria**: `- [ ]` checklist, 3–7 pass/fail checks a tester can verify without asking questions. For bugs, include a regression test.
- **What it touches**: `- [x]` the ones that apply: API contract; Database schema or data migration; Auth, permissions or user data; Client UI; Background jobs, queues or schedules; Third-party integrations; Infra, deployment or CI; Config, env vars or secrets; None of the above.
- **Dependencies**: `Depends on: Kosha-Tech/<repo>#N` / `Blocks: Kosha-Tech/<repo>#N`.
- **Risk**: `Low` (isolated change), `Medium` (shared code or data), `High` (auth, payments, data migration, prod infra).

**Create it, then put it on the right board**

```sh
# Set type with the REST API (gh issue create cannot set the issue type)
gh api repos/Kosha-Tech/<repo>/issues -f title="<title>" -F body=@body.md -f type=Feature --jq .html_url

# Add to the board. Kosha Business = project 2 (personal-assistant-backend, personal-assistant-client)
#                   Kosha Platform = project 3 (koshax-website, infra, koshax-IAC)
gh project item-add <2|3> --owner Kosha-Tech --url <issue-url>
```

Do not set Priority, Iteration or Status when filing; those are set during weekly planning. Before filing, search for duplicates (`gh issue list -R Kosha-Tech/<repo> --search "<keywords>"`).

**Working an issue**: pick up only issues in **Ready** on the board. Link your PR with `Closes Kosha-Tech/<repo>#N` so the board moves it to In Review, then Done on merge.
