import React, { useState, useRef } from "react";
import "./Skills.css";
import { techStack } from "../../constants/skillIcons.js";
import SkillCard from "../../components/SkillCard/SkillCard";
import Tags from "../../components/Tags/Tags";

import { useScroll, useTransform, motion } from "framer-motion";
import useTheme from "../../contexts/theme";

function Skills() {
  const { themeMode } = useTheme();

  const [selectedTags, setSelectedTag] = useState("");

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <div ref={container} id="skills" className={`skills-${themeMode}`}>
      <div className="gradient">
        <motion.p style={{ x: x2 }} className="skills-header">
          Meet my Forte-Folio.
        </motion.p>
      </div>
      <div className="tag-buttons">
        <Tags
          name={"All"}
          isSelected={selectedTags.length === 0}
          onClick={() => {
            setSelectedTag("");
          }}
        />
        <Tags
          name={"Languages"}
          isSelected={selectedTags.includes("Lang")}
          onClick={() => {
            setSelectedTag("Lang");
          }}
        />
        <Tags
          name={"Frameworks"}
          isSelected={selectedTags.includes("Framework")}
          onClick={() => {
            setSelectedTag("Framework");
          }}
        />
        <Tags
          name={"Tools"}
          isSelected={selectedTags.includes("Tool")}
          onClick={() => {
            setSelectedTag("Tool");
          }}
        />
      </div>
      <div className="skills-icons">
        {techStack.map((e, ind) => (
          <SkillCard
            tag={e.tag}
            isSelected={selectedTags === e.tag || selectedTags.length === 0}
            iconName={e.image}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
