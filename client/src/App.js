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
      .then(r => r.json())
      .then(setAdmin)
  }, [])
  

  { if(!admin){
    // Add navigation above form...
    return(
        <div id="login-forms">
          <LoginForm />
        </div>
      );
    };
  }

  return (
    <div>
      { !admin ? 
        <div id="login-forms"><LoginForm /></div> :
        <Router>
          <UserContext.Provider value={providerValue}>
            <Restaurants />
            <SideNav />
          </UserContext.Provider>
      </Router>
      
      }
    </div>
  );
}

export default App;
