import { Login, Logout } from "../controllers/AuthController";
import { Router } from "express";
import { userVerication } from "../middlewares/AuthMiddleware";

const router = Router();

router.post('/', userVerication);
router.post('/login', Login);
router.post('/logout', Logout);

export default router;