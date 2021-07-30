import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";

import ConnectionContext from "../ChatApp/ConnectionContext";

const ChatListSubscriber = ({ children, onReceive }) => {
  const { connection } = useContext(ConnectionContext);

  useEffect(() => {
    if (!connection) return;

    connection.subscriptions.create({ channel: "ChatListChannel" }, {
      received(data) {
        onReceive(data);
      }
    });    
  }, [connection]);

  return children;
}

ChatListSubscriber.propTypes = {
  children: PropTypes.element.isRequired,
  onReceive: PropTypes.func.isRequired
};

export default ChatListSubscriber;
