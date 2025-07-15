import React, { useState, useEffect } from "react";
import "./WorkCard.css";
import useTheme from "../../contexts/theme";
import { RiArrowRightDownLine } from "@remixicon/react";
import LazyImage from "../LazyImage/LazyImage";

function WorkCard({ name, image, brief, source, link, hashtags, tag, tab }) {
  const { themeMode } = useTheme();
  const [img, setImg] = useState(null);
  useEffect(() => {
    import(`../../assets/works/${image}`).then((module) => {
      setImg(module.default);
    });
  });

  return (
    <div
      className={`work-card ${
        tag.includes(tab) ? "show" : "hide"
      } card-${themeMode}`}
    >
      <div className="card-img">
        <LazyImage
          src={img}
          alt={`${name} project mockup`}
          loading="lazy"
          placeholder={
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Loading...
            </div>
          }
        />
      </div>
      <div className="details">
        <p className="work-name">{name}</p>
        <div className="hashtags">
          {hashtags.map((e) => (
            <span>#{e} </span>
          ))}
        </div>
        <p className="work-brief">{brief}</p>
        <div className="work-card-btns">
          {source && (
            <a
              className="source-btn"
              href={source}
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          )}
          {link && (
            <a
              className="source-btn"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              See Live
            </a>
          )}
        </div>
        <RiArrowRightDownLine size={50} className="card-arrow" />
      </div>
    </div>
  );
}

export default WorkCard;
