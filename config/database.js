import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51OK5YbFIBGHUW2XT5KfyuKRjKaTyxTiPqbNdrxEVNCKNYNxsGXl96EgEITTP4nR19NS8rXzeBBW2BEc8XGcQO1St00uRY205tJ');

const app = express();
app.use(cors());
app.use(express.json());

// Свързване с MongoDB
mongoose.connect('mongodb://localhost:27017/contactMessages', {
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

app.get("/get-prices", async (req, res) => {
    try {
        const prices = await stripe.prices.list({
            expand: ["data.product"], // Взимаме данните за продукта
        });

        console.log("Fetched prices from Stripe:", prices.data);


        res.json(prices.data);
    } catch (error) {
        console.error("Error fetching prices:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// **Stripe Checkout API**
app.post('/create-checkout-session', async (req, res) => {
    try {
        console.log("Received request body:", req.body); // ✅ Проверка дали получаваме priceId

        if (!req.body.priceId) {
            return res.status(400).json({ error: "Missing priceId" });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [{ price: req.body.priceId, quantity: 1 }],
            mode: 'payment',
            success_url: `${req.headers.origin}/success`,
            cancel_url: `${req.headers.origin}/canceled`,
        });


        console.log("Stripe session created:", session);

        res.json({ sessionId: session.id, url: session.url });
    } catch (error) {
        console.error("Stripe error:", error);
        res.status(500).json({ error: error.message });
    }
});



// POST заявка за изпращане на съобщение
app.post('/contact', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newMessage = new Message({ name, email, phone, message });
        await newMessage.save();

        console.log('New message received:', newMessage);
        res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error saving message:", error);
        res.status(500).json({ error: "Failed to save message" });
    }
});

// GET заявка за извличане на всички съобщения
app.get("/messages", async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ error: "Failed to fetch messages" });
    }
});


app.listen(5000, () => console.log("Server running on port 5000"));