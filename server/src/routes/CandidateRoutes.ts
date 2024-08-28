import { Router } from "express";
import { getCandidates, getByCandidateNumber, createCandidate, getTotalVotesByCandidate } from "../controllers/CandidateController";

const router = Router();

router.get("/candidates", getCandidates);
router.post("/candidates", createCandidate);
router.get("/candidates/:candidateNumber", getByCandidateNumber);
router.get("/candidate/:id/votes", getTotalVotesByCandidate);

export default router;