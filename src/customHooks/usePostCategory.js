import React, { useState, useEffect } from "react";

function usePostCategory(menuId,data)
{
    useEffect(() => {
        fetch("https://localhost:7289/api/Categories/" + menuId, {
            headers : {
                'Accept' : "application/json",
                'Content-Type' : "application/json"
            },
            method : "POST",
            mode : "cors",
            body : JSON.stringify(data)
        })
    })
}

export default usePostCategory;