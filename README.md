# Smart Supplier Portal

A full-stack, offline-capable Purchase-Order & Supplier workflow platform built with:

Week 1: Project Setup & PWA Spike

Initialize backend (Spring Boot + JPA + PostgreSQL) and frontend (Vite + React + TS + Tailwind + MUI + TanStack Query)

Basic /api/orders CRUD endpoint & OpenAPI docs

Bonus PWA Spike: Register a dummy Service Worker and cache the React shell

Week 2: Database Modeling & Full CRUD

Provision Neon.tech PostgreSQL; define JPA entities (Supplier, Order)

Repos, service layer, controllers for suppliers & orders

Frontend pages/forms for listing, creating, editing, deleting both resources (TanStack Query)

Week 3: Authentication & Authorization

Spring Security + Supabase JWT setup; secure all CRUD APIs

Frontend login/register flows, JWT storage, route guards

Week 4: Event Streaming & Search

Stand up Redpanda + Spring Kafka producers/consumers on order events

Deploy Typesense; index orders/suppliers (use your Kafka stream)

Expose search endpoints; integrate realtime search UI (debounced queries)

Week 5: Offline Capabilities

Full PWA support: Workbox service worker, precaching & runtime caching

Dexie.js for IndexedDB; queue offline CRUD operations & sync processor

Backend upserts to handle sync payloads

Week 6: Deployment & Nginx

Dockerize backend, DB, Redpanda, Typesense, Nginx reverse-proxy + static React host

Deploy backend to Fly.io, frontend to Cloudflare Pages (or behind your Nginx)

SSL termination, path rewrites, caching, load-balancing config

Week 7: Documentation, Testing & Monitoring

Enrich Swagger/OpenAPI docs; Storybook for components

Write unit (JUnit, RTL) and E2E tests (Cypress/Newman)

Instrument Sentry for errors; Prometheus/Grafana for metrics and alerts
