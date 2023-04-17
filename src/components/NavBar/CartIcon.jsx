import { useContext } from 'react';
import { CartContext } from '../../context';
import styles from "./NavBarStyles.module.css";
import {FaShoppingCart} from "react-icons/fa";
import { Link } from 'react-router-dom';

export const CartIcon = () => {
  const { itemCount } = useContext(CartContext); 
  const count = itemCount.qtyItems; 
  
  return (
  <Link to="/Carrito" className={styles.cartIcon}>
    <FaShoppingCart />
    <span className={styles.count}>{count > 0 ? count : 0}</span>
  </Link>

  );
};