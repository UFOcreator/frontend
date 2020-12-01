import './Login.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Login extends Component {
    render() {
        
        return (
            <div className="login">
                <div className="top">
                    
                </div>
                <div className="main">
                    <Link to='/home'>
                        <button>Inloggen</button>
                    </Link>
                </div>
                <div className="foot">

                </div>
            </div>
        );
    }

}

export default Login;