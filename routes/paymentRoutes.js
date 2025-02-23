import express from 'express';
import { getPrices, createCheckoutSession } from '../controllers/paymentController.js';

const router = express.Router();

router.get('/prices', getPrices);
router.post('/checkout', createCheckoutSession);

export default router;
