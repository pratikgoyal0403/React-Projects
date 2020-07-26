import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Message from "../message/message";
import ScrollToBottom from 'react-scroll-to-bottom';
import classes from "./chat.module.css";

let socket;

const Chat = (props) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const URI = "http://localhost:5050";

  useEffect(() => {
    const { name, room } = queryString.parse(props.location.search);

    setName(name);
    setRoom(room);

    socket = io(URI);
    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [props.location.search, URI]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages([...messages, msg]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.chatContainer}>
        <ScrollToBottom>
        {messages.map((message) => (
          <Message text={message.text} user={message.user} name={name} />
        ))}
        </ScrollToBottom>
      </div>
      <div className={classes.messageContainer}>
        <input
          type="text"
          placeholder="your text message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
      </div>
    </div>
  );
};

export default Chat;
