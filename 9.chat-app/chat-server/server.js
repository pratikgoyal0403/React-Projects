const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const app = express();
const Route = require("./routes");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 5050;

// app.use(cors());

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, cb) => {
    const { user, error } = addUser({ id: socket.id, name, room });

    if (error) {
      return cb({ error });
    }
    socket.emit("message", {
      user: "admin",
      text: `${user.name} welcome to ${user.room} Room`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} joined the chat` });
    socket.join(user.room);
    cb();
  });

  socket.on("sendMessage", (message, cb) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: message });
    cb();
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    socket.emit("msg", "user connect");
  });
});

app.use(Route);

server.listen(PORT, () => {
  console.log("server is up and running on port 5050");
});
