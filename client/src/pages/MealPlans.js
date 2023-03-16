import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { MealPlansContext } from "../context/MealPlansContext";

export default function MealPlans(){

    const { loadRestaurantMealPlans } = useContext(MealPlansContext);
    
    console.log(MealPlans);

    useEffect(() => {
        loadRestaurantMealPlans(1)
    }, [])
    

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