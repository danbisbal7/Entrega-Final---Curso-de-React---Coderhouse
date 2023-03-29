import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from "react-bootstrap";
import { ProductsData } from '../../json';

const ItemDetail = () => {
  const { id } = useParams(); 
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const productoEncontrado = ProductsData.find((prod) => prod.id == id); 
    setProducto(productoEncontrado);
  }, [id]);

  return (
    <Card>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Button variant="danger">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
