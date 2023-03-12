import React from "react";
import styles from './ItemListContainerStyles.module.css';

export const ItemListContainer = ({ props }) => {
    return (
      <div className={styles.container}>
        <h2>{props}</h2>
      </div>
    );
  };