import React from 'react'

 const Navbar = () => {
  return (
    <nav>
      <div className="left-nav">
        <div className="left-circle">
          <h1 className="first-h1">T M D B </h1>
          <div className="circle"></div>
        </div>
        <div className="left-list">
          <span>Movies</span>
          <span>TV Shows</span>
          <span>People</span>
          <span>More</span>
        </div>
      </div>
      <div className="right-nav">
        <h1>+</h1>
        <div className="square">EN</div>
        <span>Login</span>
        <span>Join TMDB</span>
        <img src="/search-line.svg" alt="" />
      </div>
    </nav>
  );
}

export default Navbar