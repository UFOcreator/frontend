import './Donations.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const donatedChallenges =
  [
    '30 Push ups',
    'Daily Challenge  25/11/20',
    '5 min. Planking',
    '30 Leg raises',
    '10 min. Hardlopen',
    'Daily Challenge  24/11/20',
    'Daily Challenge  22/11/20',
    '5 km. Fietsen',
    '15 Sit ups',
    '12 Hakken billen',
    '30 Squats',
    '100 Burpees',
    'Daily Challenge  20/11/20',
    'Daily Challenge  16/11/20'
  ]

const names =
  [
    'Jan van Ham',
    'Jens Heesbeen',
    'Sem Kivits',
    'Youssef El Jaddaoui',
    'Manon Roovers',
    'Scott Pols',
    'Oma Nils',
    'Mex van Gestel',
    'Suly-ann Stokkel',
    'Ka Wing Man',
    'Jarno UijtdeHaag',
    'Bart Scholten',
    'Myrthe de Jong',
    'Michelle Westerhuis',
    'Erik Roekel',
    'Floris Weyns',
    'Matthijs Kropholler',
    'Thijs van der Hulst',
    'Ralph Witvoet',
    'Britt van Lierop',
    'Bas Marechal',
    'Femke Mesman',
    'Pepijn Jacobs',
    'Pieter Wels',
    'Sasja Vos',
    'Emma Bouwens',
    'Pieter Dorst',
    'David Schol',
    'Klaas Kox',
    'Mijke Ellen Zee',
    'Eva Schmetz'
  ]

const amount =
  [
    1.67,
    2.40,
    3.00,
    6.66,
    4.20,
    5.34,
    9.99,
    10.00,
    5.00,
    0.05,
    6.50,
    8.75,
    7.50,
    6.90,
    15.50,
  ]

class Donations extends Component {
  state = { currentBox: 0 };
  render() {

    var rando;
    rando = (e) => {

      // get a random number between 0 and 9 to look how many donaters there are //
      const randomLength = Math.floor((Math.random() * 9) + 1);
      const nlength = names.length;
      const alength = amount.length;
      var i;
      var total = 0;
      var totalNew;

      // Collapsible effect //
      var add = document.getElementById(e.target.value);
      add.classList.toggle("active");
      var content = add.nextElementSibling;
      if (content.style.display === "flex") {
        content.style.display = "none";
      }
      else {
        content.style.display = "flex";

        if (add.classList.contains("made")) {
          console.log("Deze app is gemaakt met behulp van de Rcade Bois, love ya'll");
        }
        else {
          for (i = 0; i < randomLength; i++) {
            // get 2 random numbers to select from the 2 arrays //
            const randomSelectNames = Math.floor(Math.random() * nlength);
            const randomSelectAmount = Math.floor(Math.random() * alength);
            // fill 2 vars with the randomly selected array item //
            var randomName = names[randomSelectNames];
            var randomAmount = amount[randomSelectAmount];
            // create a list item for the names //
            var nameText = document.createElement("li");
            nameText.innerText = randomName;
            document.getElementById("boxName" + e.target.value).appendChild(nameText);
            // create a list item for the amounts //
            var amountText = document.createElement("li");
            amountText.innerText = "€ " + randomAmount.toFixed(2);
            document.getElementById("boxAmount" + e.target.value).appendChild(amountText);
            // makes it so that the random data only gets added once //
            add.classList.add("made");

            // Adding up the total amount of donations //
            var temp = (randomAmount);
            total = total + temp;
            totalNew = total.toFixed(2);
            document.getElementById("boxTotal" + e.target.value).innerText = "€ " + totalNew;
          }
        }
      }
    }

    var Ch;
    Ch = donatedChallenges.map((c) => {
      return (
        <div>
          <button id={c} className="lists" onClick={rando} value={c} >{c}</button>
          <div className="hider" id={"box" + c}>
            <div className="left">
              <ul className="fillBox" id={"boxName" + c}></ul>
            </div>
            <div className="right">
              <ul className="fillBox" id={"boxAmount" + c}></ul>
            </div>
            <div className="total">
              <div className="left down">
                <ul className="fillBox">
                  <il>Totaal:</il>
                </ul>
              </div>
              <div className="right down">
                <ul className="fillBox" id={"boxTotal" + c}></ul>
              </div>
            </div>
          </div>
        </div>
      );
    })
    return (
      <div className="donations">
        <img src="Images/DonationBanner.jpeg" alt="DonationBanner" id="imageDonation"></img>
        <div className="contentFull">
          <div className="challengesFull">
            <ul>
              {Ch}
            </ul>
          </div>
        </div>
        <Link to='/'>
          <div className="lowBar">
            <h3 className="textBottom">Donations</h3>
            <i className="fas fa-chevron-up"></i>
          </div>
        </Link>
      </div>
    );
  }
}

export default Donations;