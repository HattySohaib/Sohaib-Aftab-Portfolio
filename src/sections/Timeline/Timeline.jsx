import React from "react";
import "./Timeline.css";
import EventCard from "../../components/EventCard/EventCard";
import useTheme from "../../contexts/theme";

function Timeline() {
  const { themeMode } = useTheme();
  return (
    <div id="timeline" className={`timeline-${themeMode}`}>
      <p className="timeline-header">
        Wanna know about my <span>education?</span>
      </p>
      <div className="events">
        <div className="timeline-left">
          <div className="line"></div>
        </div>
        <div className="timeline-right">
          <EventCard
            year={"2018"}
            achievement={"Secondary Board Exams"}
            brief={
              "I cleared my class X board exams with 93.5% marks from Saint Andrew's High School."
            }
          />
          <EventCard
            year={"2020"}
            achievement={"Higher Secondary Board Exams"}
            brief={
              "I cleared my class XII board exams with 94.6% marks from U.P. Public School, and got admitted to Jadavpur University for B.Sc Hons. in Mathmatics."
            }
          />
          <EventCard
            year={"2022"}
            achievement={"Joined IIITDM Kurnool"}
            brief={
              "I dropped out of JU and joined the Indian Institute of Information Technology, Design and Manufacturing, Kurnool to pursue B.Tech in CSE."
            }
          />
          <EventCard
            year={"Present"}
            achievement={"Academia and Skills"}
            brief={
              "I ranked 1st in the institute during my freshman year with a C.G.P.A of 9.73. After exploring various skills, I am now proficient in MERN Stack and am regularly challenging my problem solving skills through DSA."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
