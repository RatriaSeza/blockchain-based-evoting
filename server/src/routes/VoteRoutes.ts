import { Router } from "express";
import { Vote } from "../controllers/VoteController";

const router = Router();

router.post("/vote", Vote);

export default router;