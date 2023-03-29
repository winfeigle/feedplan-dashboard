import React, { createContext, useState } from "react";

const MealPlansContext = createContext(null);

const MealPlansProvider = ({ children }) => {
    const [ mealPlans, setMealPlans ] = useState([]);

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

    const createMealPlan = (mealPlanData) => {
        fetch('/meal-plans/create', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(mealPlanData)
        })
            .then((res) => {
                if(res.ok){
                    res.then(setMealPlans)
                }else{
                    // FOR TESTING PURPOSES ONLY, UPDATE FOR PRODUCTION
                    console.log("Something went wrong with creating the meal plan...")
                }
            })
    }

    const addRestaurantToMealplan = (restaurant_id, mealplan_id) =>{
        // console.log(`Add: ${restaurant_id} ${mealplan_id}`);
        fetch(`/meal-plans/assign`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                restaurant_id: restaurant_id,
                meal_plan_id: mealplan_id
            })
        })
            .then((res) => {
                if(res.ok){
                    res.then(setMealPlans)
                }else{
                    // FOR TESTING PURPOSES ONLY, UPDATE FOR PRODUCTION
                    console.log("Something went wrong with creating the meal plan...")
                }
            })
    }

    const removeRestaurantMealplan = (restaurant_id, mealplan_id) =>{
        console.log(`Remove: ${restaurant_id} ${mealplan_id}`);
    }


    return(
        <MealPlansContext.Provider value={{ mealPlans, loadMealPlans, createMealPlan, addRestaurantToMealplan, removeRestaurantMealplan }}>
            { children }
        </MealPlansContext.Provider>
    );
}

export { MealPlansContext, MealPlansProvider };
