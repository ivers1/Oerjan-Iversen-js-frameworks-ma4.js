import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeItem from "./RecipeItem";
import { BASE_URL } from "../../constants/api";
//import SearchRecipe from "../SearchRecipe";
import IngredientList from "../ingredient/IngredientList";

function RecipeList() {
    
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    
    
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
            setRecipes(json.results);
            setFilteredRecipes(json.results);
        })
            .catch(error => console.log(error))
            
    }, []);
    
    const filterCards = function(e) {
		const searchValue = e.target.value.toLowerCase();
		const filteredArray = recipes.filter(function(char) {
			const lowerCaseName = char.name.toLowerCase();
			if (lowerCaseName.startsWith(searchValue)) {
				return true;
			}
			return false;
		});
		setFilteredRecipes(filteredArray);
	};
    
    return (
        <>
          
        
        
        <Row>
            {filteredRecipes.map(recipe => {
             const { title, thumbnail } = recipe;
             
            return (
                <Col>
                    <RecipeItem title={title} thumbnail={thumbnail} />
                </Col>
            );
    
        })}
    </Row>
    </>
);
}

export default RecipeList;

	