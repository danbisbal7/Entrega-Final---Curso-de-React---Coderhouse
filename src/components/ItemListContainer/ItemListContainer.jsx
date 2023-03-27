import { useEffect, useState } from 'react';
import { ProductsData } from '../../json';
import { ItemList } from './ItemList';
import styles from "./ItemListContainer.css";

export function ItemListContainer({ category }) {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems(ProductsData);
  }, []);

  return (
    <div className={styles.ItemList}>
      <h2>{category}</h2>
      <ItemList items={items} />
    </div>
  );
}


    /*const filteredItems = ProductsData.filter((producto) => producto.categoria === category);
    setItems(filteredItems);*/ 
