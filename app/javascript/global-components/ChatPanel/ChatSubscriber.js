import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import ConnectionContext from "../ChatApp/ConnectionContext";

const ChatSubscriber = ({ children, onReceive }) => {
  const [subscription, setSubscription] = useState(null);
  const { connection, chat } = useContext(ConnectionContext);

  useEffect(() => {
    if (!connection) return;

    setSubscription(
      connection.subscriptions.create({ channel: "ChatChannel", chat: chat }, {
        received(data) {
          onReceive(data);
        }
      })
    );

    return () => setSubscription(subscription => {
      subscription.unsubscribe();
      return null;
    });
  }, [connection, chat]);

  return children;
};

ChatSubscriber.propTypes = {
  children: PropTypes.element.isRequired,
  onReceive: PropTypes.func.isRequired
};

export default ChatSubscriber;
