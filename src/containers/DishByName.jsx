import React from "react";
import { useLocation } from "react-router-dom";
import useFetchAllDishes from "../customHooks/useFetchAllDishes";
import DishCard from "./DishCard";


export default function DishByName()
{
    const location = useLocation();
    const dishes = useFetchAllDishes();
    const dish = dishes.find(d => d.dishName.toLowerCase() === location.state.dishName.toLowerCase())
    if(dish == null)
    return <h2 style={{textAlign : "center"}}>Oppss!! No dish found with name {location.state.dishName}</h2>;

    return <DishCard
        dishId = {dish.dishId}
        dishName = {dish.dishName}
        dishDescription = {dish.dishDescription}
        dishPrice = {dish.dishPrice}
        dishNature = {dish.dishNature}
        dishImage = {dish.dishImage}
    />
}