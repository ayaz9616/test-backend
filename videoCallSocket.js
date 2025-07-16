const videoCallSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join-room", (roomId) => {
      socket.join(roomId);
      socket.to(roomId).emit("user-joined", socket.id);
    });

    socket.on("offer", ({ roomId, offer }) => {
      socket.to(roomId).emit("receive-offer", { offer, from: socket.id });
    });

    socket.on("answer", ({ roomId, answer }) => {
      socket.to(roomId).emit("receive-answer", { answer, from: socket.id });
    });

    socket.on("ice-candidate", ({ roomId, candidate }) => {
      socket.to(roomId).emit("receive-candidate", candidate);
    });

    socket.on("leave-room", (roomId) => {
      socket.leave(roomId);
      socket.to(roomId).emit("user-left", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

export default videoCallSocket;
