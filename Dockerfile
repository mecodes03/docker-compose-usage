FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm

RUN pnpm install

COPY . .

ENV DATABASE_URL=postgresql://postgres:password@localhost:5432/postgres

RUN pnpm dlx prisma migrate dev
RUN pnpm dlx prisma generate
RUN pnpm run build

CMD ["pnpm", "start"]
