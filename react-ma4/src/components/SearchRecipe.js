import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/inputGroup";
import FormControl from "react-bootstrap/formControl";

function SearchRecipe({ handleSearch }) {
    return (
        <InputGroup className="SearchRecipe">
            <FormControl placeholder="Search by name..."
            onChange={event => handleSearch(event)}
        />
    </InputGroup>
    );
}

SearchRecipe.PropTypes = {
    handleSearch: PropTypes.function.isRequired
};

export default SearchRecipe;
