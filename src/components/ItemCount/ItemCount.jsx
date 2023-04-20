import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import './ItemCount.css';
import { CartContext } from '../../context';
import { useParams } from 'react-router-dom';

const ItemCount = ({ stock, initial, nombre, precio }) => {
  const [count, setCount] = useState(initial);

  const {id} = useParams();

  const { itemCount, setItemCount } = useContext(CartContext);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    const existingProductIndex = itemCount.products.findIndex((p) => p.id === id);
    const existingProduct = itemCount.products[existingProductIndex];

    if (existingProduct) {
      existingProduct.qty += count;
      setItemCount({
        ...itemCount,
        qtyItems: itemCount.qtyItems + count
      });
    } else {
      const newProduct = {
        id,
        nombre,
        precio,
        qty: count,
      };
      setItemCount({
        ...itemCount,
        qtyItems: itemCount.qtyItems + count,
        products: [...itemCount.products, newProduct],
      });
    }
  };

  return (
    <Form className="item-count-form">
      <Form.Group className="item-count-group">
      <Button variant="outline-danger" className='count-btn' onClick={handleDecrement}>-</Button>
        <Form.Control type="number" value={count} readOnly style={{ textAlign: 'center', width: '50px', fontSize: '0.8rem', padding: '2px'}} />
        <Button variant="outline-success" className='count-btn' onClick={handleIncrement}>+</Button>
      </Form.Group>
      <Button variant="danger" onClick={handleAdd}>Agregar al Carrito</Button>
    </Form>
  );
};

export default ItemCount;