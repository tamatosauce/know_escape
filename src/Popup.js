import React from "react";
import styled from "styled-components";

const Popup = ({ show, children }) => {
  return (
    <Wrapper show={show}>
      <StyledPopup>{children}</StyledPopup>
    </Wrapper>
  );
};

Popup.Text = ({ type, children }) => <Text type={type}>{children}</Text>;

Popup.ConfirmText = ({ children }) => <ConfirmText>{children}</ConfirmText>;

Popup.Actions = ({ children }) => <Actions>{children}</Actions>;

export default Popup;

const whatColor = type => {
  switch (type) {
    case "primary":
      return "#28C1F7";
    case "danger":
      return "#FF5A52";
    default:
      return "#28C1F7";
  }
};

const Wrapper = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${props => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`;

const StyledPopup = styled.div`
  background: #fff;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
  padding: 25px 28px 28px 28px;
  max-width: calc(100vw - 40px);
  text-align: left;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 16px;
  color: ${props => whatColor(props.type)};
`;

const ConfirmText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 16px;
  color: #555b6e;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;
