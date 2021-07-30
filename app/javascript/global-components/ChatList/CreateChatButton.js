import React, { useState } from "react";
import axios from "axios";

import StyledCreateChatButton from "./CreateChatButton.styled"

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
    <StyledCreateChatButton>
      <input type="text" value={chat} onChange={updateChat} />
      <button onClick={submitChat}>Create</button>
    </StyledCreateChatButton>
  );
};

export default CreateChatButton;
