import React, { useEffect, useState } from 'react';

function useFetchAllMenus() {
    const [menuList, setMenuList] = useState([]);
    useEffect(() => {
        fetch("https://localhost:7289/api/Menus").then(response => response.json()).then(data => {
            setMenuList(prevData => {
                const currMenuList = [];
                for (var i = 0; i < data.length; i++) {
                    const menu = data[i];
                    const currMenu = {};
                    currMenu.menuId = menu.menuId;
                    currMenu.menuName = menu.menuName;
                    currMenu.menuImage = menu.menuImage;

                    currMenuList.push(currMenu);
                }

                return currMenuList;
            })
        });
    }, []);
    return menuList;
}

export default useFetchAllMenus;