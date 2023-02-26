import React, { useContext } from "react";
import {UserContext} from "../context/UserContext";

import logo from "../assets/feedplan_logo.png"

export default function SideNavigation(){
    const { user, logoutUser } = useContext(UserContext);


    return(
      <div>
        <nav id="navbar">
          <div>
            <img id="navbar-logo" src={logo} alt="home logo"/>
            {/* <p>@{admin}</p> */}
            <p>@{user.username}</p>
          </div>
          <button onClick={logoutUser}>Log out</button>
        </nav>
      </div>
    );
}