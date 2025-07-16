import mongoose from 'mongoose';
const chatSchema =  new mongoose.Schema({
    user_message: {
        type: String,
        required: true,
    },
    ai_response: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
const Chat = mongoose.model('Chat', chatSchema);
export default Chat;
