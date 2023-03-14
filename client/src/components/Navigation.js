import React, { useContext } from "react";
import {UserContext} from "../context/UserContext";

import logo from "../assets/feedplan_combo_logo_dark.png"
import Button from 'react-bootstrap/Button';


function Navigation(){
    const { user, logoutUser } = useContext(UserContext);

    return(
      <nav id="navbar">
          <div id="navbar-logo-container">
            <img id="navbar-logo" src={logo} alt="home logo"/>
          </div>
          <div id="navigation-links-container">
            <h4 className="nav-headers">MAIN MENU</h4>
            <div id="navigation-links">
              <a href="/dashboard">▨  Dashboard</a>
              <a href="/restaurants">▨  Restaurants</a>
              <a href="/meal-plans">▨  Meal Plans</a>
              <a>▨  Menu Items</a>
            </div>
          </div>
          <Button id="logout-button" variant="outline-feedplan-purple" onClick={logoutUser}>{`Log out @${user.username}`}</Button>
        </nav>
    );
}

export default Navigation;