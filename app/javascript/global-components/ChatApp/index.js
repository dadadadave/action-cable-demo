import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { createConsumer } from "@rails/actioncable"

import StyledChatApp from "./ChatApp.styled"
import ChatList from "../ChatList";
import ChatPanel from "../ChatPanel";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import ConnectionContext from "./ConnectionContext";

const ChatApp = () => {
  const [user, setUser] = useState(Cookies.get('_chatAppUser'));
  const [chat, setChat] = useState(null);
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    if (!user) return;

    setConnection(createConsumer());

    return () => setConnection(connection => {
      connection.disconnect();
      return null;
    });
  }, [user]);

  return (
    <StyledChatApp>
      <h1>ChatApp</h1>
      <h2>the app where you chat</h2>

      { user ? (
        <ConnectionContext.Provider value={{ connection, user, chat }}>
          <SignOut onSignOut={() => {
            setChat(null);
            setUser(null);
          }} />

          <ChatList selectChat={chat => setChat(chat)}/>
          <ChatPanel/>
        </ConnectionContext.Provider>
      ) : (
        <SignIn onSignIn={user => setUser(user)} />
      )}

    </StyledChatApp>
  );
}

export default ChatApp;
