import { Router } from "express";
import { create, getAll, getById, getByUserId, deleteById } from "../controllers/VoterController";

const router = Router();

router.get("/voters", getAll);
router.get("/voter/:id", getById)
router.get("/voter/user/:userId", getByUserId);
router.post("/voter", create);
router.delete("/voters/:id", deleteById);

export default router;