import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import './ItemCount.css';
import { CartContext } from '../../context';
import { useParams } from 'react-router-dom';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [products, setProducts] = useState([]);

  const {id} = useParams();

  const { setItemCount } = useContext(CartContext);

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
    const existingProduct = products.find((p) => p.id === id);

    if (existingProduct) {
      existingProduct.qty += count;
    } else {
      const newProduct = {
        id,
        qty: count,
      };
      setItemCount((prevState) => ({
        qtyItems: prevState.qtyItems + count,
        products: [...prevState.products, newProduct],
      }));
    }
  };

  /*const handleRemove = () => {
    const existingProductIndex = products.findIndex((p) => p.id === id);
    const existingProduct = products[existingProductIndex];
  
    if (existingProduct && existingProduct.qty > 0) {
      existingProduct.qty -= 1;
      setCount(existingProduct.qty);
    }
  
    if (existingProduct && existingProduct.qty === 0) {
      products.splice(existingProductIndex, 1);
    }
  
    setItemCount((prevState) => ({
      qtyItems: prevState.qtyItems - 1,
      products: [...products],
    }));
  };*/

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