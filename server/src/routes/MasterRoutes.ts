import { Router } from "express";
import { getMasters, getMasterByKey, createMaster, deleteById } from "../controllers/MasterController";

const router = Router();

router.get("/masters", getMasters);
router.get("/masters/:key", getMasterByKey);
router.post("/masters", createMaster);
router.delete("/masters/:id", deleteById);

export default router;