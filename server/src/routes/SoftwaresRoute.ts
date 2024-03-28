import { Router } from "express";
import {
  addSoftwares,
  getAllSoftwares,
} from "../controllers/SoftwaresControllers";
import { verifyAdmin } from "../middlewares/verifyAdmin";

const router = Router();

router.get("/", getAllSoftwares);
router.post("/add", verifyAdmin, addSoftwares);

export default router;
