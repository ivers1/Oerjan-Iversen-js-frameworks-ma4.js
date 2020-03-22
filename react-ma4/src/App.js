import React, { useState, useEffect } from "react";
import Heading from "./components/Layout/Heading";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "./constants/api";
import "./App.css";

function App() {
    return(
    <div className="App">
        <Heading />
    
    </div>    
    );
}

export default App;
