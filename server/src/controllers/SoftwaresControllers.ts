import { Request, Response } from "express";
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

export const addSoftwares = async (req: Request, res: Response) => {
  try {
    const { name, src, category, price } = req.body;
    if (!name || !src || !category || !price)
      return res.status(400).json({ error: "Missing Entries" });

    const newSoftware = await new Software({
      name,
      src,
      price,
      category: ["software", category],
    }).save();

    res.status(200).json(newSoftware);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: (error as Error)?.message || "Internal server Error!" });
  }
};
