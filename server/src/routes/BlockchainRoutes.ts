import { Router } from "express";
import { getVoter } from "../controllers/BlockchainController";

const router = Router();

router.get("/voter/:id", getVoter);

export default router;