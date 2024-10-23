import React from "react";
import useTheme from "../../contexts/theme";
import { RiArrowRightUpLine } from "@remixicon/react";

function TransparentBtn({ text }) {
  const { themeMode } = useTheme();
  return (
    <div className={`transparent-btn btn-${themeMode}`}>
      <p className="btn-text">{text}</p>
      <div className="btn-circle">
        <RiArrowRightUpLine className="icon" />
      </div>
    </div>
  );
}

export default TransparentBtn;
