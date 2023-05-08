import React, { useState } from "react";
import useFetchAllCategories from "../customHooks/useFetchAllCategories";

function AddDish()
{

    const [hasError, setHasError] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [dishName, setDishName] = useState("");
    const [dishPrice, setDishPrice] = useState(0);
    const [dishDescription, setDishDescription] = useState("");
    const [dishNature, setDishNature] = useState(null);
    const [dishImage, setDishImage] = useState("");

    const categories = useFetchAllCategories();

    function onClickHandeler()
    {
        if(selectedCategoryId === null || dishName === "" || dishNature === null)
        {
            setHasError(true);
        }
        else
        {
            const data = {
                dishName : dishName,
                dishPrice : dishPrice,
                dishDescription : dishDescription,
                dishNature : dishNature,
                dishImage : dishImage
            }
            fetch("https://localhost:7289/api/Dishes/" + selectedCategoryId, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method : "POST",
                mode : "cors",
                body : JSON.stringify(data)
            })

            setDishName("");
            setDishImage("");
            setDishDescription("");
            setDishPrice(0);
        }
    }

    return <div className = "add-dish-container">
                <h2>Add New Dish</h2>
                <select onChange = {e => setSelectedCategoryId(e.target.value)} className="classic">
                    <option hidden>Choose a category</option>
                    {
                        categories.map(category => <option value = {category.catId} key = {category.catId}>{category.catName}</option>)
                    }
                </select>
                <br/>
                <input
                className = "form-input"
                    placeholder="Enter Dish Name"
                    value = {dishName}
                    onChange = {(event) => setDishName(event.target.value)}
                />
                <br/>
                <input
                className = "form-input"
                    placeholder="Enter Dish Price"
                    value = {dishPrice}
                    onChange = {(event) => setDishPrice(event.target.value)}
                    type = "number"
                    min={0}
                />
                <br/>
                <select onChange = {(e) => setDishNature(e.target.value)} className = "classic nature">
                    <option hidden>Select Dish Nature</option>
                    <option value = "veg">Veg</option>
                    <option value = "non-veg">Non-veg</option>
                </select>
                <br/>
                <input 
                className = "form-input"
                    placeholder = "Enter dish image link"
                    value = {dishImage}
                    onChange = {(event) => setDishImage(event.target.value)}
                />
                <br/>
                <input
                    className = "form-input"
                    placeholder="Enter description of dish"
                    value={dishDescription}
                    onChange = {(e) => setDishDescription(e.target.value)}
                />
                <br/>
                <button
                type = "button"
                onClick = {onClickHandeler}
                className = "add-dish-btn"
                >Submit</button>
    </div>
}

export default AddDish;