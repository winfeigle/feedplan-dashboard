import React from "react";

export default function MealPlanCard({ mealplan }){

    return(
        <div>
            <p>{`Name: ${mealplan.name}`}</p>
            <p>{`Quantity: ${mealplan.quantity} meals`}</p>
            <p>{`Price: $${mealplan.total_price}`}</p>
            <span>{`Restaurants: ${mealplan.restaurant_id}`}</span>
        </div>
    );
}