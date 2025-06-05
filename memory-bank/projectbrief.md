# Project Brief

## Project Name
AIOStreams (MyStrem Addon)

## Purpose
To provide a unified, highly configurable Stremio addon that aggregates results from multiple addons and debrid services, enabling advanced filtering, sorting, and formatting of streaming sources. The project now integrates with a backend server for subscription validation and Premiumize key management.

## Core Requirements
- Aggregate and deduplicate results from multiple Stremio addons and debrid services.
- Provide a user-friendly frontend configuration page.
- Support advanced filtering, sorting, and formatting options.
- Integrate with a backend server to:
  - Validate user subscriptions via user token.
  - Manage Premiumize API keys securely.
  - Secure advanced configuration options behind an admin password.
- Ensure robust error handling and clear user messaging for subscription and key retrieval failures.
- Maintain compatibility with a wide range of Stremio-compatible applications.

## Goals
- Simplify user experience while maintaining advanced configurability.
- Enhance security and manageability of sensitive credentials (e.g., Premiumize keys).
- Enable dynamic updates to service credentials via backend integration.
- Support both public and self-hosted deployment scenarios.