# Talka Monorepo

This repository is a unified monorepo for the **Talka** project, containing:

- Frontend (Telegram Mini App)
- Backend (Task rewards, Wallet, Airdrop APIs)
- Smart Contracts (TON, Tact/FunC)
- Bridge Infrastructure (Rust-based)
- DevOps tooling (Docker, CI/CD, backup)

## Structure


```
talka/
├── client/                  # Frontend (Vite + React)
├── server/                  # Backend (Node.js + Express)
├── contracts/              # Smart contracts (e.g., Tact or FunC)
│   ├── src/
│   ├── build/
│   └── README.md
├── bridge/                 # Cross-chain bridge logic (Rust)
│   ├── src/
│   ├── Cargo.toml
│   └── README.md
├── infra/                  # DevOps infrastructure (Docker, Compose, NGINX)
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── backup.sh
│   └── README.md
├── environments/           # .env.* files and secret management
│   ├── .env.dev
│   ├── .env.staging
│   └── .env.production
├── milestones.db           # Local SQLite DB (dev only, git-ignored)
├── .github/
│   └── workflows/
│       └── ci.yml          # CI/CD pipeline (optional)
├── README.md
└── package.json (optional root scripts)
```


## Branching Strategy

- `main`: Stable production-ready code
- `dev`: Active development
- `staging`: Pre-production testing

## Environment Setup

Environment files for each stage are stored in `/environments`.

## License

MIT (or your chosen license)
