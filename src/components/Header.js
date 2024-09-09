import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
