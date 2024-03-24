import { Router } from "express";
import { getAllSoftwares, sendMail } from "../controllers/controller";

const router = Router();

router.get("/", (req, res) => res.send("hi"));
router.get("/softwares", getAllSoftwares);
router.post("/send-mail", sendMail);

export default router;
