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
              <a href="/dashboard"><svg className="nav-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M317.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224C.9 240.7-2.6 254.8 2 267.3S18.7 288 32 288H143.5L66.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H240.5L317.4 44.6z"/></svg>Dashboard</a>
              <a href="/restaurants"><svg className="nav-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M32 144a144 144 0 1 1 288 0A144 144 0 1 1 32 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>Restaurants</a>
              <a href="/meal-plans"><svg className="nav-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 96V320c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64H160V256zM224 96c0 35.3-28.7 64-64 64V96h64zM576 256v64H512c0-35.3 28.7-64 64-64zM512 96h64v64c-35.3 0-64-28.7-64-64zM288 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V360c0 66.3 53.7 120 120 120H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72V120z"/></svg>Meal Plans</a>
              <a href="/menus"><svg className="nav-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>Menu Items</a>
            </div>
          </div>
          <Button id="logout-button" variant="outline-feedplan-purple" onClick={logoutUser}>{`Log out @${user.username}`}</Button>
        </nav>
    );
}

export default Navigation;