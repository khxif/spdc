import { CookieOptions } from "express";

const expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 10);

export const cookieOptions: CookieOptions = {
  maxAge: 30 * 24 * 60 * 60,
  path: "/",
  // expires: expiryDate,
  secure: false,
  sameSite: "none",
  domain:
    process.env.NODE_ENV === "production" ? "spdc-api.vercel.app" : "localhost",
};
