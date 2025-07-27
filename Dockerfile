FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm dlx prisma generate
RUN pnpm run build

CMD ["pnpm", "dev:docker"]
