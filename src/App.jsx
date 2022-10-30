import React from 'react';
import { useState } from 'react';
import AvatarContainer from './Components/AvatarContainer';
import MoviesList from './Components/MoviesList';

import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { useEffect } from 'react';
import axios from 'axios';




const App = () => {

const [movies,setMovies] = useState([])

  useEffect(()=>{
    axios
      .get(
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
