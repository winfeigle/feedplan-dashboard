import React, { useState } from "react";
import { TextField, Button } from '@mui/material';


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
        console.log(loginData)
        setLoginData({username: "",password: ""})
    }


    return(
        <div>
            <form onSubmit={onFormSubmit}>
                <TextField
                    id="outlined-required"
                    label="username"
                    type="username"
                    // type={ error ? "Display the error here..." : null }
                    name="username"
                    value={loginData.username}
                    onChange={(e) => onFormChange(e)}
                    />
                <TextField
                    id="outlined-password-input"
                    label="password"
                    type="password"
                    // type={ error ? "Display the error here..." : null }
                    name="password"
                    value={loginData.password}
                    onChange={(e) => onFormChange(e)}
                    />
                <Button 
                    variant="contained" 
                    type="submit"
                    disableElevation
                    >Log in</Button>
            </form>
        </div>
    );
}

export default LoginForm;