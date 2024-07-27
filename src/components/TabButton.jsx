import React from "react";

const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <div>
      <li>
        <button className={isSelected ? "active" : undefined}{...props}>{children}</button>
      </li>
    </div>
  );
};

export default TabButton;
