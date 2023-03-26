import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./Cards.css";


export const Cards = ({ producto }) => {
    return (
        <Link to={`/products/${producto.id}`} className="card-link">
        <div className="card">
          <Card key={producto.id}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text>{producto.descripcion}</Card.Text>
              <Button variant="primary" href={`/item/${producto.id}`}>Ver Detalles</Button>
            </Card.Body>
          </Card>
        </div>
      </Link>
    );
}

/*function ItemList({ items }) {
  return (
    <div className="card-deck">
      {items.map((item) => (
        <Card key={item.id}>
          <Card.Img variant="top" src={item.imageUrl} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary" href={`/item/${item.id}`}>Ver Detalles</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}*/