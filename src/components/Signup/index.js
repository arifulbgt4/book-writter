import React, { useState } from "react";

import { Button, Form, Input, P } from "./styles";

const SignUp = ({ onClick }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleSubmit = async (e) => {
    e?.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/register/", {
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
      <h2>Sign up</h2>
      <Input name="name" value={values?.name} onChange={handleChange} />
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
      <P onClick={onClick}>You have an account then login</P>
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

export default SignUp;
