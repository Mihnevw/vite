//Инициализира Express, настройва глобални middleware и свързва рутовете.
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import process from 'process';

import contactRoutes from '../routes/contactRoutes.js';
import paymentRoutes from '../routes/paymentRoutes.js';
import cookieRoutes from '../routes/cookieRoutes.js';
import checkoutRoutes from '../routes/checkoutRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use((err, req, res, next) => {
	console.error('Global Error:', err);
	res.status(500).json({
	  error: 'Internal Server Error',
	  ...(process.env.NODE_ENV === 'development' && { 
		stack: err.stack,
		message: err.message 
	  })
	});
  });

// Routes
app.use('/api/cookies', cookieRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/checkout', checkoutRoutes);
// Хваща всички неподдържани пътища
app.use((req, res) => {
	res.status(404).json({ message: "Endpoint not found" });
});

export default app;
