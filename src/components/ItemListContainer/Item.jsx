import React from 'react'
import { Card, Button } from "react-bootstrap";

export default function Item({producto}) {
    return (
        <Card>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Button variant="danger" href={`/item/${producto.id}`}>Ver Detalles</Button>
        </Card.Body>
      </Card>
    );
}
