import { Router } from "express";
import { addJobs, getAllJobs } from "../controllers/JobControllers";
import { verifyAdmin } from "../middlewares/verifyAdmin";

const router = Router();

router.get("/", getAllJobs);
router.post("/add", verifyAdmin, addJobs);

export default router;
