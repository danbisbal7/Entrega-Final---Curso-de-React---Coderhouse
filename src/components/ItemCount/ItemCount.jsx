import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

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
    onAdd(count);
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