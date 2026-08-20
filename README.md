# Horizon Academy School Website

A maintainable school website starter with a separate React frontend and Express backend. The public homepage is implemented under `apps/web` and is designed around editable school content, a notice board, director’s message, admissions CTA, academic pillars, events, contact information, and a responsive footer.

## Workspace layout

| Area | Responsibility |
|---|---|
| `apps/web` | Public website and future student, parent, teacher, and admin portals. |
| `apps/api` | Backend health endpoint and future domain modules, authentication, policies, jobs, and integrations. |
| `packages` | Shared contracts, validation, types, database, configuration, UI, and lint rules. |
| `tests` | End-to-end, integration, and fixture directories. |
| `docs` | Architecture, database, deployment, and permissions documentation. |
| `scripts` | Seed, import, backup, and maintenance scripts. |
| `infra` | Deployment and infrastructure configuration. |

## Run locally

Install dependencies from the repository root with `pnpm install`. Start both applications with `pnpm dev`; the frontend runs on Vite’s default port and the API runs on port 4000. The frontend can later consume typed procedures or REST endpoints from `apps/api` without moving business logic into the browser.

## Editable homepage content

The homepage currently uses local typed arrays in `apps/web/src/pages/Home.tsx` for notices, events, and the school’s initial placeholder copy. Replace these values with approved school branding, director information, contact details, and media before launch. Large images and videos should use managed object storage rather than being committed to `apps/web/public`.

## Backend module convention

Each future backend domain should use a predictable module boundary containing a router or controller, service, repository, input schema, policy, types, and tests. Authentication and authorization must be enforced server-side, and sensitive changes such as grade publication, fee updates, role changes, and document access should be auditable.
