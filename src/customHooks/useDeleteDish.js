import React, { useState, useEffect } from "react";

function useDeleteDish(id)
{
    useEffect(() => {
        fetch("https://localhost:7289/api/Dishes/" + id, {
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            method : 'DELETE',
            mode : 'cors'
        })
    }, [])
}

export default useDeleteDish;