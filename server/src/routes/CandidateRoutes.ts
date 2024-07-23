import { Router } from "express";
import { getCandidates, createCandidate } from "../controllers/CandidateController";

const router = Router();

router.get("/candidates", getCandidates);
router.post("/candidates", createCandidate);

export default router;