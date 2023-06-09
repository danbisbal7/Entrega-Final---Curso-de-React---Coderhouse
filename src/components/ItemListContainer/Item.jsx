import React from 'react'
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

// Este codigo renderiza el preview del producto, luego de presionar el boton ver detalles pasa a una descripcion mas detallada del mismo

export default function Item({producto}) {
    return (
        <Card>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Subtitle>USD ${producto.precio}</Card.Subtitle>
          <Link to={`/item/${producto.id}`} className="btn btn-danger">
            Ver detalles
          </Link>
        </Card.Body>
      </Card>
    );
}
