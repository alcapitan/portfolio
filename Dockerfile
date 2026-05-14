# Étape 1 : Build
FROM node:26-alpine AS build
WORKDIR /app
RUN npm install -g pnpm
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile # assure version exacte avec lockfile
COPY . .
RUN pnpm run build

# Étape 2 : Production
FROM nginx:1-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]