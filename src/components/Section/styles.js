import styled from "styled-components";

export const Wrapper = styled.div`
  width: 65%;
  padding: 0 20px;
`;

export const SectionWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 0 0 20px;
  border-radius: 3px;
  position: relative;
  &:after {
    content: "✍";
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 20px;
  }
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
    &:after {
      opacity: 1;
    }
  }
`;

export const SectionInput = styled.input`
  font-size: 18px;
  padding: 10px;
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

export const AddButton = styled.button`
  font-size: 18px;
  padding: 10px;
  font-weight: 500;
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
