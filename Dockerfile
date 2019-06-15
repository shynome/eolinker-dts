FROM node:10-alpine as Build

ENV NODE_ENV=production

WORKDIR /tmp/pkg
COPY pkg-deps.json /tmp/pkg/package.json
RUN npm i

FROM node:10-alpine 

RUN apk add --no-cache tzdata

ENV NODE_ENV=production

COPY --from=Build /tmp/pkg/node_modules /app/package/node_modules

ADD npm-pack.tgz /app

WORKDIR /app/package/

ENV DB_HOST='' \
    DB_PORT='3306' \
    DB_DATABASE='' \
    DB_USER='' \
    DB_PASS='' \
    TZ='Asia/Shanghai' \
    SERVER_PORT='80'

CMD [ "npm", "start" ]
