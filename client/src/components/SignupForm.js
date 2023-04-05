import React, { useState, useContext } from "react";
import {UserContext} from "../context/UserContext";
import FormatErrors from "../helpers/FormatErrors";
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

  const { errors, signUp } = useContext(UserContext);


    const onFormChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
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
            { errors && <FormatErrors errors={errors} />}

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