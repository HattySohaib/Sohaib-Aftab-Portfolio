import React from "react";
import useTheme from "../contexts/theme";
import { Bloggest } from "bloggest";

function Blogs() {
  const { themeMode } = useTheme();
  return (
    <div id="blogs-page" style={{ background: "white", width: "100%" }}>
      <Bloggest
        apiKey={
          "4219f12c8283958cfbf34dbaa22d8cca827e00701eb94696998b2a410b6da12e"
        }
        heading={"Recent Blogs"}
        theme={themeMode}
      />
    </div>
  );
}

export default Blogs;
