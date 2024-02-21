import React, { useState } from "react";
import Section from "../Section";
import { BookWrapper } from "./styles";
import Users from "../Users";

const Book = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [readOnly, setReadOnly] = useState(
    user?.role === "user" || !(user?.role === "collaborator")
  );
  const [isAdmin, setIsAdmin] = useState(user?.role === "admin");

  return (
    <BookWrapper>
      <Users user={user} isAdmin={isAdmin} />
      <Section readOnly={isAdmin ? false : readOnly} isAdmin={isAdmin} />
    </BookWrapper>
  );
};

export default Book;
