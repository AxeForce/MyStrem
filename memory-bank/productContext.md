# Product Context

## Why This Project Exists
AIOStreams (MyStrem Addon) was created to centralize and simplify the management of multiple Stremio addons and debrid services. Many users face challenges configuring, filtering, and securing access to streaming sources across disparate addons. The recent integration with a backend server addresses the need for secure subscription validation and dynamic Premiumize key management.

## Problems Solved
- Fragmented addon and debrid service configuration.
- Manual and insecure handling of sensitive credentials (e.g., Premiumize API keys).
- Lack of centralized subscription validation and access control.
- Complexity in advanced filtering, sorting, and formatting of streaming results.

## How It Should Work
- Users access a unified configuration page to set preferences and credentials.
- Subscription validation is performed via a user token, with advanced options secured by an admin password.
- Premiumize API keys and other sensitive credentials are managed securely through backend integration.
- The system dynamically updates service credentials and provides clear error messaging for failures.
- Users experience seamless aggregation, filtering, and presentation of streaming sources.

## User Experience Goals
- Simple, intuitive configuration for basic users.
- Advanced options accessible only to authorized admins.
- Secure handling of all sensitive data.
- Responsive feedback and error handling.
- Consistent, high-quality streaming experience across supported platforms.