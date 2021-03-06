import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to='/'>
          <span className="fas fa-home"></span>
          <li className="spacing">Thuis</li>
        </Link>
        <Link to='/discover'>
          <span className="fas fa-compass"></span>
          <li className="spacing">Ontdek</li>
        </Link>
      </ul>
      <div id="circleWhite">
        <Link to="/new">
          <div id="addButton">
            <span className="fas fa-plus"></span>
          </div>
        </Link>
      </div>
      <ul className="nav-links">
        <Link to='/following'>
          <span className="fas fa-users"></span>
          <li className="spacing">Volgend</li>
        </Link>
        <Link to='/profile'>
          <span className="fas fa-user"></span>
          <li className="spacing">Profiel</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;