import './Login.css';
import React from 'react';

// class Filler extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             value: 'E'
//         }
//     }
// }

function Login() {
    return (
        <div className="login">
            <form className="LoginForm">
                <label for="User">Username</label>
                <input type="text" id="User" name="User"></input>

                <label for="Pass">Password</label>
                <input type="text" id="Pass" name="User"></input>

                <input type="submit" value="Login"></input>
            </form>
        </div>
    );
}

export default Login;