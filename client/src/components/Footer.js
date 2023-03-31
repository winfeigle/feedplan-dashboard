import React from "react";
import logo from "../assets/feedplan_combo_logo_dark.png"


function Footer(){

    return(
        <div style={{backgroundColor: "white", height: "80px",position: "absolute", width: "100%", bottom: "-80px", padding: "25px 50px", display:"flex", justifyContent: "space-between"}}>

            <p style={{opacity: "25%"}}>© 2023 Feedplan, Inc. All Rights Reserved.</p>
            
            <img src={logo} style={{width: "120px", opacity: "20%"}} alt=""/>

        </div>
    )
}

export default Footer;