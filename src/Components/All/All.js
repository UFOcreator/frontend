import './All.css';
import React, { Component } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

class All extends Component {
  render() {
    return (
      <div className="all">
       <img src="Images/AllBanner.png" alt="AllBanner" id="imageAll"></img>
        <div className="content">
        
        </div>
        <Link to='/'>
          <div className="lowBar">
            <h3 className="textBottom">All Challenges</h3>
            <i className="fas fa-chevron-up"></i>
          </div>
        </Link>
      </div>
        
    );
  }
=======

class All extends Component {
  render() {
    return (
      <div className="all">
        <h1>All</h1>
      </div>
    );
  }

>>>>>>> e3bdf968aa7408ebe70af8cbed48c8c0340fce78
}

export default All;