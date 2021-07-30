import React, { useState } from "react";
import Cookies from "js-cookie";

import StyledChatApp from "./ChatApp.styled"
import ChatList from "../ChatList";
import ChatPanel from "../ChatPanel";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const ChatApp = () => {
  const [user, setUser] = useState(Cookies.get('_chatAppUser'));
  const [chat, setChat] = useState(null);

  return (
    <StyledChatApp>
      <h1>ChatApp</h1>
      <h2>the app where you chat</h2>

      { user ? (
        <>
          <SignOut user={user} onSignOut={() => setUser(null)} />
          <ChatList selectChat={chat => setChat(chat)} />
          <ChatPanel chat={chat} user={user} />
        </>
      ) : (
        <SignIn onSignIn={user => setUser(user)} />
      )}

    </StyledChatApp>
  );
}

export default ChatApp;
