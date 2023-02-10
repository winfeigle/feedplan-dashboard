import React, { useState } from "react";


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
        // console.log(loginData)
        setLoginData({username: "",password: ""})
    }


    return(
        <div>
            <form onSubmit={onFormSubmit}>
                <label>Username
                    <input 
                        label="username"
                        type="username"
                        name="username"
                        value={loginData.username}
                        onChange={(e) => onFormChange(e)}
                        />
                    </label>
                <label>Password
                    <input 
                        label="password"
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={(e) => onFormChange(e)}
                        />
                    </label>
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default LoginForm;