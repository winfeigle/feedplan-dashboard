import React from "react";
import { Button } from "react-bootstrap";

export default function MealPlans(){

    return(
         <div className="mealplans-page">
            <div className="dashboard-heading">
                <h2 variant="feedplan-dark-mist">Meal Plans</h2>
                <Button
                    id="add-mealplan-button"
                    variant="outline-feedplan-dark"
                    >
                    create new
                </Button>
            <div>
                    
                </div>
                
            </div>
                <div className="mealplans-container">
                </div>
        </div>
    );
}