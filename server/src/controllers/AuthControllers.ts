import { compare } from "bcrypt";
import { Request, Response } from "express";
import { User } from "../models/UserModel";
import { cookieOptions } from "../utils/cookieOptions";
import { createToken } from "../utils/createToken";
import { hashPassword } from "../utils/hashPassword";

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword)
      return res.status(400).json({ error: "Missing credentials" });

    if (password !== confirmPassword)
      return res.status(400).json({ error: "Passwords don't match" });

    const user = await User.find({ email });
    if (user.length > 0)
      return res.status(400).json({ error: "Email already Registered" });

    const hashedPassword = await hashPassword(password);
    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    }).save();

    const token = createToken(newUser?._id, newUser?.username, newUser?.email);
    res.cookie("user", token, cookieOptions);

    res.status(200).json({
      _id: newUser?._id,
      username: newUser?.username,
      email: newUser?.email,
      role: newUser?.role,
    });
  } catch (error) {
    console.log("signup: " + error);
    res
      .status(500)
      .json({ error: (error as Error)?.message || "Internal server Error!" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Missing credentials" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Email not Registered!" });

    const validPassword = await compare(password, user?.password);
    if (!validPassword)
      return res.status(400).json({ error: "Invalid Password" });

    const token = createToken(user._id, user.username, user.email);
    res.cookie("user", token, cookieOptions);

    res.status(200).json({
      _id: user?._id,
      username: user?.username,
      email: user?.email,
      role: user?.role,
    });
  } catch (error) {
    console.log("Login: " + error);
    res
      .status(500)
      .json({ error: (error as Error)?.message || "Internal server Error!" });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("user", cookieOptions);
    res.json({ message: "Logout success" });
  } catch (error) {
    console.log("Logout: " + error);
    res
      .status(500)
      .json({ error: (error as Error)?.message || "Internal server Error!" });
  }
};
