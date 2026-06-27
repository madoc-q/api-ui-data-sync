# Playwright Automation: Scalable End-to-End Test Framework for the Conduit Platform

This repository showcases production-ready test automation suites built against the live [Conduit RealWorld Application](https://demo.realworld.show) using Playwright, TypeScript, and the Page Object Model (POM). It goes beyond basic scripting to simulate complex workflows and verify data across both the frontend and backend API endpoints ([https://api.realworld.show](https://api.realworld.show)).

## Project Highlight: API-to-UI Data Synchronization Suite

The `api-ui-data-sync` folder contains an API-to-UI Data Synchronization Suite that directly intercepts backend data via REST API calls and instantly validates that the frontend UI renders matching data in real-time to catch critical data-mismatch bugs.

## Quick Execution Command

```bash
cd api-ui-data-sync
npx playwright test
```
