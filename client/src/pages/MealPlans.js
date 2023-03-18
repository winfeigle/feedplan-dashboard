import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { MealPlansContext } from "../context/MealPlansContext";
import MealPlanCard from "../components/MealPlanCard";

export default function MealPlans(){

    const { loadRestaurantMealPlans, mealPlans } = useContext(MealPlansContext);

    useEffect(() => {
        loadRestaurantMealPlans(1)
    }, [])

    const renderMealPlanCards = mealPlans.map((plan) => {
        return(
            <MealPlanCard mealplan={plan}/>
        );
    })
    

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
                
            </div>
            <div className="page-container">
                { renderMealPlanCards }
            </div>
        </div>
    );
}