import React from "react";

import { Button } from "react-bootstrap";

export default function MenusPage(){
    return(
        <div className="page">
            <div className="dashboard-heading">
                <h2 variant="feedplan-dark-mist">Menus</h2>
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