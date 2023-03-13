import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import Navigation from './components/Navigation';
import Restaurants from './pages/Restaurants';
import Account from './pages/Account';
import { UserContext } from './context/UserContext';
import { RestaurantsProvider } from './context/RestaurantsContext';

function App() {
  const { loadUser, user } = useContext(UserContext);

  useEffect(() => {
    loadUser()
  }, [])


  return (
    <div>
      { user ? 
      <RestaurantsProvider>
        <Router>
          <div id="app-dashboard">
            <Navigation />
            <div id="page-content-container">
              <Routes>
              <Route 
                path="/" 
                element={<Restaurants />} 
                />
              <Route 
                path="/account" 
                element={<Account />} 
                />
            </Routes>
            </div>
          </div>
      </Router>
      </RestaurantsProvider>
      : 
      <div id="login-forms">
        <LoginForm />
        {/* <SignupForm handleLogin={onLogin}/> */}
      </div> }
    </div>
  );
}

export default App;
