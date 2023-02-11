import React, { useState } from "react";
import login from "../utilities/login";


function LoginForm(){
    const [ loginData, setLoginData ] = useState({
        username: "",
        password: ""
    })

    const onFormChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const onFormSubmit = (e) => {
      e.preventDefault()
      
      const { username, password } = loginData
      login(username, password)

      setLoginData({username: "", password: ""})
    }


    return(
    <div className="form-container">
      <form onSubmit={onFormSubmit} className="form">
        <label htmlFor="username" className="form-label">
          Username:
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
          Password:
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

        <button type="submit" className="form-submit-button">
          Sign up
        </button>
      </form>
    </div>
    );
}

export default LoginForm;