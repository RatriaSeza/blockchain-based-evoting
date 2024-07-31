import { Login } from "../controllers/AuthController";
import { Router } from "express";

const router = Router();

router.post('/login', Login);

export default router;