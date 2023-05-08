import React from "react";

function DishCard(props)
{
    console.log("hello");
    return <div className = "dish-card">
        <img src = {props.dishImage} alt = {props.dishName}
            className = "dish-card-img"
        />
        <h2 className = "dish-name">{props.dishName}</h2>
        <h4 className = "dish-description">{props.dishDescription}</h4>
        <h3 className = "dish-nature">{props.dishNature}</h3>
        <h3 className = "dish-price">Price : &#8377;{props.dishPrice}</h3>
    </div>
}

export default DishCard;