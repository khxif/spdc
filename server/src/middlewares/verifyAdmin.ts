import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../models/UserModel";

export const verifyAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ error: "Invalid token" });

    const data: any = verify(token, process.env.JWT_SECRET!);

    const user = await User.findOne({ email: data?.email });
    if (!user) return res.status(401).json({ error: "User not found" });

    if (user.role !== "admin")
      return res
        .status(401)
        .json({ error: "Only admins can access this route!" });

    res.locals.user = user;
    next();
  } catch (error) {
    console.log("verify admin:" + error);
    res
      .status(500)
      .json({ error: (error as Error)?.message || "Internal server Error!" });
  }
};
