import { Router } from "express";
import { getAllUsers } from "../controllers/UserControllers";
import { verifyAdmin } from "../middlewares/verifyAdmin";

const router = Router();

router.get("/all", verifyAdmin, getAllUsers);

export default router;
