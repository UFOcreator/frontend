import './All.css';
import React, { Component } from 'react';
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
}

export default All;