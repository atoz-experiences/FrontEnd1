import React from "react";
import { Route, Link } from "react-router-dom";
import axois from "axois";

// sign up axios request

function signUpAxios() {
    return null
}

// log in axios request

function logInAxios() {
    return null
}

// log in form

function LogIn() {
    return null
}

// sign up form, with route to log in form if already a user.

function SignUp(props) {

    // props.user

    return (
        <Router>
            <div>
                <div>
                    <div>Already a user?</div>
                    <Link to="/log-in">Log in</Link>
                </div>
                <Route path="/log-in" exact component={LogIn} />
            </div>
        </Router>
    );
}

export default SignUp;