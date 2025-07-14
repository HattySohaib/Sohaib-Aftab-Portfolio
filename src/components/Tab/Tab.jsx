import React from "react";
import "./Tab.css";

function Tab({ name, isSelected, onClick, className, theme }) {
  return (
    <button
      className={`tab-btn tab-${theme} ${className} ${
        isSelected ? "active-tab" : ""
      }`}
      onClick={onClick}
    >
      <p>{name}</p>
    </button>
  );
}

export default Tab;
