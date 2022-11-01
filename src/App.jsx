import React from 'react';
import { useState, useEffect } from 'react';
import MoviesList from './Components/MoviesList';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import axios from 'axios';
import "./App.css";




const App = () => {

const [movies,setMovies] = useState([])

  useEffect(()=>{
    axios(
        "https://api.themoviedb.org/3/trending/all/day?api_key=29435f0c711d3a939a997e7b61babb9a"
      )
      .then((res) => {
      setMovies([...movies, ...res.data.results])
}      );
  },[])
  // console.log(movies)
  return (
    <div>
    <Navbar/>
    <Hero/>
    <MoviesList movies={movies} />
    </div>
  )
}

export default App
