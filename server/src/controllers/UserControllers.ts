import { Request, Response } from "express";
import { User } from "../models/UserModel";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user;
    const users = await User.find({ _id: { $ne: user._id } }).select(
      "-password"
    );
    console.log(users);

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: (error as Error)?.message || "Internal server Error!" });
  }
};
