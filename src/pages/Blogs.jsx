import React from "react";
import useTheme from "../contexts/theme";
import { Bloggest } from "bloggest";

function Blogs() {
  const { themeMode } = useTheme();
  return (
    <div id="blogs-page" style={{ background: "white", width: "100%" }}>
      <Bloggest apiKey={"abcde"} heading={"Recent Blogs"} theme={themeMode} />
    </div>
  );
}

export default Blogs;
