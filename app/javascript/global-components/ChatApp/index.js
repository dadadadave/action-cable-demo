import React, { useState } from "react";

import StyledChatApp from "./ChatApp.styled"
import ChatList from "../ChatList";
import ChatPanel from "../ChatPanel";

const ChatApp = () => {
  const [chat, setChat] = useState(null);

  return (
    <StyledChatApp>
      <h1>ChatApp</h1>
      <h2>the app where you chat</h2>

      <ChatList selectChat={chat => setChat(chat)} />

      <ChatPanel chat={chat} />
    </StyledChatApp>
  );
}

export default ChatApp;
