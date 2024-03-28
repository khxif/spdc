import mongoose from "mongoose";

const softwareSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      enum: ["app", "web", "game", "software"],
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
      enum: ["paid", "free"],
    },
  },
  {
    timestamps: true,
  }
);

export const Software =
  mongoose.models.Software || mongoose.model("Software", softwareSchema);
