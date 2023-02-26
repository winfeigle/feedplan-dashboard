import React, { useContext } from "react";
import {UserContext} from "../context/UserContext";

export default function Account(){
    const { user } = useContext(UserContext);

    return(
        <div>
            <p>{`Current account: @${user.username}`}</p>
        </div>
    );
}