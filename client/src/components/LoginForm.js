import React, { useState, useContext } from "react";
import {UserContext} from "../context/UserContext";

import logo from "../assets/feedplan_combo_logo_dark.png"
import Button from "react-bootstrap/esm/Button";


function LoginForm(){
  const { error, loginUser } = useContext(UserContext);

  console.log(error)
  
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
        <div id="errors-container" className="login">
                { error &&
                  <div 
                    className="login-error-message" 
                    key={error}><svg className="error-icon xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                        {error}
                    </div>
                }
            </div>

        <Button variant="feedplan-purple" type="submit" className="form-submit-button" style={{ width: "100%"}}>
          Log in
        </Button>
         <div className="signup-link">
          <a href="#">Don't have an account? Sign up here</a>
        </div>
      </form>
    </div>
    </div>
    );
}

export default LoginForm;