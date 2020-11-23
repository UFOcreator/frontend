import './Nav.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <ul className="nav-links">
          <Link to='/dailly'>
            <li className="spacing"><span className="fas fa-clock"></span>DAILLY</li>
          </Link>
          <Link to='/all'>
            <li className="spacing">ALL</li>
          </Link>
          <Link to='/my'>
            <li className="spacing">MY</li>
          </Link>
          <Link to='/donations'>
            <li className="spacing">DONATIONS</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;