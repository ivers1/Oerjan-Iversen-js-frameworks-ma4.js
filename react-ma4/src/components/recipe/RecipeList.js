import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";

function RecipeList() {
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => console.dir(json))
            .catch(error => console.log(error));
    }, []);    
    return null;
}

export default RecipeList;

	