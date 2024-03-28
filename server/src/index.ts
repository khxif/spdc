import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import mongoose from "mongoose";

import AuthRoutes from "./routes/AuthRoutes";
import JobRoutes from "./routes/JobRoutes";
import AppRoutes from "./routes/Route";
import SoftwaresRoutes from "./routes/SoftwaresRoute";
import UserRoutes from "./routes/UserRoutes";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://spdc.vercel.app"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use("/api/v1", AppRoutes);
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/softwares", SoftwaresRoutes);
app.use("/api/v1/jobs", JobRoutes);
app.use("/api/v1/user", UserRoutes);

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
