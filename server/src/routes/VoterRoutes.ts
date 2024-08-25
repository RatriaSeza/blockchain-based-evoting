import { Router } from "express";
import { create, getAll, getById } from "../controllers/VoterController";

const router = Router();

router.get("/voter", getAll);
router.get("/voter/:id", getById);
router.post("/voter", create);

export default router;