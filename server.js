import express from "express";
import cors from "cors";
import route from "./routes/index.js";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import videoCallSocket from "./videoCallSocket.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// MongoDB Connection
connectDB();

app.use(cors());
app.use(express.json());
app.use('/', route);

// Socket.IO Setup
videoCallSocket(io);

// Start server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
