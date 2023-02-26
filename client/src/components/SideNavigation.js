import React, { useContext } from "react";
import { UserContext } from "../helper/Context";

import logo from "../assets/feedplan_logo.png"

export default function SideNavigation(){
    const { admin, setAdmin } = useContext(UserContext);

    const handleLogout = () => {
        fetch('/logout', {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setAdmin(null);
            }
        }).then(<redirect to="/" />)
    }

    return(
      <div>
        <nav id="navbar">
          <div>
            <img id="navbar-logo" src={logo} alt="home logo"/>
            {/* <p>@{admin}</p> */}
            <p>@{admin.username}</p>
          </div>
          <button onClick={handleLogout}>Log out</button>
        </nav>
      </div>
    );
}