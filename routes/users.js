import { SlowBuffer } from "buffer";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [
  {
    firstName: "John",
    lastName: "Wick",
    age: 30,
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  },
  {
    firstName: "Dean",
    lastName: "Winshester",
    age: 25,
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb0x",
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.get("/:userId", (req, res) => {
  const { id } = req.params.userId;
  const user = users.find((user) => user.id === id);
  res.send(user);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`The user with the id: ${user.id} added to the database`);
});

router.delete("/:userId", (req, res) => {
  const { id } = req.params.userId;
  users.filter((user) => user.id !== id);
  res.send(`The user with the id: ${id} deleted from the database`);
});

export default router;
