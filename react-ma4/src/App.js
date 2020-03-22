import React from "react";
import Heading from "./components/Layout/Heading";
import RecipeList from "./components/recipe/RecipeList";
import "./App.css";

function App() {
    return(
    <>
        <Heading />
        <RecipeList />
    </>    
    );
}

export default App;
