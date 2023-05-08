import React, { useState } from "react";

function AddMenu()
{
    const [menuName, setMenuName] = useState("");
    const [menuImageLink, setMenuImageLink] = useState("");

    function onClickHandeler()
    {
        const data = {
            menuName : menuName,
            menuImage : menuImageLink
        }
        fetch("https://localhost:7289/api/Menus", {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
          method : 'POST',
          mode : 'cors',
          body : JSON.stringify(data)
        })

        setMenuImageLink("");
        setMenuName("");
    }
    return <div className = "add-menu-container">
                <h2>Add Menu Details</h2>
                <input
                    className = "form-input"
                    placeholder="Enter Menu Name"
                    value = {menuName}
                    onChange = {
                        (event) => {setMenuName(event.target.value)}
                    }
                />
                <br/>
                <input
                    className = "form-input"
                    placeholder="Enter Menu Image link"
                    value = {menuImageLink}
                    onChange = {
                        (event) => {setMenuImageLink(event.target.value)}
                    }
                />
                <br/>
                <button
                    type = "button"
                    onClick = {
                        onClickHandeler
                    }
                    className = "add-menu-btn"
                >Submit</button>
    </div>
}

export default AddMenu;