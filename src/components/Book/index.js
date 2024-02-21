import React, { useState } from "react";
import Section from "../Section";
import { BookWrapper } from "./styles";
import Users from "../Users";

const Book = () => {
  const [readOnly, setReadOnly] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <BookWrapper>
      <Users />
      <Section readOnly={readOnly} isAdmin={isAdmin} />
    </BookWrapper>
  );
};

export default Book;
