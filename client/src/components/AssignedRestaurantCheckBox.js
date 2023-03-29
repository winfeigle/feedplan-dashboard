import React, { useContext, useState } from "react";
import { MealPlansContext } from "../context/MealPlansContext";

import BootstrapSwitchButton from 'bootstrap-switch-button-react'


const AssignedRestaurantCheckBox = ({ restaurant, mealplan }) => {
    // Determine whether to have checked, .some() returns true or false
    const [ checked, setChecked ] = useState(
        mealplan.restaurants.some(assignedRestaurant => assignedRestaurant.restaurant_id === restaurant.id)
    );


    const { addRestaurantToMealplan, removeRestaurantMealplan } = useContext(MealPlansContext);



    const handleToggle = () => {
        if(checked){
            addRestaurantToMealplan(restaurant.id, mealplan.id)
        }else{
            removeRestaurantMealplan(restaurant.id, mealplan.id)
        }
        setChecked(!checked);
    }

    return(
        <div>
             <div className="restaurant-select-container">
                <span>
                    {restaurant.name}
                </span>
                <span className="restaurant-address">       
                    {restaurant.address}
                </span>
            </div>
            <BootstrapSwitchButton
                checked={checked}
                width={120}
                size="sm"
                onlabel='Assigned'
                onstyle="success"
                offlabel='Unassigned'
                offstyle='secondary'
                onChange={handleToggle}
                />
        </div>
    )
}

export default AssignedRestaurantCheckBox;