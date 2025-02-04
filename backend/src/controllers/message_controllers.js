import Message from "../models/message_model.js";
import User from "../models/user_model.js";

export const getContacts = async (req, res) => {
    try {
        
        const currentUserId = req.user._id;
        const users = await User.find({ _id: { $ne:currentUserId } }).select("-password");

        res.status(201).json(users);

    } catch (error) {
        res.status(500).json({ message: error.json });
    }
};

export const getMessages = async (req, res) => {
    try {
        
        const { id } = req.params;
        const sender = req.user._id;

        const messages = await Message.find({$or:[{sender: sender, reciever: id}, {sender: id, reciever: sender}]});

        res.status(201).json(messages);

    } catch (error) {
        res.status(500).json({ message: error.json });
    }
};

export const sendMessage = async (req, res) => {
    try {
        
        const { message } = req.body;
        const { id: receiver } = req.params;
        const sender = req.user._id;

        const newMessage = new Message({
            sender,
            receiver,
            message
        });

        if (newMessage) {
            await newMessage.save();
        }

        res.status(201).json(newMessage);

    } catch (error) {
        res.status(500).json({ message: error.json });
    }
};
