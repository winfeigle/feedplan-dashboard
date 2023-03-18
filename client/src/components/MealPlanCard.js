import React from "react";
import { Badge } from "react-bootstrap";

export default function MealPlanCard({ mealplan }){

    const assignedRestaurants = [];

    // const renderMealPlanAssignments = mealplanAssignments.map((assignment) => {
    //     assignment.meal_plan_id === mealplan.id && assignedRestaurants.push(assignment.name)
    // })

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
            <b>Restaurants</b>

                {/* MEALPLAN ASSIGNMENTS RENDERED BELOW */}
                {/* <span>{ renderMealPlanAssignments }</span> */}
        </div>
    );
}