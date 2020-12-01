import './All.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const AllChallenges =
  [
    '30 Push ups',
    '5 min. Planking',
    '30 Leg raises',
    '10 min. Hardlopen',
    '5 km. Fietsen',
    '15 Sit ups',
    '12 Hakken billen',
    '30 Squats',
    '100 Burpees',
    '50 min. Boulderen',
    '25 Preacher curls',
    '10 Bicycle kicks',
    '15 Sit ups'
  ]

// const names =
//   [
//     'Jan van Ham',
//     'Jens Heesbeen',
//     'Sem Kivits',
//     'Youssef El Jaddaoui',
//     'Manon Roovers',
//     'Scott Pols',
//     'Oma Nils',
//     'Mex van Gestel',
//     'Suly-ann Stokkel',
//     'Ka Wing Man',
//     'Jarno UijtdeHaag',
//     'Bart Scholten',
//     'Myrthe de Jong',
//     'Michelle Westerhuis',
//     'Erik Roekel',
//     'Floris Weyns',
//     'Matthijs Kropholler',
//     'Thijs van der Hulst',
//     'Ralph Witvoet',
//     'Britt van Lierop',
//     'Bas Marechal',
//     'Femke Mesman',
//     'Pepijn Jacobs',
//     'Pieter Wels',
//     'Sasja Vos',
//     'Emma Bouwens',
//     'Pieter Dorst',
//     'David Schol',
//     'Klaas Kox',
//     'Mijke Ellen Zee',
//     'Eva Schmetz'
//   ]



class All extends Component {
  render() {

    // const namelength = names.length;
    var Ch;
    Ch = AllChallenges.map((c) => {
      
      // const randomNameNumber = Math.floor(Math.random() * namelength);
      // var randomNameSelection = names[randomNameNumber];
      // var nameFiller = document.createElement("li");
      // nameFiller.innerText = randomNameSelection;
      // document.getElementById("nameRight" + c).innerHTML(randomNameSelection);
      // console.log(nameFiller.textContent);
      // console.log(randomNameSelection);
      return (
        <div>
          <button id={c} className="lists" value={c} >{c}<div id={"nameRight" + c} value={c} className="nameDateRight"></div></button>
        </div>
      );
    })
    return (
      <div className="all">
        <img src="Images/AllBanner.png" alt="AllBanner" id="imageAll"></img>
        <div className="contentFull">
          <div className="challengesFull">
            <ul>
              {Ch}
            </ul>
          </div>
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