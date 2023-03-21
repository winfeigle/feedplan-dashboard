import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { MealPlansContext } from "../context/MealPlansContext";
import MealPlanCard from "../components/MealPlanCard";
import CreateMealPlanModal from "../components/CreateMealPlanModal";

export default function MealPlans(){
    const { loadMealPlans, mealPlans } = useContext(MealPlansContext);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        loadMealPlans()
    }, [])

    const renderMealPlanCards = mealPlans.map((mealplan) => {
        return(
            <MealPlanCard key={mealplan.id} mealplan={mealplan}/>
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
            <div className="page-container">
                { renderMealPlanCards }
            </div>
            <div>
                <CreateMealPlanModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    );
}