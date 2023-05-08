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

    return <div className = "add-category-container">
        <h2>Add New Category</h2>
        <select onChange={(event) => {setSelectedMenuId(event.target.value); }} className="classic add-category-select">
            <option hidden>select a menu</option>
            {
                data.map((menu,index) => <option key = {index} value = {menu.menuId}>{menu.menuName}</option>)
            }
        </select>
        <br/>
        <input 
            className = "form-input"
            placeholder="Enter category name"
            value = {categoryName}
            onChange = {(event) => setCategoryName(event.target.value)}
        />
        <br/>
        <input
            className = "form-input"
            placeholder="Enter category image"
            value = {categoryImage}
            onChange = {(event)=> setCategoryImage(event.target.value)}
        />
        <br/>
        <button
            onClick={onClickHandeler}
            type = "button"
            className="add-category-btn"
        >Submit</button>
        {
            hasError ? <p>Enter all fields</p> : null
        }
    </div>
}

export default AddCategory;