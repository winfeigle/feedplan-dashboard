import React from "react";

export default function MealPlanCard({ mealplan }){

    return(
        <div>
            <p>{`Name: ${mealplan.name}`}</p>
            <p>{`Quantity: ${mealplan.quantity}`}</p>
            <p>{`Price: ${mealplan.price}`}</p>
        </div>
    );
}