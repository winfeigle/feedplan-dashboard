import React, { createContext, useState } from "react";

const MealPlansContext = createContext(null);

const MealPlansProvider = ({ children }) => {
    const [ mealPlans, setMealPlans ] = useState([]);
    const [ assignedRestaurants, setAssignedRestaurants ] = useState([]);

    const loadMealPlans = () => {
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

    const loadAssignedRestaurants = (meal_plan_id) =>{
        fetch(`/meal-plans/${meal_plan_id}`)
            .then((res) => {
                if(res.ok){
                    res.json().then(setAssignedRestaurants)
                }else{
                    // FOR TESTING PURPOSES ONLY, UPDATE FOR PRODUCTION
                    console.log("Something went wrong with mealplan assignments fetch...")
                }
            })
    }


    return(
        <MealPlansContext.Provider value={{ mealPlans, assignedRestaurants, loadMealPlans, loadAssignedRestaurants }}>
            { children }
        </MealPlansContext.Provider>
    );
}

export { MealPlansContext, MealPlansProvider };
