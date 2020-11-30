import React , { Component } from "react";
import fire from "./fire";
import 'firebase/auth';
import 'firebase/firestore';
import './Login.css';
import { Link } from 'react-router-dom';

class Loginscreen extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
render()
{
    return(
        <div className="login">
            <div className="login-form">
                <h3>E-mail:</h3>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="Voer email adres in"
                onChange={this.handleChange}
                value={this.state.email}
                />
                <h3>Wachtwoord:</h3>
                <input
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="Voer wachtwoord in"
                value={this.state.password}
                />
                <br></br>
                <br></br>
                
                <Link to='/home'><button onClick={this.login}>Login</button></Link>
                <button onClick={this.signup}>Signup</button>
            
            </div>
             
        </div>

        
    )
}
}
export default Loginscreen;