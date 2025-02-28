import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import process from 'process';

// Load environment variables based on NODE_ENV
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

//Във Example.jsx ще имаме това http://localhost:5000/api/checkout/create-checkout-session
router.post('/create-checkout-session', async (req, res) => {
  console.log('Received POST request to /create-checkout-session');
  try {
    const { priceId } = req.body;
    
    if (!priceId) {
      return res.status(400).json({ error: "Missing priceId" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/canceled',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    // Връщайте подробна грешка
    res.status(500).json({ 
      error: error.message || 'Internal Server Error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

export default router;
