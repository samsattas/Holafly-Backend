import { Router } from "express";
import {
  createUser,
  getUserByUsername,
  getUsers,
} from "../controller/user.controller";

const router = Router();

router.post("/user", createUser);

router.get("/user", getUsers);

router.get("/user/:username", getUserByUsername);

export default router;
