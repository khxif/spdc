import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});
