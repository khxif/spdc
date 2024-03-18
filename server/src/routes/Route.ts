import { Request, Response, Router } from "express";
import { getAllSoftwares, sendMail } from "../controllers/controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("testing.....");
});

router.get('/softwares',getAllSoftwares)
router.post("/send-mail", sendMail);

export default router;
