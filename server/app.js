//Инициализира Express, настройва глобални middleware и свързва рутовете.
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import contactRoutes from './routes/contactRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import cookieRoutes from './routes/cookieRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/', cookieRoutes);
app.use('/', paymentRoutes);
app.use('/', contactRoutes);

export default app;
