import React, { useContext } from "react";
import {UserContext} from "../context/UserContext";

import logo from "../assets/feedplan_combo_logo_dark.png"


export default function Navigation(){
    const { user, logoutUser } = useContext(UserContext);


    return(
      <div id="navbar-container">
        <nav id="navbar">
          <div className="feedplan-logo-container">
            <img id="navbar-logo" src={logo} alt="home logo"/>
            {/* <p>@{admin}</p> */}
          </div>
          <div id="navbar-current-user-container">
            <span>
              <p>@{user.username}</p>
            </span>
            <button onClick={logoutUser}>Log out</button>
          </div>
        </nav>
      </div>
    );
}