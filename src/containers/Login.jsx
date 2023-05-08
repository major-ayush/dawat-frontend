import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
  

  




    function onNameChangeHandeler(event) {
        setUserName(event.target.value);
    }
    function onPasswordChangeHandeler(event) {
        setPassword(event.target.value);
    }
    return <div className = "login-container">
        <h2>Login</h2>
        <form>
        <input className = "form-input"
            placeholder="Enter user name"
            value={props.userName}
            type="text" 
            onChange={(event) => onNameChangeHandeler(event)}
        />
        <br/>
        
        <input className = "form-input"
            placeholder="Enter password"
            value = {props.password}
            type="password" 
            onChange={(event) => onPasswordChangeHandeler(event)}
        />
        <br/>
        <button onClick = {() => props.onClickHandeler(userName, password)} className = "login-btn" type = "button">Submit</button>
        </form>
    </div>
}

export default Login;
