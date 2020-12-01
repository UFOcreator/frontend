import './Home.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {

    return (
      <div className="home">
        <div className="banner">
          <Link to='/dailly'>
            <img src="Images/DaillyBanner.jpeg" alt="DaillyBanner" className="imageHome"></img>
            <div className="lowerBar">
              <h3 className="tempOne">Daily Challenges</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
          </Link>
        </div>

        <div className="banner">
          <Link to='/my'>
            <img src="Images/MyBanner.jpeg" alt="myBanner" className="imageHome"></img>
            <div className="lowerBar">
              <h3 className="tempOne">My Challenges</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
          </Link>
        </div>

        <div className="banner">
          <Link to='/all'>
            <img src="Images/AllBanner.png" alt="AllBanner" className="imageHome"></img>
            <div className="lowerBar">
              <h3 className="tempOne">All Challenges</h3>
              <i className="fas fa-chevron-down"></i>
            </div>

          </Link>
        </div>

        <div className="banner Donations">
          <Link to='/donations'>
            <img src="Images/DonationBanner.jpeg" alt="DonationBanner" className="imageHome"></img>
            <div className="lowerBar">
              <h3 className="tempOne">Donations</h3>
              <i className="fas fa-chevron-down"></i>
            </div>
          </Link>
        </div>
        {/* <div className="seasons">
          <h3>SeizoensChallenges</h3>
          <p id="TimerW"></p>
        </div> */}
      </div>
    );
  }

}

export default Home;