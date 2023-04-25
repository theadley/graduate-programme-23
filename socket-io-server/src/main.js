import { Server } from "socket.io";

const io = new Server(3030, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

console.log("Server is running: localhost:3030");

io.on("connection", (socket) => {
  socket.emit("message", "Welcome to the grad programme 23 weeb chat!");

  socket.on("message", (arg) => {
    console.log(arg);
    socket.broadcast.emit("message", `I heard ${arg}`);
  });
});
