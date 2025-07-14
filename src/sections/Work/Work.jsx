import React, { useState } from "react";
import "./Work.css";
import Tab from "../../components/Tab/Tab";
import WorkCard from "../../components/WorkCard/WorkCard";
import useTheme from "../../contexts/theme";
import { projects } from "../../constants/Projects";

function Work() {
  const { themeMode } = useTheme();
  const [tab, setTab] = useState("client");
  return (
    <div id="work" className={`work-${themeMode}`}>
      <p className="work-header">
        Work <span>Experience</span> & Projects
      </p>
      <div className="work-tabs">
        <Tab
          isSelected={tab === "client"}
          onClick={() => {
            setTab("client");
          }}
          className="left-tab-btn"
          name={"Client Work"}
          theme={themeMode}
          key="1"
        />
        <Tab
          isSelected={tab === "project"}
          onClick={() => {
            setTab("project");
          }}
          className="middle-tab-btn"
          name={"Personal Projects"}
          theme={themeMode}
          key="2"
        />
        <Tab
          isSelected={tab === "design"}
          onClick={() => {
            setTab("design");
          }}
          className="right-tab-btn"
          name={"Design Projects"}
          theme={themeMode}
          key="3"
        />
      </div>
      <div className="work-cards">
        {projects.map((e, i) => (
          <WorkCard
            name={e.name}
            image={e.img}
            brief={e.brief}
            source={e.source}
            link={e.link}
            hashtags={e.hashtag}
            tag={e.tag}
            tab={tab}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
