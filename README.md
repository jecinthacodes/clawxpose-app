# Clawxpose App Monorepo

A minimal, production-ready starter monorepo for building **Clawxpose** across:

- a **mobile app** (Expo + React Native)
- a **full-stack web app** (Next.js)
- a shared **backend API** (Fastify)
- a shared package for reusable types/utilities

## Why this stack

This scaffold uses a TypeScript-first JavaScript ecosystem so web and mobile teams can share skills, patterns, and code:

- **Next.js (apps/web)**: modern React framework for full-stack web apps, SSR, routing, and API integration.
- **Expo + React Native (apps/mobile)**: fastest path to cross-platform iOS/Android development with great DX.
- **Fastify (apps/api)**: lightweight, high-performance Node.js API for shared services used by web and mobile.
- **npm workspaces**: simple monorepo management with one dependency graph and consistent scripts.
- **packages/shared**: dedicated place for common domain types/helpers.

## Project structure

```text
clawxpose-app/
├─ apps/
│  ├─ web/        # Next.js web app starter
│  ├─ mobile/     # Expo React Native app starter
│  └─ api/        # Fastify API starter
├─ packages/
│  └─ shared/     # Shared TypeScript utilities/types
├─ .env.example
├─ .gitignore
└─ package.json   # Workspace scripts
```

## Local setup

### 1) Prerequisites

- **Node.js 20+**
- **npm 10+**

### 2) Install dependencies

From repository root:

```bash
npm install
```

### 3) Configure environment variables

Copy each example file as needed:

- `/home/runner/work/clawxpose-app/clawxpose-app/apps/web/.env.example`
- `/home/runner/work/clawxpose-app/clawxpose-app/apps/mobile/.env.example`
- `/home/runner/work/clawxpose-app/clawxpose-app/apps/api/.env.example`

## Development scripts

Run from repository root:

- `npm run dev:web` – start Next.js web app
- `npm run dev:mobile` – start Expo mobile app
- `npm run dev:api` – start Fastify API
- `npm run build` – build all workspaces that define `build`
- `npm run lint` – run lint scripts across workspaces
- `npm run typecheck` – run TypeScript checks across workspaces
- `npm run test` – run test scripts across workspaces
- `npm run format` / `npm run format:check` – format or check formatting

## Suggested next steps

1. **Design shared domain contracts** in `packages/shared` (DTOs, validation schemas, enums).
2. **Connect web and mobile apps to API** via typed client utilities.
3. **Add authentication** (session/JWT + protected routes).
4. **Set up persistence** (PostgreSQL + ORM like Prisma/Drizzle).
5. **Add CI** for lint, typecheck, test, and build in pull requests.
6. **Add E2E tests** for web/mobile critical user flows.

## Notes for contributors

- Keep app-specific code inside each `apps/*` package.
- Move any reusable logic into `packages/shared` early.
- Prefer small, isolated changes per feature to keep reviews easy.
