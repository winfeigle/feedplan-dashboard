import React, { useState } from "react";


function SignupForm(){
    const [ loginData, setLoginData ] = useState({
        username: "",
        email: "",
        password: ""
    })

    const onFormChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        // console.log(loginData)
        setLoginData({
            username: "", 
            email: "", 
            password: ""
        })
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
                <label>Email
                    <input 
                        label="email"
                        type="email"
                        name="email"
                        value={loginData.email}
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

export default SignupForm;