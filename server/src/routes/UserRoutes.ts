import { Router } from "express";
import { deleteUser, getAllUsers } from "../controllers/UserControllers";
import { verifyAdmin } from "../middlewares/verifyAdmin";

const router = Router();

router.get("/all", getAllUsers);
router.delete("/:id", verifyAdmin, deleteUser);

export default router;
