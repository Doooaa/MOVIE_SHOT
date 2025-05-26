import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { moviesContext } from "../contextApi/contextProvider";
import '../styles/detailsPage.css';
import Loader from '../components/loader';

const DetailsPage = () => {
  const { id } = useParams();
  const { loading, movie, getMovieById } = useContext(moviesContext);

  useEffect(() => {
    getMovieById(id);
  }, [id]);

  if (loading) return <Loader />;
  if (!movie) return <p>No movie found.</p>;

  const {
    title,
    original_title,
    original_language,
    overview,
    popularity,
    poster_path,
    backdrop_path,
    release_date,
    vote_average,
    vote_count,
    genres,
    runtime,
    status
  } = movie;

  return (
    <div className="movie-detail-container" >
      {/* Background Image with Overlay */}
      <div 
        className="background-image"
        style={{
        
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`,
        }}
      ></div>

      {/* Content Container */}
      <div className="movie-content-wrapper">
        {/* Poster and Basic Info */}
        <div className="movie-poster-section" >
          <div className="poster-box">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
              alt={title}
              loading="lazy"
            />
            <span className="rating-badge">{vote_average.toFixed(1)}</span>
          </div>

          <div className="basic-info">
            <h1>{title}</h1>
            <p className="meta">
              {release_date} • {runtime} mins • {vote_count} votes
            </p>
            <div className="tags">
              {genres.map((genre, index) => (
                <span key={index} className="tag">
                  {genre.name}
                </span>
              ))}
            </div>
            <p className="status">{status}</p>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="movie-details-section">
          <div className="overview-section">
            <h2>Overview</h2>
            <p className="overview">{overview}</p>
          </div>

          <div className="additional-info">
            <div className="info-grid">
              <div className="info-item">
                <strong>Original Title</strong>
                <p>{original_title}</p>
              </div>
              <div className="info-item">
                <strong>Original Language</strong>
                <p>{original_language.toUpperCase()}</p>
              </div>
              <div className="info-item">
                <strong>Popularity</strong>
                <p>{popularity.toFixed(1)}</p>
              </div>
              {status && (
                <div className="info-item">
                  <strong>Status</strong>
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;