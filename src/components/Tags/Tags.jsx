import React from "react";
import "./Tags.css";
import useTheme from "../../contexts/theme";

function Tags({ name, isSelected, onClick }) {
  const { themeMode } = useTheme();
  return (
    <button
      onClick={onClick}
      className={`tag-btn ${
        isSelected ? "selected" : "not-selected"
      } tag-${themeMode}`}
    >
      <p>{name}</p>
    </button>
  );
}

export default Tags;
