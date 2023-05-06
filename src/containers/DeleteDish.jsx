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

    return <div>
        <form>
            <fieldset>
                <legend>
                    Delete Dish
                </legend>
                <select onChange = {(event) => setSelectedDishId(event.target.value)}>
                    <option hidden>Select a dish</option>
                    {
                        dishes.map(dish => <option value = {dish.dishId} key = {dish.dishId}>{dish.dishName}</option>)
                    }
                </select>
                <br/>
                <button type = "button"
                onClick = {onClickHandeler}
                >Delete</button>
            </fieldset>
        </form>
    </div>
}

export default DeleteDish;