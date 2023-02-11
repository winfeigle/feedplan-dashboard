import React from 'react';
import './App.css';
import { UserContext } from './helper/Context';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import SideNav from './components/SideNavigation';

function App() {

  let login = true;


  return (
    <div className="App">
      
        <UserContext.Provider value="[test user]">
          <SideNav />
          <div id="login-forms">
            { login ? <LoginForm /> : <SignupForm /> }
          </div>
        </UserContext.Provider>
    </div>
  );
}

export default App;
