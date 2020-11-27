import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
<<<<<<< HEAD
=======
// import Login from './Components/Login/Login';
>>>>>>> e3bdf968aa7408ebe70af8cbed48c8c0340fce78
import Dailly from './Components/Dailly/Dailly';
import All from './Components/All/All';
import My from './Components/My/My';
import Donations from './Components/Donations/Donations';
import Home from './Components/Home/Home';
<<<<<<< HEAD
import Discover from './Components/Discover/Discover';
import Following from './Components/Following/Following';
import Profile from './Components/Profile/Profile';
import New from './Components/New/New';
=======
import New from './Components/New/New';
import Discover from './Components/Discover/Discover';
import Following from './Components/Following/Following';
import Profile from './Components/Profile/Profile';
>>>>>>> e3bdf968aa7408ebe70af8cbed48c8c0340fce78


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/discover" exact component={Discover} />
          <Route path="/following" exact component={Following} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/new" exact component={New} />
          <Route path="/dailly" exact component={Dailly} />
          <Route path="/all" exact component={All} />
          <Route path="/my" exact component={My} />
          <Route path="/donations" exact component={Donations} />
          <Route path="/discover" exact component={Discover} />
          <Route path="/following" exact component={Following} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/new" exact component={New} />
        </Switch>
        <Nav className="bar Bottom"/>
      </div>
    </Router>
  );
}

export default App;
