import React from "react";
import PropTypes from "prop-types";

import StyledListedChat from "./ListedChat.styled";

const ListedChat = ({ chat, selectChat }) => {
  return (
    <StyledListedChat onClick={() => selectChat(chat)}>
      {chat}
    </StyledListedChat> 
  );
};

ListedChat.propTypes = {
  chat: PropTypes.string.isRequired
};

export default ListedChat;
