import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  & * {
    margin-bottom: 1em;
  }
`;

export const Button = styled.button`
  width: fit-content;
  padding: 12px;
  background-color: #4933d6;
  color: white;
  font-weight: 300;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #8c75ee;
  }
`;
