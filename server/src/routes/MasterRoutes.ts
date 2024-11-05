import { Router } from "express";
import { getMasters, getMasterByKey, createMaster, update, deleteById } from "../controllers/MasterController";

const router = Router();

router.get("/masters", getMasters);
router.get("/masters/:key", getMasterByKey);
router.post("/masters", createMaster);
router.put("/masters/:id", update);
router.delete("/masters/:id", deleteById);

export default router;