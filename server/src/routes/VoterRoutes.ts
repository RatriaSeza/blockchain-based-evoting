import { Router } from "express";
import { create, getAll, getById, getByUserId } from "../controllers/VoterController";

const router = Router();

router.get("/voter", getAll);
router.get("/voter/:id", getById)
// router.get("/voter/:userId", getByUserId);
router.post("/voter", create);

export default router;