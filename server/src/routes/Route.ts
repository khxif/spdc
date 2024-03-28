import { Router } from "express";
import { sendMail } from "../controllers/controller";

const router = Router();

router.post("/send-mail", sendMail);

export default router;
