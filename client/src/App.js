import React, { useContext, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './pages/Dashboard';
import { UserContext } from './context/UserContext';
import { RestaurantsProvider } from './context/RestaurantsContext';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MealPlansProvider } from './context/MealPlansContext';

function App() {
  const { loadUser, user } = useContext(UserContext);

  useEffect(() => {
    loadUser()
  }, [])


  return (
    <div>
      { user &&
      <MealPlansProvider>
        <RestaurantsProvider>
          <Dashboard />
        </RestaurantsProvider>
      </MealPlansProvider>}
      
      {!user && 
        <div id="login-forms">
          <Routes>
            <Route
              element={<LoginForm />}
              path="/"
              >
            </Route>
            <Route
              element={<SignupForm />}
              path="/sign-up"
              >
            </Route>
          </Routes>
          {/* <SignupForm handleLogin={onLogin}/> */}
        </div> }
    </div>
  );
}

export default App;
