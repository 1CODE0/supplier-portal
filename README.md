Updates over current plan:

### ✅ Week 1: Project Setup & PWA Spike

* **Backend**: Spring Boot + Spring Data JPA + PostgreSQL

  * Initialize Gradle project
  * Set up Swagger via SpringDoc (OpenAPI 3)
* **Frontend**: React + Vite + TypeScript + Tailwind + MUI + TanStack Query
* **API**: Basic `/api/orders` CRUD
* **PWA Spike**: Register Service Worker

  * Use [`vite-plugin-pwa`](https://vite-pwa-org.netlify.app/) (MIT License)
  * Shell caching via Workbox (already included in plugin)

---

### ✅ Week 2: Database Modeling & Full CRUD

* **DB**: Use [Neon.tech](https://neon.tech/) (PostgreSQL, Free tier)
* **Entities**: `Supplier`, `Order` with relationships
* **Backend**:

  * Define entities, repositories, service & controller layers
* **Frontend**:

  * Pages + Forms for listing, creating, updating, deleting orders/suppliers
  * TanStack Query for data fetching/caching

---

### 🔐 Week 3: Authentication & Authorization

* **Auth Flow**:

  * Spring Security for API protection
  * Validate Supabase-issued JWTs in Spring (standard public key validation)
* **Frontend**:

  * Supabase for user auth (Email+Password login/signup, totally free)
  * Store JWT in localStorage
  * Protected routes using React Router guards

---

### 🛰️ Week 4: Event Streaming & Search

* **Event Streaming**:

  * If okay with Redpanda (Business Source License + open dev use), use it
  * If licensing is a concern, go with:

    * **Apache Kafka** (Open Source)
    * or **RabbitMQ** (Erlang License, free)
* **Search Engine**:

  * Skip Typesense (GPL)
  * Use **OpenSearch** (Apache 2.0) — ElasticSearch OSS fork
  * Index Orders + Suppliers for full-text search
* **Frontend**:

  * Debounced real-time search input (with TanStack Query)

---

### 🔌 Week 5: Offline Capabilities

* **PWA**:

  * Full PWA with `vite-plugin-pwa` (precaching, runtime caching, update events)
* **Storage**:

  * IndexedDB via **Dexie.js** (Apache 2.0)
* **Sync**:

  * Queue offline updates and sync when back online
  * Backend to handle upserts from sync payload

---

### 🚢 Week 6: Deployment & Nginx

* **Backend**:

  * Containerize Spring Boot app
  * Deploy to **Fly.io** (Free tier)
* **Frontend**:

  * Host static React build on **Cloudflare Pages** (Free tier, blazing fast)
  * Use **Nginx** as reverse proxy (Dockerized)
  * Enable gzip, SSL, SPA fallback, and caching rules

---

### ✅ Week 7: Documentation, Testing & Monitoring

* **Docs**:

  * Swagger UI (backend)
  * **Storybook** (MIT) for React components
* **Tests**:

  * Backend: JUnit + MockMvc
  * Frontend: RTL + **Cypress** for E2E (free tier)
* **Monitoring**:

  * Errors: **Sentry** (free for personal projects)
  * Metrics: **Prometheus + Grafana** (MIT, open-source stack)

---

### 🧩 Notes:

| Area            | Tool                    | License / Cost           |
| --------------- | ----------------------- | ------------------------ |
| Database        | Neon (Postgres)         | Free Tier (Cloud)        |
| Backend         | Spring Boot             | Apache 2.0 (Free)        |
| Frontend        | React + Vite + Tailwind | MIT / Open Source        |
| Auth            | Supabase Auth           | Free tier + Public JWKS  |
| PWA             | `vite-plugin-pwa`       | MIT                      |
| Event Streaming | Kafka or RabbitMQ       | Apache 2.0 / Erlang      |
| Search          | OpenSearch              | Apache 2.0               |
| Deployment (BE) | Fly.io                  | Free tier (256MB, 3 VMs) |
| Deployment (FE) | Cloudflare Pages        | Free                     |
| Monitoring      | Sentry / Prometheus     | Free                     |
| Testing         | JUnit, Cypress, RTL     | Free                     |

---

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
