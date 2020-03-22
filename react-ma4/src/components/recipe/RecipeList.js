import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";

function RecipeList() {
    
    const [result, setResults] = useState([]);
    
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => {
            setResults(data);
        })
            .catch(error => console.log(error))
            
    }, []);
    
     return (
    
       <div>
      {result.map(item => (
        <li>
          <p>{item.title}</p>
          <p>{item.thumbnail}</p>
        </li>
      ))}
    </div>
);
}

export default RecipeList;

	