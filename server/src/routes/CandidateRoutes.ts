import { Router } from "express";
import { getCandidates, getByCandidateNumber, createCandidate, getTotalVotesByCandidate, deleteCandidate, getCandidateImage, editCandidate } from "../controllers/CandidateController";
import { upload } from "../utils/multer";

const router = Router();

router.get("/candidates", getCandidates);
router.post("/candidates", upload.single('image'), createCandidate);
router.get("/candidates/image/:candidateNumber", getCandidateImage);
router.get("/candidates/:candidateNumber", getByCandidateNumber);
router.get("/candidates/:candidateNumber/votes", getTotalVotesByCandidate);
router.put("/candidates/:id", upload.single('image'), editCandidate);
router.delete("/candidates/:id", deleteCandidate);

export default router;