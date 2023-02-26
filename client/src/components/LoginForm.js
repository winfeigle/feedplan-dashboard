import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";


function LoginForm({ handleLogin }){
  
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
      fetch('login', {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            username,
            password
          })
        })
          .then(r => {
            if(r.ok){
                r.json().then((user) => handleLogin(user))
            } else{
                r.json().then((err) => console.log(`${Object.keys(err)}: ${Object.values(err)}`))
            }
          })

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
          Log in
        </button>
      </form>
    </div>
    );
}

export default LoginForm;