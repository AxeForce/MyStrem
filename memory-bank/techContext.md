# Tech Context

## Technologies Used
- TypeScript (monorepo)
- Next.js (frontend)
- Node.js (backend/addon)
- Custom backend API for subscription validation and credential management
- Stremio Addon SDK
- Premiumize, Real-Debrid, and other debrid service APIs

## Development Setup
- Modular packages for frontend, backend, wrappers, types, and utilities
- Docker and Cloudflare Workers supported for deployment
- Configuration managed via unified config object and backend API

## Technical Constraints
- Only `userToken` and `adminPassword` are encrypted/decrypted; `services` and `apiKey` are stored in plaintext on the backend for maintainability and to avoid unnecessary encryption.
- Sensitive credentials (e.g., Premiumize API keys) must not be exposed in the frontend
- Subscription validation and credential updates must be performed server-side
- Advanced configuration is restricted to admin users

## Dependencies
- Stremio Addon SDK
- Premiumize and debrid service libraries
- Express (or similar) for backend API endpoints

## Tool Usage Patterns
- Frontend uses a dedicated API module (`backendApi.ts`) for backend communication
- Backend manages config state and exposes endpoints for frontend
- Wrappers access credentials from backend-managed config