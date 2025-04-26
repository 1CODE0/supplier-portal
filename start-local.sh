#!/bin/bash

set -e
echo "🔄 Starting Smart Supplier Portal local stack..."
docker compose -f infra/compose.local.yml up --build
