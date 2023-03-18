import React, { createContext, useState } from "react";

const MealPlansContext = createContext(null);

const MealPlansProvider = ({ children }) => {
    const [ mealPlans, setMealPlans ] = useState([]);

    const loadRestaurantMealPlans = (restaurant_id) => {
        fetch(`/meal-plans`)
            .then((res) => {
                if(res.ok){
                    res.json().then(setMealPlans)
                }else{
                    // FOR TESTING PURPOSES ONLY, UPDATE FOR PRODUCTION
                    console.log("Something went wrong with mealplans fetch...")
                }
            })
    }


    return(
        <MealPlansContext.Provider value={{ mealPlans, loadRestaurantMealPlans }}>
            { children }
        </MealPlansContext.Provider>
    );
}

export { MealPlansContext, MealPlansProvider };
