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


function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dailly" component={Dailly} />
          <Route path="/all" component={All} />
          <Route path="/my" component={My} />
          <Route path="/donations" component={Donations} />
        </Switch>
        <Nav className="bar Bottom"/>
      </div>
    </Router>
  );
}

// const Home = () => (
//   <div>
//     <h1>Home Page</h1>
//   </div>
// )

export default App;
