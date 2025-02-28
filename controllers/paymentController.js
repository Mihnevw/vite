import stripe from '../config/stripe.js';

export const getPrices = async (req, res) => {
  try {
    const prices = await stripe.prices.list({
      expand: ["data.product"],
    });
    console.log("Fetched prices from Stripe:", prices.data);
    return res.json(prices.data);
  } catch (error) {
    console.error("Error fetching prices:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createCheckoutSession = async (req, res) => {
  try {
    console.log("Received request body:", req.body);

    if (!req.body.priceId) {
      return res.status(400).json({ error: "Missing priceId" });
    }

    const price = await stripe.prices.retrieve(req.body.priceId).catch(() => null);
    if (!price) {
      return res.status(400).json({ error: "Select correct priceId" });
    }

    const origin = req.headers.origin || "http://localhost:3000";
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: req.body.priceId, quantity: 1 }],
      mode: 'payment',
      success_url: `${origin}/success`,
      cancel_url: `${origin}/canceled`,
    });
    console.log("Stripe session created:", session);
    return res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return res.status(500).json({ error: error.message });
  }
};
