FROM node:22-slim AS builder

WORKDIR /app

# Copy only dependency files for better cache reuse
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app ./

ENV NODE_ENV=production
ENV PORT=${STRAPI_PORT}

EXPOSE ${STRAPI_PORT}

RUN mkdir -p ./public/uploads && chmod -R 777 ./public/uploads

CMD ["yarn", "start"]
