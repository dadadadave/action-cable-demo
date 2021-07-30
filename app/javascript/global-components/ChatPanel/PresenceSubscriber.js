import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import ConnectionContext from "../ChatApp/ConnectionContext";

const PresenceSubscriber = ({ children, onReceive }) => {
  const [subscription, setSubscription] = useState(null);
  const { connection, chat  } = useContext(ConnectionContext);

  useEffect(() => {
    if (!connection) return;

    setSubscription(
      connection.subscriptions.create({ channel: "PresenceChannel", chat: chat }, {
        received(data) {
          onReceive(data);
        },
        initialized() {
          this.update = this.update.bind(this);
        },
        connected() {
          this.install();
          this.update();
        },
        disconnected() {
          this.uninstall();
        },
        rejected() {
          this.uninstall();
        },
        update() {
          document.hasFocus() ? this.appear() : this.away();
        },
        appear() {
          this.perform("appear", { chat: chat });
        },
        away() {
          this.perform("away", { chat: chat });
        },
        install() {
          window.addEventListener("focus", this.update);
          window.addEventListener("mouseover", this.update);
          window.addEventListener("blur", this.update);
        },
        uninstall() {
          window.removeEventListener("focus", this.update);
          window.removeEventListener("mouseover", this.update);
          window.removeEventListener("blur", this.update);
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

PresenceSubscriber.propTypes = {
  children: PropTypes.element.isRequired,
  onReceive: PropTypes.func.isRequired
};

export default PresenceSubscriber;
