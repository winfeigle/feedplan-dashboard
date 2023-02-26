import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Account(){
    const { admin } = useContext(UserContext);

    return(
        <div>
            <p>{`Current account: @${admin.username}`}</p>
        </div>
    );
}