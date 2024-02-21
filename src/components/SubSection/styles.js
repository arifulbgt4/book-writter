import styled from "styled-components";

export const SubSectionWrapper = styled.div`
  padding: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  position: relative;
  &:before {
    content: "__";
    position: absolute;
    color: rgba(0, 0, 0, 0.3);
    top: 5px;
    left: -1px;
  }
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  font-weight: 500;
  border: 1px solid transparent;
  outline: none;
  background: transparent;
  transition: background 0.3s;
  border-radius: 3px;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const SubSectionCreate = styled.div``;

export const InputAdd = styled.input`
  font-size: 18px;
  padding: 6px 10px;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  background: transparent;
  transition: background 0.3s;
  border-radius: 3px 0 0 3px;
  border-right-color: transparent;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 6px 10px;
  font-weight: 400;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  //   background: transparent;
  transition: background 0.3s;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;
