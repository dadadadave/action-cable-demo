import React from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

import StyledSignOut from "./SignOut.styled";

const SignOut = ({ user, onSignOut }) => {
  const handleSignout = () => {
    Cookies.remove('_chatAppUser');
    onSignOut();
  };

  return (
    <StyledSignOut onClick={handleSignout}>
      Sign Out as {user}
    </StyledSignOut>
  );
};

SignOut.propTypes = {
  user: PropTypes.string.isRequired,
  onSignOut: PropTypes.func.isRequired
};

export default SignOut;
