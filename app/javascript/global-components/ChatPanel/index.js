import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import ConnectionContext from "../ChatApp/ConnectionContext";
import ChatSubscriber from "./ChatSubscriber";
import StyledChatPanel from "./ChatPanel.styled";
import PresentUsers from "./PresentUsers";
import CreateMessageForm from "./CreateMessageForm";

const ChatPanel = () => {
  const [messages, setMessages] = useState([]);
  const { chat } = useContext(ConnectionContext);

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
    <ChatSubscriber onReceive={data => setMessages(messages => [...messages, data.message])}>
      <StyledChatPanel>
        <div className="chat-name">{chat}</div>

        <PresentUsers />

        {messages.map((message, index) => (
          <div className="message" key={message.id}>
            <div className="author">{message.author}</div>
            {message.body}
          </div>
        ))}

        {chat && <CreateMessageForm />}
      </StyledChatPanel>
    </ChatSubscriber>
  );
}

export default ChatPanel;
