import './Dailly.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Dailly() {
  return (
    <div className="dailly">
      <img src="Images/DaillyBanner.png" alt="DaillyBanner" id="imageDailly"></img>
      <div className="content">
        <p>Wat te doen vandaag?</p>
        <div className="Challenges">
          <ul>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
            <li>Push Ups</li>
          </ul>
        </div>
      </div>
      <Link to='/'>
        <div className="lowBar">
          <h3 className="textBottom">Dailly Challenges</h3>
          <i className="fas fa-chevron-up"></i>
        </div>
      </Link>
    </div>
  );
}

export default Dailly;