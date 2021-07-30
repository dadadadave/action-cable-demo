import React, { useState, useContext } from "react";
import axios from "axios";

import ConnectionContext from "../ChatApp/ConnectionContext";
import StyledCreateMessageForm from "./CreateMessageForm.styled";

const CreateMessageForm = () => {
  const [message, setMessage] = useState("");
  const { user, chat } = useContext(ConnectionContext);

  const updateMessage = (event) => {
    setMessage(event.target.value);
  }

  const submitMessage = (event) => {
    if (!message.trim()) return;

    setMessage("");
    axios.post(`/chats/${chat}/messages`, {
      body: message,
      author: user
    });
  }

  return (
    <StyledCreateMessageForm>
      <textarea value={message} onChange={updateMessage} />
      <button onClick={submitMessage}>Post</button>
    </StyledCreateMessageForm>
  );
};

export default CreateMessageForm;
