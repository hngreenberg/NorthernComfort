import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="home">Home</a>
            <ul>
             <li>
                    <a href="about">About Us</a>
                </li>
                <li>
                    <a href="service">Service Area</a>
                </li>
                <li>
                    <a href="reviews">Reviews</a>
                </li>
                <li>
                    <a href="contact">Contact Us</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

