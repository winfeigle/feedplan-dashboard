import React from "react";
import { Badge } from "react-bootstrap";

export default function MealPlanCard({ mealplan }){

    return(
        <div id={mealplan.visible ? "assigned" : "unassigned"}
            className="meal-plan-card"
            >
            <Badge 
                bg={mealplan.visible ? "success" : "secondary"}>{mealplan.visible ? "assigned" : "unassigned"}
            </Badge>
            <div className="horizontal-line-break"></div>
                <p><b>Name: </b>{mealplan.name}</p>
                <p><b>Quantity: </b>{mealplan.quantity}</p>
                <p><b>Price: </b>{`$${mealplan.total_price}`}</p>
            <div className="horizontal-line-break"></div>
                <span>{`Restaurants: ${mealplan.restaurant_id}`}</span>
        </div>
    );
}