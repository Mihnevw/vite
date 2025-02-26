import Message from '../model/Message.js';
import process from 'process';

export const saveMessage = async (req, res) => {
  try {
    const { firstName, lastName, company, email, phone, message } = req.body;

    // Проверка дали всички необходими полета са попълнени
    if (!firstName?.trim() || !lastName?.trim() || !company?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ 
        error: "First name, last name, company, email, and message are required" 
      });
    }

    const newMessage = new Message({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      company: company.trim(),
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
