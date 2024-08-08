import { Router } from "express";
import { hashBlock } from "../controllers/TestController";

const router = Router();

router.post("/hash", hashBlock);

export default router;