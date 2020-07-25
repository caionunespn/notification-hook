import styled from "styled-components";

export const NotificationContainer = styled.div`
  min-width: 250px;
  max-width: 250px;
  width: fit-content;
  justify-self: flex-end;
  right: 16px;
  top: 16px;
  position: absolute;
  z-index: 10000;
`;

export const Notification = styled.div`
  background-color: #fff;
  min-width: 250px;
  max-width: 250px;
  width: fit-content;
  height: fit-content;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 1em;
  opacity: ${(props) => props.fade};
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  strong {
    font-size: 0.8rem;
  }

  > p {
    font-size: 0.7rem;
    margin-top: 0.2em;
  }
`;

export const NotificationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5em;

  section {
    display: flex;
    align-items: center;

    img {
      width: 28px;
      height: 28px;
      object-fit: cover;
      border-radius: 4px;
    }

    strong {
      margin-left: 8px;
      font-weight: 500;
      color: #555;
    }
  }

  p {
    color: #555;
    font-size: 0.6rem;
  }
`;
