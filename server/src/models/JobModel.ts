import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["full-time", "internship", "part-time", "software"],
      required: true,
    },
    workMode: {
      type: String,
      enum: ["remote", "on-site", "hybrid"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);
