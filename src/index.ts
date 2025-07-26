import express from "express";
import dotenv from "dotenv";
import connectDB from "./infrastructure/db";

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

connectDB();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));