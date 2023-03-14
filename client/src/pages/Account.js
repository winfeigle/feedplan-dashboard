import React, { useContext } from "react";
import {UserContext} from "../context/UserContext";
import Button from "react-bootstrap/esm/Button";

import profile from "../assets/icons/profile_icon.png"

export default function Account(){
    const { user } = useContext(UserContext);

    return(
        <div>
            <Button variant="outline-dark" size="lg" style={{ display: "flex", alignContent: "center" }}>
                {/* <img id="profile-icon" src={profile} /> */}
                <div id="profile-icon">{user.username[0].toUpperCase()}</div>
                <div>＋</div>
            </Button>
        </div>
    );
}