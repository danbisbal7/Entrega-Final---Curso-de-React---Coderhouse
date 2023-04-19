import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col  } from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';
import { ProductsData } from '../../json';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams(); 
  const [producto, setProducto] = useState({});

  /*useEffect(() => {
    const productoEncontrado = ProductsData.find((prod) => prod.id == id); 
    setProducto(productoEncontrado);
  }, [id]);*/

  useEffect(() => {
    const db = getFirestore();
    const productosRef = collection(db, 'products');
    const productoQuery = query(productosRef, where('id', '==', id));
    getDocs(productoQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const productoEncontrado = doc.data();
        setProducto(productoEncontrado);
      });
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
