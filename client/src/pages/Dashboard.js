import React from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from '../components/Navigation';
import Account from "../components/Account";
import DashLanding from "../components/DashLanding";
import Restaurants from './Restaurants';
import MealPlans from "./MealPlans";
import MenuItems from "./MenuItems";

const Dashboard = () =>{

    return(
    <div id="dashboard-wrapper">
        <Account />
        <Navigation />
        <div id="app-dashboard">
                <div id="page-content-container">
                    <Routes>
                        <Route 
                            element={<DashLanding />} 
                            path="/dashboard" 
                            />
                        <Route 
                            element={<Restaurants />} 
                            path="/restaurants" 
                            />
                        <Route 
                            path="/meal-plans" 
                            element={<MealPlans />} 
                            />
                        <Route 
                            path="/menu-items" 
                            element={<MenuItems />} 
                            />
                    </Routes>
                </div>
            </div>
    </div>
    );
}

export default Dashboard;