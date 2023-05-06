import React, { useState, useEffect } from "react";

function useDeleteCategory(id)
{
    useEffect(() => {
        fetch("https://localhost:7289/api/Categories/" + id, {
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            method : 'DELETE',
            mode : 'cors'
        })
    }, [])
}

export default useDeleteCategory;