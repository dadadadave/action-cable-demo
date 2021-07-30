import React, { useEffect } from "react";
import PropTypes from "prop-types";

import consumer from "../../channels/consumer";

const ChatSubscriber = ({ children, chat, onReceive }) => {
  useEffect(() => {
    consumer.subscriptions.create({ channel: "ChatChannel", chat: chat }, {
      received(data) { onReceive(data); }
    });
  }, [chat])

  return children;
};

ChatSubscriber.propTypes = {
  children: PropTypes.element.isRequired,
  onReceive: PropTypes.func.isRequired
};

export default ChatSubscriber;
