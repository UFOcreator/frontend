import './Home.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (

      <div className="home">
        <h1>Home</h1>
        <ul className="temp">
          <Link to='/dailly'>
            <li className="tempOne">Daily</li>
          </Link>
          <Link to='/my'>
            <li className="tempOne">My</li>
          </Link>
          <Link to='/all'>
            <li className="tempOne">All</li>
          </Link>
          <Link to='/donations'>
            <li className="tempOne">Donations</li>
          </Link>
        </ul>
      </div>
    );
  }

}

export default Home;