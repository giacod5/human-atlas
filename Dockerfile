# Build: Debian slim, not alpine. WHY: devDeps (wrangler/workerd, oxlint) ship glibc-only binaries.
FROM node:22-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve: static files only, no Node at runtime.
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
