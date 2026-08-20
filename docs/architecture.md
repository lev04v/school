# Architecture

The repository separates the public React experience in `apps/web` from the Express API boundary in `apps/api`. Shared contracts, validation, types, database access, UI primitives, and configuration belong in `packages` so that business rules are not duplicated between applications.

The homepage is intentionally usable before the backend is connected. Its notices, events, director copy, and contact details are local editable content in `apps/web/src/pages/Home.tsx`. A future content-management module can replace these arrays with API responses while preserving the same section components.

Backend features should be organized by domain. A complete module should contain its API boundary, service, repository, schema, policy, types, and tests. Authorization must be enforced by the backend and sensitive changes should create audit records.
