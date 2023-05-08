import React, {useState} from "react";
import useFetchAllDishes from "../customHooks/useFetchAllDishes";

function DeleteDish()
{
    const [selectedDishId, setSelectedDishId] = useState(null);
    const dishes = useFetchAllDishes();

    function onClickHandeler()
    {
        if(selectedDishId === null)
        {
            alert("Please! Select a dish");
            return;
        }
        const dishName = dishes.find(dish => dish.dishId == selectedDishId).dishName;
        const consent = window.confirm("Are you sure? \n" + dishName + " will be deleted!");

        if(consent == false)
        return;

        fetch("https://localhost:7289/api/Dishes/" + selectedDishId, {
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            mode : 'cors',
            method : 'DELETE'
        })
    }

    return <div className = "delete-dish-container">
                <h2>Delete Dish</h2>
                <select onChange = {(event) => setSelectedDishId(event.target.value)} className = "classic">
                    <option hidden>Select a dish</option>
                    {
                        dishes.map(dish => <option value = {dish.dishId} key = {dish.dishId}>{dish.dishName}</option>)
                    }
                </select>
                <br/>
                <button type = "button"
                className = "delete-dish-btn"
                onClick = {onClickHandeler}
                >Delete</button>
    </div>
}

export default DeleteDish;