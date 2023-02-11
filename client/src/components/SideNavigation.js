import React, { useContext } from "react";
import { UserContext } from "../helper/Context";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "../assets/feedplan_logo.png"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

export default function SideNavigation(){
    const currentUser = useContext(UserContext);

    return(
      <nav id="navbar">
        <div>
          <div>
              <img id="navbar-logo" src={logo} alt="home logo"/>
          </div>
        </div>
      </nav>
    );
}