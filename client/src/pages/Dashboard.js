import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from '../components/Navigation';
import Restaurants from './Restaurants';
import Account from "./Account";

const Dashboard = () =>{

    return(
    <div id="dashboard-container">
        <Router>
            <div id="navbar-container">
                <Navigation />
            </div>
            <div id="static-account-container">
                <Account />
            </div>
            <div id="app-dashboard">
                <div id="page-content-container">
                    <Routes>
                    <Route 
                        path="/restaurants" 
                        element={<Restaurants />} 
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    </div>
    );
}

export default Dashboard;