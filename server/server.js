//Стартира сървъра и първоначално свързва базата данни.
import 'dotenv/config';
import app from './app.js';
import process from 'process';
import { connectDB } from '../config/database.js';

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
