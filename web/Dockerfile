# Step 1: Install deps & build
FROM node:20-alpine AS builder
WORKDIR /app

COPY web/package*.json ./
RUN npm install

COPY web/ ./
RUN npm run build

# Step 2: Serve static site
FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app ./
EXPOSE 3000

CMD ["npm", "run", "start"]
