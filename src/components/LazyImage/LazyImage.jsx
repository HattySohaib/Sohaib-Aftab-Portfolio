import React, { useState, useRef, useEffect } from "react";

const LazyImage = ({
  src,
  alt,
  className = "",
  style = {},
  loading = "lazy",
  placeholder = null,
  width,
  height,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

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
        rootMargin: "50px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={className} style={style}>
      {placeholder && !isLoaded && (
        <div
          style={{
            backgroundColor: "#f0f0f0",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {placeholder}
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleLoad}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;
