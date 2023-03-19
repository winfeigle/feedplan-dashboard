import React from "react";

import { Button } from "react-bootstrap";

export default function RestaurantMenu({ restaurant }){
console.log(restaurant)

    return(
        <div className="page">
            <div className="dashboard-heading">
                <h3 variant="feedplan-dark-mist">[Restaurant Name]</h3>
                <Button
                    id="add-button"
                    variant="outline-feedplan-dark"
                    >
                    create new
                </Button>
            </div>
            <div className="page-container">
                [Render Restaurant's Menu Items here]
            </div>
        </div>
    );
}