import React, { useEffect, useState, useRef } from "react";
import "./SkillCard.css";
import useTheme from "../../contexts/theme";

function SkillCard({ name, iconName, isSelected }) {
  const { themeMode } = useTheme();
  const [img, setImg] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      import(`../../assets/icons/${iconName}`)
        .then((module) => {
          setImg(module.default);
        })
        .catch(() => {
          // Fallback if image fails to load
          setImg(null);
        });
    }
  }, [isInView, iconName]);

  return (
    <div
      ref={cardRef}
      className={`skill-card ${
        isSelected ? "selected-skill" : "not-selected-skill"
      } card-${themeMode}`}
    >
      {img ? (
        <img src={img} alt={`${name} skill icon`} loading="lazy" />
      ) : (
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "#f0f0f0" }}
        ></div>
      )}
    </div>
  );
}

export default SkillCard;
