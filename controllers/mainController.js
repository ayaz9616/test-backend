export const homeController = (req, res) => {
    res.send('Welcome to the Home Page');
}
export const addController = (req,res)=>{
    const {num1, num2}=req.body;
    const sum = parseInt(num1) + parseInt(num2);
    res.send(`The sum is: ${sum}`);
}

import { Client } from "@gradio/client";
import Chat from "../models/chat.js";
export const aiController = async (req, res) => {
    const input = req.body.user_message;
    const client = await Client.connect("FractalAIResearch/Fathom-R1-14B");
    const result = await client.predict("/send_message", { 		
            user_message: input, 		
            max_tokens: 6144, 		
            temperature: 0.1, 		
            top_p: 0.1, 
    });
    res.send(result);
    const chat = new Chat({
        user_message: input,
        ai_response: result.data[0][1].content,
    });
    await chat.save();
    // console.log('Chat saved:', chat);
    // console.log('AI Response:', result);
}    