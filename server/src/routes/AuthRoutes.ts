import { Router } from "express";
import { login, logout, signup, verifyToken } from "../controllers/AuthControllers";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/verify-token", verifyToken);

export default router;
