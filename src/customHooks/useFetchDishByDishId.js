import React, { useState, useEffect } from "react";

function useFetchDishByDishId(id)
{
    const [dish, setDish] = useState({});
    useEffect(() => {
        fetch("https://localhost:7289/api/Dishes/dishId="+id).then(response => response.json()).then(dish => {
            setDish(prev => {
                    const currDish = {};
                    currDish.dishId = dish.dishId;
                    currDish.dishPrice = dish.dishPrice;
                    currDish.dishName = dish.dishName;
                    currDish.dishDescription = dish.dishDescription;
                    currDish.dishNature = dish.dishNature;
                    currDish.dishImage = dish.dishImage;
                    return currDish;
            })
        })
    }, [])
    return dish;
}

export default useFetchDishByDishId;