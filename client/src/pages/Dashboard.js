import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from '../components/Navigation';
import Restaurants from '../pages/Restaurants';

const Dashboard = () =>{

    return(
    <div>
        <Router>
        <div id="app-dashboard">
            <div>
                <Navigation />
            </div>
            <div id="page-content-container">
                <Routes>
                <Route 
                    path="/" 
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