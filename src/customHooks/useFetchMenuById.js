import React, {useState, useEffect} from "react";

function useFetchMenuById(id)
{
    const [menu, setMenu] = useState({});
    useEffect(() => {
        fetch("https://localhost:7289/api/Menus/"+id).then(response => response.json()).then(
            data => {
                const currData = {};
                currData.menuId = data.menuId;
                currData.menuName = data.menuName;
                currData.menuImage = data.menuImage;
                setMenu(currData);
            }
        )
    }, [])
    return menu;
}

export default useFetchMenuById;