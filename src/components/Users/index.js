import React, { useEffect, useState } from "react";
import {
  Button,
  CollaboratorAdd,
  H4,
  Input,
  P,
  UL,
  UsersWrapper,
} from "./styles";

const Users = ({ user, isAdmin }) => {
  const [data, setData] = useState([]);
  const [value, setvalue] = useState("");
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  const getCollaborator = async () => {
    try {
      const res = await fetch("http://localhost:3001/collaborator");
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      console.error(error);
    }
  };

  const addCollaborator = async () => {
    try {
      if (value?.length === 0) return;
      await fetch("http://localhost:3001/collaborator", {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: value }),
      });
      getCollaborator();
      setvalue("");
    } catch (error) {
      console.error(error);
    }
  };

  const removeCollaborator = async (id) => {
    try {
      await fetch(`http://localhost:3001/collaborator/${id}`, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
      });
      getCollaborator();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCollaborator();
  }, []);

  return (
    <UsersWrapper>
      <H4>{user?.name}</H4>

      {user?.role && <P>{user?.role}</P>}

      {!!data?.length && (
        <>
          <h4>Collaborators</h4>
          <UL>
            {data?.map((el, i) => (
              <li key={i}>
                {el?.email}{" "}
                {isAdmin && (
                  <Button onClick={() => removeCollaborator(el?.id)}>X</Button>
                )}
              </li>
            ))}
          </UL>
        </>
      )}

      {isAdmin && (
        <CollaboratorAdd>
          <Input
            value={value}
            type="email"
            onChange={(e) => setvalue(e.target.value)}
          />
          <Button onClick={addCollaborator}>Add a collaborator</Button>
        </CollaboratorAdd>
      )}
      <button onClick={logOut}>Logout</button>
    </UsersWrapper>
  );
};

export default Users;
