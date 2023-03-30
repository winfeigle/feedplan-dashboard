import React from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from '../components/Navigation';
import Account from "../components/Account";
import DashLanding from "./DashLanding";
import Restaurants from './Restaurants';
import MealPlans from "./MealPlans";
import MenusPage from "./MenusPage";

const Dashboard = () =>{

    return(
    <div id="dashboard-wrapper">
        <Account />
        <Navigation />
        <div id="app-dashboard">
                <div id="page-content-container">
                    <Routes>
                        <Route 
                            path="/dashboard" 
                            element={<DashLanding />} 
                            />
                        <Route 
                            path="/restaurants" 
                            element={<Restaurants />} 
                            />
                        <Route 
                            path="/meal-plans" 
                            element={<MealPlans />} 
                            />
                        <Route 
                            path="/menus" 
                            element={<MenusPage />} 
                            />
                    </Routes>
                </div>
            </div>
    </div>
    );
}

export default Dashboard;