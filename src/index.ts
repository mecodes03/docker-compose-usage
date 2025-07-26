import { PrismaClient } from "@prisma/client";
import express from "express";

const PORT = process.env.PORT || 4000;
const db_url = process.env.DATABASE_URL;
const app = express();
const client = new PrismaClient();

app.use(express.json());

app.get("/user", async (req, res) => {
  console.log(db_url ?? "no db url");
  const users = await client.user.findMany({});
  res.json({ res: "user get", users: users });
});

app.post("/user", async (req, res) => {
  await client.user.create({
    data: {
      name: "christopher" + Math.random().toString(),
      password: Math.random().toString(),
      username: Math.random().toString(),
    },
  });
  res.json({ res: "user created" });
});

app.listen(PORT, () => {
  console.log("server running on port 4000");
});
