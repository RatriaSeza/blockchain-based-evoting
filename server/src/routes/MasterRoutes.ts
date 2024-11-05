import { Router } from "express";
import { getMasters, getMasterByKey, createMaster } from "../controllers/MasterController";

const router = Router();

router.get("/masters", getMasters);
router.get("/masters/:key", getMasterByKey);
router.post("/masters", createMaster);

export default router;