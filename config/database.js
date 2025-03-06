import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import process from 'process';

// Load environment variables based on NODE_ENV
dotenv.config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || 'development'}.local`) });

console.log("Mongo URI:", process.env.MONGO_URI); // Проверка дали е зареден

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};
