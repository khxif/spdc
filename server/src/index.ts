import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import AppRoutes from "./routes/Route";
import mongoose from "mongoose";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(cors());
app.use("/api/v1", AppRoutes);

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
