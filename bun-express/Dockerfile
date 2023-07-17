FROM oven/bun:latest
WORKDIR /app
COPY package.json package.json
COPY bun.lockb bun.lockb
COPY . .
RUN bun install
RUN bun run build
EXPOSE 8888
CMD ["bun", "index.ts"]