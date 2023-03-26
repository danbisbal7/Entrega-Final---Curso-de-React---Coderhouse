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

/*export const Cards = ({ producto }) => {
  return (
      <Link to={`/products/${producto.id}`} className="card-link">
      <div className="card">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Agregar al carrito</button>
          <span className="precio">${producto.precio}</span>
        </div>
      </div>
    </Link>
  );
}*/