FROM oven/bun

WORKDIR /usr/src/app

ENV NODE_ENV=production

# TODO: use pre-built binary!
COPY package*.json bun.lockb ./
COPY . .
RUN bun build:server

CMD ["./dist/server"]
