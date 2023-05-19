import React from 'react';

function Header () {
  return (
    <header>
      <div className="header">
      <img id="headerlogo" src="./public/nclogo1.jpg" alt="Header Logo"/>
       
        <div className="header">
          <a className="active" href="#home">Home</a>
          <a href="about">About</a>
          <a href="contact">Contact</a>
          <a href="reviews">Reviews</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
