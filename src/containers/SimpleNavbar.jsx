import React from "react";
import { useNavigate } from "react-router-dom";

function SimpleNavbar()
{
    const navigate = useNavigate();

    return <div style = {{display : "flex", gap : "20px", marginTop : "0", marginBottom : "50px", backgroundColor : "skyBlue"}}>
        <button onClick = {() => navigate("/")}>Home</button>
        <button onClick = {() => navigate("/addDish")}>Add Dish</button>
        <button onClick = {() => navigate("/addCategory")}>Add Category</button>
        <button onClick = {() => navigate("/addMenu")}>Add Menu</button>
        <button onClick = {() => navigate("/deleteCategory")}>Delete Category</button>
        <button onClick = {() => navigate("/deleteDish")}>Delete Dish</button>
        <button onClick = {() => navigate("/updateDish")}>Update Dish</button>
    </div>
}

export default SimpleNavbar;