import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default stripe;






//Миналия код
//import Stripe from 'stripe';

//const stripe = new Stripe('sk_test_51OK5YbFIBGHUW2XT5KfyuKRjKaTyxTiPqbNdrxEVNCKNYNxsGXl96EgEITTP4nR19NS8rXzeBBW2BEc8XGcQO1St00uRY205tJ');

//export default stripe;
