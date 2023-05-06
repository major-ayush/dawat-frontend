import React, { useState, useEffect } from "react";

function useUpdateDish(dishId, data)
{
    useEffect(()=>{
        fetch("https://localhost:7289/api/Dishes/"+dishId, {
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            method : "PUT",
            mode : "cors",
            body : JSON.stringify(data)
        })
    })
}

export default useUpdateDish;