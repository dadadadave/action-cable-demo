import React, { useState } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

import StyledSignIn from "./SignIn.styled";

const SignIn = ({ onSignIn }) => {
  const [user, setUser] = useState("");

  const updateUser = (event) => {
    setUser(event.target.value);
  }

  const submitUser = (event) => {
    if (!user.trim()) return;

    Cookies.set('_chatAppUser', user);
    onSignIn(user);
  }

  return (
    <StyledSignIn>
      <h3>who are you?</h3>
      <input type="text" value={user} onChange={updateUser}></input>
      <button onClick={submitUser}>Sign In</button>
    </StyledSignIn>
  );
}

SignIn.propTypes = {
  onSignIn: PropTypes.func.isRequired
};

export default SignIn;