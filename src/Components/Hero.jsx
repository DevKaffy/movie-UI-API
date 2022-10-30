import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="text-space">
        <h2 className='welcome'>Welcome.</h2>
        <h4 className='subtitle'>
          Millions of movies, TV shows and people to discover. Explore now.
        </h4>
      </div>
      <div className='search-bar'>
        <input type="text" placeholder='Search for a movie, tv show, person...'/>
      <button>Search</button>
      </div>
    </section>
  );
}

export default Hero