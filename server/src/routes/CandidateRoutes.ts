import { Router } from "express";
import { getCandidates, getByCandidateNumber, createCandidate, getTotalVotesByCandidate, deleteCandidate } from "../controllers/CandidateController";
import { upload } from "../utils/multer";

const router = Router();

router.get("/candidates", getCandidates);
router.post("/candidates", upload.single('image'), createCandidate);
router.get("/candidates/:candidateNumber", getByCandidateNumber);
router.get("/candidates/:candidateNumber/votes", getTotalVotesByCandidate);
router.delete("/candidates/:id", deleteCandidate);

export default router;