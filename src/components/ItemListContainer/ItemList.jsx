import React from 'react'
import styles from "./ItemListContainer.css"
import Item from './Item';


export function ItemList({ items }) {
    return (
        <div className={styles.ItemList}>
        {items.map((producto) => (          
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    );
}