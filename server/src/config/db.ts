import mongoose from "mongoose";
import dotenv from "dotenv";


export const connectDB = async () => {
  dotenv.config();
  
  try {
    if (!process.env.DB_HOST) {
      throw new Error("DB_HOST environment variable is not defined.");
    }
    const conn = await mongoose.connect(process.env.DB_HOST, {
      dbName: process.env.DB_NAME,
    });
    console.log(`MongoDB Connected: ${conn.connection.host} \nDatabase: ${conn.connection.db.databaseName}`);
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
};
