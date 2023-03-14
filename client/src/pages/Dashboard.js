import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from '../components/Navigation';
import Restaurants from './Restaurants';
import Account from "./Account";

const Dashboard = () =>{

    return(
    <div id="dashboard-wrapper">
        <Account />
        <Navigation />
        <div id="app-dashboard">
            <Router>
                <div id="page-content-container">
                    <Routes>
                    <Route 
                        element={<Restaurants />} 
                        path="/restaurants" 
                        />
                    <Route 
                        path="/meal-plans" 
                        // element={} 
                        />
                    </Routes>
                </div>
            </Router>
            </div>
    </div>
    );
}

export default Dashboard;