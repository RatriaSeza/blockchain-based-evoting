import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    if (!process.env.DB_HOST) {
      throw new Error("DB_HOST environment variable is not defined.");
    }
    const conn = await mongoose.connect(process.env.DB_HOST);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
};
