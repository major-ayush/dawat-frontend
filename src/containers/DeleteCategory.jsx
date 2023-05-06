import React, { useState } from "react";
import useFetchAllCategories from "../customHooks/useFetchAllCategories";

function DeleteCategory() {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const categories = useFetchAllCategories();

    function onClickHandeler()
    {
        if(selectedCategoryId === null)
        {
            alert("Please! Select a category!");
            return;
        }
        const categoryName = categories.find(cat => cat.catId == selectedCategoryId).catName;
        
        const consent = window.confirm("Are you sure?\n" + categoryName + " will be deleted!");
        if(consent === false)
        return;

        fetch("https://localhost:7289/api/Categories/" + selectedCategoryId, {
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            method : 'DELETE',
            mode : 'cors'
        })
    }
    return <div>
        <form>
            <fieldset>
                <legend>
                    Delete Category
                </legend>
                <select onChange={(event) => setSelectedCategoryId(event.target.value)}>
                    <option hidden>Select a category</option>
                    {
                        categories.map(category => <option value={category.catId} key={category.catId}>{category.catName}</option>)
                    }
                </select>
                <br />
                <button type="button" onClick={onClickHandeler}>Delete</button>
            </fieldset>
        </form>

    </div>
}

export default DeleteCategory;