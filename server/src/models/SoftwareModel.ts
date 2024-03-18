import mongoose from "mongoose";

const softwareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    enum: ["app", "web", "game",'software'],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Software = mongoose.model("Software", softwareSchema);

export { Software };
