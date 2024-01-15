import { Router } from "express";
import {
  createUser,
  getCardsByUser,
  getUserByUsername,
  getUsers,
} from "../controller/user.controller";

const router = Router();

router.post("/user", createUser);
router.get("/user", getUsers);
router.get("/user/:username", getUserByUsername);
router.get("/cardsByUser/:username", getCardsByUser);

export default router;
