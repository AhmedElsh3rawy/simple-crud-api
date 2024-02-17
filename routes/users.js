import { SlowBuffer } from "buffer";
import express from "express";
import {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  modifyUser,
  updateUser,
} from "../controllers/users.controllers.js";
const router = express.Router();

router.get("/", getUsers);

router.get("/:userId", getUser);

router.post("/", addUser);

router.delete("/:userId", deleteUser);

router.patch("/:userId", modifyUser);

router.put("/:userId", updateUser);

export default router;
