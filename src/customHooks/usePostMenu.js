import React, {useEffect} from "react";

function usePostMenu(data)
{
    useEffect(() => {
        fetch("https://localhost:7289/api/Menus", {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
          method : 'POST',
          mode : 'cors',
          body : JSON.stringify(data)
        })
      }, [])
}

export default usePostMenu;

