import { Request, Response } from "express";
import { Job } from "../models/JobModel";

export const addJobs = async (req: Request, res: Response) => {
  try {
    const { title, jobType, workMode, description } = req.body;
    if (!title || !jobType || !workMode || !description)
      return res.status(401).json({ error: "Missing Entries" });

    const newJob = await new Job({
      title,
      jobType,
      workMode,
      description,
    }).save();

    res.status(200).json(newJob);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: (error as Error)?.message || "Internal server Error!" });
  }
};

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find();

    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: (error as Error)?.message || "Internal server Error!" });
  }
};
