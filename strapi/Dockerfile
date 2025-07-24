FROM node:22-slim AS builder

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN yarn build

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app /app

ENV NODE_ENV=production
ENV PORT=${STRAPI_PORT}

EXPOSE ${STRAPI_PORT}

RUN mkdir -p /app/public/uploads && chmod -R 777 /app/public/uploads

CMD ["node", "server.js"]
