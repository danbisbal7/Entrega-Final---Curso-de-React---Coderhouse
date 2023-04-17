import { useContext } from 'react';
import { CartContext } from '../../context';
import styles from "./NavBarStyles.module.css";
import {FaShoppingCart} from "react-icons/fa";

export const CartIcon = () => {
  const { itemCount } = useContext(CartContext); 
  const count = itemCount.qtyItems; 
  
  return (
    <div className={styles.cartIcon}>
      <FaShoppingCart />
      <span className={styles.count}>{count > 0 ? count : 0}</span>
    </div>
  );
};