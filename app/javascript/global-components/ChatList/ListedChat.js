import React from "react";
import PropTypes from "prop-types";

import StyledListedChat from "./ListedChat.styled";

const ListedChat = ({ chat }) => {
  return (
    <StyledListedChat>
      {chat}
    </StyledListedChat> 
  );
};

ListedChat.propTypes = {
  chat: PropTypes.string.isRequired
};

export default ListedChat;
