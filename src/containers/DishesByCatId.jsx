import React, { useState } from "react";
import DishCard from "./DishCard";
import useFetchAllDishesByCatId from "../customHooks/useFetchAllDishesByCatId";
import CategoriesByMenuId from "./CategoriesByMenuId";

function DishesByCatId(props)
{
    const dishes = useFetchAllDishesByCatId(props.catId);

    const [goToCat, setGoToCat] = useState(false);

    return goToCat === false ?
    <div className = "dishes-cat1">
        <button className = "go-to-cat-btn" onClick = {() => setGoToCat(true)}>Go to categories</button>
        <div className = "dishes-cat2">
        {
            dishes.map(dish => <DishCard
                dishName = {dish.dishName}
                dishImage = {dish.dishImage}
                dishDescription = {dish.dishDescription}
                dishNature = {dish.dishNature}
                dishPrice = {dish.dishPrice}
                key = {dish.dishId}
            />)
        }
        </div>
    </div> : <CategoriesByMenuId menuId = {props.menuId}/>
}

export default DishesByCatId;