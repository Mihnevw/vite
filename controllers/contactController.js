//Имплементира логиката за обработка на заявките – отделно за контактите, плащанията и cookie.
import Message from '../model/Message.js';
import process from 'process';

export const saveMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Нова валидация без phone
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ 
        error: "Name, email and message are required" 
      });
    }

    const newMessage = new Message({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "", 
      message: message.trim()
    });

    await newMessage.save();
    
    return res.status(201).json({ 
      success: true,
      message: "Message saved successfully" 
    });
    
  } catch (error) {
    console.error("Database Error:", error);
    return res.status(500).json({
      error: "Грешка при запис в базата",
      details: process.env.NODE_ENV === 'development' 
        ? error.message 
        : undefined
    });
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
