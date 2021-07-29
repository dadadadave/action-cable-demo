import React, { useState } from "react";
import axios from "axios";

const CreateChatButton = () => {
  const [chat, setChat] = useState("");

  const updateChat = (event) => {
    setChat(event.target.value);
  }

  const submitChat = (event) => {
    if (!chat.trim()) return;

    setChat("");
    axios.post("/chats", { name: chat });
  }

  return (
    <div>
      <input type="text" value={chat} onChange={updateChat}></input>
      <button onClick={submitChat}>Create</button>
    </div>
  );
};

export default CreateChatButton;
