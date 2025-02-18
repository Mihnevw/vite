//Имплементира логиката за обработка на заявките – отделно за контактите, плащанията и cookie.
import Message from '../models/Message.js';

export const saveMessage = async (req, res) => {
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
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    return res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).json({ error: "Failed to fetch messages" });
  }
};
