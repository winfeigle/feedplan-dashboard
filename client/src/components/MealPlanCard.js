import React, { useContext, useEffect } from "react";
import { Badge } from "react-bootstrap";
import { MealPlansContext } from "../context/MealPlansContext";

export default function MealPlanCard({ mealplan }){
    const { loadAssignedRestaurants, assignedRestaurants } = useContext(MealPlansContext);

    // useEffect(() => {
    //     loadAssignedRestaurants(mealplan.id);
    // }, [])

    console.log("Console Log:", assignedRestaurants);


    return(
        <div id={assignedRestaurants ? "assigned" : "unassigned"}
            className="meal-plan-card"
            >
            <Badge 
                bg={assignedRestaurants ? "success" : "secondary"}>
                    {assignedRestaurants ? "assigned" : "unassigned"}
            </Badge>
            <div className="horizontal-line-break"></div>
                <p><b>Name: </b>{mealplan.name}</p>
                <p><b>Quantity: </b>{mealplan.quantity}</p>
                <p><b>Price: </b>{`$${mealplan.total_price}`}</p>
            <div className="horizontal-line-break"></div>
            <b>Restaurants</b>

                {/* MEALPLAN ASSIGNMENTS RENDERED BELOW */}
                <span>{  }</span>
        </div>
    );
}