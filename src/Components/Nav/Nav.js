import './Nav.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <ul className="nav-links">
          <Link to='/'>
            <li className="spacing"><span className="fas fa-home"></span>Thuis</li>
          </Link>
          <Link to='/all'>
            <li className="spacing"><span className="fas fa-compass"></span>Ontdek</li>
          </Link>
          <Link to='/my'>
            <li className="spacing"><span className="fas fa-user"></span>Volgend</li>
          </Link>
          <Link to='/donations'>
            <li className="spacing"><span className="fas fa-users"></span>Profiel</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;