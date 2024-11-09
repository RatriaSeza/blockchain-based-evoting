import { Router } from "express";
import { getChartVotesByMajorSeries, getVoteHistory, Vote } from "../controllers/VoteController";

const router = Router();

router.post("/vote", Vote);
router.get("/votes/chart-series-by-major", getChartVotesByMajorSeries);
router.get("/votes/history/:count", getVoteHistory);

export default router;