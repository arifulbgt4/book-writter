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

  console.log("read", readOnly);

  return (
    <BookWrapper>
      <Users user={user} />
      <Section readOnly={readOnly} isAdmin={isAdmin} />
    </BookWrapper>
  );
};

export default Book;
