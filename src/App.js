import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Login from './Components/Login/Login';
import Dailly from './Components/Dailly/Dailly';
import All from './Components/All/All';
import My from './Components/My/My';
import Donations from './Components/Donations/Donations';
import Home from './Components/Home/Home';


function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dailly" exact component={Dailly} />
          <Route path="/all" exact component={All} />
          <Route path="/my" exact component={My} />
          <Route path="/donations" exact component={Donations} />
        </Switch>
        <Nav className="bar Bottom"/>
      </div>
    </Router>
  );
}

export default App;
