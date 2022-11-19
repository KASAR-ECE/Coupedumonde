FROM node:16-alpine as builder

ENV NODE_ENV=production
ENV DOCKER=true

WORKDIR /usr/src/app

RUN mkdir /config

RUN apk add nginx

COPY app/package*.json ./

RUN npm ci

COPY app/. .

RUN npm run build

RUN npm prune --production

FROM node:16-alpine

WORKDIR /usr/src/app
ENV NODE_ENV=production
ENV DOCKER=true

RUN mkdir /config


RUN apk add nginx
COPY nginx/nginx.conf "/etc/nginx/nginx.conf"

COPY --from=builder /usr/src/app/next.config.js ./
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json


WORKDIR /usr/src/api
COPY server/package*.json ./
RUN npm ci
COPY server/. .

COPY start.sh /usr/src/app/
ENTRYPOINT ["/bin/sh", "/usr/src/app/start.sh"]