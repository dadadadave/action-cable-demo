import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import ChatSubscriber from "./ChatSubscriber";
import StyledChatPanel from "./ChatPanel.styled";
import CreateMessageForm from "./CreateMessageForm";

const ChatPanel = ({ chat }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!chat) return;

    axios.get(`/chats/${chat}`).then(response => setMessages(response.data.messages));
  }, [chat]);

  if (!chat) return (
    <StyledChatPanel>
      <div className="chat-name">&lt;- pick one</div>
    </StyledChatPanel>
  )

  return (
    <ChatSubscriber
      chat={chat}
      onReceive={data => setMessages(messages => [...messages, data.message])}
    >
      <StyledChatPanel>
        <div className="chat-name">chat</div>

        {messages.map((message, index) => (
          <div className="message" key={message.id}>
            <div className="author">{message.author}</div>
            {message.body}
          </div>
        ))}

        {chat && <CreateMessageForm chat={chat} />}
      </StyledChatPanel>
    </ChatSubscriber>
  );
}

ChatPanel.propTypes = {
  chat: PropTypes.string
};

export default ChatPanel;
