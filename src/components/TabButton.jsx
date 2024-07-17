import React from "react";

const TabButton = ({ children }) => {
  function handlerClick() {
    console.log("Hello Vladimir");
  }

  return (
    <div>
      <li>
        <button onClick={handlerClick}>{children}</button>
      </li>
    </div>
  );
};

export default TabButton;
