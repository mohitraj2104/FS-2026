import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = 8000;

// MongoDB
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err.message);
  });

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});