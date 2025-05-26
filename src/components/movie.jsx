import React, { useState, useEffect } from "react";
import { MdAccessTime, MdLanguage, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const {
    id,
    original_language,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
  } = movie;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;
  const isMedium = windowWidth > 768 && windowWidth <= 1024;

  // Styles
  const cardStyles = {
    backgroundColor: "#3a6ea5",
    width: "100%",
    maxWidth: isMobile ? "100%" : "380px",
    height: isMobile ? "auto" : "480px",
    borderRadius: "8px",
    padding: "8px",
    margin: "16px auto",
    transition: "transform 0.3s ease",
    boxSizing: "border-box",
  };

  const imageContainerStyles = {
    position: "relative",
    height: isMobile ? "200px" : "270px",
    width: "100%",
    overflow: "hidden",
  };

  const imageFitStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const flexColStyles = {
    color: "white",
    padding: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const titleStyles = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    overflow: "hidden",
    fontFamily: "'Anton', sans-serif",
    letterSpacing: "2px",
    fontSize: isMobile ? "16px" : "18px",
    margin: 0,
  };

  const overviewStyles = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    fontSize: isMobile ? "14px" : "16px",
    margin: 0,
  };

  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
  };

  const dateStyles = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    backgroundColor: "#c7f9cc",
    color: "darkblue",
    padding: "4px 8px",
    borderRadius: "8px",
    fontSize: isMobile ? "12px" : "14px",
    whiteSpace: "nowrap",
  };

  const iconsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    flexWrap: "wrap",
  };

  const iconStyles = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    backgroundColor: "#c7f9cc",
    color: "darkblue",
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: isMobile ? "12px" : "14px",
    minWidth: "fit-content",
  };

  const popularityStyles = {
    ...iconStyles,
    backgroundColor: "#03045e",
    color: "white",
  };

  return (
    <div style={cardStyles}>
      <div style={imageContainerStyles}>
        <img
          style={imageFitStyles}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        
        <Link
          to={`/movie/${id}`}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{
              border: "4px solid yellow",
              borderRadius: "50%",
            }}
            width={56}
            height={56}
            src="images/next.png"
            alt="next"
          />
        </Link>
      </div>

      <div style={flexColStyles}>
        <div style={headerStyles}>
          <h5 style={titleStyles}>{title}</h5>
          <div style={dateStyles}>
            <MdAccessTime size={16} />
            <span>{release_date}</span>
          </div>
        </div>

        <p style={overviewStyles}>{overview}</p>

        <div style={iconsContainerStyles}>
          <div style={iconStyles}>
            <MdLanguage size={16} />
            <span>{original_language}</span>
          </div>

          {popularity && (
            <div style={popularityStyles}>
              <MdFavorite size={16} color="red" />
              <span>{popularity.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;