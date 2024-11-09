import { Router } from "express";
import { create, getAll, getById, getByUserId, deleteById, update, getTotalVoters } from "../controllers/VoterController";

const router = Router();

router.get("/voters", getAll);
router.get("/voter/:id", getById)
router.get("/voter/user/:userId", getByUserId);
router.get("/voters/total", getTotalVoters);
router.post("/voter", create);
router.put("/voter/:id", update);
router.delete("/voters/:id", deleteById);

export default router;