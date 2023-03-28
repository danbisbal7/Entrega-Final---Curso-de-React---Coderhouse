import { useEffect, useState } from 'react';
import { ProductsData } from '../../json';
import { ItemList } from './ItemList';
import styles from "./ItemListContainer.css"

export function ItemListContainer({ category }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (category === '') {
      setItems(ProductsData);
    } else {
      const filteredProducts = ProductsData.filter((product) => product.categoria === category);
      setItems(filteredProducts);
    }
  }, [category]);

  return (
    <div className={styles.ItemList}>
      <div>
        <h3>{category !== '' ? category : 'Todos nuestros productos:'}</h3>
      </div>
      <div>
        <ItemList items={items} />
      </div>
    </div>
  );
}