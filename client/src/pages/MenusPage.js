import React from "react";

import { Button } from "react-bootstrap";
import RestaurantMenu from "../components/RestaurantMenu";

export default function MenusPage(){
    return(
        <div className="page">
            <div className="dashboard-heading">
                <h2 variant="feedplan-dark-mist">Menus</h2>
            </div>
            <div className="page-container">
                <RestaurantMenu />
            </div>
        </div>
    );
}