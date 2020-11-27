import './My.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const myChallenges =
  [
    '100 Burpees',
    '25 Lunges',
    '12 Hakken billen',
    '50 min. Boulderen',
    '25 Preacher curls',
    '30 Squats',
    '15 Jumping Jacks',
    '10 Bicycle kicks',
    '15 Sit ups'
  ]

const totalDonations =
  [
    '€ 12.68',
    '€ 19.50',
    '€ 10.00',
    '€ 11.50',
    '€ 16.66',
    '€ 15.99',
    '€ 25.30',
    '€ 39.55',
    '€ 51.05',
    '€ 21.22',
    '€ 13.60',
    '€ 19.65',
    '€ 32.32',
    '€ 29.87',
    '€ 22.16',
    '€ 43.15',
    '€ 49.70',
    '€ 44.69'
  ]

const date = [
  '01/12/2020',
  '30/11/2020',
  '29/11/2020',
  '28/11/2020',
  '27/11/2020',
  '26/11/2020',
  '25/11/2020',
  '24/11/2020',
  '23/11/2020',
  '22/11/2020',
  '21/11/2020'
]

class My extends Component {
  render() {

    // var filler;
    // filler = (z) => {
    // const dlength = date.length;
    // const randomDates = Math.floor(Math.random() * dlength);
    // var randomDateRight = date[randomDates];
    // var fillDates = document.getElementById("randomDate" + e.target.value);
    // fillDates.innerText = randomDateRight;
    // }

    var info;
    info = (e) => {

      const random = Math.floor((Math.random() * 7) + 1);
      var i;
      const dlength = date.length;
      const mdlength = totalDonations.length;

      var add = document.getElementById(e.target.value);
      add.classList.toggle("active");
      var content = add.nextElementSibling;
      if (content.style.display === "flex") {
        content.style.display = "none";
      }
      else {
        content.style.display = "flex";

        if (add.classList.contains("made")) {
          console.log("Doet niks");
        }
        else {

          for (i = 0; i < random; i++) {
            // Create random amount of times completed //
            var complete = document.createElement("li");
            complete.innerText = "Completed: ";
            document.getElementById("complete" + e.target.value).appendChild(complete);

            // Select random Donations //
            const randomDonation = Math.floor(Math.random() * mdlength);
            var randomDonate = totalDonations[randomDonation];
            var donate = document.createElement("li");
            donate.innerText = randomDonate;
            document.getElementById("donation" + e.target.value).appendChild(donate);

            // Create random amount of times completed dates //
            const randomSelectDate = Math.floor(Math.random() * dlength);
            var randomDate = date[randomSelectDate];
            var dates = document.createElement("li");
            dates.innerText = randomDate;
            document.getElementById("dateDone" + e.target.value).appendChild(dates);
          }
          add.classList.add("made");
        }
      }
    }

    var myCh;
    myCh = myChallenges.map((c) => {
      return (
        <div>
          <button id={c} className="lists" onClick={info} value={c}>{c} <span ></span></button>
          <div className="hider" id={"box" + c}>
            <div className="leftMy">
              <ul className="fillBox" id={"complete" + c}>
              </ul>
            </div>
            <div className="middleMy">
            <ul className="fillBox" id={"dateDone" + c}>
              </ul>
            </div>
            <div className="rightMy">
              <ul className="fillBox" id={"donation" + c}>
              </ul>
            </div>
          </div>
        </div>
      );
    })

    return (
      <div className="my">
        <img src="Images/MyBanner.jpeg" alt="myBanner" id="imageMy"></img>
        <div className="contentFull">
          <div className="challengesFull">
            <ul>
              {myCh}
            </ul>
          </div>
        </div>
        <Link to='/'>
          <div className="lowBar">
            <h3 className="textBottom">My Challenges</h3>
            <i className="fas fa-chevron-up"></i>
          </div>
        </Link>
      </div>
    );
  }
}

export default My;