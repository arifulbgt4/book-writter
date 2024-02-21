import styled from "styled-components";

export const UsersWrapper = styled.div`
  width: 35%;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const H4 = styled.h4`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
`;

export const P = styled.p`
  margin: 0;
`;

export const CollaboratorAdd = styled.div`
  display: flex;
  margin: 0 0 20px;
`;

export const UL = styled.ul`
  list-style: none;
  margin: 20px 0;
  padding: 0;
`;

export const Input = styled.input`
  font-size: 14px;
  padding: 0 10px;
  font-weight: 400;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  background: transparent;
  transition: background 0.3s;
  border-radius: 3px;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 6px 10px;
  font-weight: 400;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  transition: background 0.3s;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;
