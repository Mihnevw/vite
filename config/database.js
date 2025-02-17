import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51OK5YbFIBGHUW2XT5KfyuKRjKaTyxTiPqbNdrxEVNCKNYNxsGXl96EgEITTP4nR19NS8rXzeBBW2BEc8XGcQO1St00uRY205tJ');

const app = express();

// Позволяваме Cross-Origin заявки
app.use(cors());

// За да може Express да парсира JSON в тялото на заявките
app.use(express.json());
app.use(cookieParser());

// Свързване с MongoDB
mongoose
  .connect('mongodb://localhost:27017/contactMessages', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB:", err));

// Схема и модел за съобщенията
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", contactSchema);

app.get('/set-cookie', (req, res) => {
    res.cookie('__myCookie', 'cookieValue', {
      sameSite: 'none', // Използвай 'none', ако искаш да го изпращаш в cross-site контекст
      secure: true,     // secure трябва да е true за SameSite='none'
      httpOnly: true,   // По избор, за да не може cookie-то да бъде достъпно от client-side JavaScript
    });
    res.send('Cookie is set');
  });

// GET /get-prices – извличане на цени от Stripe
app.get("/get-prices", async (req, res) => {
  try {
    const prices = await stripe.prices.list({
      expand: ["data.product"], // Разширяване на данните за продукта
    });
    console.log("Fetched prices from Stripe:", prices.data);
    return res.json(prices.data);
  } catch (error) {
    console.error("Error fetching prices:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST /create-checkout-session – създаване на Stripe Checkout сесия
app.post('/create-checkout-session', async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    if (!req.body.priceId) {
      return res.status(400).json({ error: "Missing priceId" });
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
});

// POST /contact – запазване на съобщения в MongoDB
app.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newMessage = new Message({ name, email, phone, message });
    await newMessage.save();
    console.log('New message received:', newMessage);
    return res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    return res.status(500).json({ error: "Failed to save message" });
  }
});

// GET /messages – извличане на всички съобщения
app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    return res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).json({ error: "Failed to fetch messages" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
