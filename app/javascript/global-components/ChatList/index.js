import React, { useState, useEffect } from "react";
import axios from "axios";

import ChatListSubscriber from "./ChatListSubscriber";
import StyledChatList from "./ChatList.styled";
import ListedChat from "./ListedChat";
import CreateChatButton from "./CreateChatButton";

const ChatList = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    axios.
      get("/chats", { headers: { "Content-Type": "application/json" } }).
      then(response => setChats(response.data.chats));
  }, []);

  const addChat = (chat) => {
    setChats(chats => [...chats, chat])
  };

  return (
    <ChatListSubscriber onReceive={data => addChat(data.chat)}>
      <StyledChatList>
        <h1>ChatApp</h1>
        <h2>the app where you chat</h2>

        <h3>available chats</h3>
        <ListOfChats chats={chats} />

        <h3>create one</h3>
        <CreateChatButton />
      </StyledChatList>
    </ChatListSubscriber>
  );
}

const ListOfChats = ({ chats }) => {
  if (!chats.length) return 'none';

  return (
    <>
      {chats.map(chat => (
        <ListedChat key={chat} chat={chat} />
      ))}
    </>
  );
}

export default ChatList;
