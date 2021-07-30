import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import ConnectionContext from "../ChatApp/ConnectionContext";

const DonationsSubscriber = ({ children, onReceive }) => {
  const [subscription, setSubscription] = useState(null);
  const { connection, chat } = useContext(ConnectionContext);

  useEffect(() => {
    if (!connection) return;

    setSubscription(
      connection.subscriptions.create({ channel: "DonationsChannel", chat: chat }, {
        received(data) {
          onReceive(data);
        }
      })
    );

    return () => setSubscription(subscription => {
      subscription.unsubscribe();
      return null;
    })
  }, [connection, chat]);

  return children;
};

DonationsSubscriber.propTypes = {
  children: PropTypes.element,
  onReceive: PropTypes.func.isRequired
};

export default DonationsSubscriber;
