import { Request, Response } from "express";
import { transporter } from "../utils/transporter";
import { Software } from "../models/SoftwareModel";

export const getAllSoftwares = async (req: Request, res: Response) => {
  try {
    const softwares = await Software.find();

    res.status(200).json(softwares);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: (error as Error)?.message || "Internal server Error!" });
  }
};

export const sendMail = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
      return res.status(400).json({ error: "Entries missing!" });

    const mailOptions = {
      from: email,
      to: "khaifmohamededava@gmail.com, code.khaif@gmail.com",
      subject: "SPDC contact form",
      text: message,
      html: `<b>${message}</b>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(info);

    res.json("hi");
  } catch (error) {
    console.log("Send-mail " + error);
    res
      .status(500)
      .json({ error: (error as Error)?.message || "Internal server Error!" });
  }
};
