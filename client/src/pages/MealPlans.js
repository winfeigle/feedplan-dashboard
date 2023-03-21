import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { MealPlansContext } from "../context/MealPlansContext";
import CreateMealPlanModal from "../components/CreateMealPlanModal";

import MealPlanTable from "../components/MealPlanTable"

export default function MealPlans(){
    const { loadMealPlans, mealPlans } = useContext(MealPlansContext);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        loadMealPlans()
    }, [])

    const renderMealPlanColumns = mealPlans.map((mealplan) => {
        return(
            <MealPlanTable key={mealplan.id} mealplan={mealplan}/>
        );
    })
    

    return(
        <div className="page">
            <div className="dashboard-heading">
                <h2 variant="feedplan-dark-mist">Meal Plans</h2>
                <Button
                    id="add-button"
                    variant="outline-feedplan-dark" 
                    onClick={() => setModalShow(true)}
                    >
                    create new
                </Button>
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
            <CreateMealPlanModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
        </div>
    );
}