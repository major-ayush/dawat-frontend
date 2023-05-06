import React, { useState, useEffect } from "react";
import useVerifyUser from "../customHooks/useVerifyUser";

function Login(props) {
    return <div className = "login-container">
        <h2 className = "login-heading">Login</h2>
        <form>
        <input className = "userId"
            placeholder="Enter user name"
            value={props.userName}
            type="text" 
            onChange={(event) => props.onNameChangeHandeler(event)}
        />
        <br/>
        
        <input className = "password"
            placeholder="Enter password"
            value = {props.password}
            type="password" 
            onChange={(event) => props.onPasswordChangeHandeler(event)}
        />
        <br/>
        <button onClick = {() => props.onClickHandeler()} className = "login-btn" type = "button">Submit</button>
        {
            props.isValid === false ? <p className = "login-error">userId or password is incorrect</p> : null
        }
        </form>
    </div>
}

export default Login;