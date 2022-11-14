FROM node:16-alpine as builder

ENV NODE_ENV=production
ENV DOCKER=true

WORKDIR /usr/src/app

RUN mkdir /config
COPY server/secret /config/
RUN apk add nginx

COPY app/package*.json ./

RUN npm ci

COPY app/. .

RUN npm run build

RUN npm prune --production



COPY nginx/nginx.conf "/etc/nginx/nginx.conf"

WORKDIR /usr/src/api
COPY server/package*.json ./
RUN npm ci
COPY server/. .

COPY start.sh /usr/src/app/
ENTRYPOINT ["/bin/sh", "/usr/src/app/start.sh"]