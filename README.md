Thought for a second


* **Week 1: Project Setup & PWA Spike**

  * Bootstrap Spring Boot + JPA + PostgreSQL backend
  * Initialize React (Vite + TS + Tailwind + MUI + TanStack Query)
  * CRUD `/api/orders` endpoint & Swagger docs
  * Spike: register Service Worker & cache React shell

* **Week 2: Database Modeling & Full CRUD**

  * Provision Neon.tech Postgres; define `Supplier` & `Order` entities
  * Build repos, service layer, controllers for both models
  * Create React pages/forms (list, create, update, delete) with TanStack Query

* **Week 3: Authentication & Authorization**

  * Integrate Spring Security + Supabase JWT; secure all APIs
  * Build login/register in frontend; store JWT; guard routes

* **Week 4: Event Streaming & Search**

  * Stand up Redpanda + Spring Kafka on order events
  * Deploy Typesense; sync via Kafka; expose search endpoints
  * Implement real-time debounced search UI

* **Week 5: Offline Capabilities**

  * Full PWA: Workbox SW with precaching & runtime caching
  * IndexedDB via Dexie.js; queue offline CRUD + sync handler
  * Backend upserts for sync payloads

* **Week 6: Deployment & Nginx**

  * Dockerize services + Nginx (reverse proxy, SSL, static host)
  * Deploy backend to Fly.io, frontend behind Nginx/Cloudflare Pages
  * Configure caching, load balancing, SPA fallback

* **Week 7: Documentation, Testing & Monitoring**

  * Enhance Swagger/OpenAPI; Storybook for components
  * Write unit (JUnit, RTL) & E2E tests (Cypress)
  * Instrument Sentry (errors) & Prometheus/Grafana (metrics/alerts)
