import React, { useContext } from "react";
import {UserContext} from "../context/UserContext";
import Button from "react-bootstrap/esm/Button";

import profile from "../assets/icons/profile_icon.png"

export default function Account(){
    const { user } = useContext(UserContext);

    return(
        <div>
            <Button variant="outline-secondary" size="xl" style={{ display: "flex" }}>
                <img id="profile-icon" src={profile} />
                <div 
                    style={{marginLeft: "5px"}}>
                    ＋
                </div>
            </Button>
        </div>
    );
}