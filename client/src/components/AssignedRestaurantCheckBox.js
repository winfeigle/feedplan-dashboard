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
        <div id="restaurant-checkbox-container">
             <div className="restaurant-info-checkbox">
                <span>
                    {restaurant.name}
                </span>
                <span className="restaurant-address">       
                    {restaurant.address}
                </span>
            </div>
            <div>
                <BootstrapSwitchButton
                    id="toggle-button"
                    checked={checked}
                    onlabel='Assigned'
                    width={125}
                    onstyle="feedplan-dark-mist"
                    offlabel='Unassigned'
                    offstyle="secondary"
                    onChange={handleToggle}
                    />
            </div>
        </div>
    )
}

export default AssignedRestaurantCheckBox;