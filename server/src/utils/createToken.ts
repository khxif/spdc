import dotenv from "dotenv";
import { sign } from "jsonwebtoken";
import { Types } from "mongoose";
dotenv.config();

export const createToken = (
  id: Types.ObjectId,
  username: string,
  email: string
) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is not defined");
  }

  const token = sign({ id, username, email }, process.env.JWT_SECRET);

  return token;
};
