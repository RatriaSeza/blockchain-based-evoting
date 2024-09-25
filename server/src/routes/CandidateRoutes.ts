import { Router } from "express";
import { getCandidates, getByCandidateNumber, createCandidate, getTotalVotesByCandidate } from "../controllers/CandidateController";
import { upload } from "../utils/multer";

const router = Router();

router.get("/candidates", getCandidates);
router.post("/candidates", upload.single('image'), createCandidate);
router.get("/candidates/:candidateNumber", getByCandidateNumber);
router.get("/candidates/:candidateNumber/votes", getTotalVotesByCandidate);

export default router;