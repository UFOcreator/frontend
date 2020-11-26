import './Donations.css';
import React, { Component } from 'react';

const donatedChallenges =
  [
    '30 Push ups',
    '6000 Steps',
    '5 min. Planking',
    '30 Leg raises',
    '10 min. Hardlopen',
    '5 km. Fietsen',
    '15 Sit ups'
  ]

class Donations extends Component {
  render() {
    var Ch;
    Ch = donatedChallenges.map((c) => {
      return (
        <div>
          <li className="lists">{c}</li>
        </div>
      );
    })
    return (
      <div className="donations">
        <img src="Images/DonationBanner.jpeg" alt="DonationBanner" id="imageDonation"></img>
        <ul>
          {Ch}
        </ul>
      </div>
    );
  }
}

export default Donations;