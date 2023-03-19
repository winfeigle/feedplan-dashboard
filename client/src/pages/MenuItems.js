import React from "react";

import { Button } from "react-bootstrap";

export default function MenuItems(){
    return(
        <div className="page">
            <div className="dashboard-heading">
                <h2 variant="feedplan-dark-mist">Menu Items</h2>
                <Button
                    id="add-button"
                    variant="outline-feedplan-dark"
                    >
                    create new
                </Button>
                
            </div>
            <div className="page-container">
                {/* { renderMeals } */}
            </div>
        </div>
    );
}