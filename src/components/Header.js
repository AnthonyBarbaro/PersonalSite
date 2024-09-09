import React from 'react';
import { Link } from 'react-scroll'; // Used for smooth scrolling on the home page
import { useLocation } from 'react-router-dom'; // To detect the current route
import '../styles/header.css'; // Import styles for the header

function Header() {
  const location = useLocation(); // Get the current route path

  // Check if we are on the home page
  const isHomePage = location.pathname === '/';

  return (
    <header className="nav-header">
      <nav>
        <ul>
          <li>
            {/* If on Home page, use react-scroll for smooth scroll */}
            {isHomePage ? (
              <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                Home
              </Link>
            ) : (
              // If not on Home page, use a normal link to redirect back to the home section
              <a href="/#home">Home</a>
            )}
          </li>
          <li>
            {isHomePage ? (
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                About
              </Link>
            ) : (
              <a href="/#about">About</a>
            )}
          </li>
          <li>
            {isHomePage ? (
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                Projects
              </Link>
            ) : (
              <a href="/#projects">Projects</a>
            )}
          </li>
          <li>
            {isHomePage ? (
              <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                Contact
              </Link>
            ) : (
              <a href="/#contact">Contact</a>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
