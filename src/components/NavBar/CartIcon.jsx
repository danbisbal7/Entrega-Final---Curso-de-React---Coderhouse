import { useState } from 'react';
import styles from "./NavBarStyles.module.css";
import {FaShoppingCart} from "react-icons/fa";

export const CartIcon = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {

      setCount(count + 1);
    };
  
    return (
        <div className={styles.cartIcon} onClick={handleClick}>
          <FaShoppingCart />
          <span className={styles.count}>{count > 0 ? count : 0}</span>
        </div>
      );
    };