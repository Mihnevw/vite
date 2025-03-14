import { config } from 'dotenv';
import process from 'process';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
    PORT,
    NODE_ENV,
    DB_URI,
    MONGO_URI,
    STRIPE_SECRET_KEY
  } = process.env;