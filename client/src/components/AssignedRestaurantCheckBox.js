import React, { useContext, useState } from "react";
import { MealPlansContext } from "../context/MealPlansContext";

import BootstrapSwitchButton from 'bootstrap-switch-button-react'


const AssignedRestaurantCheckBox = ({ restaurant, mealplan }) => {

    const { addRestaurantToMealplan, removeRestaurantMealplan } = useContext(MealPlansContext);
    
    // Determine whether to have checked, .some() returns true or false
    const [ checked, setChecked ] = useState(
        mealplan.restaurants.some(assignedRestaurant => assignedRestaurant.restaurant_id === restaurant.id)
    );


    const handleToggle = () => {
        if(checked){
            removeRestaurantMealplan(restaurant.id, mealplan.id)
        }else{
            addRestaurantToMealplan(restaurant.id, mealplan.id)
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
                value={checked}
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