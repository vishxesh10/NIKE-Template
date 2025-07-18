import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://brandlogos.net/wp-content/uploads/2014/11/air-jordan-logo-768x768.png" alt="Nike Logo" />
            </div>
            <div className="navbar">
                <div className="nav-items">
                    <ul>
                        <li>Store</li>
                        <li>Help</li>
                        <li>Join Us</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;