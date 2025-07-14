import React, { useEffect, useState } from "react";
import "./SkillCard.css";
import useTheme from "../../contexts/theme";

function SkillCard({ name, iconName, isSelected }) {
  const { themeMode } = useTheme();

  const [img, setImg] = useState(null);
  useEffect(() => {
    import(`../../assets/icons/${iconName}`).then((module) => {
      setImg(module.default);
    });
  });

  return (
    <div
      className={`skill-card ${
        isSelected ? "selected-skill" : "not-selected-skill"
      } card-${themeMode}`}
    >
      <img src={img} alt="skill" />
    </div>
  );
}

export default SkillCard;
