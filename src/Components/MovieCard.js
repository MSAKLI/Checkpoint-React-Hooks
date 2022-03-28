import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = ({ Movie }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Movie.PosterUrl} />
        <Card.Body>
          <Card.Title>{Movie.Title}</Card.Title>
          <Card.Text>{Movie.Description}</Card.Text>
          <Card.Text> Rate : {Movie.Rate}</Card.Text>
          <Button variant="primary"> Click on me </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
