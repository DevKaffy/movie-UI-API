import React from "react";

const MovieCard = ({ imgUrl, title, id, date }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
        className="movie-card-img"
      />

      <div className="movie-detail">
        <span className="title">{title}</span>
        <span className="date">{date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
