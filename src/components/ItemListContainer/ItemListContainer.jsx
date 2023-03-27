import { useEffect, useState } from 'react';
import { ProductsData } from '../../json';
import { ItemList } from './ItemList';
import styles from "./ItemListContainer.css";

export function ItemListContainer({ category }) {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const filteredProducts = ProductsData.filter((product) => product.categoria === category);
    setItems(filteredProducts);
  }, [category]);

  return (
    <div className={styles.ItemList}>
      <h2>{category}</h2>
      <ItemList items={items} />
    </div>
  );
}


