import React, { useState } from "react";
import useFetchAllDishes from "../customHooks/useFetchAllDishes";

function UpdateDish() {
    const [selectedDishId, setSelectedDishId] = useState(null);
    const [dishName, setDishName] = useState("");
    const [dishPrice, setDishPrice] = useState(0);
    const [dishDescription, setDishDescription] = useState("");
    const [dishNature, setDishNature] = useState(null);
    const [dishImage, setDishImage] = useState("");

    const dishes = useFetchAllDishes();

    function onClickHandeler() {
        if (selectedDishId === null) {
            alert("Please! Select a dish");
            return;
        }
        if (dishName === "" || dishImage === "" || dishPrice == 0 || dishName === "" || dishNature === null) {
            alert("Please fill all the fields!!");
            return;
        }
        const consent = window.confirm("Are you sure? \n" + dishName + " will be Updated!");

        if (consent == false)
            return;

        const data = {
            dishId: selectedDishId,
            dishName: dishName,
            dishPrice: dishPrice,
            dishDescription: dishDescription,
            dishNature: dishNature,
            dishImage: dishImage,
            isDeleted: false,
            categoryDishes: []
        }
        fetch("https://localhost:7289/api/Dishes/" + selectedDishId, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            method: 'PUT',
            body: JSON.stringify(data)
        })
    }

    return <div>
        <form>
            <fieldset>
                <legend>
                    Update Dish
                </legend>
                <select onChange={(event) => {
                    setSelectedDishId(event.target.value);
                    const dish = dishes.find(dish => dish.dishId == event.target.value);
                    setDishDescription(dish.dishDescription);
                    setDishName(dish.dishName);
                    setDishPrice(dish.dishPrice);
                    setDishImage(dish.dishImage);
                    setDishNature(dish.dishNature)
                }}>
                    <option hidden>Select a dish</option>
                    {
                        dishes.map(dish => <option value={dish.dishId} key={dish.dishId}>{dish.dishName}</option>)
                    }
                </select>
                <br />
                {
                    selectedDishId !== null ?
                <div>
                <input
                    placeholder="Enter Dish Name"
                    value={dishName}
                    onChange={(event) => setDishName(event.target.value)}
                />
                <br />
                <input
                    placeholder="Enter Dish Price"
                    value={dishPrice}
                    onChange={(event) => setDishPrice(event.target.value)}
                    type="number"
                    min={0}
                />
                <br />
                {
                    dishNature === "veg" ?
                        <select onChange={(e) => setDishNature(e.target.value)}>
                            <option value="veg">Veg</option>
                            <option value="non-veg">Non-veg</option>
                        </select> :
                        <select onChange={(e) => setDishNature(e.target.value)}>
                            <option value="non-veg">Non-veg</option>
                            <option value="veg">Veg</option>
                        </select>
                }
                <br />
                <input
                    placeholder="Enter dish image"
                    value={dishImage}
                    onChange={(event) => setDishImage(event.target.value)}
                />
                <br />
                <textarea
                    placeholder="Enter description of dish"
                    value={dishDescription}
                    onChange={(e) => setDishDescription(e.target.value)}
                />
                <br />
                <button type="button"
                    onClick={onClickHandeler}
                >Update</button>
                </div> : null
                }
            </fieldset>
        </form>
    </div>
}

export default UpdateDish;