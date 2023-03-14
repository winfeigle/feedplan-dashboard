import React, { useContext, useEffect } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import Dashboard from './pages/Dashboard';
import { UserContext } from './context/UserContext';
import { RestaurantsProvider } from './context/RestaurantsContext';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { loadUser, user } = useContext(UserContext);

  useEffect(() => {
    loadUser()
  }, [])


  return (
    <div>
      { user ? 
      <RestaurantsProvider>
        <Dashboard />
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
