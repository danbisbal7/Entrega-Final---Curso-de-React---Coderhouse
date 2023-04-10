import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col  } from "react-bootstrap";
import { ProductsData } from '../../json';

const ItemDetail = () => {
  const { id } = useParams(); 
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const productoEncontrado = ProductsData.find((prod) => prod.id == id); 
    setProducto(productoEncontrado);
  }, [id]);

  return (
    /*<Card style={{ width: '75rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Button variant="danger">Agregar al Carrito</Button>
      </Card.Body>
    </Card>*/

    <Container>
    <Row>
      <Col xs={12} md={6}>
      <Card.Img style={{ marginTop: '20px', padding: '5px'}} variant="top" src={producto.imagen} />
      </Col>
      <Col xs={12} md={6}>
      <Card style={{ width: '30rem', margin: '20px', padding: '10px' }}>
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Subtitle>USD ${producto.precio}</Card.Subtitle>
            <Card.Text>{producto.descripcion}</Card.Text>
            <Button variant="danger">Agregar al Carrito</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
}

export default ItemDetail;
