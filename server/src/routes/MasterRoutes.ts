import { Router } from "express";
import { getMasters, getMasterByKey, createMaster } from "../controllers/MasterController";

const router = Router();

router.get("/master", getMasters);
router.get("/master/:key", getMasterByKey);
router.post("/master", createMaster);

export default router;