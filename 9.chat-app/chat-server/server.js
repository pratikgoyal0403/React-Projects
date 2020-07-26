const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const app = express();
const Route = require("./routes");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const { getuid } = require("process");

const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 5050;

// app.use(cors());

io.on("connection", (socket) => {
  //code to join user in a room
  socket.on("join", ({ name, room }, cb) => {
    //storing user data in a array and getting  response
    const { user, error } = addUser({ id: socket.id, name, room });

    if (error) {
      return cb({ error });
    }
    //emitting welcome msg to joined user
    socket.emit("message", {
      user: "admin",
      text: `${user.name} welcome to ${user.room} Room`,
    });
    //telling other user about newly joined user
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} joined the chat` });

    //joining new user to chat
    socket.join(user.room);

    //getting info of all the users available in room
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    cb();
  });
  //exchanging users messages
  socket.on("sendMessage", (message, cb) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: message });
    cb();
  });
  //runs when user disconnects
  socket.on("disconnect", () => {
    // removing user from the users array and getting back removed user
    const user = removeUser(socket.id);
    if (user) {
      //informing other users about someone has left the chat
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left the chat`,
      });

      //getting back information of all the users present in the room
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

app.use(Route);

server.listen(PORT, () => {
  console.log("server is up and running on port 5050");
});
