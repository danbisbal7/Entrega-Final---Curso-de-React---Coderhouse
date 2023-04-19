import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col  } from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams(); 
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const productoRef = doc(db, 'products', id);

    getDoc(productoRef)
      .then((doc) => {
        if (doc.exists()) {
          setProducto({ id: doc.id, ...doc.data() });
        } else {
          console.log("No existe el documento");
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [id]);

  const handleAdd = (count) => {
    console.log(`Se agregarán ${count} unidades del producto ${producto.nombre}`);
  };

  return (

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
            <ItemCount stock={10} initial={1} onAdd={handleAdd} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
}

export default ItemDetail;
