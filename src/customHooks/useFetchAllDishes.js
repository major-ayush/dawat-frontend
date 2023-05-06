import React, { useState, useEffect } from "react";

function useFetchAllDishes()
{
    const [dishes, setDishes] = useState([]);
    useEffect(() => {
        console.log("hey");
        fetch("https://localhost:7289/api/Dishes").then(response => response.json()).then(data => {
            setDishes(prev => {
                const currDishes = [];
                data.forEach(dish=> {
                    const currDish = {};
                    currDish.dishId = dish.dishId;
                    currDish.dishPrice = dish.dishPrice;
                    currDish.dishName = dish.dishName;
                    currDish.dishDescription = dish.dishDescription;
                    currDish.dishNature = dish.dishNature;
                    currDish.dishImage = dish.dishImage;
                    currDishes.push(currDish);
                });
                return currDishes;
            })
        },)
    },[])
    return dishes;
}

export default useFetchAllDishes;