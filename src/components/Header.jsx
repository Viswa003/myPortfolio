// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav class="navbar">
        <ul>
          <li id="link"><Link to="/">About</Link></li>
          <li id="link"><Link to="/projects">Projects</Link></li>
          <li id="link"><Link to="/skills">Skills</Link></li>
          <li id="link"><Link to="/contact">Contact</Link></li>
          <div id="button">
          <button>
            Connect
          </button>
          </div>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
