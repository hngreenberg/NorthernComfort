import React from 'react';

function Header() {
  return (
    <header>
      <div className="header">
        <img id="headerlogo" src="nclogo1.jpg" alt="" />  
        <h2 className="headtitle" style={{
                fontWeight: "bold",
                color: "blue",
                textAlign: "center",
                fontSize: "4em",
                fontFamily: "'Satisfy', cursive",
                textShadow: "3px 5px 4px black",
              }}>YOUR COMFORT MATTERS TO US! </h2>
      </div>
    </header>
  );
}

export default Header;

