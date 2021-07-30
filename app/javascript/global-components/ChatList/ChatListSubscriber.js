import React, { useEffect } from "react";
import PropTypes from "prop-types";

import consumer from "../../channels/consumer";

const ChatListSubscriber = ({ children, onReceive }) => {
  useEffect(() => {
    consumer.subscriptions.create({ channel: "ChatListChannel" }, {
      received(data) { onReceive(data) }
    });    
  }, []);

  return children;
}

ChatListSubscriber.propTypes = {
  children: PropTypes.element.isRequired,
  onReceive: PropTypes.func.isRequired
};

export default ChatListSubscriber;
