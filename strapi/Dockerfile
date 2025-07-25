FROM node:22-slim AS builder

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN yarn build

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app .

ENV NODE_ENV=production
ENV PORT=${STRAPI_PORT}

EXPOSE ${STRAPI_PORT}

RUN mkdir -p ./public/uploads && chmod -R 777 ./public/uploads

CMD ["node", "server.js"]
