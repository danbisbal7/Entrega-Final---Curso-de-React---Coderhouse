import React from "react";
import { useContext } from 'react';
import { CartContext } from '../context';
import "./pages.css"


export const Cart = () => {
  const { itemCount } = useContext(CartContext);
  const { products } = itemCount;
  let total = 0;

  for (const product of products) {
    total += product.precio * product.qty;
  }

  return (
    <div className="cart-container"> 
      <h2>Carrito de Compras</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="cart-item"> 
            {product.nombre} - {product.qty} - ${product.precio * product.qty}
          </li>
        ))}
      </ul>
      <p className="cart-total">Total a pagar: ${total}</p> 
    </div>
  );
};

export default Cart;