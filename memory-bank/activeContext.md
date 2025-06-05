# Active Context

## Current Work Focus
- Integrating a backend server for subscription validation and secure Premiumize key management.
- Overhauling the frontend configuration page to simplify the UI, add user token input, and secure advanced options behind an admin password.
- Updating backend configuration logic to manage userToken, adminPassword, apiKey, and services.
- Improving stream resolution logic to check subscriptions and dynamically update Premiumize keys.
- Enhancing error messaging for subscription and key retrieval failures.

## Recent Changes
- Frontend configuration page (`packages/frontend/src/app/configure/page.tsx`) redesigned for simplicity and security.
- Backend config handling (`packages/addon/src/config.ts`, `packages/addon/src/server.ts`) updated for new credential and service management.
- Encryption/decryption logic for `services` and `apiKey` has been removed from the backend; only `userToken` and `adminPassword` are now encrypted/decrypted for simplicity and maintainability.
- Stream resolution logic (`packages/addon/src/addon.ts`) now performs subscription checks and updates Premiumize keys dynamically.
- Premiumize wrappers (`packages/wrappers/src/torrentio.ts`, `packages/wrappers/src/debridio.ts`) now retrieve keys from the updated config structure.
- Config interface (`packages/types/src/types.ts`) updated to reflect new fields.
- New backend communication module (`packages/addon/src/backendApi.ts`) implemented.

## Next Steps
- Further refine error handling and user feedback mechanisms.
- Expand backend API capabilities for additional service integrations.
- Continue improving UI/UX for both basic and advanced configuration.
- Document new backend endpoints and integration patterns.
- Monitor and address any issues arising from the new architecture.

## Important Patterns and Preferences
- All sensitive operations (subscription validation, key management) are handled via backend API.
- Only `userToken` and `adminPassword` are encrypted/decrypted; `services` and `apiKey` are stored in plaintext on the backend to reduce complexity and avoid unnecessary encryption.
- Advanced configuration is protected by admin authentication.
- Dynamic updates to service credentials are prioritized for security and usability.

## Learnings and Insights
- Centralizing credential management improves both security and maintainability.
- Separating user and admin flows simplifies the UI for most users while retaining advanced power for admins.
- Robust error handling is critical for a smooth user experience.