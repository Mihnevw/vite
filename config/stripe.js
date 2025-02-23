import Stripe from 'stripe';
import { config } from 'dotenv';
import process from 'process';

config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

console.log('Stripe secret key:', process.env.STRIPE_SECRET_KEY);

export default stripe;
