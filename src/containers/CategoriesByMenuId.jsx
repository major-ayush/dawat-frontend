import React, {useState} from "react";
import useFetchAllCategoriesByMenuId from "../customHooks/useFetchAllCategorisByMenuId";
import CategoryCard from "./CategoryCard";
import ShowMenus from "./ShowMenus";
import DishesByCatId from "./DishesByCatId";

function CategoriesByMenuId(props)
{
    const categories = useFetchAllCategoriesByMenuId(props.menuId);

    const [goToMenu, setGoToMenu] = useState(false);
    const [catId, setCatId] = useState(null);
    function onClickHandeler()
    {
        setGoToMenu(true);
    }

    function onGetDishClickHandler(categoryId)
    {
        setCatId(categoryId);
    }
    
    return catId === null ?
    goToMenu === false ? <div className = "categories-menu">
        <button className = "go-to-menu-btn" onClick = {onClickHandeler}>Go to menu</button>
        {
            categories.length === 0 ? <h2 className = "categories-menu-no-cat">No Categories found</h2> :
            categories.map(category => <CategoryCard
                key = {category.catId}
                catName = {category.catName}
                catImage = {category.catImage}
                catId = {category.catId}
                onClickBtn = {onGetDishClickHandler}
            />)
        }
    </div> : <ShowMenus/> : <DishesByCatId catId = {catId} menuId = {props.menuId}/>
}
export default CategoriesByMenuId;