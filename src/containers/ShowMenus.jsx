import React, { useState } from "react";
import useFetchAllMenus from "../customHooks/useFetchAllMenus";
import MenuCard from "./MenuCard";
import CategoriesByMenuId from "./CategoriesByMenuId";

function ShowMenus()
{
    const menus = useFetchAllMenus();
    const [menuId, setMenuId] = useState(null);
    function onClickHandeler(menuId)
    {
        setMenuId(menuId)
    }
    return menuId === null ? <div className = "show-menus">
    {
        menus.length === 0 ? <h2 className = "show-menus-no-menu">No data found</h2> :
        
            menus.map(menu =>  <MenuCard
                menuId = {menu.menuId}
                menuName = {menu.menuName}
                menuImage = {menu.menuImage}
                key = {menu.menuId}
                onClickHandeler = {onClickHandeler}
            />
            )

        
    }
</div> : <CategoriesByMenuId menuId = {menuId}/>
}

export default ShowMenus;