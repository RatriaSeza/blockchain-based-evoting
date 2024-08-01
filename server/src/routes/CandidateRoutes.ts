import { Router } from "express";
import { getCandidates, getByCandidateNumber,createCandidate } from "../controllers/CandidateController";

const router = Router();

router.get("/candidates", getCandidates);
router.post("/candidates", createCandidate);
router.get("/candidates/:candidateNumber", getByCandidateNumber);

export default router;