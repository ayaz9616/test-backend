import Chat from '../models/chat.js';
export const allChat = async (req, res) => {
    try {
        const chats = await Chat.find();
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ message: "Error fetching chats" });
    }
}

export const addChatController=async(req,res)=>{
    try{
        const {user_message,ai_response} = req.body;
        const newChat = new Chat({ user_message, ai_response });
        await newChat.save();
        res.status(201).json(newChat);
    }catch(error){
        console.error("Error adding chat:", error);
        res.status(500).json({ message: "Error adding chat" });
    }
}