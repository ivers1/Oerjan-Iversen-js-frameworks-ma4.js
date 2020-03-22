import React from "react";
import { BASE_URL } from "../../constants/api";


function RecipeList() {
    useEffect(function() {
        fetch(BASE_URL)
            .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.dir(json);
        })
        .catch(function(error) {
            console.log(error);
        });
    }, []);
    return null;
}

export default RecipeList;