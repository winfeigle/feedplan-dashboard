import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";

export default function MealPlanCard({ mealplan }){
    const [ assignedRestaurants, setAssignedRestaurants ] = useState([]);

    const checkAssignedRestaurants = (assignedRestaurants.length >= 1 ? true : false);

    useEffect(() => {
        fetch(`/meal-plans/${mealplan.id}/restaurants`)
            .then((res) => {
                if(res.ok){
                    res.json().then(setAssignedRestaurants)
                }else{
                    console.log("something went wrong with assigned restaurants fetch")
                }
            })
    }, [])


    return(
        <div id={checkAssignedRestaurants ? "assigned" : "unassigned"}
            className="meal-plan-card"
            >
            <Badge 
                bg={checkAssignedRestaurants ? "success" : "secondary"}>
                    {checkAssignedRestaurants ? "assigned" : "unassigned"}
            </Badge>
            <div className="horizontal-line-break"></div>
                <p><b>Name: </b>{mealplan.name}</p>
                <p><b>Quantity: </b>{mealplan.quantity}</p>
                <p><b>Price: </b>{`$${mealplan.total_price}`}</p>
            <div className="horizontal-line-break"></div>
            <div className="assigned-restaurant-container">
                <b>Restaurants</b>
                <div        className="assigned-restaurant-images">
                    { assignedRestaurants.map((restaurant) =>{
                        return(
                                <img 
                                    key={restaurant.id}
                                    className="assigned-restaurant-icon"
                                    src={restaurant.icon_url}
                                    alt="assigned restaurant"
                                />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}