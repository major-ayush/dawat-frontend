import React, { useState, useEffect } from "react";

function useFetchAllCategoriesByMenuId(menuId) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://localhost:7289/api/Categories/menuId="+menuId).then(response => response.json()).then(data => {
            setCategories(prev => {
                const currCategories = [];
                for (var i = 0; i < data.length; i++) {
                    const cat = data[i];
                    const currCat = {};
                    currCat.catId = cat.catId;
                    currCat.catName = cat.catName;
                    currCat.catImage = cat.catImage;
                    currCategories.push(currCat);
                }
                return currCategories;
            })
        })
    }, []);
    return categories;
}

export default useFetchAllCategoriesByMenuId;