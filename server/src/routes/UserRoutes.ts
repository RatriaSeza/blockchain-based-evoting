import { Router } from "express";
import { getUsers, createUser } from "../controllers/UserController";

const router = Router();

router.get("/users", getUsers);
router.post("/users", createUser);

export default router;