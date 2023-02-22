import React, { useContext, useEffect, useMemo, useState } from 'react';
import './App.css';
import { UserContext } from './helper/Context';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import SideNav from './components/SideNavigation';
import Restaurants from './pages/Restaurants';

function App() {
  const [ admin, setAdmin ] = useState(null);
  const providerValue = useMemo(() => ({ admin, setAdmin }), [admin, setAdmin]);

  useEffect(() => {
    fetch('/me')
      .then(r => {
        if(r.ok){
          r.json().then(data => console.log(data))
        }else{
          r.json().then(error => console.log("Errors"))
        }
      })
  }, [])

  function onLogin(user){
    setAdmin(user)
  }
  

  console.log(`App.js: ${admin}`)

  return (
    <div>
      { admin ? 
        <Router>
          <UserContext.Provider value={providerValue}>
            <Restaurants />
            <SideNav />
          </UserContext.Provider>
      </Router>
      : 
      <div id="login-forms"><LoginForm handleLogin={onLogin}/></div>
      
      }
    </div>
  );
}

export default App;
