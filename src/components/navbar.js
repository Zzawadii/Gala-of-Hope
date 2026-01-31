import React from "react";
import '../style/nav.css';

const Navbar = ({ dark }) => {
    return (
        <nav className="navbar">
            <div className="logo">GH</div> {/* Always white */}
            <ul className="nav-links">
                <li><a className={dark ? "dark-link" : ""} href="#home">Home</a></li>
                <li><a className={dark ? "dark-link" : ""} href="#about">About</a></li>
                <li><a className={dark ? "dark-link" : ""} href="#faq">Reviews</a></li>
                <li><a className={dark ? "dark-link" : ""} href="#donate">Donate</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
