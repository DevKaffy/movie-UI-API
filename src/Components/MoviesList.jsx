import React, { useState, useEffect, Fragment} from 'react'
import MovieCard from './Moviecard'

const MovieList = ({movies}) => {
console.log(movies)
if(movies.length < 1){
 return <span>loading</span>
}

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title || movie.name}
          imgUrl={movie.poster_path}
          date={movie.release_date}
        />
      ))}
    </div>
  );
}

export default MovieList