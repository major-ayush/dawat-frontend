import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useVerifyUser from "../customHooks/useVerifyUser";

function isVerified()
  {
    const info = sessionStorage.getItem("isVerified");
    if(info == "true")
    {
      return true;
    }
    return false;
  }

function Login(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
  localStorage.removeItem("isVerified")

  


  function onClickHandeler(userName, password) {

    if (userName === "") {
      alert("Please enter the user-name!");
      return;
    }
    if (password === "") {
      alert("Please enter the password!");
      return;
    }
    const data = {
      userId: userName,
      password: password
    }
    fetch("https://localhost:7289/api/Users", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data)
    }).then(response => response.json()).then(dat => {
      
      // setting information in localStorage
      sessionStorage.setItem("isVerified", dat);
      if(dat == false)
      alert("user-name or password is incorrect!!");
      else
      navigate("/")
    });

  }


    function onNameChangeHandeler(event) {
        setUserName(event.target.value);
    }
    function onPasswordChangeHandeler(event) {
        setPassword(event.target.value);
    }
    return <div className = "login-container">
        <h2 className = "login-heading">Login</h2>
        <form>
        <input className = "userId"
            placeholder="Enter user name"
            value={props.userName}
            type="text" 
            onChange={(event) => onNameChangeHandeler(event)}
        />
        <br/>
        
        <input className = "password"
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
export {isVerified};