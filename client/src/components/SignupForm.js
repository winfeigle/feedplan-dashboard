import React, { useState, useContext } from "react";
import {UserContext} from "../context/UserContext";
import Footer from "./Footer";


import logo from "../assets/feedplan_combo_logo_dark.png"
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


function SignupForm(){
    const [ newUser, setNewUser ] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

  const { error, signUp } = useContext(UserContext);


    const onFormChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        // console.log(newUser)
        signUp(newUser);
        setNewUser({
            username: "",
            email: "",
            password: "",
            password_confirmation: ""
        })
    }


    return(
       <div className="login-page">
        <div className="login form-container">
        <div id="login-logo-container">
                <img id="login-logo" src={logo} alt="login logo"/>
            </div>
        <form onSubmit={onFormSubmit} className="signup form" style={{ width: "35%"}}>
            <p>This is the start of something great,</p>
            <h1>Create your account</h1>
            <Row>
                <Col>
            <label htmlFor="username" className="form-label">
            Username
            </label>
            <input
            type="username"
            id="username"
            name="username"
            placeholder="username"
            value={newUser.username}
            onChange={(e) => onFormChange(e)}
            className="form-input"
            />
            </Col>
            <Col>
            <label htmlFor="email" className="form-label">
            email
            </label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={newUser.email}
            onChange={(e) => onFormChange(e)}
            className="form-input"
            />
                </Col>
            </Row>

            <label htmlFor="password" className="form-label">
            Password
            </label>
            <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            value={newUser.password}
            onChange={(e) => onFormChange(e)}
            className="form-input"
            />
            <label htmlFor="password_confirmation" className="form-label">
            Password confirmation
            </label>
            <input
            type="password"
            id="password-confirmation"
            name="password_confirmation"
            placeholder="••••••••"
            value={newUser.password_confirmation}
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
            Create Account
            </Button>
            <div className="signup-link">
            <a href="/">Already have an account? <u>Log in here</u></a>
            </div>
        </form>
        </div>
        <Footer />
    </div>
    );
}

export default SignupForm;