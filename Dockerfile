FROM node:10-alpine

RUN apk add --no-cache tzdata

ENV NODE_ENV=production

WORKDIR /tmp/pkg
COPY pkg-deps.json /tmp/pkg/package.json
RUN npm i 

COPY npm-pack.tgz /tmp/npm-pack.tgz
RUN set -x \
  && tar -xzf /tmp/npm-pack.tgz -C /tmp \
  && mv /tmp/package /app \
  && mv /tmp/pkg/node_modules /app \
  && rm -rf /tmp/npm-pack.tgz /tmp/pkg $(npm config get cache)

WORKDIR /app

ENV DB_HOST='' \
    DB_HOST='3306' \
    DB_DATABASE='' \
    DB_USER='' \
    DB_PASS='' \
    TZ='Asia/Shanghai' \
    SERVER_PORT='80'

CMD [ "npm", "start" ]
