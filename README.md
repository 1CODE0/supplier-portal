Updates over current plan:

## ✅ Week 1: Project Setup & PWA Spike

* **Backend**

  * Bootstrap Spring Boot + Spring Data JPA
  * PostgreSQL integration
  * API: Basic `/api/orders` CRUD
  * Swagger/OpenAPI via SpringDoc

* **Frontend**

  * React (Vite + TS)
  * TailwindCSS + MUI
  * TanStack Query for data fetching

* **PWA**

  * Register Service Worker
  * Use [`vite-plugin-pwa`](https://vite-pwa-org.netlify.app/) (MIT)
  * Shell precaching + offline fallback

---

## ✅ Week 2: Database Modeling & Full CRUD

* **Database**

  * Use Neon.tech (PostgreSQL, free tier)

* **Backend**

  * Define `Supplier` & `Order` entities
  * Repositories, services, controllers

* **Frontend**

  * CRUD forms & list views for suppliers/orders
  * TanStack Query for state & caching

---

## 🔐 Week 3: Authentication & Authorization

* **Backend**

  * Add Spring Security
  * Validate JWTs issued by Supabase (public JWKS)

* **Frontend**

  * Use Supabase Auth (free tier)
  * Build Login/Register flow
  * Store JWT in localStorage
  * Protect routes via React Router guards

---

## 🛰️ Week 4: Event Streaming & Search

* **Event Streaming**

  * Emit events on order changes
  * Use:

    * Redpanda (if AGPL is OK)
    * Or fallback: **Apache Kafka** / **RabbitMQ** (Apache 2.0 / Erlang)

* **Search**

  * Sync events to search index
  * Use **OpenSearch** (Apache 2.0, Elasticsearch OSS fork)
  * Expose API for search

* **Frontend**

  * Real-time debounced search UI
  * Display live results from OpenSearch

---

## 🔌 Week 5: Offline Capabilities

* **PWA**

  * Full PWA with `vite-plugin-pwa`
  * Runtime caching via Workbox

* **Storage**

  * IndexedDB via **Dexie.js** (Apache 2.0)

* **Sync Logic**

  * Queue offline actions
  * Sync back to server when online
  * Backend handles upserts for conflict resolution

---

## 🚀 Week 6: Deployment & Nginx

* **Backend**

  * Dockerize Spring Boot
  * Deploy to **Fly.io** (free tier)

* **Frontend**

  * Build + deploy to **Cloudflare Pages** (free)
  * Use **Nginx**:

    * As reverse proxy
    * With gzip, SSL, and SPA fallback config

---

## ✅ Week 7: Documentation, Testing & Monitoring

* **Documentation**

  * Swagger UI for API
  * Storybook (MIT) for UI components

* **Testing**

  * Backend: JUnit, MockMvc
  * Frontend: React Testing Library + Cypress (E2E)

* **Monitoring**

  * Errors: **Sentry** (free personal tier)
  * Metrics/Alerts: **Prometheus + Grafana** (MIT)

---

## 🧩 Licensing-Safe Tooling Choices

| Feature         | Tool                 | License         | Notes                           |
| --------------- | -------------------- | --------------- | ------------------------------- |
| DB              | Neon (Postgres)      | Free Tier       | Cloud Postgres                  |
| Backend         | Spring Boot          | Apache 2.0      | Free + mature                   |
| Frontend        | React, Vite          | MIT             | Modern toolchain                |
| Styling         | Tailwind, MUI        | MIT             | Customizable + rich components  |
| Auth            | Supabase             | Free Tier       | JWT-based, open API             |
| Event Streaming | Kafka / RabbitMQ     | Apache / Erlang | Avoid AGPL (Redpanda fallback)  |
| Search          | OpenSearch           | Apache 2.0      | Safe Elasticsearch alt          |
| PWA             | Vite PWA Plugin      | MIT             | Workbox baked in                |
| Monitoring      | Prometheus + Grafana | MIT             | Full observability              |
| Errors          | Sentry               | Free Plan       | Add only client+server tracking |
| Testing         | Cypress, JUnit, RTL  | Free            | Good coverage potential         |
| Deployment (BE) | Fly.io               | Free Tier       | Simple + container native       |
| Deployment (FE) | Cloudflare Pages     | Free Tier       | Blazing fast edge hosting       |

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
