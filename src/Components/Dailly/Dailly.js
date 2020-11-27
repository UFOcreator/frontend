import './Dailly.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const allChallenges =
  [
    '30 Push ups',
    '6000 Stappen',
    '5 min. Planking',
    '30 Leg raises',
    '10 min. Hardlopen',
    '5 km. Fietsen',
    '15 Sit ups'
  ]

const length = allChallenges.length;

var checkedCount = 0;

var percentage = 0;

class Dailly extends Component {
  state = { percentage: 0 }

  componentDidMount() {
    percentage = 0;
    checkedCount = 0;
  }

  countCheck(checked) {
    if (checked === true) {
      checkedCount++;
    }
    else {
      checkedCount--;
    }
    var percentageTest = Math.round((checkedCount / length) * 100);
    console.log(percentage);
    this.setState({ percentage: percentageTest })
  }

  render() {
    var challenges;
    challenges = allChallenges.map((c) => {
      return (
        <div>
          <input type="checkBox" onChange={(e) => this.countCheck(e.target.checked)}></input>
          <label>{c}</label>
        </div>
      );
    })
    return (
      <div className="dailly">
        <img src="Images/DaillyBanner.jpeg" alt="DaillyBanner" id="imageDailly"></img>
        <div className="content">
          <div className="challengesLeft">
            <p><strong>Wat te doen vandaag?</strong></p>
            <div className="challenges">
              <ul>
                {challenges}
              </ul>
            </div>
          </div>
          <div className="progressRight">
            <div id="circle">
              <CircularProgressbar className="circle" value={this.state.percentage} text={`${this.state.percentage}%`} background styles={buildStyles({ strokeLinecap: "butt", backgroundColor: "rgb(230,230,230)", textColor: "black", pathColor: "rgb(211,16,30)", trailColor: "rgb(255,255,255)" })} />
            </div>
          </div>
        </div>
        <Link to='/'>
          <div className="lowBar">
            <h3 className="textBottom">Daily Challenges</h3>
            <i className="fas fa-chevron-up"></i>
          </div>
        </Link>
      </div>
    );
  }
}
export default Dailly;