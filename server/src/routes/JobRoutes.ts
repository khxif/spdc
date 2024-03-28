import { Router } from "express";
import { addJobs, applyJob, getAllJobs } from "../controllers/JobControllers";
import { verifyAdmin } from "../middlewares/verifyAdmin";

const router = Router();

router.get("/", getAllJobs);
router.post("/add", verifyAdmin, addJobs);
router.post("/apply/:id", applyJob);

export default router;
