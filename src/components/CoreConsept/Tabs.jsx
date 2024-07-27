import React from "react";

const Tabs = ({ children, buttons, ButtonsContainer}) => {
  // const ButtonsContainer = buttonsContainer;
  return (
    <div>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </div>
  );
};

export default Tabs;
