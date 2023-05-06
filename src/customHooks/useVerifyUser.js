import React, {useState, useEffect} from "react";

function useVerifyUser(id, pass)
{
    
    const data = {
        userId : id,
        password : pass
    }
    const [isValid, setValidation] = useState(null);
    useEffect(()=>{
        fetch("https://localhost:7289/api/Users", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
              method : 'POST',
              mode : 'cors',
              body : JSON.stringify(data)
        }).then(response => response.json()).then(data => setValidation(data));
    }, [id, pass])
    return isValid;
}

export default useVerifyUser;