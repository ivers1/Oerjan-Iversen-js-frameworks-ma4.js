import React from "react";
import Heading from "./components/Layout/Heading";
import RecipeList from "./components/recipe/RecipeList";
import "./App.css";


function App() {
    return(
    <div className="App">
        <Heading />
        <RecipeList></RecipeList>
    </div>    
    );
}

export default App;
