import React, { useContext } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

import ConnectionContext from "./ConnectionContext";
import StyledSignOut from "./SignOut.styled";

const SignOut = ({ onSignOut }) => {
  const { user } = useContext(ConnectionContext);

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
  onSignOut: PropTypes.func.isRequired
};

export default SignOut;
