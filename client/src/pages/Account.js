import React, { useContext } from "react";
import {UserContext} from "../context/UserContext";
import Button from "react-bootstrap/esm/Button";

export default function Account(){
    const { user } = useContext(UserContext);

    return(
        <div id="static-account-container">
            <Button variant="feedplan-purple" size="lg" style={{ display: "flex", alignContent: "center" }}>
                {/* <img id="profile-icon" src={profile} /> */}
                <div id="profile-icon">{user.username[0].toUpperCase()}</div>
                <div>＋</div>
            </Button>
        </div>
    );
}