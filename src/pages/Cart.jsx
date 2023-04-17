import React from "react";
import { useContext } from 'react';
import { CartContext } from '../context';

export const Cart = () => {
    const { cartItems } = useContext(CartContext);
  
    return (
      <div>
        {cartItems ? (
          cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: {item.price}</p>
            </div>
          ))
        ) : (
          <p>No hay elementos en el carrito</p>
        )}
      </div>
    );
  };