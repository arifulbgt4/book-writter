import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 30px auto;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  background: transparent;
  transition: background 0.3s;
  margin: 0 0 16px;
  border-radius: 3px 0 0 3px;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 10px;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  transition: background 0.3s;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;
