import React, { useState } from "react";
import { Button, Form, Input, P } from "./styles";

const SignIn = ({ onClick }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e?.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/signin/", {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const resData = await res.json();
      localStorage.setItem("token", resData?.accessToken);
      localStorage.setItem("user", JSON.stringify(resData?.user));
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setValues((pre) => ({ ...pre, [e?.target?.name]: e.target.value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign in</h2>
      <Input
        type="email"
        name="email"
        value={values?.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        value={values?.password}
        onChange={handleChange}
      />
      <P onClick={onClick}>You have no account then signup</P>

      <Button type="submit">Sign in</Button>
    </Form>
  );
};

export default SignIn;
