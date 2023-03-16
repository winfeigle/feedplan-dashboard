import React from "react";
import { Button } from "react-bootstrap";

export default function MealPlans(){

    MealPlans.componentName = "MealPlans";

    console.log(MealPlans.componentName)

    return(
         <div className="page">
            <div className="dashboard-heading">
                <h2 variant="feedplan-dark-mist">Meal Plans</h2>
                <Button
                    id="add-button"
                    variant="outline-feedplan-dark"
                    >
                    create new
                </Button>
            <div>
                    
                </div>
                
            </div>
                <div className="page-container">
                </div>
        </div>
    );
}