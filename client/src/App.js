import React, { useContext, useEffect, useMemo, useState } from 'react';
import './App.css';
import { UserContext } from './helper/Context';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import SideNav from './components/SideNavigation';
import Restaurants from './pages/Restaurants';
import Account from './pages/Account';

function App() {

  // useEffect(() => {
  //   fetch('/me')
  //     .then(r => {
  //       if(r.ok){
  //         r.json().then(data => console.log(data))
  //       }else{
  //         r.json().then(error => console.log("Errors"))
  //       }
  //     })
  // }, [])

  function onLogin(user){
    setAdmin(user)
  }


  return (
    <div>
      { admin ? 
        <Router>
          <UserContext.Provider value={providerValue}>
            <SideNav />
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
          </UserContext.Provider>
      </Router>
      : 
      <div id="login-forms">
        <LoginForm handleLogin={onLogin}/>
        {/* <SignupForm handleLogin={onLogin}/> */}
      </div> }
    </div>
  );
}

export default App;
