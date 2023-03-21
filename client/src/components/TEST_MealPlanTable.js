import React, { useState, useEffect } from "react";
import { Badge, Table } from "react-bootstrap";

import AssignRestaurants from "./AssignRestaurants"

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
        <tr>
            <td><Badge 
                    bg={checkAssignedRestaurants ? "success" : "secondary"}
                    >
                        {checkAssignedRestaurants ? "assigned" : "unassigned"}
                </Badge>
            </td>
            <td>{mealplan.name}</td>
            <td>{mealplan.quantity}</td>
            <td>{mealplan.total_price}</td>
            <td>
                <div className="assigned-restaurant-images">
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
                    <AssignRestaurants 
                        meal_plan_id={mealplan.id}
                        />
                </div>
            </td>
        </tr>
);
}