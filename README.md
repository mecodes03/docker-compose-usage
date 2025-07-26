# How I'm gonna create a Dockerfile for this app

## Step1 - Write Dockerfile

## Step2 - Create a Network

```bash
docker network create my-network
```

## Step3 - spin up a postgres database

```bash
docker run --name pg-db --network my-network -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres
```

## Step4 - build the Dockerfile

```bash
docker build -t --network=host my-app .
```

## Step5 - run the created Docker Image

```bash
docker run --network my-network -e DATABASE_URL=postgresql://postgres:password@pg-db:5432/postgres -p 4000:4000 my-app
```
