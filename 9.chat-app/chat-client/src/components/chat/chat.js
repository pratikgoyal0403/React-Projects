import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";

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
    socket.emit("join", { name, room }, ()=>{});

    return () => {
      console.log("[component is now unmounting]");
      socket.emit("disconnect");
      socket.off();
    };
  }, [props.location.search, URI]);

  useEffect(() => {
    socket.on(
      "message",
      (msg) => {
        console.log(msg);
        setMessages([...messages, msg]);
      },  
    );
  }, [messages]);

  const sendMessage = (e)=>{
    e.preventDefault();
    if(message){
      console.log(message);
      socket.emit('sendMessage', message, ()=>{
        setMessage('');
      })
    }
  }
  console.log(message, messages);
  return (
    <div className="">
      <input
        type="text"
        placeholder="your text message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={e => e.key === 'Enter'? sendMessage(e): null}
      />
    </div>
  );
};

export default Chat;
