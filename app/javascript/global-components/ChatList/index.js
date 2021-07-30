import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import ChatListSubscriber from "./ChatListSubscriber";
import StyledChatList from "./ChatList.styled";
import ListedChat from "./ListedChat";
import CreateChatButton from "./CreateChatButton";

const ChatList = ({ selectChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    axios.get("/chats").then(response => setChats(response.data.chats));
  }, []);

  return (
    <ChatListSubscriber onReceive={data => setChats(chats => [...chats, data.chat])}>
      <StyledChatList>
        <h3>available chats</h3>
        {!chats.length ? 'none' : chats.map(chat => (
          <ListedChat key={chat} chat={chat} selectChat={selectChat} />
        ))}

        <h3>create one</h3>
        <CreateChatButton />
      </StyledChatList>
    </ChatListSubscriber>
  );
}

ChatList.propTypes = {
  selectChat: PropTypes.func.isRequired
};

export default ChatList;
