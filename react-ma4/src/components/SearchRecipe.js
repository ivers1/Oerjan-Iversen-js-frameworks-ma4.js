import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/inputGroup";
import FormControl from "react-bootstrap/formControl";

export default function Search({ handleSearch }) {
    return (
        <InputGroup className="search">
            <FormControl placeholder="Search by name..."
            onChange={event => handleSearch(event)}
        />
    </InputGroup>
    );
}

Search.PropTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default Search;
