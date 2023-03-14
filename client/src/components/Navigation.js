import React, { useContext } from "react";
import {UserContext} from "../context/UserContext";

import logo from "../assets/feedplan_combo_logo_dark.png"
import Button from 'react-bootstrap/Button';


function Navigation(){
    const { user, logoutUser } = useContext(UserContext);

    return(
      <div id="navbar-container">
        <nav id="navbar">
          <div id="navbar-logo-container">
            <img id="navbar-logo" src={logo} alt="home logo"/>
          </div>
          <div id="navigation-links-TEMPORARY">
            <h4 className="nav-headers">MAIN MENU</h4>
            <div>
              <p>▨  Dashboard</p>
              <p>▨  Restaurants</p>
              <p>▨  Meal Plans</p>
              <p>▨  Menu Items</p>
            </div>
          </div>
          <Button id="logout-button" variant="outline-primary" onClick={logoutUser}>{`Log out @${user.username}`}</Button>
        </nav>
      </div>
    );
}

export default Navigation;