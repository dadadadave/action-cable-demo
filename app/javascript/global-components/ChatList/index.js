import React, { useState } from "react";

import StyledChatList from "./ChatList.styled";
import ListedChat from "./ListedChat";
import CreateChatButton from "./CreateChatButton";

const ChatList = () => {
  const [chats, setChats] = useState([]);

  return(
    <StyledChatList>
      <h1>ChatApp</h1>
      <h2>the app where you chat</h2>
      <h3>available chats</h3> 
      {chats.map(chat => (
        <ListedChat key={chat} chat={chat} />
      ))}
      <h3>create one</h3> 
      <CreateChatButton />
    </StyledChatList>
  );
}

export default ChatList;
