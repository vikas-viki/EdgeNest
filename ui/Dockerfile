FROM node:22-slim AS builder

WORKDIR /app

COPY package.json ./package.json
COPY pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm

COPY . .
RUN pnpm install
RUN pnpm build

FROM node:22-slim 

COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/next.config.ts next.config.ts

EXPOSE 3000 
ENV NODE_ENV=production

CMD ["npm","start"]