import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { MealPlansContext } from "../context/MealPlansContext";
import MealPlanCard from "../components/MealPlanCard";
import CreateMealPlanModal from "../components/CreateMealPlanModal";

import TEST_MealPlanTable from "../components/TEST_MealPlanTable"

export default function MealPlans(){
    const { loadMealPlans, mealPlans } = useContext(MealPlansContext);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        loadMealPlans()
    }, [])

    const renderMealPlanColumns = mealPlans.map((mealplan) => {
        return(
            // <MealPlanCard key={mealplan.id} mealplan={mealplan}/>
            <TEST_MealPlanTable key={mealplan.id} mealplan={mealplan}/>
        );
    })
    

    return(
        <div className="page">
            <div className="dashboard-heading">
                <h2 variant="feedplan-dark-mist">Meal Plans</h2>
            </div>
        <div className="meal-plan-table">
         <Table >
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Restaurants</th>
                    </tr>
                </thead>
                <tbody>
                    {renderMealPlanColumns}
                </tbody>
        </Table>
        </div>
        </div>
    );
}