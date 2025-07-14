import React from "react";
import "./Buttons.css";
import useTheme from "../../contexts/theme";
import { NavLink } from "react-router-dom";
import { RiArrowRightUpLine, RiDownloadLine } from "@remixicon/react";

function ColoredBtn({ href, text, icon }) {
  const { themeMode } = useTheme();
  return (
    <NavLink className="nav-link" to={href}>
      <div className={`colored-btn btn-${themeMode}`}>
        <p className="btn-text">{text}</p>
        <div className="btn-circle">
          {text === "Blogs" ? (
            <RiArrowRightUpLine className="icon" />
          ) : (
            <RiDownloadLine className="dwnld-icon" size={18} />
          )}
        </div>
      </div>
    </NavLink>
  );
}

export default ColoredBtn;
