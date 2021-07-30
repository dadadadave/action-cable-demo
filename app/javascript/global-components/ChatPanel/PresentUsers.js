import React, { useState, useEffect, useContext } from "react";

import ConnectionContext from "../ChatApp/ConnectionContext";
import PresenceSubscriber from "./PresenceSubscriber";
import StyledPresentUsers from "./PresentUsers.styled"

const PresentUsers = () => {
  const [users, setUsers] = useState([]);
  const { chat } = useContext(ConnectionContext);

  const updateUsers = (data) => {
    setUsers(users => {
      if (data.status == "absent") {
        return users.filter(user => user.name != data.name);
      } else if (users.some(user => user.name == data.name)) {
        return users.map(user => user.name == data.name ? data : user);
      } else {
        return [...users, data];
      }
    });
  };

  return (
    <PresenceSubscriber onReceive={data => updateUsers(data)}>
      <StyledPresentUsers>
        {users.map(user => (
          <div className={user.status} key={user.name}>{user.name}</div>
        ))}
      </StyledPresentUsers>
    </PresenceSubscriber>
  );
};

export default PresentUsers;
