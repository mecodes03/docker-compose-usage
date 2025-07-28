# How I'm gonna create a Dockerfile for this app

## Step1 - Write Dockerfile

```bash
docker network create my-network
```

## Step2 - build the Dockerfile

```bash
docker build -t my-app . # here no need for any network
```

##### important note:- build shouldn't depend on databse

## Step2 - Create a Network

## Step4 - spin up a postgres database

```bash
docker run --name pg-db --network my-network -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres
```

## Step5 - run the created Docker Image

```bash
docker run --network my-network -e DATABASE_URL=postgresql://postgres:password@pg-db:5432/postgres -p 4000:4000 my-app
```

### here we're using HOST as pg-db since both containers are on same network (my-network)

## we can save ourselves from all this trouble by just using docker-compose
