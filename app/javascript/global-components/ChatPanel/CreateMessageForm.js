import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import StyledCreateMessageForm from "./CreateMessageForm.styled";

const CreateMessageForm = ({ chat }) => {
  const [message, setMessage] = useState("");

  const updateMessage = (event) => {
    setMessage(event.target.value);
  }

  const submitMessage = (event) => {
    if (!message.trim()) return;

    setMessage("");
    axios.post(`/chats/${chat}/messages`, {
      body: message,
      author: "anonymous"
    });
  }

  return (
    <StyledCreateMessageForm>
      <textarea value={message} onChange={updateMessage} />
      <button onClick={submitMessage}>Post</button>
    </StyledCreateMessageForm>
  );
};

CreateMessageForm.propTypes = {
  chat: PropTypes.string.isRequired
};

export default CreateMessageForm;
