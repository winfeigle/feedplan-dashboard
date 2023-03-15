import React, { useContext } from "react";
import {UserContext} from "../context/UserContext";

import Button from "react-bootstrap/esm/Button";

export default function Account(){
    const { user } = useContext(UserContext);

    return(
        <div id="static-account-container">
            <Button 
                variant="feedplan-purple" 
                size="lg" 
                style={{ 
                    display: "flex", 
                    alignContent: "center" }}
                >
                <div id="profile-icon">{user.username[0].toUpperCase()}</div> 
                    <div className="vertical-account-break"></div>
                <div id="profile-plus-icon">＋</div>
            </Button>
        </div>
    );
}