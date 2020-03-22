import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function RecipeItem({ id, title, thumbnail }) {
	return (
		<Card>
			<Card.Img variant="top" src={thumbnail} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Link to={"recipes/" + id}>
					<Button variant="secondary" block>
						View
					</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}

RecipeItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
};

export default RecipeItem;