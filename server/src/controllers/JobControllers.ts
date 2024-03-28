import { Request, Response } from "express";
import { Job } from "../models/JobModel";
import { transporter } from "../utils/transporter";

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

export const applyJob = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, phone, experience, description, resume } = req.body;
    if (!name || !phone || !experience || !description || !resume || !id)
      return res.status(401).json({ error: "Missing Entries" });

    const job = await Job.findOne({ _id: id });
    console.log("Job" + job);
    if (!job) return res.status(401).json({ error: "Job not found!" });

    const mailOptions = {
      // from: email,
      to: "khaifmohamededava@gmail.com, code.khaif@gmail.com",
      subject: `Applied for ${job.title}`,
      text: description,
      html: `
      <b>Name:</b> ${name} <br/>
      <b>Phone:</b> ${phone} <br/>
      <b>Experience:</b> ${experience} years <br />
      <b>Description:</b> ${description}
      <br/> 
      <b>Resume: </b> ${resume} <br />
      <b>Applied for:</b> ${job.title} <br />

      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(info);
    if (info.rejected.length > 0)
      return res.status(401).json({ error: "Something went wrong" });

    res.status(200).json({ message: "Done" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: (error as Error)?.message || "Internal server Error!" });
  }
};
