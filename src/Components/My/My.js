import './My.css';
import React, { Component } from 'react';
<<<<<<< HEAD
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

const date = [
  '01 / 12 / 2020',
  '30 / 11 / 2020',
  '29 / 11 / 2020',
  '28 / 11 / 2020',
  '27 / 11 / 2020',
  '26 / 11 / 2020',
  '25 / 11 / 2020',
  '24 / 11 / 2020',
  '23 / 11 / 2020',
  '22 / 11 / 2020',
  '21 / 11 / 2020'
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
          <button id={c} className="lists" onClick={info} value={c} >{c}</button>
          <div className="hider" id={"box" + c}>
            <div className="leftMy">
              <ul className="fillBox" id={"complete" + c}>
              </ul>
              <div>
                
              </div>
            </div>
            <div className="rightMy">
              <ul className="fillBox" id={"dateDone" + c}>
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
=======

class My extends Component {
  render() {
    return (
      <div className="my">
        <h1> My </h1>
>>>>>>> e3bdf968aa7408ebe70af8cbed48c8c0340fce78
      </div>
    );
  }
}

export default My;