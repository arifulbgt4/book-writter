import React from "react";
import { H4, P, UsersWrapper } from "./styles";

const Users = ({ user }) => {
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <UsersWrapper>
      <H4>{user?.name}</H4>

      {user?.role && <P>{user?.role}</P>}
      <button onClick={logOut}>Logout</button>
    </UsersWrapper>
  );
};

export default Users;
