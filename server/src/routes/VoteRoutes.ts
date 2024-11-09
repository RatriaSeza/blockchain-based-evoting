import { Router } from "express";
import { getChartVotesByMajorSeries, Vote } from "../controllers/VoteController";

const router = Router();

router.post("/vote", Vote);
router.get("/votes/chart-series-by-major", getChartVotesByMajorSeries);

export default router;