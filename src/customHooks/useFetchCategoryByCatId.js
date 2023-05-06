import React, { useState, useEffect } from "react";

function useFetchCategoryByCatId(id)
{
    const [category, setCategory] = useState({});
    useEffect(() => {
        fetch("https://localhost:7289/api/Categories/catId="+id).then(response => response.json()).then(data => {
            setCategory(prev => {
                const currCat = {};
                currCat.catId = data.catId;
                currCat.catName = data.catName;
                currCat.catImage = data.catImage;
                return currCat;
            })
        });
    },[]);
    return category;
}

export default useFetchCategoryByCatId;