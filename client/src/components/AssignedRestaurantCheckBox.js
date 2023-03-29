import React, { useContext, useEffect } from "react";
import { MealPlansContext } from "../context/MealPlansContext";

import Form from "react-bootstrap/Form";


const AssignedRestaurantCheckBox = ({ restaurant, mealplan }) =>{
    const { addRestaurantToMealplan, removeRestaurantMealplan } = useContext(MealPlansContext);


    const handleAssignRestaurant = (e) =>{
        if(e.target.checked === true){
            addRestaurantToMealplan(restaurant.id, mealplan.id)
        }else{
            removeRestaurantMealplan(restaurant.id, mealplan.id)
        }
    }

    return(
        <>
            <Form.Check
                onChange={handleAssignRestaurant}
                label={
                    <div className="restaurant-select-container">
                        <span>
                            {restaurant.name}
                        </span>
                        <span className="restaurant-address">       
                            {restaurant.address}
                        </span>
                    </div>
                    }
                name={restaurant.name}
                type="checkbox"
                id={`${restaurant.name}-checkbox`}
                />
        </>
    )
}

export default AssignedRestaurantCheckBox;