import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  // .connnect(process.env.MONGO)
  .connect("mongodb+srv://t3277qtt:t3277qtt@mern-blog.podi3pb.mongodb.net/mern-blog?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDb is connected");
    console.log(`JWT_SECRET: ${process.env.JWT_SECRET}`);
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
