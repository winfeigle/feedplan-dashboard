import React, { createContext, useState } from "react";

const MealPlansContext = createContext(null);

const MealPlansProvider = ({ children }) => {
    const [ mealPlans, setMealPlans ] = useState([]);
    const [ error, setError ] = useState("");


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
                if(!res.ok){
                    // FOR TESTING PURPOSES ONLY, UPDATE FOR PRODUCTION
                    console.log("Something went wrong with creating the meal plan...")
                }
            })
    }

    const deleteMealPlan = (meal_plan_id) => {
       fetch(`/meal-plans/${meal_plan_id}`, {
            method: "DELETE"
        }).then((res) => {
            if(res.ok){
                setMealPlans((mealPlans) => mealPlans.filter((plan) => (plan.id !== meal_plan_id)))
            }else{
                res.json().then((err) => setError(err.error))
            }
        })
    }

    const addRestaurantToMealplan = (restaurant_id, mealplan_id) =>{
        fetch(`/meal-plan-assignment`, {
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
                if(!res.ok){
                    console.log("Something went wrong with meal plan assignment...")
                }
            })
    }

    const removeRestaurantMealplan = (restaurant_id, mealplan_id) =>{
        fetch(`/meal-plan-assignment`, {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                restaurant_id: restaurant_id,
                meal_plan_id: mealplan_id
            })
        })
    }


    return(
        <MealPlansContext.Provider value={{ 
            error,
            mealPlans, 
            loadMealPlans, 
            createMealPlan,
            deleteMealPlan,
            addRestaurantToMealplan, 
            removeRestaurantMealplan 
            }}>
            { children }
        </MealPlansContext.Provider>
    );
}

export { MealPlansContext, MealPlansProvider };
