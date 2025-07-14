import React from "react";
import "../Timeline/Timeline.css";
import EventCard from "../../components/EventCard/EventCard";
import useTheme from "../../contexts/theme";
import { workExp } from "../../constants/WorkExp";

function WorkTimeline() {
  const { themeMode } = useTheme();
  return (
    <div id="timeline" className={`timeline-${themeMode}`}>
      <p className="timeline-header">
        Recent Work <span>Experiences</span>
      </p>
      <div className="events">
        <div className="timeline-left">
          <div className="line"></div>
        </div>
        <div className="timeline-right">
          {workExp.map((e, ind) => (
            <EventCard
              year={e.year}
              achievement={e.achievement}
              brief={e.brief}
              key={ind}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkTimeline;
