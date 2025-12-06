# Hackathon Management System

> Centralized platform to create, manage, and evaluate hackathons — projects, teams, submissions, judges, scoring, and results.

[Project status badge]: https://img.shields.io/badge/status-active-brightgreen
[License badge]: https://img.shields.io/badge/license-ADD_LICENSE-blue

(Replace the placeholder badges above with real badge links once you add CI, coverage, and license)

## Table of contents

- [About](#about)
- [Why this project exists](#why-this-project-exists)
- [Key features](#key-features)
- [Architecture & tech stack](#architecture--tech-stack)
- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
  - [Clone](#clone)
  - [Install dependencies](#install-dependencies)
  - [Environment variables](#environment-variables)
  - [Database setup & migrations](#database-setup--migrations)
  - [Run (development and production)](#run-development-and-production)
- [API overview](#api-overview)
- [Authentication & authorization](#authentication--authorization)
- [Folder structure](#folder-structure)
- [Testing](#testing)
- [Deployment notes](#deployment-notes)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License & contact](#license--contact)

## About

Hackathon Management System is a TypeScript-based backend (with optional frontend) that provides the functionality required to run hackathons: create events, register participants, form teams, manage judging rounds, accept project submissions, and compute results.

This README is a template. Please adapt any commands and configuration examples below to match your repository's actual tools (e.g., Prisma, TypeORM, Sequelize, MongoDB, PostgreSQL, Docker, Vite, Next.js).

## Why this project exists

Running hackathons requires coordination between organizers, participants, and judges. This project aims to reduce overhead by providing:
- Event lifecycle management (draft → published → finished)
- Team and participant management
- Submission intake and versioning
- Configurable judging rubrics and scoring
- Exportable results and reports

## Key features

- Create/manage hackathon events (title, start/end, categories)
- User roles: Admin / Organizer / Judge / Participant
- Team creation and member invitations
- Project submission upload (files, repo links, descriptions)
- Judge dashboard: assign submissions, score by rubric, leave feedback
- Automatic leaderboard and result export (CSV / JSON)
- Email or webhook notifications (hooks for integrations)
- Role-based access control

## Architecture & tech stack

Suggested stack (replace with what your repo uses):
- Language: TypeScript (Node.js)
- Web framework: Express / Fastify / NestJS (adjust as needed)
- Database: PostgreSQL (or your chosen DB)
- ORM: Prisma / TypeORM / Sequelize
- Authentication: JWT / OAuth / Session
- Storage: Local filesystem / S3 for submission uploads
- Optional front-end: React / Next.js / Vue

## Prerequisites

- Node.js >= 18 (or your project's required version)
- npm >= 8 or yarn / pnpm
- PostgreSQL (or alternative DB) running locally or remotely
- (Optional) Docker & Docker Compose

## Quick start

Below are generic steps — replace commands with ones specific to your project.

### Clone

```bash
git clone https://github.com/Abhishek8133-maker/Hackathon-Management-System.git
cd Hackathon-Management-System
```

### Install dependencies

Using npm:
```bash
npm install
```
Or yarn:
```bash
yarn
```
Or pnpm:
```bash
pnpm install
```

### Environment variables

Create a `.env` from `.env.example` (or create one) and fill values:

Example `.env` (edit to match your stack):
```env
# Server
NODE_ENV=development
PORT=4000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/hackathon_db

# Auth
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

# Storage (optional)
STORAGE_PROVIDER=local
UPLOADS_PATH=./uploads

# Email / SMTP (optional)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASS=supersecret
```

> Keep secrets out of source control. Use secret managers for production.

### Database setup & migrations

If using an ORM, run migrations and seed data. Example (Prisma):
```bash
npx prisma migrate dev --name init
npx prisma db seed
```

Example (TypeORM):
```bash
npm run typeorm migration:run
npm run seed
```

If using raw SQL, run the schema script provided in `scripts/` or `db/`.

### Run (development and production)

Development (with auto-reload):
```bash
npm run dev
# or
yarn dev
```

Build & run production:
```bash
npm run build
npm start
```

Docker (if Dockerfile / docker-compose is provided):
```bash
docker-compose up --build
```

## API overview

Provide a concise list of core API endpoints here (update according to your implementation):

- Authentication
  - POST /api/auth/register — register user
  - POST /api/auth/login — login and return JWT
- Hackathons
  - GET /api/hackathons — list hackathons
  - POST /api/hackathons — create hackathon (organizer/admin)
  - GET /api/hackathons/:id — get hackathon details
- Teams & Participants
  - POST /api/hackathons/:id/teams — create team
  - POST /api/hackathons/:id/teams/:teamId/join — join team
- Submissions
  - POST /api/hackathons/:id/submissions — submit project
  - GET /api/hackathons/:id/submissions — list submissions (judge/admin)
- Judging
  - POST /api/submissions/:submissionId/score — add/edit score
  - GET /api/hackathons/:id/leaderboard — get ranking and results

Add the complete OpenAPI / Swagger spec if available in the repo and link to it.

## Authentication & authorization

- Authentication is typically JWT-based: clients authenticate with /auth/login to receive a token used in Authorization: Bearer <token>
- Authorization is role-based (Admin, Organizer, Judge, Participant). Protect endpoints and resources by checking roles and ownership.

## Folder structure

A recommended (and commonly used) layout. Update to match your repo's actual structure.

```
/src
  /api
  /controllers
  /services
  /models
  /middlewares
  /utils
  /config
  index.ts
/prisma | /migrations | /db
/tests
/docker
/scripts
```

## Testing

Run unit and integration tests (adjust command to your setup):

```bash
npm test
# or
yarn test
```

Set up test database and environment variables (e.g., `DATABASE_URL_TEST`).

Add tests for critical flows:
- User registration / login
- Team creation and joining
- Submission upload
- Judging and scoring logic
- Authorization rules

## Deployment notes

- Use environment variables in production and never commit secrets.
- Use managed DB (Amazon RDS, Cloud SQL) for reliability.
- Use object storage (S3, GCS) for uploaded files and submissions.
- Use a process manager (PM2) or container orchestration (Kubernetes) for scaling.
- Add monitoring and alerting (Sentry, Prometheus, Grafana).

## Roadmap

- Web-based organizer dashboard
- Judge assignment automation
- Multi-round judging with weighted rubrics
- Reporting and export (CSV / XLSX / PDF)
- OAuth social sign-in (GitHub, Google)
- Mobile-friendly UI

## Contributing

Thanks for considering contributing! Please:

1. Fork the repository.
2. Create a feature branch: git checkout -b feat/your-feature
3. Implement changes and add tests.
4. Open a Pull Request describing what you changed and why.

Add a CONTRIBUTING.md file to document contribution process and code style.

## Troubleshooting

- Database connection errors: verify DATABASE_URL, database is running, and network access.
- Migrations fail: check migration files and update ORM config.
- File upload issues: check storage permissions and path config.

If you run into issues, open an issue in this repository with logs and steps to reproduce.

## License & contact

This repository currently has no license configured. Please add a LICENSE file (MIT, Apache-2.0, etc.) to clarify usage.

For questions or help, contact the repository owner:
- GitHub: https://github.com/Abhishek8133-maker

---

Thank you for using Hackathon Management System! Please update this README with project-specific commands, API contracts, and screenshots/captures of the running app to help contributors and users get started quickly.
