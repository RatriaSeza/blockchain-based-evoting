import { ChangePassword, Login, Logout } from "../controllers/AuthController";
import { Router } from "express";
import { userVerication, verifyUser } from "../middlewares/AuthMiddleware";

const router = Router();

router.post('/', userVerication);
router.post('/login', Login);
router.post('/logout', Logout);
router.post('/change-password', verifyUser, ChangePassword);

export default router;