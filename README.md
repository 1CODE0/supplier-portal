Updates over current plan For React+Vite:

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


Here’s the seven-week roadmap refactored for **Next.js 15 only**, with both **local** (Docker Compose) and **cloud/free-tier** deployment paths baked in:

## ✅ Week 1: Project Setup & PWA Spike

### Backend

* **Tech**: Spring Boot + Spring Data JPA
* **Local**:

  * PostgreSQL container in Docker Compose
  * Expose `/api/orders` CRUD
  * Swagger/OpenAPI with SpringDoc
* **Cloud**:

  * Neon.tech managed Postgres (free forever)
  * Same Spring Boot image, point `SPRING_DATASOURCE_URL` at Neon

### Frontend

* **Tech**: Next.js 15 (App Router + Server Actions), TypeScript
* **Styling**: TailwindCSS + MUI
* **Data fetching**: TanStack Query (for client caching)
* **PWA**:

  * Use `next-pwa` for SW registration, shell precaching & offline fallback
  * Works identically in dev (`npm run dev`) and prod builds

### Local vs Cloud

| Layer    | Local Dev                              | Cloud/Free-Tier                   |
| -------- | -------------------------------------- | --------------------------------- |
| DB       | `postgres:15` container                | Neon.tech Postgres                |
| Backend  | Docker Compose, `./backend/Dockerfile` | Fly.io/Railway free-tier deploy   |
| Frontend | `next dev` inside Compose              | Vercel free-tier (Next.js native) |

---

## ✅ Week 2: Database Modeling & Full CRUD

### Database

* **Local**: Postgres with persistent volume
* **Cloud**: Neon.tech Postgres

### Backend

* Define `Supplier` & `Order` entities, JPA repos, services, controllers
* Use the **same** Docker image locally and on Fly.io/Railway

### Frontend

* Next.js App Routes + Server Actions to call `/api/...`
* CRUD pages/forms for suppliers & orders
* TanStack Query for optimistic updates & cache invalidation

---

## 🔐 Week 3: Authentication & Authorization

### Auth Provider

* **Local**:

  * Option A: Supabase CLI in Docker (“local” mode)
  * Option B: Keycloak container (fully open-source)
* **Cloud**: Supabase Auth free-tier (hosted)

### Backend

* Spring Security validating Supabase-issued JWT via JWKS (or Keycloak JWKS)

### Frontend

* Next.js Middleware to protect app routes
* Login/Register UI using Supabase JS client (or Keycloak OIDC client)
* Store JWT in `localStorage`/`Session`

---

## 🛰️ Week 4: Event Streaming & Search

### Event Streaming

* **Local**:

  * Zookeeper + Kafka or RabbitMQ via Compose
  * Spring Kafka/Rabbit listener → emit WS/SSE to Next.js
* **Cloud** (zero-ops):

  * Postgres `LISTEN/NOTIFY` + Spring’s `@EventListener`
  * Next.js subscribes via Server-Sent Events

### Search

* **Local**: OpenSearch container in Compose
* **Cloud**:

  * Postgres full-text search (GIN + `to_tsvector`)
  * No extra service needed

### Frontend

* Real-time debounced search component hitting either OpenSearch API (local) or your Postgres search endpoint (cloud)

---

## 🔌 Week 5: Offline Capabilities

* **PWA**: `next-pwa` runtime caching (Workbox under the hood)
* **Storage**: Dexie.js IndexedDB queue (MIT)
* **Sync Logic**:

  * Queue mutations offline → replay via Next.js Server Actions when online
  * Backend upserts handle conflicts

Works identically Locally & in Cloud build.

---

## 🚀 Week 6: Deployment & Ingress

### Local (Docker Compose)

```yaml
# docker-compose.yml snippet
services:
  postgres: …
  zookeeper: …        # if using Kafka
  kafka: …
  open_search: …      # if chosen
  supabase_cli: …     # or keycloak
  backend:            # Spring Boot image
  frontend:           # Next.js prod image
  nginx:              # reverse proxy for SSL & routing
```

* **Nginx** routes `/api` → `backend:8080`, everything else → `frontend:3000`.

### Cloud (Free-Tier)

| Layer    | Service          | Notes                         |
| -------- | ---------------- | ----------------------------- |
| DB       | Neon.tech        | free Postgres                 |
| Backend  | Fly.io / Railway | free container hosting        |
| Frontend | Vercel           | native Next.js support + PWA  |
| Auth     | Supabase Auth    | free-tier JWT + social logins |
| CI/CD    | GitHub Actions   | build & deploy pipelines      |

* **Vercel** handles SSL, CDN, routing – no Nginx needed externally.
* **Nginx**:
    * As reverse proxy
    * With gzip, SSL, and SPA fallback config.
* **Fly.io/Railway** give you HTTPS endpoint for Spring Boot.

---

## ✅ Week 7: Documentation, Testing & Monitoring

### Documentation

* Swagger UI (SpringDoc)
* Storybook (MIT) for Next.js/MUI components

### Testing

* **Backend**: JUnit + MockMvc
* **Frontend**: React Testing Library (works with Next.js) + Cypress E2E

### Monitoring & Alerts

* **Errors**: Sentry free-tier
* **Uptime**: GitHub Actions scheduled pings or Uptime Kuma on local VM
* **Metrics**:

  * **Local**: Prometheus + Grafana containers
  * **Cloud**: Use free-tier Grafana Cloud or skip for Postgres health checks

---

### 🧩 Unified Tooling Matrix

| Feature   | Local Container                    | Cloud / Free-Tier      |
| --------- | ---------------------------------- | ---------------------- |
| DB        | Postgres:15 container              | Neon.tech Postgres     |
| Backend   | Spring Boot Docker image           | Fly.io / Railway       |
| Frontend  | Next.js 15 prod image + `next-pwa` | Vercel                 |
| Styling   | TailwindCSS + MUI                  | Same                   |
| Fetching  | TanStack Query                     | Same                   |
| Auth      | Supabase CLI local or Keycloak     | Supabase Auth          |
| Streaming | Kafka/RabbitMQ or LISTEN/NOTIFY    | Postgres LISTEN/NOTIFY |
| Search    | OpenSearch container or PG FTS     | Postgres full-text     |
| PWA       | next-pwa                           | next-pwa               |
| Offline   | Dexie.js                           | Dexie.js               |
| CI/CD     | GitHub Actions                     | GitHub Actions         |
| Errors    | Sentry container or hosted         | Sentry free-tier       |
| Metrics   | Prometheus + Grafana containers    | Grafana Cloud / skip   |
