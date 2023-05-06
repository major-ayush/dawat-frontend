import React, { useEffect, useState } from "react";

import useFetchAllMenus from "../customHooks/useFetchAllMenus";


function AddCategory()
{
    const [selectedMenuId, setSelectedMenuId] = useState(null);
    const [categoryName, setCategoryName] = useState("");
    const [categoryImage, setCategoryImage] = useState("");
    const [hasError, setHasError] = useState(false);
    const data = useFetchAllMenus();

    function onClickHandeler()
    {
        if(categoryName === "" || selectedMenuId === null)
        {
            setHasError(true);
        }
        else
        {
            const data = {
                catName : categoryName,
                catImage : categoryImage
            }
            fetch("https://localhost:7289/api/Categories/" + selectedMenuId, {
            headers : {
                'Accept' : "application/json",
                'Content-Type' : "application/json"
            },
            method : "POST",
            mode : "cors",
            body : JSON.stringify(data)
        })

        setHasError(false);
        setCategoryImage("");
        setCategoryName("");
        }
    }

    return <div>
    <form>
    <fieldset>
    <legend>
        Enter category
    </legend>
        <select onChange={(event) => {setSelectedMenuId(event.target.value); }} required>
            <option hidden>select a menu</option>
            {
                data.map((menu,index) => <option key = {index} value = {menu.menuId}>{menu.menuName}</option>)
            }
        </select>
        <br/>
        <input 
            placeholder="Enter category name"
            value = {categoryName}
            onChange = {(event) => setCategoryName(event.target.value)}
        />
        <br/>
        <input
            placeholder="Enter category image"
            value = {categoryImage}
            onChange = {(event)=> setCategoryImage(event.target.value)}
        />
        <br/>
        <button
            onClick={onClickHandeler}
            type = "button"
        >Submit</button>
        {
            hasError ? <p>Enter all fields</p> : null
        }
        </fieldset>
    </form>
    </div>
}

export default AddCategory;