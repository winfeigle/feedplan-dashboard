import React, { useState, useContext } from "react";
import {UserContext} from "../context/UserContext";
import FormatErrors from "../helpers/FormatErrors";
import Footer from "./Footer";

import logo from "../assets/feedplan_combo_logo_dark.png"
import Button from "react-bootstrap/esm/Button";


function LoginForm(){
  const { errors, loginUser } = useContext(UserContext);
  
  const [ loginData, setLoginData ] = useState({
        username: "",
        password: ""
    })

    const onFormChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const onFormSubmit = (e) => {
      e.preventDefault()
      loginUser(loginData)
      setLoginData({username: "", password: ""})
    }


    return(
      <div className="login-page">
    <div className="login form-container">
      <div id="login-logo-container">
            <img id="login-logo" src={logo} alt="login logo"/>
          </div>
      <form onSubmit={onFormSubmit} className="login form" style={{ width: "35%"}}>
        <p>Welcome back,</p>
        <h1>Sign in to your account</h1>
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="username"
          id="username"
          name="username"
          placeholder="username"
          value={loginData.username}
          onChange={(e) => onFormChange(e)}
          className="form-input"
        />

        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          value={loginData.password}
          onChange={(e) => onFormChange(e)}
          className="form-input"
        />

        { errors && <FormatErrors errors={errors}/> }

        <Button variant="outline-feedplan-purple" type="submit" className="form-submit-button" style={{ width: "100%"}}>
          Log in
        </Button>
         <div className="signup-link">
          <a href="/sign-up">Don't have an account? <u>Sign up here</u></a>
        </div>
      </form>
    </div>
    <Footer />
    </div>
    );
}

export default LoginForm;