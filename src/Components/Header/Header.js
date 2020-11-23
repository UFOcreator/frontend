import './Header.css';
import React from 'react';

function Header() {
    return (
        <div className="header">
            <div id="Center">
                <img id="Logo" src="Images/Logo.png" alt="Verbeeten"></img>
                <h1 id="Title">VERBEETEN CHALLENGES</h1>
            </div>
        </div>
    );
}

export default Header;