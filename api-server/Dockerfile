FROM node:22-slim AS builder

WORKDIR /app

COPY package.json ./package.json
COPY pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm approve-builds @prisma/client

COPY . .
RUN npx prisma generate
ENV NODE_ENV=production
RUN pnpm build

FROM node:22

WORKDIR /app

RUN npm install -g pm2

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
CMD ["pm2-runtime" ,"dist/index.js"]