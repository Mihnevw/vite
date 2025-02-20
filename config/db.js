//Съдържа файловете с конфигурацията за базата данни и Stripe.
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Зарежда променливите от .env.development

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};





//import mongoose from 'mongoose';

//export const connectDB = async () => {
//  try {
//    await mongoose.connect('mongodb://localhost:27017/contactMessages', {
//      useNewUrlParser: true,
//      useUnifiedTopology: true,
//    });
//    console.log("Connected to MongoDB");
//  } catch (error) {
//    console.error("Failed to connect to MongoDB:", error);
//    process.exit(1);
//  }
//};