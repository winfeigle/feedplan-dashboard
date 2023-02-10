import React from "react";
import logo from "../assets/feedplan_logo.png"

function Navbar(){
    return(
        <div id="navbar">
            <img id="navbar-logo" src={logo} alt="logo" />
        </div>
    );
}

export default Navbar;