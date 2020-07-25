import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="">
      <input
        type="text"
        placeholder="username..."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="room..."
        onChange={(e) => setRoom(e.target.value)}
      />
      <Link to={"/chat?name=" + name + "&room=" + room}>
        <button type="submit">Join the Chat</button>
      </Link>
    </div>
  );
};

export default Join;
