# System Patterns

## System Architecture
- Modular monorepo structure with separate packages for frontend, backend (addon), wrappers, types, and utilities.
- Backend server integration for subscription validation and Premiumize key management.
- Frontend communicates with backend via a dedicated API module.

## Key Technical Decisions
- Sensitive operations (subscription checks, credential management) are delegated to a backend API for security.
- Only `userToken` and `adminPassword` are encrypted/decrypted; `services` and `apiKey` are stored in plaintext on the backend to simplify management and avoid unnecessary encryption.
- Advanced configuration options are protected by an admin password.
- Premiumize API keys are dynamically managed and updated in the config's services array.

## Design Patterns in Use
- Separation of concerns: UI, backend logic, and service wrappers are modularized.
- Centralized configuration object (`Config`) shared across backend and wrappers.
- Error handling and user messaging are standardized across frontend and backend.

## Component Relationships
- Frontend configuration page interacts with backend API for subscription and credential management.
- Backend manages config state and exposes endpoints for frontend consumption.
- Wrappers retrieve service credentials from the backend-managed config.

## Critical Implementation Paths
- User submits token and preferences via frontend.
- Backend validates subscription and manages service credentials.
- Stream resolution logic checks subscription status and updates Premiumize keys as needed.
- Wrappers access up-to-date credentials for stream fetching.