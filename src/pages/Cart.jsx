import React from "react";
import { useContext } from 'react';
import { CartContext } from '../context';


export const Cart = () => {
  const { itemCount } = useContext(CartContext);
  const { products } = itemCount;

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nombre} - {product.qty} - ${product.precio * product.qty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;